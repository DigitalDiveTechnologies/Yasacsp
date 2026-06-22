import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sourceRoot =
  process.env.NEXT_SITE_ROOT ||
  "C:\\Users\\itsei\\Documents\\Projects\\NextJsSite";
const ts = require(path.join(sourceRoot, "node_modules", "typescript"));
const appRoot = path.join(sourceRoot, "src", "app");
const outputFile = path.resolve("src", "app", "content", "site-pages.ts");

function pageFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return pageFiles(fullPath);
    return entry.name === "page.tsx" ? [fullPath] : [];
  });
}

function routeFromFile(file) {
  const relative = path.relative(appRoot, path.dirname(file)).replaceAll("\\", "/");
  return relative ? `/${relative}` : "/";
}

function titleFromRoute(route) {
  if (route === "/") return "Home";
  return route
    .split("/")
    .filter(Boolean)
    .at(-1)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function categoryFromRoute(route) {
  const value = route.toLowerCase();
  if (
    value.includes("visa") ||
    value.includes("emirates-id") ||
    value.includes("medical")
  ) {
    return "Visa & Immigration";
  }
  if (
    value.includes("/license") ||
    value.includes("trade-license") ||
    value.includes("influencer-license")
  ) {
    return "Business Licensing";
  }
  if (
    value.includes("freezone") ||
    value.includes("free-zone") ||
    /(ifza|rakez|dmcc|adgm|jafza|kizad|meydan|shams|spc|dafza|masdar|silicon-oasis)/.test(value)
  ) {
    return "Free Zone Setup";
  }
  if (value.includes("mainland")) return "Mainland Setup";
  if (value.includes("offshore")) return "Offshore Formation";
  if (
    value.includes("tax") ||
    value.includes("vat") ||
    value.includes("bank") ||
    value.includes("finance")
  ) {
    return "Finance & Compliance";
  }
  if (value.includes("about") || value.includes("careers")) return "About YASA";
  if (value.includes("blog") || value.includes("news")) return "Business Resources";
  return "Corporate Services";
}

function cleanText(value) {
  return value
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("\uFFFD", "-")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeHref(href) {
  return href === "/license" ? "/services/license" : href;
}

function createEvaluator(sourceFile) {
  const variables = new Map();

  function register(node) {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
      variables.set(node.name.text, node.initializer);
    }
    ts.forEachChild(node, register);
  }
  register(sourceFile);

  function evaluate(node, seen = new Set()) {
    if (!node) return undefined;
    if (
      ts.isAsExpression(node) ||
      ts.isTypeAssertionExpression(node) ||
      ts.isParenthesizedExpression(node)
    ) {
      return evaluate(node.expression, seen);
    }
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node)
    ) {
      return cleanText(node.text);
    }
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (node.kind === ts.SyntaxKind.NullKeyword) return null;
    if (ts.isArrayLiteralExpression(node)) {
      return node.elements
        .map((element) => evaluate(element, seen))
        .filter((value) => value !== undefined);
    }
    if (ts.isObjectLiteralExpression(node)) {
      const value = {};
      for (const property of node.properties) {
        if (!ts.isPropertyAssignment(property)) continue;
        const key =
          ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)
            ? property.name.text
            : undefined;
        if (!key) continue;
        const propertyValue = evaluate(property.initializer, seen);
        if (propertyValue !== undefined) value[key] = propertyValue;
      }
      return value;
    }
    if (ts.isIdentifier(node)) {
      if (seen.has(node.text)) return undefined;
      const initializer = variables.get(node.text);
      if (!initializer) return undefined;
      return evaluate(initializer, new Set([...seen, node.text]));
    }
    if (ts.isTemplateExpression(node)) {
      let value = cleanText(node.head.text);
      for (const span of node.templateSpans) {
        const expression = evaluate(span.expression, seen);
        if (expression === undefined) return undefined;
        value += String(expression) + cleanText(span.literal.text);
      }
      return value;
    }
    return undefined;
  }

  return evaluate;
}

function jsxText(node, sourceFile) {
  const parts = [];

  function visit(child) {
    if (ts.isJsxText(child)) {
      const text = child.getText(sourceFile).replace(/\s+/g, " ").trim();
      if (text) parts.push(text);
      return;
    }
    if (ts.isJsxExpression(child) && child.expression) {
      if (
        ts.isStringLiteral(child.expression) ||
        ts.isNoSubstitutionTemplateLiteral(child.expression)
      ) {
        parts.push(child.expression.text);
      }
      return;
    }
    ts.forEachChild(child, visit);
  }

  visit(node);
  return cleanText(parts.join(" "));
}

function tagName(node) {
  const tag = node.openingElement?.tagName || node.tagName;
  if (ts.isIdentifier(tag)) return tag.text.toLowerCase();
  if (ts.isPropertyAccessExpression(tag)) return tag.name.text.toLowerCase();
  return "";
}

function collectContent(root, sourceFile) {
  const content = [];
  const seen = new Set();
  const allowed = new Set(["h1", "h2", "h3", "h4", "p", "li"]);

  function add(type, text) {
    const cleaned = cleanText(text);
    if (cleaned.length < 3 || seen.has(cleaned)) return;
    seen.add(cleaned);
    content.push({ type, text: cleaned });
  }

  function visit(node) {
    if (ts.isJsxElement(node)) {
      const tag = tagName(node);
      if (allowed.has(tag)) {
        add(tag.startsWith("h") ? "heading" : tag === "li" ? "list" : "paragraph", jsxText(node, sourceFile));
        return;
      }
    }
    ts.forEachChild(node, visit);
  }

  if (root) visit(root);
  return content.slice(0, 40);
}

function collectImages(sourceFile) {
  const images = [];

  function visit(node) {
    if (ts.isJsxSelfClosingElement(node) && tagName(node) === "img") {
      const src = node.attributes.properties.find(
        (property) =>
          ts.isJsxAttribute(property) &&
          property.name.text === "src" &&
          property.initializer &&
          ts.isStringLiteral(property.initializer),
      );
      if (src && ts.isJsxAttribute(src) && ts.isStringLiteral(src.initializer)) {
        images.push(src.initializer.text);
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return [...new Set(images)].slice(0, 6);
}

function collectStructuredCards(sourceFile, evaluate) {
  const cards = [];
  const seen = new Set();

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const value = evaluate(node);
      if (value && typeof value === "object") {
        const title =
          typeof value.name === "string"
            ? value.name
            : typeof value.title === "string"
              ? value.title
              : typeof value.label === "string"
                ? value.label
            : typeof value.question === "string"
              ? value.question
              : undefined;
        let description =
          typeof value.description === "string"
            ? value.description
            : typeof value.desc === "string"
              ? value.desc
              : typeof value.excerpt === "string"
                ? value.excerpt
                : typeof value.answer === "string"
                  ? value.answer
                  : undefined;
        if (!description && typeof value.story === "string") {
          description = [value.title, value.story].filter(Boolean).join(" - ");
        }
        if (!description && Array.isArray(value.features)) {
          description = [
            value.price,
            value.originalPrice ? `Previously ${value.originalPrice}` : undefined,
            ...value.features,
          ]
            .filter(Boolean)
            .join(" | ");
        }
        if (!description && Array.isArray(value.links)) {
          description = value.links
            .map((link) => link?.label)
            .filter(Boolean)
            .join(" | ");
        }
        if (!description) {
          description = [
            value.value,
            value.location,
            value.type,
            value.department,
            value.date,
            value.category,
          ]
            .filter((item) => typeof item === "string")
            .join(" | ");
        }
        if (title && description && !seen.has(title)) {
          seen.add(title);
          cards.push({
            title,
            description,
            ...(typeof value.href === "string" && value.href !== "#"
              ? { href: normalizeHref(value.href) }
              : {}),
            ...(Array.isArray(value.links)
              ? {
                  links: value.links
                    .filter(
                      (link) =>
                        link &&
                        typeof link.label === "string" &&
                        typeof link.href === "string",
                    )
                    .map((link) => ({
                      label: link.label,
                      href: normalizeHref(link.href),
                    })),
                }
              : {}),
          });
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return cards.slice(0, 18);
}

function collectNamedArray(sourceFile, evaluate, variableName) {
  let result = [];

  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === variableName &&
      node.initializer
    ) {
      const value = evaluate(node.initializer);
      if (Array.isArray(value)) result = value;
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return result;
}

function parsePage(file) {
  const source = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "");
  const sourceFile = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const evaluate = createEvaluator(sourceFile);
  const route = routeFromFile(file);
  let templateNode;
  let templateElement;

  function findTemplate(node) {
    if (
      (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) &&
      ts.isIdentifier(node.tagName) &&
      node.tagName.text === "PageTemplate"
    ) {
      templateNode = node;
      if (ts.isJsxOpeningElement(node) && ts.isJsxElement(node.parent)) {
        templateElement = node.parent;
      }
    }
    ts.forEachChild(node, findTemplate);
  }
  findTemplate(sourceFile);

  const data = {
    route,
    title: titleFromRoute(route),
    subtitle: "",
    heroImage: "",
    category: categoryFromRoute(route),
    breadcrumbs: [],
    features: [],
    benefits: [],
    process: [],
    faqs: [],
    content: [],
    images: collectImages(sourceFile),
  };

  if (templateNode) {
    for (const attribute of templateNode.attributes.properties) {
      if (!ts.isJsxAttribute(attribute)) continue;
      const name = attribute.name.text;
      let value;
      if (attribute.initializer && ts.isStringLiteral(attribute.initializer)) {
        value = cleanText(attribute.initializer.text);
      } else if (
        attribute.initializer &&
        ts.isJsxExpression(attribute.initializer)
      ) {
        value = evaluate(attribute.initializer.expression);
      }
      if (value !== undefined && name in data) data[name] = value;
    }
    data.content = collectContent(templateElement, sourceFile);
    if (data.features.length === 0) {
      data.features = collectStructuredCards(sourceFile, evaluate);
    }
  } else {
    const content = collectContent(sourceFile, sourceFile);
    const firstHeading = content.find((item) => item.type === "heading");
    const firstParagraph = content.find((item) => item.type === "paragraph");
    if (firstHeading) data.title = firstHeading.text;
    if (firstParagraph) data.subtitle = firstParagraph.text;
    data.content = content;
    data.features = collectStructuredCards(sourceFile, evaluate);
    data.benefits = collectNamedArray(sourceFile, evaluate, "benefits").filter(
      (value) => typeof value === "string",
    );
  }

  if (!data.heroImage) data.heroImage = data.images[0] || "";
  if (!data.subtitle) {
    const paragraph = data.content.find((item) => item.type === "paragraph");
    data.subtitle = paragraph?.text || `Explore ${data.title} with YASA CSP.`;
  }
  data.breadcrumbs = data.breadcrumbs.map((breadcrumb) => ({
    ...breadcrumb,
    href: normalizeHref(breadcrumb.href),
  }));
  if (!data.category || data.category === "service") {
    data.category = categoryFromRoute(route);
  }

  return data;
}

const pages = pageFiles(appRoot)
  .map(parsePage)
  .filter((page) => page.route !== "/")
  .sort((a, b) => a.route.localeCompare(b.route));

const output = `// Generated from ${sourceRoot.replaceAll("\\", "\\\\")}.
// Run \`npm run import-content\` after changing the source Next.js site.

export type SitePageContent = {
  type: "heading" | "paragraph" | "list";
  text: string;
};

export type SitePage = {
  route: string;
  title: string;
  subtitle: string;
  heroImage: string;
  category: string;
  breadcrumbs: { label: string; href: string }[];
  features: {
    title: string;
    description: string;
    image?: string;
    href?: string;
    links?: { label: string; href: string }[];
  }[];
  benefits: string[];
  process: { step: number; title: string; description: string; image?: string }[];
  faqs: { question: string; answer: string }[];
  content: SitePageContent[];
  images: string[];
};

export const sitePages: SitePage[] = ${JSON.stringify(pages, null, 2)};

export const sitePageByRoute = new Map(sitePages.map((page) => [page.route, page]));
`;

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, output, "utf8");
console.log(`Imported ${pages.length} pages into ${outputFile}`);

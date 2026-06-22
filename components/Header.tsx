import Image from "next/image";
import { company, navigation } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-section/95 backdrop-blur">
      <div className="container flex h-24 items-center justify-between gap-8">
        <a href="/" className="flex items-center" aria-label={`${company.name} home`}>
          <Image
            src={company.logo}
            alt={company.name}
            width={134}
            height={73}
            className="h-14 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href={company.phoneHref} className="hidden rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-section transition hover:bg-accent md:inline-flex">
          Free Consultation
        </a>
      </div>
    </header>
  );
}

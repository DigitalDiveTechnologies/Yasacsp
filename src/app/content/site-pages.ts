// Generated from C:\\Users\\itsei\\Documents\\Projects\\NextJsSite.
// Run `npm run import-content` after changing the source Next.js site.

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

export const sitePages: SitePage[] = [
  {
    "route": "/about",
    "title": "About Yasa Corporate",
    "subtitle": "Your trusted partner for business setup and corporate services in the UAE since 2015",
    "heroImage": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    "category": "About YASA",
    "breadcrumbs": [
      {
        "label": "About",
        "href": "/about"
      }
    ],
    "features": [
      {
        "title": "10+ Years Experience",
        "description": "Over a decade of expertise in UAE business setup and corporate services across all jurisdictions."
      },
      {
        "title": "5000+ Clients Served",
        "description": "Trusted by thousands of entrepreneurs, SMEs, and multinational corporations worldwide."
      },
      {
        "title": "50+ Expert Team",
        "description": "A dedicated team of business consultants, PRO specialists, and legal advisors."
      },
      {
        "title": "Multiple Office Locations",
        "description": "Convenient offices across Dubai and the UAE to serve you better."
      },
      {
        "title": "100% Success Rate",
        "description": "Proven track record of successful company formations with zero rejections."
      },
      {
        "title": "End-to-End Support",
        "description": "Complete business solutions from incorporation to ongoing compliance and growth."
      }
    ],
    "benefits": [
      "Deep local market knowledge and expertise",
      "Multi-lingual team serving 50+ nationalities",
      "Transparent pricing with no hidden fees",
      "Fast turnaround on all services",
      "Strong government relationships",
      "Comprehensive post-setup support",
      "Dedicated account manager for each client",
      "24/7 client support availability"
    ],
    "process": [
      {
        "step": 1,
        "title": "Client Consultation",
        "description": "Free consultation to understand your needs"
      },
      {
        "step": 2,
        "title": "Custom Solution",
        "description": "Tailored business setup proposal"
      },
      {
        "step": 3,
        "title": "Smooth Execution",
        "description": "Hassle-free implementation by our experts"
      },
      {
        "step": 4,
        "title": "Ongoing Support",
        "description": "Continued assistance for your business growth"
      }
    ],
    "faqs": [
      {
        "question": "What makes Yasa Corporate different?",
        "answer": "Our client-first approach, deep expertise across all UAE jurisdictions, and comprehensive after-sales support set us apart from other service providers."
      },
      {
        "question": "Do you provide post-setup services?",
        "answer": "Yes, we offer ongoing support including visa renewals, PRO services, accounting, tax registration, and corporate compliance."
      },
      {
        "question": "Are your consultants licensed?",
        "answer": "Absolutely. All our consultants are fully licensed and regulated by the relevant UAE authorities."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Our Story"
      },
      {
        "type": "paragraph",
        "text": "Founded in 2015, Yasa Corporate has grown from a small consultancy to one of the UAE's most trusted business setup service providers. Our journey has been defined by a relentless commitment to client success."
      },
      {
        "type": "paragraph",
        "text": "We believe in building long-term partnerships with our clients, supporting them not just through incorporation but throughout their entire business journey in the UAE."
      },
      {
        "type": "paragraph",
        "text": "Our team of experts brings diverse backgrounds in law, finance, and business consulting, ensuring comprehensive support for every client."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    ]
  },
  {
    "route": "/about-us",
    "title": "About Yasa Corporate Service Provider",
    "subtitle": "Transforming visions into profitable ventures since 2016",
    "heroImage": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80",
    "category": "About YASA",
    "breadcrumbs": [
      {
        "label": "About Us",
        "href": "/about-us"
      }
    ],
    "features": [
      {
        "title": "End-to-End Support",
        "description": "Complete assistance from consultation to company incorporation and beyond."
      },
      {
        "title": "Expert Team",
        "description": "Dedicated consultants with deep knowledge of UAE business regulations."
      },
      {
        "title": "50+ Free Zones",
        "description": "Access to all major free zones across the UAE."
      },
      {
        "title": "Fast Processing",
        "description": "Quick turnaround times for all business setup procedures."
      },
      {
        "title": "100% Success Rate",
        "description": "Proven track record of successful company formations."
      },
      {
        "title": "Competitive Pricing",
        "description": "Transparent pricing with no hidden fees."
      }
    ],
    "benefits": [
      "8+ years of experience in UAE business setup",
      "Offices in Dubai and Mumbai",
      "Personalized service for every client",
      "Comprehensive support including visa and banking",
      "Partnerships with leading free zones",
      "ISO certified company"
    ],
    "process": [
      {
        "step": 1,
        "title": "Consultation",
        "description": "Free consultation to understand your business needs"
      },
      {
        "step": 2,
        "title": "Planning",
        "description": "Strategic planning and jurisdiction selection"
      },
      {
        "step": 3,
        "title": "Documentation",
        "description": "Complete documentation and application"
      },
      {
        "step": 4,
        "title": "Setup",
        "description": "Company formation and license issuance"
      }
    ],
    "faqs": [
      {
        "question": "Why choose Yasa Corporate?",
        "answer": "We have 8+ years of experience, 5000+ clients served, and a 100% success rate in company formations."
      },
      {
        "question": "What services do you offer?",
        "answer": "We offer complete business setup services including company formation, visa processing, bank account opening, and ongoing support."
      },
      {
        "question": "How long does company setup take?",
        "answer": "Depending on the jurisdiction, company setup can take anywhere from 2-7 business days."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Our Story"
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate Service Provider was founded with a vision to simplify the process of setting up a business in the UAE. Over the years, we have grown to become one of the most trusted business setup consultancies in the region."
      },
      {
        "type": "paragraph",
        "text": "Our team of experienced professionals provides personalized support to ensure a smooth, hassle-free experience from start to finish. We have helped thousands of entrepreneurs and corporations establish their presence in the UAE."
      },
      {
        "type": "paragraph",
        "text": "With offices in Dubai and Mumbai, we serve clients from around the world, helping them navigate the complex procedures associated with establishing their business in the UAE."
      },
      {
        "type": "paragraph",
        "text": "Years Experience"
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    ]
  },
  {
    "route": "/adgm-company-setup",
    "title": "ADGM Company Setup | Abu Dhabi Global Market",
    "subtitle": "Establish your business in ADGM - Abu Dhabi's award-winning international financial centre with English common law framework and world-class regulatory standards.",
    "heroImage": "https://images.unsplash.com/photo-1590650151155-34f0f2bd4b36?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "ADGM",
        "href": "/adgm-company-setup"
      }
    ],
    "features": [
      {
        "title": "English Common Law Framework",
        "description": "ADGM operates under English common law with an independent judiciary, providing international investors with a familiar and transparent legal system."
      },
      {
        "title": "Financial Services Regulation",
        "description": "Regulated by the ADGM Financial Services Regulatory Authority (FSRA), offering licensing for banks, asset managers, insurers, fintech, and crypto businesses."
      },
      {
        "title": "Strategic Abu Dhabi Location",
        "description": "Situated on Al Maryah Island, Abu Dhabi's premier business district, with direct access to Abu Dhabi International Airport and the city's financial hub."
      },
      {
        "title": "Fintech & Innovation Hub",
        "description": "Home to ADGM's Fintech Abu Dhabi ecosystem, including regulatory sandbox, digital lab, and the region's leading blockchain and crypto asset framework."
      },
      {
        "title": "Premium Office Infrastructure",
        "description": "Grade A office spaces in iconic buildings like Abu Dhabi Global Market Square and Al Maryah Tower, with world-class amenities and connectivity."
      },
      {
        "title": "Dual Licensing Options",
        "description": "Choose between a Financial Services license (regulated by FSRA) or a Non-Financial Services license for consulting, tech, and professional services."
      }
    ],
    "benefits": [
      "English common law legal system with independent courts",
      "100% foreign ownership permitted",
      "Zero corporate and personal income tax",
      "Full repatriation of profits and capital",
      "Access to Abu Dhabi's sovereign wealth ecosystem",
      "World-class regulatory framework recognised globally",
      "Strategic location on Al Maryah Island",
      "Growing fintech and innovation ecosystem"
    ],
    "process": [
      {
        "step": 1,
        "title": "License Type Consultation",
        "description": "Speak with our ADGM expert to determine whether a Financial Services or Non-Financial Services license best suits your business model."
      },
      {
        "step": 2,
        "title": "Regulatory Documentation",
        "description": "Prepare detailed business plan, compliance documents, passport copies, and CVs for key personnel as required by ADGM's regulator."
      },
      {
        "step": 3,
        "title": "Regulatory Review & Approval",
        "description": "Submit to ADGM authorities for review. Financial services licenses undergo FSRA assessment; non-financial licenses process faster."
      },
      {
        "step": 4,
        "title": "License Issuance & Setup",
        "description": "Receive your ADGM license, complete office setup, and process residence visas for shareholders and employees through the Abu Dhabi system."
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between ADGM and other UAE free zones?",
        "answer": "ADGM is unique because it operates under English common law rather than UAE civil law, with its own independent courts and regulatory framework. It is primarily a financial centre designed for banks, asset managers, insurers, fintech companies, and professional services firms seeking international regulatory standards."
      },
      {
        "question": "Can I set up a non-financial business in ADGM?",
        "answer": "Yes, ADGM offers Non-Financial Services licenses for businesses engaged in consulting, technology, legal services, accounting, and other professional activities. These are regulated more lightly than financial services licenses and are popular among professional services firms."
      },
      {
        "question": "What is the minimum share capital for ADGM company setup?",
        "answer": "For Non-Financial Services companies, the minimum share capital is typically AED 50,000. For Financial Services companies, capital requirements vary based on the specific license category and are determined by the FSRA during the application process."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why ADGM?"
      },
      {
        "type": "paragraph",
        "text": "ADGM (Abu Dhabi Global Market) is Abu Dhabi's premier international financial centre, located on Al Maryah Island. It offers a unique legal environment based on English common law, making it especially attractive for financial institutions, fintech companies, and professional services firms seeking a globally recognized regulatory regime."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate specializes in ADGM company formation across both financial and non-financial license categories. From regulatory documentation and compliance setup to office space and visa processing, our team ensures your ADGM journey is seamless and efficient."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1590650151155-34f0f2bd4b36?w=800&q=80"
    ]
  },
  {
    "route": "/all-in-one-free-for-life-visa",
    "title": "All-in-One Free for Life Visa",
    "subtitle": "The ultimate UAE residency package combining visa, license, and banking",
    "heroImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    "category": "Visa & Immigration",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Visa",
        "href": "/services/visa"
      },
      {
        "label": "All-in-One Visa",
        "href": "/all-in-one-free-for-life-visa"
      }
    ],
    "features": [
      {
        "title": "Company License Included",
        "description": "Full mainland or free zone trade license bundled."
      },
      {
        "title": "Lifetime Visa Package",
        "description": "Permanent residency for applicant and family."
      },
      {
        "title": "Corporate Bank Account",
        "description": "Pre-arranged bank account setup with partner banks."
      },
      {
        "title": "Office Space",
        "description": "Virtual or physical office included in the package."
      },
      {
        "title": "Visa Stamping Service",
        "description": "Complete visa stamping for up to 6 family members."
      },
      {
        "title": "Premium Support",
        "description": "24/7 dedicated account manager for all services."
      }
    ],
    "benefits": [
      "Everything in one single package",
      "Substantial savings vs separate services",
      "One-time payment for lifetime benefits",
      "Full business infrastructure included",
      "Family visas covered without extra cost",
      "Priority processing across all services",
      "No hidden fees or annual charges",
      "Dedicated account manager assigned"
    ],
    "process": [
      {
        "step": 1,
        "title": "Package Selection",
        "description": "Choose your preferred jurisdiction and package tier"
      },
      {
        "step": 2,
        "title": "Company Formation",
        "description": "Register your company and obtain trade license"
      },
      {
        "step": 3,
        "title": "Visa Processing",
        "description": "Process lifetime visas for you and your family"
      },
      {
        "step": 4,
        "title": "Banking & Setup",
        "description": "Open corporate bank account and activate office space"
      }
    ],
    "faqs": [
      {
        "question": "What jurisdictions are available for the company license?",
        "answer": "We offer options in mainland Dubai, DMCC, Meydan, IFZA, RAK ICC, and other major UAE free zones depending on your business activity."
      },
      {
        "question": "How many visas are included in the package?",
        "answer": "The package includes up to 6 residence visas including the primary applicant, spouse, children, and domestic staff."
      },
      {
        "question": "Is physical office space mandatory?",
        "answer": "Depending on your package tier, you can choose between virtual office, co-working space, or a dedicated physical office."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "The Complete UAE Package"
      },
      {
        "type": "paragraph",
        "text": "Our All-in-One Free for Life Visa package is the most comprehensive solution available in the UAE market. It combines business setup, lifetime residency, banking, and office infrastructure into one seamless offering."
      },
      {
        "type": "paragraph",
        "text": "Designed for serious investors and entrepreneurs, this package delivers everything you need to establish your life and business in the UAE with maximum efficiency and minimum hassle."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    ]
  },
  {
    "route": "/bank-account-opening",
    "title": "Bank Account Opening in UAE",
    "subtitle": "Open a corporate bank account with leading UAE banks quickly and easily",
    "heroImage": "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1920&q=80",
    "category": "Finance & Compliance",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Bank Account",
        "href": "/bank-account-opening"
      }
    ],
    "features": [
      {
        "title": "15+ Partner Banks",
        "description": "Access to Emirates NBD, ADCB, Mashreq, FAB, RAKBANK and more."
      },
      {
        "title": "Fast 3-5 Day Opening",
        "description": "Expedited account opening for most business profiles."
      },
      {
        "title": "Multi-Currency Accounts",
        "description": "Accounts in AED, USD, EUR, GBP, and other currencies."
      },
      {
        "title": "Online Banking Setup",
        "description": "Full digital banking with mobile app and online portal."
      },
      {
        "title": "Business Solutions",
        "description": "Merchant services, loans, trade finance available."
      },
      {
        "title": "Dedicated Support",
        "description": "Personal relationship manager for your business."
      }
    ],
    "benefits": [
      "Streamlined application process",
      "No minimum balance options available",
      "Multi-currency transaction capability",
      "Online and mobile banking included",
      "Trade finance and lending facilities",
      "Corporate credit cards available",
      "Expert guidance on bank selection",
      "Document preparation and review"
    ],
    "process": [
      {
        "step": 1,
        "title": "Banking Consultation",
        "description": "Discuss business profile and banking requirements"
      },
      {
        "step": 2,
        "title": "Bank Selection",
        "description": "Match your business with the most suitable bank"
      },
      {
        "step": 3,
        "title": "Document Submission",
        "description": "Prepare and submit application with supporting docs"
      },
      {
        "step": 4,
        "title": "Account Activation",
        "description": "Account opened with online banking access"
      }
    ],
    "faqs": [
      {
        "question": "What documents are needed to open a corporate account?",
        "answer": "Typically, you need trade license, MOA, passport copies of shareholders, Emirates ID, board resolution, and proof of office address."
      },
      {
        "question": "How long does bank account opening take in UAE?",
        "answer": "Standard corporate account opening takes 3 to 5 business days, though some banks may take 1 to 2 weeks for complex profiles."
      },
      {
        "question": "Can I open an account remotely without visiting the bank?",
        "answer": "Most UAE banks require an in-person meeting for the final signing. However, some digital banks offer fully remote account opening."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Corporate Banking Made Easy"
      },
      {
        "type": "paragraph",
        "text": "Opening a corporate bank account in the UAE is essential for business operations. Our established relationships with major UAE banks ensure a smooth and quick account opening process."
      },
      {
        "type": "paragraph",
        "text": "We guide you through bank selection, document preparation, and application submission to get your account active within days."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
    ]
  },
  {
    "route": "/blog",
    "title": "Blog & Insights",
    "subtitle": "Stay updated with the latest UAE business news and guides",
    "heroImage": "",
    "category": "Business Resources",
    "breadcrumbs": [],
    "features": [
      {
        "title": "How to Choose Between Mainland and Free Zone in Dubai",
        "description": "Understanding the key differences between mainland and free zone company formation is crucial for your business success in the UAE."
      },
      {
        "title": "UAE Golden Visa: Everything You Need to Know in 2026",
        "description": "The Golden Visa offers long-term residency for investors, entrepreneurs, and talented individuals. Learn about eligibility and application process."
      },
      {
        "title": "Top 5 Free Zones for E-Commerce Businesses in Dubai",
        "description": "Discover the best free zones to set up your e-commerce business with maximum benefits and minimal costs."
      },
      {
        "title": "Corporate Tax in UAE: A Complete Guide for Businesses",
        "description": "Everything you need to know about the new corporate tax implementation in the UAE and how it affects your business."
      },
      {
        "title": "10 Reasons to Set Up Your Business in Dubai",
        "description": "Discover why Dubai is the top destination for entrepreneurs and businesses looking to expand internationally."
      },
      {
        "title": "How to Get a Freelance Visa in the UAE",
        "description": "Step-by-step guide to obtaining a freelance visa and working independently in the UAE."
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Blog & Insights"
      },
      {
        "type": "paragraph",
        "text": "Stay updated with the latest UAE business news and guides"
      }
    ],
    "images": []
  },
  {
    "route": "/business-setup-consultant-in-dubai",
    "title": "Business Setup Consultant in Dubai",
    "subtitle": "Expert guidance through every step of your company formation journey in the UAE",
    "heroImage": "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Business Setup Consultant",
        "href": "/business-setup-consultant-in-dubai"
      }
    ],
    "features": [
      {
        "title": "Personalized Consultation",
        "description": "One-on-one sessions to understand your unique business goals and recommend the best jurisdiction."
      },
      {
        "title": "License Selection",
        "description": "Expert advice on choosing the optimal license type for your activities."
      },
      {
        "title": "Documentation Assistance",
        "description": "Complete support in preparing and reviewing all incorporation documents."
      },
      {
        "title": "Government Liaison",
        "description": "Direct coordination with government authorities for smooth processing."
      },
      {
        "title": "Visa Services",
        "description": "Comprehensive visa processing for you, your family, and employees."
      },
      {
        "title": "Pro Services",
        "description": "Professional support for PRO services including stamping and attestation."
      }
    ],
    "benefits": [
      "Save time with expert guidance",
      "Avoid costly mistakes in jurisdiction selection",
      "Access to exclusive free zone partnerships",
      "End-to-end support from start to finish",
      "Post-incorporation compliance support",
      "Bank account opening assistance",
      "Corporate tax registration guidance",
      "Ongoing business advisory services"
    ],
    "process": [
      {
        "step": 1,
        "title": "Initial Consultation",
        "description": "Free consultation to understand your business requirements"
      },
      {
        "step": 2,
        "title": "Jurisdiction Analysis",
        "description": "We analyze and recommend the best setup jurisdiction"
      },
      {
        "step": 3,
        "title": "Documentation & Submission",
        "description": "Prepare and submit all required documents"
      },
      {
        "step": 4,
        "title": "License & Visa Processing",
        "description": "Obtain your license and process visas"
      }
    ],
    "faqs": [
      {
        "question": "Why hire a business setup consultant?",
        "answer": "A consultant provides expert guidance, saves time, and helps navigate complex regulations, ensuring your business is set up correctly the first time."
      },
      {
        "question": "How much do consultant services cost?",
        "answer": "Our consultation fees are competitive and often bundled with incorporation packages. Contact us for a personalized quote."
      },
      {
        "question": "Do you handle post-setup services?",
        "answer": "Yes, we offer ongoing services including visa renewals, compliance, accounting, and PRO services."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Your Trusted Business Advisor"
      },
      {
        "type": "paragraph",
        "text": "Navigating Dubai's business setup landscape requires deep local knowledge and experience. Our consultants bring years of expertise across all UAE jurisdictions."
      },
      {
        "type": "paragraph",
        "text": "We work closely with you to understand your vision, budget, and requirements before recommending the perfect setup solution for your business."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    ]
  },
  {
    "route": "/business-setup-in-saudi-arabia",
    "title": "Business Setup in Saudi Arabia",
    "subtitle": "Expand your business into the Kingdom's rapidly growing economy with expert local guidance",
    "heroImage": "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Saudi Arabia Setup",
        "href": "/business-setup-in-saudi-arabia"
      }
    ],
    "features": [
      {
        "title": "Saudi Vision 2030",
        "description": "Leverage opportunities from the Kingdom's economic transformation and diversification."
      },
      {
        "title": "Regional Headquarters",
        "description": "Set up your RHQ and access government contracts and incentives."
      },
      {
        "title": "Investor Visa Support",
        "description": "Comprehensive visa processing for investors and senior management."
      },
      {
        "title": "Legal Structure Advice",
        "description": "Expert guidance on LLC, branch, or joint venture structures."
      },
      {
        "title": "MISA Liaison",
        "description": "Direct coordination with the Ministry of Investment of Saudi Arabia."
      },
      {
        "title": "Tax & Zakat Registration",
        "description": "Complete support with tax registration and compliance requirements."
      }
    ],
    "benefits": [
      "Access to the largest economy in the Middle East",
      "Government incentives under Vision 2030",
      "Strategic location connecting three continents",
      "Young and growing consumer market",
      "100% foreign ownership in many sectors",
      "No personal income tax",
      "World-class infrastructure projects",
      "Growing expatriate community"
    ],
    "process": [
      {
        "step": 1,
        "title": "Market Assessment",
        "description": "Evaluate market opportunities and regulatory requirements"
      },
      {
        "step": 2,
        "title": "Entity Selection",
        "description": "Choose the optimal legal structure for your business"
      },
      {
        "step": 3,
        "title": "MISA Application",
        "description": "Submit application to the Ministry of Investment"
      },
      {
        "step": 4,
        "title": "Licensing & Launch",
        "description": "Obtain your license and commence operations"
      }
    ],
    "faqs": [
      {
        "question": "Can foreigners fully own a company in Saudi Arabia?",
        "answer": "Yes, under Saudi Vision 2030, 100% foreign ownership is now permitted in most sectors without a local sponsor."
      },
      {
        "question": "What is MISA?",
        "answer": "The Ministry of Investment of Saudi Arabia (MISA) is the government body responsible for regulating foreign investment in the Kingdom."
      },
      {
        "question": "How long does company setup take in Saudi Arabia?",
        "answer": "The process typically takes 4-8 weeks depending on the business activity and structure chosen."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Expand to the Kingdom"
      },
      {
        "type": "paragraph",
        "text": "Saudi Arabia is undergoing a historic economic transformation under Vision 2030, creating unprecedented opportunities for international businesses and investors."
      },
      {
        "type": "paragraph",
        "text": "Our team provides end-to-end support for setting up your business in Saudi Arabia, from market entry strategy to obtaining your investment license."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=800&q=80"
    ]
  },
  {
    "route": "/business-setup-masdar-city",
    "title": "Masdar City Business Setup | Abu Dhabi Sustainable Free Zone",
    "subtitle": "Build your sustainable business in Masdar City - the world's most sustainable eco-city and Abu Dhabi's flagship hub for cleantech, renewable energy, and green innovation.",
    "heroImage": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "Masdar City",
        "href": "/business-setup-masdar-city"
      }
    ],
    "features": [
      {
        "title": "World's Most Sustainable City",
        "description": "Masdar City is the world's first carbon-neutral, zero-waste city powered entirely by renewable energy, offering a truly unique business environment for green companies."
      },
      {
        "title": "Cleantech & Renewable Energy Hub",
        "description": "Home to Masdar (Abu Dhabi Future Energy Company), the International Renewable Energy Agency (IRENA), and over 1,000 cleantech companies and research institutions."
      },
      {
        "title": "Net-Zero Carbon Infrastructure",
        "description": "All buildings in Masdar City meet stringent sustainability standards with smart facades, solar panels, energy-efficient cooling, and integrated waste management systems."
      },
      {
        "title": "Research & Innovation Focus",
        "description": "Access to the Masdar Institute of Science and Technology (partnered with MIT), research labs, and test beds for sustainable technologies and urban solutions."
      },
      {
        "title": "Abu Dhabi Government Ecosystem",
        "description": "Direct connections to Abu Dhabi's government entities, sovereign wealth funds, and the UAE's clean energy strategy, opening doors for government contracts and partnerships."
      },
      {
        "title": "Green Finance & Investment",
        "description": "Access to Masdar's venture capital funds and green finance initiatives for cleantech startups, including the Masdar Clean Energy Fund and UAE-based impact investors."
      }
    ],
    "benefits": [
      "100% foreign ownership for green businesses",
      "Zero corporate and personal income tax",
      "Full profit and capital repatriation",
      "Carbon-neutral, sustainable business environment",
      "Access to IRENA and global cleantech network",
      "R&D support and innovation lab access",
      "Preferential treatment for green government contracts",
      "Brand association with world's leading eco-city"
    ],
    "process": [
      {
        "step": 1,
        "title": "Sustainable Business Consultation",
        "description": "Meet with our Masdar City specialist to assess how your business aligns with Masdar's sustainability vision and select the appropriate license category."
      },
      {
        "step": 2,
        "title": "Green Documentation",
        "description": "Prepare your business plan highlighting sustainability aspects, plus standard documents. We help articulate your environmental impact strategy."
      },
      {
        "step": 3,
        "title": "Masdar Approval Process",
        "description": "Submit to Masdar City authorities. Applications demonstrating clear environmental benefits receive priority processing and approval."
      },
      {
        "step": 4,
        "title": "License & Eco-Setup",
        "description": "Receive your Masdar City license, set up in a sustainable office space with smart energy systems, and process visas for your green team."
      }
    ],
    "faqs": [
      {
        "question": "What types of businesses are suitable for Masdar City?",
        "answer": "Masdar City is ideal for renewable energy companies, cleantech startups, sustainable construction firms, environmental consulting, waste management, water technology, electric vehicle companies, green finance, ESG advisory, and any business with a clear sustainability mission. Over 1,000 companies currently operate from Masdar City."
      },
      {
        "question": "How does Masdar City's sustainability work in practice?",
        "answer": "Masdar City uses a combination of solar energy (from the nearby Noor Abu Dhabi solar park), smart building orientation for natural cooling, energy-efficient cooling systems, water recycling, waste-to-energy conversion, and a personal rapid transport system. The city is designed to be entirely car-free with pedestrian-friendly streets shaded by innovative architecture."
      },
      {
        "question": "Can a non-cleantech business set up in Masdar City?",
        "answer": "While Masdar City focuses on sustainability, it also welcomes professional services, consulting, technology, and trading companies that share its environmental values. Businesses that commit to sustainable practices and contribute to the city's green ecosystem are considered, even if their core activity is not strictly cleantech."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why Masdar City?"
      },
      {
        "type": "paragraph",
        "text": "Masdar City is the world's most ambitious sustainable urban development, offering a unique business environment for companies committed to environmental responsibility. Powered entirely by renewable energy and designed for net-zero carbon emissions, it provides an unmatched platform for cleantech and green businesses."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate is your gateway to Masdar City business setup. We guide you through the entire process - from assessing your sustainability alignment and preparing documentation to securing your license and eco-friendly office space. Join the global movement toward a greener future with a business in Masdar City."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80"
    ]
  },
  {
    "route": "/careers",
    "title": "Join Our Team",
    "subtitle": "Build your career with a leading business setup consultancy in Dubai",
    "heroImage": "",
    "category": "About YASA",
    "breadcrumbs": [],
    "features": [
      {
        "title": "Business Setup Consultant",
        "description": "Dubai | Full-time | Sales"
      },
      {
        "title": "Client Relations Manager",
        "description": "Dubai | Full-time | Operations"
      },
      {
        "title": "Marketing Specialist",
        "description": "Dubai | Full-time | Marketing"
      },
      {
        "title": "PRO (Public Relations Officer)",
        "description": "Dubai | Full-time | Operations"
      },
      {
        "title": "Business Development Executive",
        "description": "Dubai | Full-time | Sales"
      },
      {
        "title": "Open Positions",
        "description": "5+"
      },
      {
        "title": "Team Members",
        "description": "50+"
      },
      {
        "title": "Employee Rating",
        "description": "4.8"
      },
      {
        "title": "Office Location",
        "description": "Dubai"
      }
    ],
    "benefits": [
      "Competitive salary packages",
      "Annual air ticket",
      "Medical insurance",
      "Annual leave",
      "Professional development",
      "Team building activities"
    ],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Join Our Team"
      },
      {
        "type": "paragraph",
        "text": "Build your career with a leading business setup consultancy in Dubai"
      },
      {
        "type": "heading",
        "text": "Why Work With Us"
      },
      {
        "type": "heading",
        "text": "Open Positions"
      }
    ],
    "images": []
  },
  {
    "route": "/company-setup",
    "title": "Company Setup",
    "subtitle": "Explore Company Setup with YASA CSP.",
    "heroImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "Mainland Company",
        "description": "Full business license allowing you to trade anywhere in the UAE market with no restrictions on business activities or company ownership.",
        "href": "/company-setup/mainland"
      },
      {
        "title": "Free Zone Company",
        "description": "Set up in any of Dubai's 30+ free zones with 100% foreign ownership, tax exemptions, and simplified company formation processes.",
        "href": "/company-setup/freezone"
      },
      {
        "title": "Offshore Company",
        "description": "International business incorporation in UAE jurisdictions like RAK ICC and JAFZA Offshore for asset holding and international trading.",
        "href": "/company-setup/offshore"
      },
      {
        "title": "Consultation",
        "description": "Understand your business needs and recommend the best jurisdiction"
      },
      {
        "title": "Documentation",
        "description": "Prepare MOA, shareholder agreements, and license applications"
      },
      {
        "title": "Approvals",
        "description": "Submit to authorities and obtain initial approvals"
      },
      {
        "title": "License & Visa",
        "description": "Receive trade license and process residence visas"
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [],
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    ]
  },
  {
    "route": "/company-setup/freezone",
    "title": "Free Zone Company Setup",
    "subtitle": "Set up your business in Dubai's leading free zones with maximum benefits",
    "heroImage": "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/company-setup/freezone"
      }
    ],
    "features": [
      {
        "title": "100% Foreign Ownership",
        "description": "Complete ownership without local partner requirement."
      },
      {
        "title": "Zero Tax Regime",
        "description": "No corporate or personal income tax for 15-50 years."
      },
      {
        "title": "Quick Setup",
        "description": "Company formation completed in 3 to 7 working days."
      },
      {
        "title": "Repatriation of Capital",
        "description": "100% capital and profit repatriation allowed."
      },
      {
        "title": "Flexible Office Options",
        "description": "Virtual, co-working, or physical office spaces available."
      },
      {
        "title": "Over 30 Free Zones",
        "description": "DMCC, Meydan, IFZA, JAFZA, DAFZA, SPC and many more."
      }
    ],
    "benefits": [
      "Tax-free business operations",
      "Expedited company formation process",
      "100% import and export duty exemption",
      "No currency restrictions on capital movement",
      "Simplified visa processing included",
      "Access to world-class infrastructure",
      "Strategic locations near ports and airports",
      "Industry-specific ecosystems and clusters"
    ],
    "process": [
      {
        "step": 1,
        "title": "Free Zone Selection",
        "description": "Choose the optimal free zone for your business activity"
      },
      {
        "step": 2,
        "title": "Name & Activity",
        "description": "Reserve company name and define business activities"
      },
      {
        "step": 3,
        "title": "License Application",
        "description": "Submit incorporation documents to free zone authority"
      },
      {
        "step": 4,
        "title": "Setup Complete",
        "description": "Receive license, lease agreement, and visa processing"
      }
    ],
    "faqs": [
      {
        "question": "Which free zone is best for trading companies?",
        "answer": "For general trading, DMCC and JAFZA are top choices. For tech startups, Dubai Silicon Oasis and Meydan offer excellent ecosystems."
      },
      {
        "question": "Can a free zone company trade within mainland UAE?",
        "answer": "Yes, through a local distributor or by setting up a mainland branch. Some free zones allow direct local trading with additional permits."
      },
      {
        "question": "What is the minimum share capital for a free zone company?",
        "answer": "Most free zones require no minimum share capital, though some like DMCC require AED 50,000 for certain activities."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Free Zone Business Excellence"
      },
      {
        "type": "paragraph",
        "text": "Dubai's free zones offer world-class business environments with tax benefits, streamlined setup, and industry-specific clusters. Whether you are in trading, tech, media, or logistics, there is a free zone designed for your needs."
      },
      {
        "type": "paragraph",
        "text": "We have established companies across all major free zones and provide unbiased advice on which jurisdiction best suits your business model and budget."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80"
    ]
  },
  {
    "route": "/company-setup/mainland",
    "title": "Mainland Company Setup",
    "subtitle": "Establish a mainland company in Dubai with full trading rights across the UAE",
    "heroImage": "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
    "category": "Mainland Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Mainland",
        "href": "/company-setup/mainland"
      }
    ],
    "features": [
      {
        "title": "No Trading Restrictions",
        "description": "Trade freely across mainland UAE and with government entities."
      },
      {
        "title": "100% Foreign Ownership",
        "description": "Full ownership allowed in over 1,000 business activities."
      },
      {
        "title": "Unlimited Visas",
        "description": "Obtain unlimited residence visas based on office space."
      },
      {
        "title": "Government Contracts",
        "description": "Eligible for UAE government and semi-government tenders."
      },
      {
        "title": "No Local Agent Required",
        "description": "Direct company registration without UAE national partner."
      },
      {
        "title": "Premium Office Required",
        "description": "Physical office space in designated business areas needed."
      }
    ],
    "benefits": [
      "Trade in any sector across UAE and beyond",
      "100% foreign ownership since 2021 reforms",
      "No restrictions on business activities",
      "Apply for government and semi-government contracts",
      "Unlimited employee visa quotas",
      "No annual free zone renewal fees",
      "Brand credibility and customer trust",
      "Access to UAE banking and finance"
    ],
    "process": [
      {
        "step": 1,
        "title": "Activity Selection",
        "description": "Choose business activities eligible for mainland license"
      },
      {
        "step": 2,
        "title": "Initial Approval",
        "description": "Obtain initial approval from DED for company name"
      },
      {
        "step": 3,
        "title": "MOA & Office Lease",
        "description": "Sign MOA and secure physical office space"
      },
      {
        "step": 4,
        "title": "License & Registration",
        "description": "Receive trade license and complete registrations"
      }
    ],
    "faqs": [
      {
        "question": "What is the minimum office space required for a mainland company?",
        "answer": "The minimum office space depends on your business activity, typically ranging from 200 to 500 sq ft for most commercial activities."
      },
      {
        "question": "How many business activities can I include on my license?",
        "answer": "You can include up to 10 related business activities on a single trade license, depending on the approval of DED."
      },
      {
        "question": "Can I convert my free zone company to mainland?",
        "answer": "Yes, free zone companies can convert to mainland by transferring sponsorship and meeting DED requirements for physical office space."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Mainland Business Advantages"
      },
      {
        "type": "paragraph",
        "text": "A mainland company in Dubai offers the most flexibility for businesses targeting the local UAE market. With 100% foreign ownership now available, mainland setup has become the preferred choice for serious entrepreneurs."
      },
      {
        "type": "paragraph",
        "text": "Our team manages everything from activity selection to office procurement and final license issuance through the Department of Economic Development."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
    ]
  },
  {
    "route": "/company-setup/offshore",
    "title": "Offshore Company Setup",
    "subtitle": "Register an offshore company in the UAE for international business and asset holding",
    "heroImage": "https://images.unsplash.com/photo-1504711434969-e33886168d0c?w=1920&q=80",
    "category": "Offshore Formation",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Offshore",
        "href": "/company-setup/offshore"
      }
    ],
    "features": [
      {
        "title": "Asset Protection",
        "description": "Safeguard assets through UAE offshore jurisdictions."
      },
      {
        "title": "Tax Optimization",
        "description": "Zero corporate tax on international income."
      },
      {
        "title": "Confidentiality",
        "description": "Beneficial owner information not publicly disclosed."
      },
      {
        "title": "No Physical Office",
        "description": "Registered address service without physical workspace."
      },
      {
        "title": "International Banking",
        "description": "Open multi-currency accounts for global transactions."
      },
      {
        "title": "Simple Maintenance",
        "description": "Annual renewal with minimal compliance requirements."
      }
    ],
    "benefits": [
      "Complete asset protection and privacy",
      "Zero tax on worldwide income",
      "No requirement for local office space",
      "Fast incorporation in 3-5 days",
      "No audited financial statements required",
      "Bearer shares and nominee services available",
      "Ideal for international holding structures",
      "Cost-effective annual maintenance"
    ],
    "process": [
      {
        "step": 1,
        "title": "Jurisdiction Selection",
        "description": "Choose between RAK ICC, JAFZA Offshore, or AJMAN Offshore"
      },
      {
        "step": 2,
        "title": "Name Approval",
        "description": "Reserve company name and submit incorporation documents"
      },
      {
        "step": 3,
        "title": "Registration",
        "description": "Complete registration with offshore authority"
      },
      {
        "step": 4,
        "title": "Bank Account Setup",
        "description": "Open offshore corporate bank accounts"
      }
    ],
    "faqs": [
      {
        "question": "Can an offshore company trade within the UAE?",
        "answer": "No, offshore companies cannot trade within the UAE local market. They are designed for international business, asset holding, and investment purposes."
      },
      {
        "question": "What is the difference between RAK ICC and JAFZA Offshore?",
        "answer": "RAK ICC offers lower setup costs and simpler compliance, while JAFZA Offshore provides more prestige and easier banking relationships."
      },
      {
        "question": "Can I get a UAE residence visa with an offshore company?",
        "answer": "Yes, offshore company owners can obtain a UAE residence visa through certain schemes, though additional requirements may apply."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Offshore Solutions for Global Business"
      },
      {
        "type": "paragraph",
        "text": "UAE offshore companies provide an excellent vehicle for international business operations, asset holding, and wealth management. Jurisdictions like RAK ICC and JAFZA Offshore offer robust legal frameworks."
      },
      {
        "type": "paragraph",
        "text": "We provide end-to-end offshore incorporation services including registered address, nominee services, and bank account setup with international banks."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
    ]
  },
  {
    "route": "/contact",
    "title": "Contact Us",
    "subtitle": "Have a question? Our team is ready to help you with any inquiries about business setup and corporate services.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Contact Us"
      },
      {
        "type": "paragraph",
        "text": "Have a question? Our team is ready to help you with any inquiries about business setup and corporate services."
      },
      {
        "type": "heading",
        "text": "Our Office"
      },
      {
        "type": "heading",
        "text": "Send a Message"
      }
    ],
    "images": []
  },
  {
    "route": "/contact-us",
    "title": "Contact Us",
    "subtitle": "Get in touch with our team of experts",
    "heroImage": "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Contact Us",
        "href": "/contact-us"
      }
    ],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Get in Touch"
      },
      {
        "type": "paragraph",
        "text": "Call Us"
      },
      {
        "type": "paragraph",
        "text": "+971 50 7778009"
      },
      {
        "type": "paragraph",
        "text": "Email Us"
      },
      {
        "type": "paragraph",
        "text": "contact@yasacsp.com"
      },
      {
        "type": "paragraph",
        "text": "Visit Us"
      },
      {
        "type": "paragraph",
        "text": "Office 901-B68, Iris Bay Tower, Business Bay, Dubai UAE"
      },
      {
        "type": "paragraph",
        "text": "Working Hours"
      },
      {
        "type": "paragraph",
        "text": "Mon - Sat: 9:00 AM - 6:00 PM"
      },
      {
        "type": "heading",
        "text": "Send us a Message"
      }
    ],
    "images": []
  },
  {
    "route": "/corporate-tax",
    "title": "Corporate Tax UAE",
    "subtitle": "Navigate UAE corporate tax with expert guidance and compliance solutions",
    "heroImage": "https://images.unsplash.com/photo-1554224154-26032dfc0dae?w=1920&q=80",
    "category": "Finance & Compliance",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Corporate Tax",
        "href": "/corporate-tax"
      }
    ],
    "features": [
      {
        "title": "CT Registration",
        "description": "Corporate tax registration with the Federal Tax Authority."
      },
      {
        "title": "Tax Return Filing",
        "description": "Annual corporate tax return preparation and submission."
      },
      {
        "title": "Compliance Advisory",
        "description": "Ongoing CT compliance guidance for your business."
      },
      {
        "title": "Transfer Pricing",
        "description": "Transfer pricing documentation and disclosure forms."
      },
      {
        "title": "Tax Planning",
        "description": "Strategic tax planning to optimize your CT position."
      },
      {
        "title": "Exemption Assessment",
        "description": "Determine if your business qualifies for CT exemptions."
      }
    ],
    "benefits": [
      "Expert FTA liaison and representation",
      "Timely filing to avoid penalties",
      "Transfer pricing compliance included",
      "Tax-efficient business structuring",
      "Dedicated tax consultant assigned",
      "Digital dashboard for document management",
      "Free initial consultation available",
      "Multi-jurisdictional tax expertise"
    ],
    "process": [
      {
        "step": 1,
        "title": "CT Assessment",
        "description": "Evaluate your business for CT registration requirements"
      },
      {
        "step": 2,
        "title": "Registration Filing",
        "description": "Register with FTA and obtain tax registration number"
      },
      {
        "step": 3,
        "title": "Ongoing Compliance",
        "description": "Maintain records and prepare for tax return filing"
      },
      {
        "step": 4,
        "title": "Return Submission",
        "description": "File annual corporate tax return within 9 months of year-end"
      }
    ],
    "faqs": [
      {
        "question": "What is the UAE corporate tax rate?",
        "answer": "The UAE corporate tax rate is 9% on taxable profits exceeding AED 375,000. Profits below this threshold are taxed at 0%."
      },
      {
        "question": "Who needs to register for corporate tax?",
        "answer": "All UAE businesses, including free zone companies, must register for corporate tax unless they qualify for a specific exemption."
      },
      {
        "question": "Are free zone companies exempt from corporate tax?",
        "answer": "Qualifying free zone entities may benefit from a 0% CT rate on qualifying income, provided they meet the compliance conditions."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Corporate Tax Compliance Made Simple"
      },
      {
        "type": "paragraph",
        "text": "With the introduction of UAE corporate tax from June 2023, businesses must ensure timely registration and compliance. Our tax experts guide you through every aspect of the new CT framework."
      },
      {
        "type": "paragraph",
        "text": "From initial registration to annual return filing and transfer pricing documentation, we provide complete corporate tax solutions for businesses of all sizes."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    ]
  },
  {
    "route": "/corporate-tax-guide",
    "title": "Corporate Tax Guide",
    "subtitle": "Your complete guide to understanding and complying with UAE corporate tax",
    "heroImage": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80",
    "category": "Finance & Compliance",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Corporate Tax Guide",
        "href": "/corporate-tax-guide"
      }
    ],
    "features": [
      {
        "title": "CT Law Overview",
        "description": "Comprehensive breakdown of UAE Corporate Tax Law (Federal Decree-Law No. 47 of 2022)."
      },
      {
        "title": "Registration Deadlines",
        "description": "Clear timeline for CT registration and first tax return filing."
      },
      {
        "title": "Exemption Criteria",
        "description": "Detailed guide on who qualifies for CT exemptions."
      },
      {
        "title": "Free Zone Rules",
        "description": "Understanding qualifying income for free zone entities."
      },
      {
        "title": "Penalty Framework",
        "description": "Complete list of CT penalties and how to avoid them."
      },
      {
        "title": "Transfer Pricing Guide",
        "description": "Master transfer pricing documentation requirements."
      }
    ],
    "benefits": [
      "Comprehensive CT reference material",
      "Up-to-date regulatory information",
      "Practical compliance checklists",
      "Free zone CT rules explained clearly",
      "Penalty avoidance strategies",
      "Expert commentary and insights",
      "Downloadable resources and templates",
      "Regular updates on regulatory changes"
    ],
    "process": [
      {
        "step": 1,
        "title": "Understand Basics",
        "description": "Learn the fundamentals of UAE corporate tax law"
      },
      {
        "step": 2,
        "title": "Assess Obligations",
        "description": "Determine your business CT registration requirements"
      },
      {
        "step": 3,
        "title": "Implement Compliance",
        "description": "Set up accounting systems for CT compliance"
      },
      {
        "step": 4,
        "title": "File & Maintain",
        "description": "Submit returns and maintain ongoing compliance"
      }
    ],
    "faqs": [
      {
        "question": "When did UAE corporate tax become effective?",
        "answer": "UAE corporate tax became effective for financial years starting on or after 1 June 2023."
      },
      {
        "question": "What is the threshold for CT registration?",
        "answer": "All businesses with taxable profits exceeding AED 375,000 are subject to 9% CT. Below this threshold, the rate is 0%."
      },
      {
        "question": "How does CT apply to free zone companies?",
        "answer": "Qualifying free zone entities benefit from 0% CT on qualifying income, provided they maintain adequate substance and meet compliance conditions."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Your CT Knowledge Hub"
      },
      {
        "type": "paragraph",
        "text": "Our corporate tax guide provides a comprehensive reference for understanding UAE CT legislation, registration requirements, compliance obligations, and strategic planning opportunities."
      },
      {
        "type": "paragraph",
        "text": "Designed for business owners, finance professionals, and advisors, this guide simplifies complex tax concepts into actionable information."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    ]
  },
  {
    "route": "/cost-calculator",
    "title": "Cost Breakdown",
    "subtitle": "*One-time setup cost. Excludes annual renewal fees.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "General Trading",
        "description": "Import/export, wholesale, retail"
      },
      {
        "title": "E-Commerce",
        "description": "Online store, digital marketplace"
      },
      {
        "title": "Consultancy",
        "description": "Management, IT, business advisory"
      },
      {
        "title": "Real Estate",
        "description": "Property development, brokerage"
      },
      {
        "title": "Tourism & Travel",
        "description": "Travel agency, tour operations"
      },
      {
        "title": "Media & Marketing",
        "description": "Digital marketing, production"
      },
      {
        "title": "Technology",
        "description": "Software, IT services, web dev"
      },
      {
        "title": "Logistics",
        "description": "Shipping, freight, supply chain"
      },
      {
        "title": "Manufacturing",
        "description": "Production, industrial, packaging"
      },
      {
        "title": "Restaurant & Cafe",
        "description": "Food & beverage, catering"
      },
      {
        "title": "Mainland",
        "description": "Trade anywhere in UAE, no restrictions"
      },
      {
        "title": "Free Zone",
        "description": "100% foreign ownership, tax benefits"
      },
      {
        "title": "Offshore",
        "description": "International business, asset holding"
      },
      {
        "title": "Basic",
        "description": "Trade license | 2 visa quota | Flexi desk | VAT registration"
      },
      {
        "title": "Standard",
        "description": "Trade license | 4 visa quota | Shared office | VAT registration | Bank account support | PRO assistance"
      },
      {
        "title": "Premium",
        "description": "Trade license | 6 visa quota | Private office | VAT registration | Bank account opening | Full PRO support | Corporate tax filing | Dedicated account manager"
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Cost Breakdown"
      },
      {
        "type": "paragraph",
        "text": "*One-time setup cost. Excludes annual renewal fees."
      },
      {
        "type": "heading",
        "text": "Thank You, !"
      },
      {
        "type": "paragraph",
        "text": "We've received your request and will contact you at within 24 hours with your personalized cost breakdown."
      },
      {
        "type": "heading",
        "text": "Estimated Investment"
      },
      {
        "type": "heading",
        "text": "Estimate Your Business Setup Cost"
      },
      {
        "type": "paragraph",
        "text": "Get an instant, transparent cost estimate for your UAE company formation in under 2 minutes."
      },
      {
        "type": "heading",
        "text": "Select Your Business Activity"
      },
      {
        "type": "paragraph",
        "text": "Choose the activity that best describes your business."
      },
      {
        "type": "heading",
        "text": "Choose Jurisdiction & Package"
      },
      {
        "type": "paragraph",
        "text": "Select where to set up and what level of support you need."
      },
      {
        "type": "heading",
        "text": "Jurisdiction"
      },
      {
        "type": "heading",
        "text": "Service Package"
      },
      {
        "type": "heading",
        "text": "Your Requirements"
      },
      {
        "type": "paragraph",
        "text": "Tell us about your specific needs so we can calculate accurately."
      },
      {
        "type": "heading",
        "text": "Current Estimate"
      },
      {
        "type": "heading",
        "text": "Your Details"
      },
      {
        "type": "paragraph",
        "text": "Enter your contact information to receive your personalized cost breakdown."
      },
      {
        "type": "heading",
        "text": "Your Estimate"
      },
      {
        "type": "paragraph",
        "text": "One-time setup cost"
      },
      {
        "type": "paragraph",
        "text": "Select your business activity to see estimates."
      },
      {
        "type": "heading",
        "text": "Why Choose Yasa?"
      },
      {
        "type": "heading",
        "text": "Need a Custom Solution?"
      },
      {
        "type": "paragraph",
        "text": "Our experts can tailor a package specifically for your business needs. Schedule a free consultation today."
      }
    ],
    "images": []
  },
  {
    "route": "/customs-registration-uae",
    "title": "Customs Registration UAE",
    "subtitle": "Register your company with UAE customs for smooth import and export operations",
    "heroImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Customs Registration",
        "href": "/customs-registration-uae"
      }
    ],
    "features": [
      {
        "title": "Customs Code Registration",
        "description": "Obtain UAE customs code for international trade."
      },
      {
        "title": "Import/Export Permits",
        "description": "Licenses for importing and exporting goods."
      },
      {
        "title": "Customs Clearance",
        "description": "Documentation and clearance for shipments."
      },
      {
        "title": "HS Code Classification",
        "description": "Correct classification of goods under HS codes."
      },
      {
        "title": "Duty Calculation",
        "description": "Accurate customs duty and tax calculations."
      },
      {
        "title": "Trade Documentation",
        "description": "Certificate of origin, invoices, and packing lists."
      }
    ],
    "benefits": [
      "Legally compliant import and export operations",
      "Fast customs clearance processing",
      "Correct duty and tax calculations",
      "Expert HS code classification",
      "Reduced inspection and delays",
      "Online customs portal access",
      "Multi-country trade support",
      "Ongoing compliance monitoring"
    ],
    "process": [
      {
        "step": 1,
        "title": "Trade License Check",
        "description": "Verify your license includes import/export activities"
      },
      {
        "step": 2,
        "title": "Document Preparation",
        "description": "Gather trade documents and company information"
      },
      {
        "step": 3,
        "title": "Customs Registration",
        "description": "Submit application to Federal Customs Authority"
      },
      {
        "step": 4,
        "title": "Code Assignment",
        "description": "Receive customs code and activate trading"
      }
    ],
    "faqs": [
      {
        "question": "What is a UAE customs code?",
        "answer": "A customs code is a unique registration number assigned to importers and exporters, required for all customs declarations and clearance procedures."
      },
      {
        "question": "How long does customs registration take?",
        "answer": "The registration process typically takes 3 to 5 business days once all required documents are submitted correctly."
      },
      {
        "question": "Do free zone companies need customs registration?",
        "answer": "Yes, any company involved in importing or exporting goods into, out of, or through the UAE must register for a customs code."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Streamline Your Trade Operations"
      },
      {
        "type": "paragraph",
        "text": "Customs registration is mandatory for any business engaged in import, export, or re-export activities in the UAE. Our team manages the entire registration process with the Federal Customs Authority."
      },
      {
        "type": "paragraph",
        "text": "We ensure your goods are correctly classified under HS codes, duties are accurately calculated, and all trade documentation meets regulatory requirements."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    ]
  },
  {
    "route": "/dafza-company-formation",
    "title": "DAFZA Company Formation | Dubai Airport Freezone",
    "subtitle": "Set up your business in DAFZA - Dubai-s premier airport-adjacent free zone offering direct access to global markets through Dubai International Airport.",
    "heroImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "DAFZA",
        "href": "/dafza-company-formation"
      }
    ],
    "features": [
      {
        "title": "Direct Airport Adjacency",
        "description": "Located at Dubai International Airport (DXB), DAFZA provides unparalleled connectivity for time-sensitive logistics, air cargo, and aviation-related businesses."
      },
      {
        "title": "Global Logistics Hub",
        "description": "Access to DXB's massive cargo capacity with dedicated warehousing, cold storage, and express freight facilities serving over 240 destinations worldwide."
      },
      {
        "title": "Aviation & Aerospace Focus",
        "description": "Specialized licenses for aircraft leasing, MRO services, aviation parts trading, and aerospace engineering with support from Dubai Aviation City Corporation."
      },
      {
        "title": "Fast-Track Setup Process",
        "description": "DAFZA offers a streamlined company formation process with license issuance within 3-5 days and express visa processing for shareholders."
      },
      {
        "title": "Advanced Infrastructure",
        "description": "State-of-the-art office towers, warehouse units, and showroom spaces with 24/7 security, high-speed connectivity, and modern conference facilities."
      },
      {
        "title": "Global Reach Network",
        "description": "Benefit from DAFZA's network of 23+ international offices and trade missions that help member companies connect with global markets and investors."
      }
    ],
    "benefits": [
      "100% foreign ownership for all business activities",
      "Zero corporate and personal income tax",
      "Full profit repatriation without restrictions",
      "Strategic location at Dubai International Airport",
      "Ideal for aviation, logistics, and trading businesses",
      "Quick 3-5 day license processing",
      "Access to 240+ global destinations via DXB",
      "24/7 operational support and security services"
    ],
    "process": [
      {
        "step": 1,
        "title": "Business Scope Assessment",
        "description": "Consult with our DAFZA expert to define your business activities and select from aviation, logistics, trading, or service license categories."
      },
      {
        "step": 2,
        "title": "Document Submission",
        "description": "Submit passport copies, business plan, and shareholder details. We ensure all documents meet DAFZA's compliance standards."
      },
      {
        "step": 3,
        "title": "Application Review",
        "description": "DAFZA authorities review and approve your application typically within 2-3 working days for standard license types."
      },
      {
        "step": 4,
        "title": "License & Setup",
        "description": "Receive your DAFZA trade license, select office or warehouse space, and process employee visas to begin operations immediately."
      }
    ],
    "faqs": [
      {
        "question": "What types of businesses benefit most from DAFZA?",
        "answer": "DAFZA is ideal for aviation companies, aircraft leasing firms, MRO providers, logistics and freight forwarding companies, cargo operators, trading businesses dealing in high-value goods, and technology companies that require rapid access to international markets through Dubai International Airport."
      },
      {
        "question": "Does DAFZA provide warehouse and cold storage facilities?",
        "answer": "Yes, DAFZA offers a wide range of warehouse units including general storage, cold storage for perishable goods, bonded warehousing for duty-free storage, and specialized facilities for pharmaceuticals and sensitive cargo. Units range from 100 sqm to 10,000+ sqm."
      },
      {
        "question": "Can I operate a DAFZA company from outside the UAE?",
        "answer": "Yes, DAFZA allows remote company setup and management for most license types. Many international entrepreneurs incorporate their DAFZA company without physically being in Dubai. Yasa Corporate can handle the entire process remotely on your behalf."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why DAFZA?"
      },
      {
        "type": "paragraph",
        "text": "DAFZA (Dubai Airport Freezone) offers a unique value proposition for businesses that rely on global connectivity. Being physically located at Dubai International Airport - the world's busiest airport for international passenger traffic - gives member companies unmatched access to global supply chains and markets."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate is a trusted DAFZA partner, providing seamless company formation services including license selection, documentation, office setup, and visa processing. Whether you are in aviation, logistics, or general trading, we ensure a smooth and rapid setup experience."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
    ]
  },
  {
    "route": "/dependent-visa-uae",
    "title": "Dependent Visa UAE",
    "subtitle": "Bring your family to the UAE with a seamless dependent visa sponsorship",
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80",
    "category": "Visa & Immigration",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Visa",
        "href": "/services/visa"
      },
      {
        "label": "Dependent Visa",
        "href": "/dependent-visa-uae"
      }
    ],
    "features": [
      {
        "title": "Sponsor Family Members",
        "description": "Sponsor your spouse, children, and parents for UAE residency."
      },
      {
        "title": "Housemaid Visa",
        "description": "Sponsor domestic workers including maids and nannies."
      },
      {
        "title": "Quick Processing",
        "description": "Dependent visas processed within 5-7 business days."
      },
      {
        "title": "Medical Insurance",
        "description": "Comprehensive health insurance coverage for dependents."
      },
      {
        "title": "Emirates ID Included",
        "description": "Dependents receive Emirates ID for identification."
      },
      {
        "title": "Renewal Assistance",
        "description": "Hassle-free renewal of dependent visas annually."
      }
    ],
    "benefits": [
      "Family reunification in the UAE",
      "Access to UAE education and healthcare",
      "Dependents can open bank accounts",
      "Long-term residency for children under 18",
      "Option to sponsor parents with special approval",
      "Visa validity aligned with sponsor's visa",
      "No age limit for sponsored children if students",
      "Easy exit and re-entry with valid visa"
    ],
    "process": [
      {
        "step": 1,
        "title": "Eligibility Check",
        "description": "Verify sponsor meets salary and accommodation criteria"
      },
      {
        "step": 2,
        "title": "Document Collection",
        "description": "Gather attested marriage, birth, and passport copies"
      },
      {
        "step": 3,
        "title": "Application Submission",
        "description": "Submit dependent visa application to ICP"
      },
      {
        "step": 4,
        "title": "Visa Stamping & ID",
        "description": "Medical, biometric, and Emirates ID for dependents"
      }
    ],
    "faqs": [
      {
        "question": "What is the minimum salary to sponsor a dependent?",
        "answer": "The sponsor must earn at least AED 4,000 or AED 3,000 plus accommodation to qualify for dependent visa sponsorship."
      },
      {
        "question": "Can I sponsor my parents on a dependent visa?",
        "answer": "Yes, but only if you are a male sponsor. Additional security deposit and proof of accommodation are required for parent sponsorship."
      },
      {
        "question": "How long does a dependent visa remain valid?",
        "answer": "Dependent visas are typically valid for 1 to 3 years, matching the sponsor's residence visa validity period."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Family First in the UAE"
      },
      {
        "type": "paragraph",
        "text": "The UAE offers a straightforward dependent visa process allowing expatriates to live with their families. Our consultants guide you through every step, from salary verification to visa stamping."
      },
      {
        "type": "paragraph",
        "text": "We ensure all documentation is properly attested and submitted to immigration authorities, minimising delays and rejections for your family visa application."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
    ]
  },
  {
    "route": "/dmcc-company-formation",
    "title": "DMCC Company Formation | Dubai Multi Commodities Centre",
    "subtitle": "Establish your business in DMCC - the world's #1 free zone for company formation, located in the heart of Dubai Marina and JLT.",
    "heroImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "DMCC",
        "href": "/dmcc-company-formation"
      }
    ],
    "features": [
      {
        "title": "World's #1 Free Zone",
        "description": "DMCC has been awarded 'Global Free Zone of the Year' for multiple consecutive years by the Financial Times fDi Magazine, attracting over 24,000 companies."
      },
      {
        "title": "Precious Metals & Diamond Hub",
        "description": "Home to the Dubai Diamond Exchange and the largest gold and precious metals trading floor in the Middle East, with secure vaulting facilities."
      },
      {
        "title": "Premium Office Spaces in JLT",
        "description": "Choose from over 100 buildings in Jumeirah Lakes Towers offering flexi-desks, serviced offices, and Grade A commercial spaces with stunning views."
      },
      {
        "title": "Advanced Trading Infrastructure",
        "description": "Access DMCC's commodity trading platforms, crypto asset regulations, and fintech licensing through the DMCC Crypto Centre."
      },
      {
        "title": "Global Business Network",
        "description": "Join a community of over 24,000 companies from more than 180 countries with unmatched networking and business matchmaking events."
      },
      {
        "title": "Wine & Commodities Storage",
        "description": "DMCC operates the region's largest wine storage and logistics facility, plus dedicated warehouses for tea, coffee, and other commodities."
      }
    ],
    "benefits": [
      "Recognized as the world's best free zone for 8+ years",
      "100% foreign ownership with no local sponsor",
      "Zero corporate and personal income tax",
      "Full profit and capital repatriation",
      "Access to Dubai's world-class logistics and port infrastructure",
      "Premium location in Dubai Marina and JLT district",
      "Over 24,000 companies from 180+ countries",
      "Dedicated visa processing and business support services"
    ],
    "process": [
      {
        "step": 1,
        "title": "Business Activity Assessment",
        "description": "Meet with our DMCC specialist to review your business activity and select the appropriate license - trading, services, or industrial."
      },
      {
        "step": 2,
        "title": "Documentation & Submission",
        "description": "Prepare shareholder documents, business plan, and passport copies. We handle the full submission to DMCC authority."
      },
      {
        "step": 3,
        "title": "Initial Approval & Payment",
        "description": "Receive initial approval within 2-4 days, complete the required payment, and proceed to office space selection."
      },
      {
        "step": 4,
        "title": "License & Residency Visa",
        "description": "Get your DMCC trade license issued and complete visa processing including medical tests and Emirates ID for you and your employees."
      }
    ],
    "faqs": [
      {
        "question": "Why is DMCC considered the world's best free zone?",
        "answer": "DMCC has been named 'Global Free Zone of the Year' by the Financial Times fDi Magazine for eight consecutive years (2015-2023) due to its exceptional infrastructure, regulatory framework, business ecosystem, and the sheer scale of companies it hosts - over 24,000 from 180 countries in the heart of Dubai."
      },
      {
        "question": "What is the minimum office space requirement in DMCC?",
        "answer": "DMCC requires physical office space for most license types. Flexi-desk packages start from AED 15,000 per year, while dedicated serviced offices range from AED 55,000 depending on size and location within Jumeirah Lakes Towers."
      },
      {
        "question": "Can I trade commodities under a DMCC license?",
        "answer": "Yes, DMCC is specifically designed for commodity trading. It offers specialized licenses for gold, diamonds, precious stones, tea, coffee, cocoa, metals, energy products, and agricultural commodities. DMCC also provides accredited vaulting, grading, and logistics services for physical commodity storage."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why DMCC?"
      },
      {
        "type": "paragraph",
        "text": "DMCC (Dubai Multi Commodities Centre) is the undisputed leader among UAE free zones, consistently ranked #1 globally. Located in the vibrant Jumeirah Lakes Towers and Dubai Marina districts, it offers unparalleled infrastructure for commodity trading, services, and fintech businesses with a world-class regulatory environment."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate is an authorized DMCC registration partner. We provide end-to-end company formation services including license selection, documentation, office space booking, visa processing, and bank account opening - ensuring a smooth setup in the world's premier free zone."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
    ]
  },
  {
    "route": "/fame",
    "title": "Hall of Fame",
    "subtitle": "Celebrating our top clients, partners, and achievements.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "Clients Served",
        "description": "5,000+"
      },
      {
        "title": "Nationalities",
        "description": "50+"
      },
      {
        "title": "Success Rate",
        "description": "98%"
      },
      {
        "title": "Ahmed Al Maktoum",
        "description": "Tech Founder - Set up his AI startup in DSO within 5 days. Now employing 20+ people and expanding to Saudi Arabia."
      },
      {
        "title": "Sarah Johnson",
        "description": "E-commerce Entrepreneur - Launched her online retail business through DMCC. Grew from zero to AED 2M monthly revenue in 18 months."
      },
      {
        "title": "Raj Patel",
        "description": "Financial Consultant - Established his consultancy in IFZA and opened a corporate bank account within the same week."
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Hall of Fame"
      },
      {
        "type": "paragraph",
        "text": "Celebrating our top clients, partners, and achievements."
      },
      {
        "type": "heading",
        "text": "Featured Success Stories"
      }
    ],
    "images": []
  },
  {
    "route": "/farhana",
    "title": "Farhana",
    "subtitle": "A journey of empowerment, entrepreneurship, and community building.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "Women Empowered",
        "description": "50+"
      },
      {
        "title": "Business Ventures",
        "description": "3"
      },
      {
        "title": "Community Members",
        "description": "100+"
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Farhana"
      },
      {
        "type": "paragraph",
        "text": "A journey of empowerment, entrepreneurship, and community building."
      },
      {
        "type": "heading",
        "text": "Empowering Women Entrepreneurs"
      },
      {
        "type": "paragraph",
        "text": "Farhana represents the spirit of female entrepreneurship in the UAE. Her journey from a small business idea to a thriving enterprise inspires countless women to pursue their dreams."
      },
      {
        "type": "paragraph",
        "text": "Through determination, hard work, and the right guidance, Farhana built a business that not only sustains her family but creates opportunities for other women in her community."
      },
      {
        "type": "paragraph",
        "text": "\"Setting up my business was the best decision I ever made. The team at Yasa Corporate made the process so smooth and easy.\""
      },
      {
        "type": "paragraph",
        "text": "- Farhana"
      },
      {
        "type": "heading",
        "text": "Farhana's Impact"
      }
    ],
    "images": []
  },
  {
    "route": "/free-visa-for-life-package",
    "title": "Free Visa for Life Package",
    "subtitle": "Lifetime UAE residency with our exclusive all-in-one visa package",
    "heroImage": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80",
    "category": "Visa & Immigration",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Visa",
        "href": "/services/visa"
      },
      {
        "label": "Free Visa for Life",
        "href": "/free-visa-for-life-package"
      }
    ],
    "features": [
      {
        "title": "Lifetime Residency",
        "description": "Permanent UAE residency without renewal hassle."
      },
      {
        "title": "Family Coverage",
        "description": "Package includes visas for spouse and children."
      },
      {
        "title": "No Annual Renewals",
        "description": "One-time process with no recurring visa fees."
      },
      {
        "title": "Premium Benefits",
        "description": "Access to VIP immigration and banking services."
      },
      {
        "title": "Investment Linked",
        "description": "Tied to qualifying real estate or business investment."
      },
      {
        "title": "Transferable Option",
        "description": "Package can be transferred to family members if needed."
      }
    ],
    "benefits": [
      "Never worry about visa renewals again",
      "Significant long-term cost savings",
      "Entire family covered under one package",
      "Priority immigration processing",
      "Premium banking and lending eligibility",
      "No minimum stay requirements",
      "Full business ownership rights",
      "Peace of mind with permanent residency"
    ],
    "process": [
      {
        "step": 1,
        "title": "Investment Consultation",
        "description": "Discuss qualifying investment options for the package"
      },
      {
        "step": 2,
        "title": "Investment Execution",
        "description": "Complete property purchase or business investment"
      },
      {
        "step": 3,
        "title": "Lifetime Package Setup",
        "description": "Process lifetime visa for primary applicant and family"
      },
      {
        "step": 4,
        "title": "Benefits Activation",
        "description": "Activate premium banking and immigration benefits"
      }
    ],
    "faqs": [
      {
        "question": "What investments qualify for the Free Visa for Life package?",
        "answer": "Qualifying investments include real estate purchases of AED 2 million+, business investments, or specific government-approved investment funds."
      },
      {
        "question": "Is the visa truly for life?",
        "answer": "The visa is valid for the duration of your investment ownership. As long as the qualifying investment is maintained, the residency continues."
      },
      {
        "question": "Can I include my parents in this package?",
        "answer": "The standard package covers the primary applicant, spouse, and children. Parents can be added at an additional cost."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Lifetime Residency Made Simple"
      },
      {
        "type": "paragraph",
        "text": "Our Free Visa for Life package eliminates the stress of annual visa renewals. Make a qualifying investment and enjoy permanent UAE residency for yourself and your family with a single, streamlined process."
      },
      {
        "type": "paragraph",
        "text": "This exclusive package combines investment advisory, immigration services, and premium banking benefits into one comprehensive solution."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
    ]
  },
  {
    "route": "/free-zones-dubai",
    "title": "Free Zones in Dubai",
    "subtitle": "Explore over 30 specialized free zones in Dubai designed for your industry",
    "heroImage": "https://images.unsplash.com/photo-1582672060465-ff97f36f57a5?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zones",
        "href": "/free-zones-dubai"
      }
    ],
    "features": [
      {
        "title": "DMCC - Trade & Commodities",
        "description": "Dubai Multi Commodities Centre, ideal for precious metals, diamonds, and general trading."
      },
      {
        "title": "IFZA - Professional Services",
        "description": "International Free Zone Authority offering cost-effective solutions for professionals."
      },
      {
        "title": "DSO - Technology & Innovation",
        "description": "Dubai Silicon Oasis, perfect for tech companies, AI, and digital startups."
      },
      {
        "title": "JAFZA - Logistics & Industry",
        "description": "Jebel Ali Free Zone, the largest free zone for industrial and logistics operations."
      },
      {
        "title": "Meydan - Creative & Media",
        "description": "Meydan Free Zone catering to media, marketing, and creative industries."
      },
      {
        "title": "DAFZA - Aviation & Cargo",
        "description": "Dubai Airport Free Zone for aviation, logistics, and cargo businesses."
      }
    ],
    "benefits": [
      "Industry-specific infrastructure",
      "100% foreign ownership guaranteed",
      "Zero corporate and personal tax",
      "No currency restrictions",
      "Full profit repatriation",
      "Simplified company setup process",
      "Modern office and warehouse facilities",
      "Access to double taxation treaties"
    ],
    "process": [
      {
        "step": 1,
        "title": "Identify Your Needs",
        "description": "Define your business activity and requirements"
      },
      {
        "step": 2,
        "title": "Compare Free Zones",
        "description": "We help you compare options across different zones"
      },
      {
        "step": 3,
        "title": "Select & Apply",
        "description": "Choose your free zone and submit your application"
      },
      {
        "step": 4,
        "title": "License & Commence",
        "description": "Receive your license and begin operations"
      }
    ],
    "faqs": [
      {
        "question": "How do I choose the right free zone?",
        "answer": "Consider your business activity, budget, location preferences, and specific zone benefits. Our consultants provide free guidance."
      },
      {
        "question": "Can I operate in multiple free zones?",
        "answer": "Yes, you can set up entities in multiple free zones or have a mainland company with free zone branches."
      },
      {
        "question": "Are free zone companies allowed to trade locally?",
        "answer": "Most free zone companies can trade within the UAE through a local distributor or by obtaining a dual license."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Choose Your Free Zone"
      },
      {
        "type": "paragraph",
        "text": "Dubai's free zones are tailored to specific industries, offering specialized infrastructure and regulatory frameworks that support business growth and innovation."
      },
      {
        "type": "paragraph",
        "text": "With over 30 free zones to choose from, each offering unique advantages, our experts help you find the perfect match for your business activities and goals."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    ]
  },
  {
    "route": "/freelance-visa-uae",
    "title": "Freelance Visa UAE",
    "subtitle": "Comprehensive freelance residency solutions for independent professionals",
    "heroImage": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80",
    "category": "Visa & Immigration",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Visa",
        "href": "/services/visa"
      },
      {
        "label": "Freelance Visa",
        "href": "/freelance-visa-uae"
      }
    ],
    "features": [
      {
        "title": "Multi-Freezone Options",
        "description": "Choose from DMCC, TwoFour54, Fujairah Creative City and more."
      },
      {
        "title": "Simplified Documentation",
        "description": "Minimal paperwork with our guided application process."
      },
      {
        "title": "Fast Track Processing",
        "description": "Get your visa in as little as 7 working days."
      },
      {
        "title": "Portfolio Showcase",
        "description": "Include samples of your work for creative category applications."
      },
      {
        "title": "Health Insurance",
        "description": "Comprehensive insurance coverage included with the visa."
      },
      {
        "title": "Client Contract Flexibility",
        "description": "Work with multiple local and international clients legally."
      }
    ],
    "benefits": [
      "Cost-effective alternative to company setup",
      "Legal residency without employer dependency",
      "Ability to invoice UAE and international clients",
      "Access to UAE banking and financial services",
      "Sponsor family members for dependent visas",
      "Tax-free personal income",
      "No annual office space requirement",
      "Flexible working arrangements and hours"
    ],
    "process": [
      {
        "step": 1,
        "title": "Category Selection",
        "description": "Choose your freelance activity and free zone"
      },
      {
        "step": 2,
        "title": "Permit Application",
        "description": "Submit portfolio and qualifications for freelance permit"
      },
      {
        "step": 3,
        "title": "Visa Processing",
        "description": "Apply for residence visa and entry permit"
      },
      {
        "step": 4,
        "title": "Card & Visa Issuance",
        "description": "Receive Emirates ID and stamped residence visa"
      }
    ],
    "faqs": [
      {
        "question": "Is a freelance visa different from a freelancer visa?",
        "answer": "They are similar but some free zones distinguish between freelance (permit-based) and freelancer (visa-based) categories. Both provide residency rights."
      },
      {
        "question": "Can I switch from a company visa to a freelance visa?",
        "answer": "Yes, you can cancel your existing visa and transfer to a freelance visa by obtaining a freelance permit first."
      },
      {
        "question": "Do I need a portfolio to apply for a freelance visa?",
        "answer": "Creative and media categories typically require a portfolio. Business consulting categories require proof of qualifications and experience."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Your Freelance Journey Starts Here"
      },
      {
        "type": "paragraph",
        "text": "Whether you are a content creator, consultant, or creative professional, the UAE freelance visa offers a streamlined path to residency. Work with global clients while enjoying Dubai's vibrant lifestyle."
      },
      {
        "type": "paragraph",
        "text": "Our team has extensive experience across multiple free zones, ensuring you select the most cost-effective and suitable jurisdiction for your freelance activities."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80"
    ]
  },
  {
    "route": "/freelancer-visa-uae",
    "title": "Freelancer Visa UAE",
    "subtitle": "Work independently in the UAE with a dedicated freelancer residence visa",
    "heroImage": "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=1920&q=80",
    "category": "Visa & Immigration",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Visa",
        "href": "/services/visa"
      },
      {
        "label": "Freelancer Visa",
        "href": "/freelancer-visa-uae"
      }
    ],
    "features": [
      {
        "title": "Independent Work Permit",
        "description": "Legally work as a freelancer across multiple clients."
      },
      {
        "title": "Residence Visa Included",
        "description": "2-year renewable residence visa with the permit."
      },
      {
        "title": "No Employer Required",
        "description": "No need for a company to sponsor your visa."
      },
      {
        "title": "Family Sponsorship",
        "description": "Sponsor dependents once you hold the visa."
      },
      {
        "title": "Tax-Free Income",
        "description": "Zero personal income tax in the UAE."
      },
      {
        "title": "Multiple Sectors",
        "description": "Available for media, tech, education, and creative fields."
      }
    ],
    "benefits": [
      "Full independence without employer tie",
      "Tax-free freelance income",
      "Ability to work with UAE and global clients",
      "Residence visa for up to 3 years",
      "Sponsor family members for residency",
      "Open a UAE bank account easily",
      "No minimum capital requirement",
      "Simple renewal process annually"
    ],
    "process": [
      {
        "step": 1,
        "title": "Freelance License",
        "description": "Register for a freelance permit in your field"
      },
      {
        "step": 2,
        "title": "Visa Application",
        "description": "Apply for residence visa under freelance category"
      },
      {
        "step": 3,
        "title": "Medical & Biometrics",
        "description": "Complete medical test and fingerprinting"
      },
      {
        "step": 4,
        "title": "Residency Issued",
        "description": "Receive Emirates ID and residence visa"
      }
    ],
    "faqs": [
      {
        "question": "Which professions qualify for a freelancer visa?",
        "answer": "Common qualifying fields include media, technology, design, education, consulting, and creative arts through approved free zones."
      },
      {
        "question": "Can I hire employees on a freelancer visa?",
        "answer": "No, a freelancer visa is for individual work only. Hiring staff requires a separate company setup."
      },
      {
        "question": "How much does a freelancer visa cost in the UAE?",
        "answer": "Costs vary by free zone, typically ranging from AED 7,500 to AED 15,000 including the freelance permit and residence visa."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Freedom to Freelance"
      },
      {
        "type": "paragraph",
        "text": "The UAE Freelancer Visa offers independent professionals the ability to reside and work in the Emirates without employer sponsorship. Ideal for consultants, creatives, and digital professionals seeking flexibility."
      },
      {
        "type": "paragraph",
        "text": "We guide you through selecting the right free zone, obtaining your freelance permit, and securing your residence visa so you can focus on growing your independent career."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    ]
  },
  {
    "route": "/freeze-trade-license",
    "title": "Freeze Trade License",
    "subtitle": "Temporarily freeze your UAE trade license without cancellation",
    "heroImage": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Freeze License",
        "href": "/freeze-trade-license"
      }
    ],
    "features": [
      {
        "title": "Temporary Pause",
        "description": "Freeze your license for up to 12 months."
      },
      {
        "title": "Cost Savings",
        "description": "Save on renewal fees during inactive periods."
      },
      {
        "title": "Easy Reactivation",
        "description": "Reactive your license quickly when ready."
      },
      {
        "title": "Visa Retention",
        "description": "Keep existing visas active during freeze period."
      },
      {
        "title": "No Penalties",
        "description": "Avoid fines for non-renewal of active license."
      },
      {
        "title": "Business Continuity",
        "description": "Maintain your business registration number."
      }
    ],
    "benefits": [
      "Reduce operational costs during downtime",
      "Keep your company name and registration",
      "Avoid cancellation and re-setup costs",
      "Retain existing employee visas",
      "Simple reactivation within days",
      "No late renewal penalties",
      "Preserve bank accounts and contracts",
      "Flexible freeze duration options"
    ],
    "process": [
      {
        "step": 1,
        "title": "Eligibility Check",
        "description": "Confirm your license type qualifies for freezing"
      },
      {
        "step": 2,
        "title": "Application Prep",
        "description": "Prepare freeze application with required documents"
      },
      {
        "step": 3,
        "title": "Authority Submission",
        "description": "Submit to DED or free zone for approval"
      },
      {
        "step": 4,
        "title": "Freeze Confirmed",
        "description": "Receive freeze approval and save on costs"
      }
    ],
    "faqs": [
      {
        "question": "How long can a trade license be frozen?",
        "answer": "Trade licenses can typically be frozen for up to 12 months, though some free zones allow up to 24 months with special approval."
      },
      {
        "question": "Can I freeze my license if I have active visas?",
        "answer": "Yes, existing visas remain valid during the freeze period, though you cannot issue new visas while the license is frozen."
      },
      {
        "question": "What happens to my bank account when the license is frozen?",
        "answer": "Your corporate bank account remains operational during the freeze period, as the company legal entity continues to exist."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Pause Without Penalty"
      },
      {
        "type": "paragraph",
        "text": "If your business is temporarily inactive, freezing your trade license is a cost-effective alternative to full cancellation. You preserve your company registration, bank accounts, and existing visas."
      },
      {
        "type": "paragraph",
        "text": "Our team manages the freeze application with the relevant authority and ensures a smooth reactivation when you are ready to resume operations."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?w=800&q=80"
    ]
  },
  {
    "route": "/freezone-business-setup-dubai",
    "title": "Free Zone Business Setup in Dubai",
    "subtitle": "Establish your company in any of 50+ free zones with 100% ownership and zero corporate tax",
    "heroImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      }
    ],
    "features": [
      {
        "title": "100% Foreign Ownership",
        "description": "Full ownership of your company without any local partner requirements."
      },
      {
        "title": "Zero Corporate Tax",
        "description": "Enjoy 0% corporate tax on profits in most free zones."
      },
      {
        "title": "Full Profit Repatriation",
        "description": "Repatriate all profits and capital without restrictions."
      },
      {
        "title": "No Currency Restrictions",
        "description": "No restrictions on currency exchange or capital movement."
      },
      {
        "title": "Modern Infrastructure",
        "description": "State-of-the-art facilities and business centers."
      },
      {
        "title": "Strategic Location",
        "description": "Access to global markets from the heart of the UAE."
      }
    ],
    "benefits": [
      "Complete tax exemption for most business activities",
      "100% foreign ownership permitted",
      "Easy company formation process",
      "No minimum capital requirement",
      "Access to world-class infrastructure",
      "Strategic location for global trade",
      "No import/export duties",
      "Complete confidentiality"
    ],
    "process": [
      {
        "step": 1,
        "title": "Choose Free Zone",
        "description": "Select the best free zone for your business activity"
      },
      {
        "step": 2,
        "title": "Select License",
        "description": "Choose your license type and business activities"
      },
      {
        "step": 3,
        "title": "Submit Documents",
        "description": "Submit required documents and application"
      },
      {
        "step": 4,
        "title": "Get Licensed",
        "description": "Receive your license and start operations"
      }
    ],
    "faqs": [
      {
        "question": "What is a Free Zone?",
        "answer": "A Free Zone is a designated area in the UAE where businesses can operate with special benefits including 100% foreign ownership, zero corporate tax, and full profit repatriation."
      },
      {
        "question": "Which Free Zone is best for my business?",
        "answer": "The best free zone depends on your business activity, budget, and requirements. Our consultants can help you choose the most suitable option."
      },
      {
        "question": "How long does Free Zone setup take?",
        "answer": "Free Zone company setup typically takes 2-5 business days depending on the free zone and documentation requirements."
      },
      {
        "question": "Can I operate outside the Free Zone?",
        "answer": "Yes, with a dual license or through a local distributor, you can operate outside the free zone as well."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why Choose Free Zone Setup?"
      },
      {
        "type": "paragraph",
        "text": "Free zones in the UAE offer unparalleled advantages for entrepreneurs and businesses looking to establish a presence in the region. With 100% foreign ownership, zero corporate tax, and world-class infrastructure, free zones are the ideal choice for international businesses."
      },
      {
        "type": "paragraph",
        "text": "The UAE has over 50 free zones, each catering to specific industries and business activities. From IFZA and RAKEZ to DMCC and ADGM, there is a free zone suited for every type of business."
      },
      {
        "type": "paragraph",
        "text": "Our team of experts will help you navigate the options and choose the best free zone for your specific business needs and objectives."
      },
      {
        "type": "paragraph",
        "text": "50+"
      },
      {
        "type": "paragraph",
        "text": "Free Zones"
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    ]
  },
  {
    "route": "/fujairah-business-setup",
    "title": "Fujairah Business Setup | Fujairah Free Zone",
    "subtitle": "Start your business in Fujairah - the UAE's only free zone on the Indian Ocean, offering direct port access, tourism potential, and the lowest operating costs.",
    "heroImage": "https://images.unsplash.com/photo-1598890777032-bde5baa7cb2b?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "Fujairah",
        "href": "/fujairah-business-setup"
      }
    ],
    "features": [
      {
        "title": "Indian Ocean Port Access",
        "description": "Fujairah's location on the Gulf of Oman and Indian Ocean provides direct shipping routes bypassing the Strait of Hormuz, offering strategic trade advantages."
      },
      {
        "title": "Bunkering & Oil Storage Hub",
        "description": "Fujairah is the world's second-largest bunkering port and a major oil storage hub, with over 12 million cubic metres of crude and product storage capacity."
      },
      {
        "title": "Tourism & Hospitality Growth",
        "description": "Fujairah's stunning coastline, mountains, and diving sites make it a growing tourism destination with licenses for hotels, tour operators, and adventure sports."
      },
      {
        "title": "Lowest Operating Costs in UAE",
        "description": "Fujairah offers some of the most affordable rent, utilities, and labour costs in the UAE, making it ideal for cost-conscious entrepreneurs."
      },
      {
        "title": "Maritime & Fishing Industry",
        "description": "Specialized licenses for fishing, aquaculture, boat building, marine services, and seafood processing leveraging Fujairah's rich marine resources."
      },
      {
        "title": "Fujairah Free Zone Zones",
        "description": "Multiple specialized zones including the Creative City for media, the Free Zone for general trading, and the Port Zone for logistics and maritime activities."
      }
    ],
    "benefits": [
      "100% foreign ownership with full business control",
      "Zero corporate and personal income tax",
      "Full repatriation of profits and capital",
      "Strategic Indian Ocean port access",
      "Significantly lower operational costs than Dubai",
      "Growing tourism and hospitality sector",
      "Crew visa and seafarer documentation support",
      "Uncrowded business environment with growth potential"
    ],
    "process": [
      {
        "step": 1,
        "title": "Location & License Consultation",
        "description": "Consult with our Fujairah specialist to determine which zone and license type - trading, industrial, tourism, or media - fits your business."
      },
      {
        "step": 2,
        "title": "Document Preparation",
        "description": "We prepare and verify all documents including passport copies, business plan, and zone-specific application forms."
      },
      {
        "step": 3,
        "title": "Authority Submission",
        "description": "Submit your application to the relevant Fujairah authority. Standard approvals are processed within 3-5 working days."
      },
      {
        "step": 4,
        "title": "License & Operations",
        "description": "Receive your Fujairah trade license, complete visa processing, and begin operations in one of the UAE's most scenic and affordable emirates."
      }
    ],
    "faqs": [
      {
        "question": "What are the main advantages of setting up in Fujairah over Dubai?",
        "answer": "Fujairah offers significantly lower operating costs including cheaper office rent, utilities, and employee accommodation. It also provides unique access to the Indian Ocean via Fujairah Port, bypassing the Strait of Hormuz - a critical advantage for shipping and bunkering businesses. The emirate is less crowded with a more relaxed pace of life."
      },
      {
        "question": "Can I set up a tourism business in Fujairah?",
        "answer": "Yes, Fujairah's growing tourism sector offers excellent opportunities for hotels, resorts, tour operators, diving centres, adventure sports companies, and eco-tourism ventures. The emirate boasts beautiful beaches, coral reefs, and the Hajar Mountains, attracting tourists seeking nature and outdoor activities."
      },
      {
        "question": "Is Fujairah suitable for media and creative businesses?",
        "answer": "Yes, Fujairah Creative City is a dedicated free zone for media, advertising, publishing, film production, and creative industries. It offers affordable packages specifically designed for media professionals, with the added benefit of Fujairah's inspiring natural environment."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why Fujairah?"
      },
      {
        "type": "paragraph",
        "text": "Fujairah offers a compelling alternative to Dubai and Abu Dhabi for entrepreneurs seeking affordability and strategic advantages. As the UAE's only emirate on the Indian Ocean coast, it provides unique access to global shipping routes and is the world's second-largest bunkering hub."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate provides comprehensive Fujairah business setup services across all free zones. Whether you are in trading, tourism, maritime, or media, our team handles every step of the process - from license selection and documentation to facility setup and visa processing - making your move to Fujairah seamless."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1598890777032-bde5baa7cb2b?w=800&q=80"
    ]
  },
  {
    "route": "/get-a-quote",
    "title": "Get a Free Quote",
    "subtitle": "Receive a customized quote for your business setup within 24 hours",
    "heroImage": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Get a Quote",
        "href": "/get-a-quote"
      }
    ],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Tell Us About Your Business"
      },
      {
        "type": "paragraph",
        "text": "Fill out the form and our team will prepare a tailored quotation covering all costs, timelines, and package options for your business setup."
      },
      {
        "type": "heading",
        "text": "Select Your Activity"
      },
      {
        "type": "paragraph",
        "text": "Choose from 2,000+ business activities"
      },
      {
        "type": "heading",
        "text": "Choose Jurisdiction"
      },
      {
        "type": "paragraph",
        "text": "Mainland, Free Zone, or Offshore"
      },
      {
        "type": "heading",
        "text": "Get Your Quote"
      },
      {
        "type": "paragraph",
        "text": "Receive a detailed breakdown within 24 hours"
      },
      {
        "type": "heading",
        "text": "Request Your Quote"
      }
    ],
    "images": []
  },
  {
    "route": "/get-in-touch",
    "title": "Get in Touch",
    "subtitle": "We'd love to hear from you. Reach out to our team for any inquiries.",
    "heroImage": "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Contact",
        "href": "/contact"
      },
      {
        "label": "Get in Touch",
        "href": "/get-in-touch"
      }
    ],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Contact Information"
      },
      {
        "type": "heading",
        "text": "Phone"
      },
      {
        "type": "paragraph",
        "text": "+971 50 7778009"
      },
      {
        "type": "paragraph",
        "text": "Sat - Thu, 9AM - 6PM"
      },
      {
        "type": "heading",
        "text": "Email"
      },
      {
        "type": "paragraph",
        "text": "info@yasacorporate.com"
      },
      {
        "type": "paragraph",
        "text": "We reply within 24 hours"
      },
      {
        "type": "heading",
        "text": "Office"
      },
      {
        "type": "paragraph",
        "text": "Dubai, United Arab Emirates"
      },
      {
        "type": "paragraph",
        "text": "Visit by appointment only"
      },
      {
        "type": "heading",
        "text": "Working Hours"
      },
      {
        "type": "paragraph",
        "text": "Saturday to Thursday: 9AM - 6PM"
      },
      {
        "type": "paragraph",
        "text": "Friday: Closed"
      },
      {
        "type": "heading",
        "text": "Send Us a Message"
      }
    ],
    "images": []
  },
  {
    "route": "/giveaway",
    "title": "Giveaway",
    "subtitle": "Win exciting prizes including free business setup packages and premium services",
    "heroImage": "https://images.unsplash.com/photo-1549465220-1a8b9238cd00?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Offers",
        "href": "/offers"
      },
      {
        "label": "Giveaway",
        "href": "/giveaway"
      }
    ],
    "features": [
      {
        "title": "Grand Prize",
        "description": "Full company setup package including license, visa, and office space for one lucky winner."
      },
      {
        "title": "Runner Up Prizes",
        "description": "Free PRO services for one year, bank account setup assistance, and consultation packages."
      },
      {
        "title": "Monthly Draws",
        "description": "Participate in our monthly draws for smaller prizes including vouchers and discounts."
      },
      {
        "title": "Referral Bonus",
        "description": "Earn extra entries for every successful referral who signs up for our services."
      },
      {
        "title": "Social Media Bonus",
        "description": "Follow us on social media and share our posts for additional entry opportunities."
      },
      {
        "title": "Instant Win Items",
        "description": "Some participants will win instant prizes including discount vouchers and free consultations."
      }
    ],
    "benefits": [
      "Win a complete business setup package",
      "Free PRO services for a full year",
      "Bank account opening assistance",
      "Premium consultation services",
      "Exclusive discount vouchers",
      "No purchase necessary to enter",
      "Multiple entry opportunities",
      "Monthly and grand prize draws"
    ],
    "process": [
      {
        "step": 1,
        "title": "Enter the Giveaway",
        "description": "Fill in your details to enter"
      },
      {
        "step": 2,
        "title": "Earn Extra Entries",
        "description": "Refer friends and share on social media"
      },
      {
        "step": 3,
        "title": "Stay Updated",
        "description": "Follow us for winner announcements"
      },
      {
        "step": 4,
        "title": "Win & Claim",
        "description": "If you win, claim your prize within 30 days"
      }
    ],
    "faqs": [
      {
        "question": "Who can participate?",
        "answer": "Anyone over 18 years old can participate. The giveaway is open to residents of all nationalities."
      },
      {
        "question": "How are winners selected?",
        "answer": "Winners are selected randomly through a verified electronic draw system and announced on our website and social media."
      },
      {
        "question": "Can I increase my chances?",
        "answer": "Yes, you can earn additional entries by referring friends, following our social media, and sharing the giveaway."
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Grand Prize"
      },
      {
        "type": "paragraph",
        "text": "Full Business Setup"
      },
      {
        "type": "paragraph",
        "text": "5 Runners Up"
      },
      {
        "type": "paragraph",
        "text": "PRO Services Package"
      },
      {
        "type": "paragraph",
        "text": "Monthly Prizes"
      },
      {
        "type": "paragraph",
        "text": "Exclusive Vouchers"
      },
      {
        "type": "paragraph",
        "text": "No purchase necessary. Terms and conditions apply."
      }
    ],
    "images": []
  },
  {
    "route": "/golden-visa-in-dubai-uae-decisive-zone",
    "title": "Golden Visa Dubai - UAE Decisive Zone",
    "subtitle": "Secure long-term residency with the UAE Golden Visa program",
    "heroImage": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
    "category": "Visa & Immigration",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Visa",
        "href": "/services/visa"
      },
      {
        "label": "Golden Visa",
        "href": "/golden-visa-in-dubai-uae-decisive-zone"
      }
    ],
    "features": [
      {
        "title": "5 or 10 Year Visa",
        "description": "Long-term renewable residency for investors and professionals."
      },
      {
        "title": "No Sponsor Required",
        "description": "Self-sponsored visa without needing a UAE national sponsor."
      },
      {
        "title": "100% Ownership",
        "description": "Full foreign ownership of your UAE business."
      },
      {
        "title": "Family Included",
        "description": "Sponsor spouse, children, and domestic staff."
      },
      {
        "title": "Unlimited Stay",
        "description": "No minimum stay requirements outside UAE."
      },
      {
        "title": "Investor Category",
        "description": "Available for property investors, entrepreneurs, and talented professionals."
      }
    ],
    "benefits": [
      "Longest residency validity in the UAE",
      "No need for a local sponsor",
      "100% business ownership allowed",
      "Sponsor family members indefinitely",
      "No minimum stay requirement",
      "Priority UAE entry and services",
      "Eligible for UAE banking and lending",
      "Path to permanent residency potential"
    ],
    "process": [
      {
        "step": 1,
        "title": "Eligibility Assessment",
        "description": "Determine which Golden Visa category fits your profile"
      },
      {
        "step": 2,
        "title": "Investment or Application",
        "description": "Make qualifying investment or submit professional credentials"
      },
      {
        "step": 3,
        "title": "Immigration Approval",
        "description": "Submit to ICP or local immigration for approval"
      },
      {
        "step": 4,
        "title": "Visa Issuance",
        "description": "Receive Golden Visa with Emirates ID and residency"
      }
    ],
    "faqs": [
      {
        "question": "What is the minimum property investment for Golden Visa?",
        "answer": "Property investors must invest at least AED 2 million in UAE real estate through an approved investment fund or direct purchase."
      },
      {
        "question": "Can Golden Visa holders work in the UAE?",
        "answer": "Yes, Golden Visa holders can work, study, and conduct business freely in the UAE without additional permits."
      },
      {
        "question": "How long does Golden Visa processing take?",
        "answer": "Processing typically takes 2 to 4 weeks once all documents and investment proofs are submitted correctly."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Unlock Long-Term Residency"
      },
      {
        "type": "paragraph",
        "text": "The UAE Golden Visa is a prestigious long-term residency program offering 5 and 10 year renewable visas to investors, entrepreneurs, scientists, and exceptional talents. Unlike standard residency visas, the Golden Visa provides unmatched stability and freedom."
      },
      {
        "type": "paragraph",
        "text": "Our experts help you navigate the Golden Visa categories, prepare your investment documentation, and liaise with immigration authorities for a smooth application process."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80"
    ]
  },
  {
    "route": "/ifza-company-setup",
    "title": "IFZA Company Setup | International Free Zone Authority",
    "subtitle": "Establish your business in IFZA Dubai - Dubai's most cost-effective free zone with premium facilities and rapid license issuance.",
    "heroImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "IFZA",
        "href": "/ifza-company-setup"
      }
    ],
    "features": [
      {
        "title": "Cost-Effective Packages",
        "description": "IFZA offers some of the most competitive pricing in Dubai, with packages starting from just AED 9,500 for freelancers and AED 12,500 for SMEs."
      },
      {
        "title": "Multiple License Types",
        "description": "Choose from commercial, professional, industrial, and media licenses tailored to diverse business activities across all sectors."
      },
      {
        "title": "Strategic Location in DSO",
        "description": "Located within Dubai Silicon Oasis, IFZA provides seamless access to Dubai's main business hubs, airports, and seaports."
      },
      {
        "title": "Fast License Processing",
        "description": "Get your trade license issued within 2-3 working days with our streamlined digital submission and approval system."
      },
      {
        "title": "Flexible Visa Packages",
        "description": "Enjoy up to 6 visa allocations with flexible packages, with the option to increase based on office space size."
      },
      {
        "title": "Complete Business Support",
        "description": "Access PRO services, bank account opening assistance, and ongoing administrative support through Yasa Corporate."
      }
    ],
    "benefits": [
      "100% foreign ownership with no local sponsor requirement",
      "Zero personal and corporate income tax in the UAE",
      "Full profit repatriation with no currency restrictions",
      "Quick 2-3 day company setup process",
      "Modern flexi-desk and physical office options",
      "Access to Dubai's world-class infrastructure and logistics",
      "Simplified visa processing for shareholders and employees",
      "Dedicated relationship manager for ongoing support"
    ],
    "process": [
      {
        "step": 1,
        "title": "Initial Consultation",
        "description": "Discuss your business activity, visa needs, and budget with our IFZA specialist to select the perfect package."
      },
      {
        "step": 2,
        "title": "Document Preparation",
        "description": "We prepare and review all required documents including passport copies, business plan, and application forms."
      },
      {
        "step": 3,
        "title": "License Application",
        "description": "Submit your application to IFZA authority and obtain initial approval within 24 hours."
      },
      {
        "step": 4,
        "title": "License Issuance",
        "description": "Receive your official trade license, complete visa processing, and start operating in Dubai."
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between IFZA and other Dubai free zones?",
        "answer": "IFZA stands out for its cost-effective pricing structure, offering some of the lowest package rates in Dubai while maintaining premium facilities. Unlike older free zones, IFZA operates with a modern digital-first approach, enabling faster document processing and license issuance."
      },
      {
        "question": "Can I open a corporate bank account with an IFZA license?",
        "answer": "Yes, IFZA licenses are widely accepted by major UAE banks including Emirates NBD, ADCB, RAKBANK, and Mashreq. Yasa Corporate provides bank account opening assistance to help you navigate the documentation and compliance requirements smoothly."
      },
      {
        "question": "What office space options does IFZA offer?",
        "answer": "IFZA provides flexible workspace solutions including flexi-desks starting from AED 9,500, serviced offices, and physical private offices. You can also opt for a virtual office package if you do not require dedicated physical space in the free zone."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why Set Up in IFZA?"
      },
      {
        "type": "paragraph",
        "text": "IFZA (International Free Zone Authority) is strategically located in Dubai Silicon Oasis, combining affordability with premium infrastructure. It is one of the fastest-growing free zones in the UAE, attracting entrepreneurs from over 100 countries."
      },
      {
        "type": "paragraph",
        "text": "At Yasa Corporate, we guide you through every step of the IFZA company formation process - from package selection and document preparation to license issuance and bank account opening. Our team ensures a hassle-free experience so you can focus on growing your business."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    ]
  },
  {
    "route": "/influencer-license",
    "title": "Influencer License in Dubai",
    "subtitle": "Monetize your social media presence legally with an official influencer license in the UAE",
    "heroImage": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Licenses",
        "href": "/services/license"
      },
      {
        "label": "Influencer License",
        "href": "/influencer-license"
      }
    ],
    "features": [
      {
        "title": "Legal Content Creation",
        "description": "Create and monetize content legally with official licensing from UAE authorities."
      },
      {
        "title": "Brand Collaboration Ready",
        "description": "Work with brands legally and issue invoices for sponsored content."
      },
      {
        "title": "Visa Eligibility",
        "description": "Qualify for a UAE residence visa through your influencer license."
      },
      {
        "title": "Multiple Platform Coverage",
        "description": "License covers all social media platforms including Instagram, TikTok, YouTube, and Snapchat."
      },
      {
        "title": "Quick Processing",
        "description": "Fast-track application process with license issuance in as little as 5 business days."
      },
      {
        "title": "Media City Access",
        "description": "Access to Dubai Media City ecosystem with networking and growth opportunities."
      }
    ],
    "benefits": [
      "Legal protection for your content",
      "Professional credibility with brands",
      "Residence visa eligibility",
      "Tax-free income on sponsorships",
      "Access to media industry events",
      "Simplified brand contracting",
      "Dedicated visa processing",
      "Renewable license structure"
    ],
    "process": [
      {
        "step": 1,
        "title": "Application Submission",
        "description": "Submit your personal details and social media profiles"
      },
      {
        "step": 2,
        "title": "Profile Review",
        "description": "Your content and following are reviewed by authorities"
      },
      {
        "step": 3,
        "title": "License Issuance",
        "description": "Receive your official influencer license"
      },
      {
        "step": 4,
        "title": "Visa Processing",
        "description": "Complete the visa process and start creating"
      }
    ],
    "faqs": [
      {
        "question": "Do I need an influencer license to post content?",
        "answer": "Yes, if you monetize your content in the UAE, an influencer license is required by law to operate legally."
      },
      {
        "question": "What are the follower requirements?",
        "answer": "Requirements vary by authority but typically range from 3,000 to 10,000 followers across platforms."
      },
      {
        "question": "Can I have multiple income streams?",
        "answer": "Yes, your influencer license allows you to earn from sponsorships, affiliate marketing, brand deals, and content creation."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Turn Influence Into Income"
      },
      {
        "type": "paragraph",
        "text": "Dubai's influencer license allows content creators to legally monetize their social media presence while enjoying the benefits of UAE residency and tax-free income."
      },
      {
        "type": "paragraph",
        "text": "Whether you're a micro-influencer or a established creator, our team handles the entire licensing process so you can focus on creating amazing content."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1432889821006-314940b9b1d5?w=800&q=80"
    ]
  },
  {
    "route": "/jafza-company-formation",
    "title": "JAFZA Company Formation | Jebel Ali Free Zone Dubai",
    "subtitle": "Set up your business in JAFZA - the region's largest and oldest free zone, home to over 9,500 companies from 100+ countries at the heart of global trade.",
    "heroImage": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "JAFZA",
        "href": "/jafza-company-formation"
      }
    ],
    "features": [
      {
        "title": "Largest Free Zone in the Middle East",
        "description": "JAFZA spans over 100 square kilometres and hosts 9,500+ companies, making it the largest and most established free zone in the entire Middle East region."
      },
      {
        "title": "Jebel Ali Port Integration",
        "description": "Direct access to Jebel Ali Port - the world's 9th busiest container port and the largest port in the Middle East, connecting to over 150 global ports."
      },
      {
        "title": "Industrial & Manufacturing Hub",
        "description": "Dedicated industrial zones with pre-built factories, warehouses, and energy infrastructure for manufacturing, assembly, and heavy industrial operations."
      },
      {
        "title": "Comprehensive Logistics Ecosystem",
        "description": "Integrated logistics parks with 3PL providers, cold chain storage, hazardous cargo handling, and multimodal transport connecting sea, air, and land routes."
      },
      {
        "title": "Over 50 Years of Legacy",
        "description": "Established in 1985, JAFZA has five decades of experience and a proven track record of supporting global trade and industrial development in Dubai."
      },
      {
        "title": "Specialized Sector Clusters",
        "description": "Dedicated zones for food, pharmaceuticals, automotive, electronics, and construction materials with customized infrastructure and supply chain solutions."
      }
    ],
    "benefits": [
      "100% foreign ownership with full business control",
      "Zero corporate and personal income tax",
      "Full repatriation of capital and profits",
      "Direct access to Jebel Ali Port and Al Maktoum Airport",
      "Over 9,500 companies from 100+ countries",
      "Proven legacy of 50+ years of stability",
      "World-class industrial and logistics infrastructure",
      "Simplified customs and trade documentation processes"
    ],
    "process": [
      {
        "step": 1,
        "title": "Business Activity Consultation",
        "description": "Meet with our JAFZA specialist to define your business scope - whether trading, industrial, logistics, or services - and select the optimal license."
      },
      {
        "step": 2,
        "title": "Document Preparation",
        "description": "Prepare all required documentation including passport copies, company profile, and business plan. Yasa Corporate reviews for compliance."
      },
      {
        "step": 3,
        "title": "JAFZA Application Submission",
        "description": "Submit your application through JAFZA's digital portal. Standard approvals are processed within 3-5 working days."
      },
      {
        "step": 4,
        "title": "License & Facility Setup",
        "description": "Receive your JAFZA license, take possession of your office, warehouse, or industrial unit, and complete visa processing for your team."
      }
    ],
    "faqs": [
      {
        "question": "What industries does JAFZA specialize in?",
        "answer": "JAFZA has a strong focus on industrial manufacturing, logistics and supply chain, automotive, food and beverage processing, pharmaceuticals, chemicals, electronics assembly, and construction materials. It also supports general trading and professional services with dedicated infrastructure for each sector."
      },
      {
        "question": "How does JAFZA's customs procedure work?",
        "answer": "JAFZA operates as a bonded free zone, meaning goods can be stored, processed, and re-exported without customs duties. When goods enter the UAE mainland, customs duties are applied. JAFZA also offers a streamlined customs declaration system integrated with Dubai Customs for efficient clearance."
      },
      {
        "question": "Can I set up a JAFZA company remotely from overseas?",
        "answer": "Yes, JAFZA allows remote incorporation for most license types. We have helped numerous international clients establish their JAFZA companies without visiting Dubai. Yasa Corporate handles the entire process - from document collection to license delivery - remotely on your behalf."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why JAFZA?"
      },
      {
        "type": "paragraph",
        "text": "JAFZA (Jebel Ali Free Zone) is the cornerstone of Dubai's trade and industrial ecosystem. Established in 1985, it has grown into the largest free zone in the Middle East, offering unparalleled access to global markets through Jebel Ali Port - the region's busiest container port - and Al Maktoum International Airport."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate is a registered JAFZA setup agent. We guide you through the entire company formation process, from license selection and documentation to facility setup, customs registration, and visa processing, ensuring a seamless entry into this world-class free zone."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
    ]
  },
  {
    "route": "/kizad-business-setup",
    "title": "KIZAD Business Setup | Khalifa Industrial Zone Abu Dhabi",
    "subtitle": "Establish your industrial or logistics business in KIZAD - Abu Dhabi's mega industrial zone spanning 410 sq km with world-class port and infrastructure.",
    "heroImage": "https://images.unsplash.com/photo-1614026480200-cb28d3db20d4?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "KIZAD",
        "href": "/kizad-business-setup"
      }
    ],
    "features": [
      {
        "title": "Mega Industrial Zone",
        "description": "KIZAD spans 410 square kilometres - making it one of the largest integrated industrial zones in the world, with room for heavy industry and large-scale manufacturing."
      },
      {
        "title": "Khalifa Port Integration",
        "description": "Directly connected to Khalifa Port - one of the world's most technologically advanced deep-sea ports with 2.5 million TEU capacity and 12 million tonnes of general cargo."
      },
      {
        "title": "Sector-Specific Zones",
        "description": "Dedicated clusters for aluminium, steel, petrochemicals, food processing, pharmaceuticals, automotive, logistics, and e-commerce with tailored utility infrastructure."
      },
      {
        "title": "Abu Dhabi Government Support",
        "description": "Backed by Abu Dhabi's government and AD Ports Group, KIZAD offers investors long-term land leases, energy subsidies, and streamlined regulatory approvals."
      },
      {
        "title": "Rail & Multimodal Connectivity",
        "description": "Connected to the UAE's Etihad Rail network, providing cost-effective freight transport across the UAE and to Saudi Arabia via the GCC rail link."
      },
      {
        "title": "Renewable Energy Infrastructure",
        "description": "Access to Abu Dhabi's renewable energy grid including solar and nuclear power, supporting sustainable manufacturing and ESG compliance goals."
      }
    ],
    "benefits": [
      "100% foreign ownership with no local partner",
      "Zero corporate and personal income tax",
      "Long-term land leases up to 50 years",
      "Direct access to Khalifa Port and Etihad Rail",
      "Sector-specific industrial clusters",
      "Abu Dhabi government incentives and support",
      "Energy subsidies for industrial operations",
      "Customs-free import of raw materials and machinery"
    ],
    "process": [
      {
        "step": 1,
        "title": "Industrial Requirements Assessment",
        "description": "Consult with our KIZAD specialist to assess your space, utility, and infrastructure needs based on your manufacturing or logistics operations."
      },
      {
        "step": 2,
        "title": "Land or Facility Selection",
        "description": "Choose from pre-built factory units, warehouses, or raw land plots within KIZAD's sector-specific zones based on your business requirements."
      },
      {
        "step": 3,
        "title": "Regulatory Approvals",
        "description": "We handle environmental permits, civil defense approvals, and utility connections in coordination with KIZAD and Abu Dhabi authorities."
      },
      {
        "step": 4,
        "title": "License & Operations Commencement",
        "description": "Receive your KIZAD trade license, finalize facility setup, and begin your industrial operations with full operational support."
      }
    ],
    "faqs": [
      {
        "question": "What types of industrial activities can I set up in KIZAD?",
        "answer": "KIZAD accommodates a vast range of industrial activities including aluminium and metals processing, petrochemicals, plastics, food and beverage manufacturing, pharmaceutical production, automotive assembly, construction materials, logistics and distribution, e-commerce fulfillment, and cold chain storage."
      },
      {
        "question": "How much does it cost to lease land in KIZAD?",
        "answer": "Land lease rates in KIZAD vary by zone and location, typically ranging from AED 15 to AED 40 per square foot annually for raw land, with lease terms of 20-50 years. Pre-built factory units start from AED 250,000 per year depending on size and specification."
      },
      {
        "question": "Does KIZAD offer any incentives for green or sustainable businesses?",
        "answer": "Yes, KIZAD actively encourages sustainable manufacturing. Benefits for green businesses include reduced utility rates for renewable energy users, expedited permitting for eco-friendly operations, and access to Abu Dhabi's clean energy grid including solar from Noor Abu Dhabi and nuclear from Barakah."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why KIZAD?"
      },
      {
        "type": "paragraph",
        "text": "KIZAD (Khalifa Industrial Zone Abu Dhabi) is Abu Dhabi's flagship industrial and logistics destination, offering unmatched scale and infrastructure for heavy industry. With direct integration to Khalifa Port and the Etihad Rail network, it provides a seamless supply chain solution from raw material import to finished product export."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate is your trusted partner for KIZAD business setup. We manage the complete process - from land or facility selection and utility connections to license issuance and regulatory compliance - ensuring your industrial venture starts smoothly in Abu Dhabi."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1614026480200-cb28d3db20d4?w=800&q=80"
    ]
  },
  {
    "route": "/license/communication-equipment-software",
    "title": "Communication Equipment & Software License",
    "subtitle": "Trade and service telecom equipment and software solutions",
    "heroImage": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Communication Equipment & Software",
        "href": "/license/communication-equipment-software"
      }
    ],
    "features": [
      {
        "title": "Telecom Equipment Trading",
        "description": "Import, export, and distribute networking hardware, routers, switches, and telecom infrastructure components."
      },
      {
        "title": "Software Development & Sales",
        "description": "Develop, license, and sell communication software including VoIP, conferencing, and collaboration tools."
      },
      {
        "title": "Installation & Maintenance",
        "description": "Provide end-to-end installation, configuration, and maintenance services for communication networks."
      },
      {
        "title": "System Integration",
        "description": "Integrate disparate communication systems including PBX, CCTV, and access control into unified platforms."
      },
      {
        "title": "TRA Compliance",
        "description": "Ensure all equipment and software complies with UAE Telecommunications Regulatory Authority standards."
      },
      {
        "title": "Wireless Solutions",
        "description": "Deploy and manage wireless communication solutions including Wi-Fi, 4G/5G infrastructure, and satellite systems."
      }
    ],
    "benefits": [
      "Single license covering trading, installation, and maintenance of communication equipment",
      "TRA type-approval support for importing and selling telecom devices in the UAE market",
      "Access to Dubai's smart city projects and government infrastructure contracts",
      "100% foreign ownership in designated telecom Free Zones and Mainland with local agent",
      "No import duties on telecom equipment entering Dubai's Free Zones",
      "Growing demand from UAE's AED 10 billion ICT market expansion",
      "Opportunity to serve both government and private sector telecom projects",
      "Dedicated visa quotas for specialized telecom engineers and IT professionals"
    ],
    "process": [
      {
        "step": 1,
        "title": "Activity Classification",
        "description": "Define your specific activities - equipment trading, software, installation, or a combination of all three."
      },
      {
        "step": 2,
        "title": "TRA Pre-Approval",
        "description": "Obtain TRA pre-approval if dealing with restricted telecom equipment or communication software."
      },
      {
        "step": 3,
        "title": "Company Formation",
        "description": "Register your company in a suitable Free Zone or Mainland with necessary trade name reservation."
      },
      {
        "step": 4,
        "title": "License & Type Approval",
        "description": "Receive your license and apply for TRA type-approval certificates for individual product lines."
      }
    ],
    "faqs": [
      {
        "question": "Do I need TRA approval for all communication equipment?",
        "answer": "Yes, all communication and telecom equipment imported or sold in the UAE requires TRA type-approval certification. This ensures devices meet UAE technical standards for radio frequency, safety, and electromagnetic compatibility."
      },
      {
        "question": "Can I develop and sell communication software under this license?",
        "answer": "Absolutely. The license covers software development, licensing, and distribution. This includes VoIP applications, video conferencing platforms, network management software, and unified communication solutions."
      },
      {
        "question": "What is the cost of TRA type-approval for communication equipment?",
        "answer": "TRA type-approval costs vary by product category, typically ranging from AED 3,000 to AED 15,000 per device model. The certification is valid for three years and must be renewed for continued import and sale."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Communication Equipment Licensing"
      },
      {
        "type": "paragraph",
        "text": "Dubai's telecommunications sector is one of the most advanced in the Middle East, with 5G coverage exceeding 95% of the population. A Communication Equipment and Software License enables businesses to participate in this dynamic industry, from trading networking hardware to developing cutting-edge communication software."
      },
      {
        "type": "paragraph",
        "text": "The UAE government's smart city initiatives and the Dubai 10X program have created substantial demand for innovative communication solutions. With the right license, companies can supply equipment, install systems, and develop software for government entities, real estate developers, and enterprise clients across the Emirates."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    ]
  },
  {
    "route": "/license/crypto-trading-license",
    "title": "Crypto Trading License in Dubai",
    "subtitle": "Trade cryptocurrencies legally with a VARA-approved license in Dubai",
    "heroImage": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Crypto Trading License",
        "href": "/license/crypto-trading-license"
      }
    ],
    "features": [
      {
        "title": "VARA Compliant",
        "description": "Fully compliant with Dubai's Virtual Assets Regulatory Authority (VARA) standards and guidelines for crypto operations."
      },
      {
        "title": "Multi-Asset Trading",
        "description": "Trade Bitcoin, Ethereum, stablecoins, and a wide range of approved virtual assets under one license."
      },
      {
        "title": "Secure Custody",
        "description": "Access institutional-grade custody solutions and cold storage options for client digital assets."
      },
      {
        "title": "Regulatory Sandbox",
        "description": "Participate in Dubai's virtual asset sandbox program for innovative crypto products and services."
      },
      {
        "title": "Anti-Money Laundering",
        "description": "Built-in AML and KYC compliance frameworks meeting UAE Central Bank and FATF recommendations."
      },
      {
        "title": "Global Operations",
        "description": "Serve international clients from Dubai's crypto-friendly regulatory environment with 0% corporate tax."
      }
    ],
    "benefits": [
      "First-mover advantage in Dubai's rapidly growing crypto and blockchain ecosystem",
      "VARA licensing provides credibility and trust with institutional investors and partners",
      "0% corporate and personal income tax on crypto trading profits in Free Zones",
      "Access to Dubai's blockchain innovation hub and networking events",
      "World-class banking and payment infrastructure for fiat on-ramp and off-ramp",
      "Strategic location bridging Asian, European, and African crypto markets",
      "Government-backed initiatives like the Dubai Blockchain Strategy 2020",
      "Simplified visa process for crypto founders, developers, and traders"
    ],
    "process": [
      {
        "step": 1,
        "title": "Business Structure Setup",
        "description": "Choose your legal structure - Free Zone LLC or DAO - and define the scope of crypto activities."
      },
      {
        "step": 2,
        "title": "VARA Initial Approval",
        "description": "Submit your business plan, risk management framework, and compliance policies to VARA for initial review."
      },
      {
        "step": 3,
        "title": "Technical Infrastructure",
        "description": "Deploy secure trading platforms, wallet infrastructure, and implement KYC/AML screening tools."
      },
      {
        "step": 4,
        "title": "Final License Issuance",
        "description": "Pass VARA's final audit, receive your Crypto Trading License, and commence regulated operations."
      }
    ],
    "faqs": [
      {
        "question": "What crypto activities are covered under this license?",
        "answer": "The license covers cryptocurrency exchange operations, custody services, OTC trading, crypto-to-crypto and crypto-to-fiat trading, and advisory services related to virtual assets. DeFi protocols and NFT marketplaces may require additional approvals."
      },
      {
        "question": "How long does it take to get a Crypto Trading License in Dubai?",
        "answer": "The process typically takes 8-16 weeks from initial application to final license issuance, depending on the complexity of your business model and the completeness of your compliance documentation."
      },
      {
        "question": "What is the cost of a Crypto Trading License in Dubai?",
        "answer": "Costs range from AED 50,000 to AED 200,000 depending on the Free Zone, office space requirements, and the scope of crypto activities. Additional VARA regulatory fees and compliance costs apply."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Crypto Trading Licenses"
      },
      {
        "type": "paragraph",
        "text": "Dubai has positioned itself as a global hub for cryptocurrency and blockchain innovation. With the establishment of VARA (Virtual Assets Regulatory Authority) and progressive regulations like the Dubai Virtual Assets Law, the emirate offers one of the most advanced regulatory frameworks for crypto businesses worldwide."
      },
      {
        "type": "paragraph",
        "text": "A Cryptocurrency Trading License in Dubai allows businesses to operate crypto exchanges, provide custody services, and engage in OTC trading. The regulatory framework is designed to balance innovation with investor protection, making Dubai an attractive destination for crypto entrepreneurs and institutional players alike."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80"
    ]
  },
  {
    "route": "/license/digital-marketing",
    "title": "Digital Marketing License in Dubai",
    "subtitle": "Launch your digital marketing agency with a full-service license",
    "heroImage": "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Digital Marketing License",
        "href": "/license/digital-marketing"
      }
    ],
    "features": [
      {
        "title": "Full Digital Services",
        "description": "Offer SEO, PPC, social media management, content marketing, email marketing, and web design under one license."
      },
      {
        "title": "Social Media Management",
        "description": "Legally manage social media accounts and run ad campaigns for clients across Meta, TikTok, LinkedIn, and Snapchat."
      },
      {
        "title": "Influencer Marketing",
        "description": "Connect brands with influencers and manage influencer campaigns in compliance with UAE media regulations."
      },
      {
        "title": "Performance Analytics",
        "description": "Provide data-driven marketing reports using Google Analytics, HubSpot, and other tracking tools."
      },
      {
        "title": "Creative Production",
        "description": "Offer in-house graphic design, video production, and copywriting services to complement marketing campaigns."
      },
      {
        "title": "Brand Strategy",
        "description": "Deliver comprehensive brand strategy, market research, and competitor analysis for local and international clients."
      }
    ],
    "benefits": [
      "One license covers multiple digital marketing activities without needing additional approvals",
      "100% foreign ownership in Mainland and Free Zone jurisdictions",
      "Low startup costs with flexible office options including flexi-desks and co-working spaces",
      "Access to Dubai's AED 5+ billion digital advertising market",
      "Ability to serve clients across MENA region from Dubai's strategic hub",
      "Quick setup - license issued within 3-7 working days with proper documentation",
      "No restrictions on hiring international marketing talent with UAE golden visas",
      "Simplified visa processing with quotas based on office space"
    ],
    "process": [
      {
        "step": 1,
        "title": "Scope Definition",
        "description": "Define your digital marketing services - SEO, social media, PPC, creative, or full-service agency offering all verticals."
      },
      {
        "step": 2,
        "title": "Jurisdiction Selection",
        "description": "Choose Mainland for local market access or a Free Zone like Dubai Media City for media-specific advantages."
      },
      {
        "step": 3,
        "title": "Document Preparation",
        "description": "Submit your business plan, portfolio, certifications, and team credentials to the relevant authorities."
      },
      {
        "step": 4,
        "title": "License & Approvals",
        "description": "Obtain your license along with NOC from Dubai Media City or DED, plus chamber of commerce registration."
      }
    ],
    "faqs": [
      {
        "question": "What activities can I perform with a Digital Marketing License?",
        "answer": "You can offer SEO, SEM/PPC advertising, social media management, content creation, email marketing, influencer marketing, web analytics, and digital strategy consulting. Some activities like outdoor advertising require separate permits."
      },
      {
        "question": "Do I need a physical office for a Digital Marketing License?",
        "answer": "Yes, a physical office is typically required. However, many Free Zones offer affordable flexi-desks starting from AED 10,000 per year, which satisfy the physical presence requirement for licensing."
      },
      {
        "question": "Can I work with clients outside the UAE with this license?",
        "answer": "Absolutely. Dubai's digital marketing license allows you to serve clients globally. Many agencies based in Dubai work with clients across the GCC, MENA, Europe, and North America."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Digital Marketing Licensing"
      },
      {
        "type": "paragraph",
        "text": "Dubai is the marketing capital of the Middle East, hosting some of the world's largest advertising agencies and media networks. A Digital Marketing License in Dubai positions your agency at the heart of this thriving ecosystem, giving you access to a diverse client base spanning retail, real estate, tourism, and technology sectors."
      },
      {
        "type": "paragraph",
        "text": "The license covers a comprehensive range of digital marketing services, from search engine optimization and pay-per-click advertising to social media management and influencer marketing campaigns. With Dubai's digital advertising spend growing at 15% annually, the opportunities for digital marketing agencies are immense."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ]
  },
  {
    "route": "/license/e-commerce",
    "title": "E-Commerce License",
    "subtitle": "Start your online business",
    "heroImage": "",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "E-Commerce License",
        "href": "/license/e-commerce"
      }
    ],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Start your online business. Yasa Corporate Service Provider helps you obtain the right license for your business activity in the UAE."
      },
      {
        "type": "paragraph",
        "text": "Contact us today for expert guidance on licensing requirements and procedures."
      }
    ],
    "images": []
  },
  {
    "route": "/license/e-commerce-trade-license-uae",
    "title": "E-Commerce Trade License in UAE",
    "subtitle": "Start your online business with a legitimate e-commerce license",
    "heroImage": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "E-Commerce",
        "href": "/license/e-commerce-trade-license-uae"
      }
    ],
    "features": [
      {
        "title": "Online Business Legitimacy",
        "description": "Operate your e-commerce business in full compliance with UAE e-commerce regulations and consumer protection laws."
      },
      {
        "title": "Payment Gateway Integration",
        "description": "Integrate with leading payment gateways like Stripe, PayPal, and local providers such as PayTabs."
      },
      {
        "title": "Global Market Access",
        "description": "Sell to customers worldwide with Dubai's strategic logistics and shipping infrastructure."
      },
      {
        "title": "Low Operational Overhead",
        "description": "No need for expensive retail space - operate from a flexi-desk or small office with minimal rent."
      },
      {
        "title": "Scalable Infrastructure",
        "description": "Easily scale your operations from a small online store to a full-fledged marketplace."
      },
      {
        "title": "Multi-Channel Selling",
        "description": "Sell through your own website, social media channels, and major platforms like Amazon and Noon."
      }
    ],
    "benefits": [
      "Full legal compliance for all online sales activities in the UAE",
      "Access to local and international payment processing systems",
      "Reach over 2 billion consumers through Dubai's export hub",
      "Up to 80% lower startup costs compared to physical retail",
      "Zero corporate tax for qualifying Free Zone e-commerce businesses",
      "Ability to sell on Amazon.ae, Noon.com, and other marketplaces",
      "Streamlined customs and last-mile delivery through UAE Post and couriers",
      "DED and TRA approved license recognized across all seven emirates"
    ],
    "process": [
      {
        "step": 1,
        "title": "Business Model Definition",
        "description": "Define your e-commerce model - B2C, B2B, or marketplace - and identify your target audience."
      },
      {
        "step": 2,
        "title": "Select Jurisdiction",
        "description": "Choose Mainland or a Free Zone like Dubai South or ADGM that offers dedicated e-commerce licenses."
      },
      {
        "step": 3,
        "title": "Document Submission",
        "description": "Submit your business plan, passport copies, and proof of digital presence or domain registration."
      },
      {
        "step": 4,
        "title": "License Issuance",
        "description": "Receive your e-commerce license and complete the process with a TRN certificate for VAT purposes."
      }
    ],
    "faqs": [
      {
        "question": "Is an e-commerce license mandatory to sell online in the UAE?",
        "answer": "Yes, it is mandatory. The UAE government requires all online businesses to hold a valid e-commerce license. Selling without one can result in fines, account suspension, and legal action from the DED and TRA."
      },
      {
        "question": "Can I sell on Amazon and Noon with an e-commerce license?",
        "answer": "Absolutely. An e-commerce trade license from Dubai is recognized by all major online marketplaces including Amazon.ae, Noon.com, and Namshi. You will need the license to register as a seller on these platforms."
      },
      {
        "question": "Do I need a physical office for an e-commerce license?",
        "answer": "Not necessarily. Many Free Zones allow you to operate with a flexi-desk or virtual office. However, if you plan to hold inventory locally, you will need a warehouse or storage facility."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About E-Commerce Licensing"
      },
      {
        "type": "paragraph",
        "text": "The UAE e-commerce market is projected to reach over $30 billion by 2028, driven by high internet penetration and a tech-savvy population. An e-commerce trade license positions your business to capitalize on this rapid growth while fully complying with local regulations."
      },
      {
        "type": "paragraph",
        "text": "From dropshipping to multi-brand marketplaces, the e-commerce license covers a wide spectrum of digital retail activities. The Dubai Economic Department and Telecommunications Regulatory Authority have established clear guidelines to ensure consumer protection and fair trade practices in the digital space."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1561715276-a2d1e4d2e5b4?w=800&q=80"
    ]
  },
  {
    "route": "/license/general-trading-license",
    "title": "General Trading License in Dubai",
    "subtitle": "Trade in a wide range of commercial activities with a general trading license",
    "heroImage": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "General Trading",
        "href": "/license/general-trading-license"
      }
    ],
    "features": [
      {
        "title": "Wide Range of Activities",
        "description": "Trade in multiple product categories including electronics, textiles, food, and machinery under one unified license."
      },
      {
        "title": "Import & Export",
        "description": "Import goods from global suppliers and export to international markets with full customs clearance support."
      },
      {
        "title": "Wholesale & Retail",
        "description": "Operate both wholesale distribution and retail storefronts under the same license framework."
      },
      {
        "title": "Multiple Jurisdictions",
        "description": "Choose between Mainland, Free Zone, or Offshore setup depending on your target market."
      },
      {
        "title": "Global Trade",
        "description": "Access to international markets with UAE's strategic location connecting East and West."
      },
      {
        "title": "Flexible Operations",
        "description": "Operate from anywhere in the UAE with minimal physical presence requirements."
      }
    ],
    "benefits": [
      "Trade in an unlimited number of product categories under one license",
      "100% foreign ownership in Free Zones with no local sponsor required",
      "Zero corporate and personal income tax on trading profits",
      "Strategic geographic location with access to 2+ billion consumers",
      "World-class logistics infrastructure with Jebel Ali Port and DXB Airport",
      "Simplified visa processing for shareholders and employees",
      "No currency restrictions and full repatriation of capital and profits",
      "Quick setup process with license issuance within 3-5 working days"
    ],
    "process": [
      {
        "step": 1,
        "title": "Select Trading Activities",
        "description": "Define the specific product categories and activities you intend to trade in from the approved DED list."
      },
      {
        "step": 2,
        "title": "Choose Jurisdiction",
        "description": "Select Mainland, Free Zone (JAFZA, DMCC, etc.) or Offshore based on your business plan."
      },
      {
        "step": 3,
        "title": "Submit Documents",
        "description": "Provide passport copies, business plan, and completed application forms for government review."
      },
      {
        "step": 4,
        "title": "Receive Your License",
        "description": "Once approved, your General Trading License is issued along with tenancy contract and visas."
      }
    ],
    "faqs": [
      {
        "question": "What products can I trade with a General Trading License?",
        "answer": "You can trade in virtually any legal product category including electronics, textiles, food items, construction materials, furniture, automotive parts, and medical supplies. Some restricted items like pharmaceuticals require additional approvals."
      },
      {
        "question": "What is the minimum capital requirement for a General Trading License?",
        "answer": "For Mainland companies, the minimum share capital is typically AED 300,000 to AED 500,000 depending on the activities, while Free Zones have no minimum capital requirement but you must demonstrate sufficient funds to operate."
      },
      {
        "question": "Can I hold inventory with a General Trading License?",
        "answer": "Yes, you can lease warehouse space in industrial areas or Free Zones. Many Free Zones offer flexi-desks and shared warehouse facilities suitable for e-commerce and light trading operations."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About General Trading"
      },
      {
        "type": "paragraph",
        "text": "A General Trading License in Dubai is one of the most versatile business licenses available, allowing companies to trade in multiple product categories under a single legal entity. This license is ideal for entrepreneurs looking to establish a diversified trading operation in the UAE's vibrant economy."
      },
      {
        "type": "paragraph",
        "text": "With Dubai's strategic location, world-class port infrastructure, and business-friendly regulations, general trading companies can efficiently import, export, and re-export goods across the Middle East, Africa, Europe, and Asia. The UAE government has streamlined the licensing process to encourage foreign investment in the trading sector."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
    ]
  },
  {
    "route": "/license/management-consultancy-license-dubai",
    "title": "Management Consultancy License in Dubai",
    "subtitle": "Offer professional advisory and management consulting services",
    "heroImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Management Consultancy License",
        "href": "/license/management-consultancy-license-dubai"
      }
    ],
    "features": [
      {
        "title": "Strategic Advisory",
        "description": "Provide C-suite advisory on corporate strategy, growth planning, market entry, and business transformation."
      },
      {
        "title": "Operations Consulting",
        "description": "Optimize client operations with process improvement, supply chain management, and lean methodology implementation."
      },
      {
        "title": "Human Capital Advisory",
        "description": "Offer HR consulting including organizational design, talent management, executive search, and compensation benchmarking."
      },
      {
        "title": "IT & Digital Consulting",
        "description": "Advise on digital transformation, IT strategy, cybersecurity frameworks, and technology implementation roadmaps."
      },
      {
        "title": "Risk & Compliance",
        "description": "Deliver risk assessment, internal audit, regulatory compliance, and corporate governance advisory services."
      },
      {
        "title": "Financial Advisory",
        "description": "Provide financial modeling, valuation, due diligence, and M&A advisory services to corporate clients."
      }
    ],
    "benefits": [
      "Professional license with no trading restrictions - purely advisory services",
      "100% foreign ownership in Mainland Dubai with a Local Service Agent (not a sponsor)",
      "No minimum capital requirement for professional consultancy licenses",
      "High profit margins with low operational overhead and minimal inventory requirements",
      "Opportunity to serve Dubai's 20,000+ registered companies needing consultancy",
      "Eligibility for government and semi-government consulting projects",
      "Flexible office requirements - virtual office or flexi-desk acceptable for most jurisdictions",
      "Easy visa and immigration process with qualifications-based visa categories"
    ],
    "process": [
      {
        "step": 1,
        "title": "Consulting Niche Selection",
        "description": "Define your consulting specialization - strategy, HR, IT, finance, or operations - based on your expertise."
      },
      {
        "step": 2,
        "title": "Professional Credentials",
        "description": "Prepare your professional qualifications, certifications (MBA, PMP, etc.), and evidence of experience."
      },
      {
        "step": 3,
        "title": "License Application",
        "description": "Submit your application to DED or Free Zone authority along with attested degree certificates and CV."
      },
      {
        "step": 4,
        "title": "Practice License",
        "description": "Receive your Management Consultancy License and register with the Dubai Chamber of Commerce."
      }
    ],
    "faqs": [
      {
        "question": "What qualifications do I need for a Management Consultancy License?",
        "answer": "You need a recognized university degree (Bachelor's minimum, Master's preferred) in a relevant field such as business, finance, engineering, or IT. Professional certifications like MBA, PMP, or CFA strengthen your application significantly."
      },
      {
        "question": "Can I operate as a sole consultant or do I need employees?",
        "answer": "You can operate as a sole consultant with just yourself as the licensed professional. However, having employees allows you to take on larger projects and bill at higher rates for team-based engagements."
      },
      {
        "question": "Is a physical office mandatory for a consultancy license?",
        "answer": "For Mainland licenses, a physical office is required but can be a small serviced office. Free Zones like DMC and ADGM offer flexi-desk options starting from AED 15,000 per year that satisfy the requirement."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Management Consultancy Licensing"
      },
      {
        "type": "paragraph",
        "text": "Dubai has become a global hub for management consultancy, hosting the regional headquarters of McKinsey, BCG, Bain, Deloitte, and PwC. A Management Consultancy License allows professionals to establish their own practice and compete in this prestigious industry."
      },
      {
        "type": "paragraph",
        "text": "The demand for management consultants in Dubai is driven by rapid economic diversification, Expo-related projects, and the influx of multinational corporations establishing regional operations. Consultants with expertise in digital transformation, sustainability, and emerging markets are particularly sought after in the UAE."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
    ]
  },
  {
    "route": "/license/professional-services-license-dubai",
    "title": "Professional Services License in Dubai",
    "subtitle": "Offer specialized professional services with a recognized practice license",
    "heroImage": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Professional Services License",
        "href": "/license/professional-services-license-dubai"
      }
    ],
    "features": [
      {
        "title": "Legal Services",
        "description": "Practice law through a licensed legal consultancy, offering corporate, commercial, and family law advice."
      },
      {
        "title": "Accounting & Audit",
        "description": "Provide bookkeeping, auditing, tax advisory, and financial reporting services to UAE businesses."
      },
      {
        "title": "Engineering Consulting",
        "description": "Offer civil, mechanical, electrical, and structural engineering design and consulting services."
      },
      {
        "title": "Architecture & Design",
        "description": "Provide architectural design, urban planning, interior design, and landscape architecture services."
      },
      {
        "title": "Healthcare Consulting",
        "description": "Advise healthcare providers on operations, compliance, facility design, and medical practice management."
      },
      {
        "title": "Education & Training",
        "description": "Offer professional training, corporate education programs, and skill development workshops."
      }
    ],
    "benefits": [
      "Recognized professional status with DED and Ministry of Economy accreditation",
      "100% foreign ownership for most professional services in Mainland Dubai",
      "No minimum capital requirement for professional license categories",
      "Eligibility to bid for government and semi-government professional service contracts",
      "Protection of professional title and the ability to use 'consultant' or 'specialist' designation",
      "Simplified partnership structure allowing international professionals to collaborate",
      "Access to Dubai's AED 50 billion professional services market",
      "Visa sponsorship for up to 4 employees per 100 sq ft of office space"
    ],
    "process": [
      {
        "step": 1,
        "title": "Professional Qualification",
        "description": "Ensure your qualifications are attested by the Ministry of Education and relevant professional body."
      },
      {
        "step": 2,
        "title": "Practice Scope",
        "description": "Define the specific professional services you will offer - legal, accounting, engineering, or design."
      },
      {
        "step": 3,
        "title": "License Application",
        "description": "Submit attested credentials, experience certificates, and the professional services application to DED."
      },
      {
        "step": 4,
        "title": "Professional Registration",
        "description": "Register with the relevant professional association and obtain your practice license from DED."
      }
    ],
    "faqs": [
      {
        "question": "What professions are eligible for a Professional Services License?",
        "answer": "Eligible professions include lawyers, accountants, auditors, engineers, architects, consultants, doctors, dentists, pharmacists, education specialists, and IT professionals. Each profession has specific qualification and experience requirements."
      },
      {
        "question": "Can I convert my Professional Services License to a commercial license later?",
        "answer": "Yes, you can upgrade or add commercial activities to your license after two years of operations. However, trading activities require a separate commercial license or a general trading license."
      },
      {
        "question": "Do I need a local partner for a Professional Services License?",
        "answer": "No, the UAE law now allows 100% foreign ownership for most professional services categories in Mainland Dubai since the 2021 company law amendments. Previously, a local partner was required."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Professional Services Licensing"
      },
      {
        "type": "paragraph",
        "text": "A Professional Services License in Dubai is designed for individuals and firms offering specialized expertise in fields such as law, accounting, engineering, architecture, and healthcare. This license distinguishes professional practitioners from commercial traders and recognizes the unique regulatory requirements of each profession."
      },
      {
        "type": "paragraph",
        "text": "Dubai's professional services sector contributes over AED 50 billion annually to the economy. With the relaxation of foreign ownership rules, international professionals can now establish their practices in Mainland Dubai without a local partner, making it easier than ever to bring global expertise to the local market."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
    ]
  },
  {
    "route": "/license/project-management-license-in-uae",
    "title": "Project Management License in UAE",
    "subtitle": "Manage and deliver complex projects with a licensed PM consultancy",
    "heroImage": "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Project Management License",
        "href": "/license/project-management-license-in-uae"
      }
    ],
    "features": [
      {
        "title": "Full Project Lifecycle",
        "description": "Manage projects from initiation and planning through execution, monitoring, and closure across all industries."
      },
      {
        "title": "Construction PM",
        "description": "Specialized project management for real estate, infrastructure, and construction projects in Dubai's booming market."
      },
      {
        "title": "IT & Software PM",
        "description": "Deliver technology projects using Agile, Scrum, and PRINCE2 methodologies for digital transformation initiatives."
      },
      {
        "title": "Program & Portfolio Management",
        "description": "Manage multiple related projects as a program and align portfolios with organizational strategic objectives."
      },
      {
        "title": "Risk & Quality Management",
        "description": "Implement comprehensive risk management frameworks and quality assurance processes for project delivery."
      },
      {
        "title": "Contract & Procurement",
        "description": "Manage vendor contracts, procurement processes, and supply chain coordination for large-scale projects."
      }
    ],
    "benefits": [
      "One of the most in-demand professional services in Dubai's project-driven economy",
      "Serve clients across construction, IT, energy, hospitality, and government sectors",
      "100% foreign ownership with simplified licensing through DED professional category",
      "No minimum capital requirement and low overhead operational costs",
      "PMP, PRINCE2, or equivalent certification strengthens credibility and client trust",
      "Eligibility for multi-million dirham government and semi-government project tenders",
      "Access to Dubai's AED 500+ billion infrastructure and real estate project pipeline",
      "Flexible office options including virtual offices and co-working spaces"
    ],
    "process": [
      {
        "step": 1,
        "title": "Methodology Selection",
        "description": "Define your project management approach - PMP, PRINCE2, Agile, or a combination based on target industries."
      },
      {
        "step": 2,
        "title": "Certification Preparation",
        "description": "Ensure your team holds recognized PM certifications and prepare evidence of previous project deliveries."
      },
      {
        "step": 3,
        "title": "Company Registration",
        "description": "Register your PM consultancy with DED or a Free Zone authority and reserve your trade name."
      },
      {
        "step": 4,
        "title": "License & Accreditation",
        "description": "Obtain your license and seek accreditation from Project Management Institute (PMI) or equivalent bodies."
      }
    ],
    "faqs": [
      {
        "question": "Do I need PMP certification to get a Project Management License?",
        "answer": "While not mandatory for the license itself, PMP or PRINCE2 certification significantly strengthens your application and is essential for winning corporate and government contracts. Many clients require certified PMs as a condition of engagement."
      },
      {
        "question": "What industries can I serve with a Project Management License?",
        "answer": "You can serve virtually any industry including construction, IT, oil & gas, hospitality, healthcare, event management, and government. The license is intentionally broad to cover project management services across all sectors."
      },
      {
        "question": "Can I hire subcontractors under my Project Management License?",
        "answer": "Yes, you can subcontract specialized services such as engineering design, quantity surveying, or IT development as needed. However, you remain responsible for project delivery and compliance with contractual obligations."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Project Management Licensing"
      },
      {
        "type": "paragraph",
        "text": "Dubai is a city built on ambitious projects, from the Burj Khalifa and Palm Jumeirah to Expo 2020 and the Dubai Creek Tower. A Project Management License enables professionals to establish a consultancy that oversees and delivers complex projects across multiple industries, capitalizing on Dubai's reputation as a global project hub."
      },
      {
        "type": "paragraph",
        "text": "With the UAE investing over AED 500 billion in infrastructure, real estate, and technology projects over the next decade, certified project managers are in exceptionally high demand. A licensed PM consultancy can secure contracts ranging from construction supervision to enterprise IT transformation programs."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
    ]
  },
  {
    "route": "/license/real-estate",
    "title": "Real Estate License in Dubai",
    "subtitle": "Start your real estate agency or property management business",
    "heroImage": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Real Estate License",
        "href": "/license/real-estate"
      }
    ],
    "features": [
      {
        "title": "Property Sales & Leasing",
        "description": "Facilitate property sales, long-term rentals, and short-term holiday home leases across Dubai's residential market."
      },
      {
        "title": "Property Management",
        "description": "Offer comprehensive property management services including tenant sourcing, maintenance, and rent collection."
      },
      {
        "title": "Real Estate Advisory",
        "description": "Provide investment advisory, market analysis, feasibility studies, and portfolio strategy for property investors."
      },
      {
        "title": "Off-Plan Sales",
        "description": "Register with RERA to sell off-plan properties from Dubai's leading developers like Emaar, Nakheel, and Damac."
      },
      {
        "title": "Valuation & Appraisal",
        "description": "Certified property valuations for mortgage, insurance, inheritance, and litigation purposes."
      },
      {
        "title": "Commercial Real Estate",
        "description": "Specialize in office, retail, and industrial property leasing, sales, and asset management."
      }
    ],
    "benefits": [
      "One of the most profitable license categories in Dubai's AED 300+ billion property market",
      "RERA registration and BRN (Broker Registration Number) for legal real estate practice",
      "100% foreign ownership allowed in Mainland Dubai real estate agencies",
      "Commission-based income model with high earning potential per transaction",
      "Access to Dubai's MLS system and property listing platforms like Property Finder and Bayut",
      "Eligibility for DLD (Dubai Land Department) accredited training and certification programs",
      "Growing demand from international investors seeking UAE property investments",
      "Free Zone real estate licenses available in Dubai Multi Commodities Centre (DMCC)"
    ],
    "process": [
      {
        "step": 1,
        "title": "RERA Training",
        "description": "Complete the mandatory RERA training course and pass the real estate practitioner examination."
      },
      {
        "step": 2,
        "title": "Company Registration",
        "description": "Register your real estate company with DED or a suitable Free Zone authority in Dubai."
      },
      {
        "step": 3,
        "title": "Physical Office",
        "description": "Secure a physical office location that meets RERA requirements for real estate agencies."
      },
      {
        "step": 4,
        "title": "RERA Licensing",
        "description": "Receive your RERA registration and Broker Registration Number to commence real estate operations."
      }
    ],
    "faqs": [
      {
        "question": "What is the RERA exam and do I need to pass it?",
        "answer": "The RERA exam is a mandatory certification for all real estate professionals in Dubai. It covers UAE property laws, ethics, sales practices, and market knowledge. You must pass this exam to obtain a Broker Registration Number (BRN) and legally practice real estate."
      },
      {
        "question": "What are the office requirements for a Real Estate License?",
        "answer": "RERA requires real estate agencies to have a physical office in a commercial location (not residential). The minimum office size is typically 500 sq ft with a reception area and meeting room. Office rent can range from AED 40,000 to AED 150,000 per year depending on location."
      },
      {
        "question": "Can I sell property in all Emirates with a Dubai real estate license?",
        "answer": "A Dubai-issued real estate license allows you to operate within Dubai. If you want to sell property in Abu Dhabi, Sharjah, or other Emirates, you need additional registrations with their respective real estate regulatory authorities."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Real Estate Licensing"
      },
      {
        "type": "paragraph",
        "text": "Dubai's real estate market is one of the most dynamic in the world, with transaction values exceeding AED 300 billion annually. A Real Estate License in Dubai opens the door to this lucrative industry, allowing you to operate as a broker, property manager, or real estate consultant in the city's booming property sector."
      },
      {
        "type": "paragraph",
        "text": "The Dubai Land Department (DLD) and Real Estate Regulatory Authority (RERA) have established a comprehensive regulatory framework to ensure professionalism and transparency in the real estate sector. Licensed agents benefit from access to official databases, industry training programs, and the trust that comes with regulatory compliance."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&q=80"
    ]
  },
  {
    "route": "/license/restaurant",
    "title": "Restaurant License in Dubai",
    "subtitle": "Open and operate a restaurant, cafe, or food service business",
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Restaurant License",
        "href": "/license/restaurant"
      }
    ],
    "features": [
      {
        "title": "Full Restaurant Operations",
        "description": "Operate dine-in restaurants, cafes, fast-food outlets, and fine dining establishments under one license."
      },
      {
        "title": "Food Delivery",
        "description": "Partner with Talabat, Deliveroo, Zomato, and Careem Food for delivery services with DMCC approval."
      },
      {
        "title": "Liquor Licensing",
        "description": "Apply for a liquor license to serve alcoholic beverages in your restaurant or bar (subject to approvals)."
      },
      {
        "title": "Catering Services",
        "description": "Offer off-site catering for corporate events, weddings, and private functions with full food safety compliance."
      },
      {
        "title": "Outdoor Dining",
        "description": "Obtain permits for terrace seating, sidewalk dining, and rooftop restaurant operations in designated areas."
      },
      {
        "title": "Shisha/Coffee Shop",
        "description": "Add shisha service or specialty coffee operations to your restaurant with additional municipality approvals."
      }
    ],
    "benefits": [
      "Dubai's restaurant industry is worth over AED 30 billion with year-round tourist demand",
      "Multiple location options - malls, hotels, standalone buildings, and waterfront dining",
      "Municipality-approved kitchen designs and food safety certification included in licensing",
      "Access to Dubai's world-class food supply chain with over 100+ food importers",
      "Alcohol license available for eligible restaurants in designated areas",
      "Visa sponsorship for chefs, managers, and front-of-house staff based on restaurant size",
      "Expo City and Dubai South offer new restaurant investment incentives",
      "DMCC's Trade Licensing for food and beverage businesses with special packages"
    ],
    "process": [
      {
        "step": 1,
        "title": "Concept & Location",
        "description": "Define your restaurant concept, cuisine type, and select a suitable location in Dubai."
      },
      {
        "step": 2,
        "title": "Civil Defense Approval",
        "description": "Submit your restaurant layout plans to Dubai Civil Defense for fire safety and evacuation compliance."
      },
      {
        "step": 3,
        "title": "Municipality Food License",
        "description": "Pass Dubai Municipality food safety inspection and obtain the Food Control Department permit."
      },
      {
        "step": 4,
        "title": "Operational License",
        "description": "Receive your full restaurant license from DED along with all municipality and health approvals."
      }
    ],
    "faqs": [
      {
        "question": "What food safety certifications do I need for a Restaurant License?",
        "answer": "All restaurant staff must complete Dubai Municipality's Food Safety Training course. The head chef or manager needs a Food Safety Supervisor certificate. The restaurant must also implement HACCP principles for food handling and storage."
      },
      {
        "question": "What are the costs involved in opening a restaurant in Dubai?",
        "answer": "Costs vary significantly based on location and concept. A small cafe might cost AED 200,000-500,000, while a full-service restaurant can range from AED 1-5 million. Key costs include license fees, office/restaurant rent, kitchen equipment, interior fit-out, and staffing."
      },
      {
        "question": "Can I serve alcohol in my restaurant in Dubai?",
        "answer": "Yes, but you need a separate liquor license from Dubai Tourism (DTCM) or the relevant Free Zone authority. Alcohol service is typically restricted to restaurants within hotels or designated entertainment zones. A special 'S' code on your trade license is required."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Restaurant Licensing"
      },
      {
        "type": "paragraph",
        "text": "Dubai's culinary scene is among the most diverse and vibrant in the world, with over 13,000 restaurants serving cuisines from every corner of the globe. A Restaurant License in Dubai allows you to bring your culinary vision to life in a city that celebrates food innovation and gastronomic excellence."
      },
      {
        "type": "paragraph",
        "text": "From Michelin-starred fine dining establishments to trendy street food concepts, Dubai offers opportunities across every restaurant category. The licensing process involves coordination with the Dubai Economic Department, Dubai Municipality, Civil Defense, and Tourism authorities, but our team simplifies the entire journey for you."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
    ]
  },
  {
    "route": "/license/salon",
    "title": "Salon License in Dubai",
    "subtitle": "Start and operate a beauty salon, barbershop, or spa",
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Salon License",
        "href": "/license/salon"
      }
    ],
    "features": [
      {
        "title": "Hair Services",
        "description": "Offer haircuts, styling, coloring, treatments, and extensions for men and women in a licensed salon environment."
      },
      {
        "title": "Skincare & Facials",
        "description": "Provide professional facials, microdermabrasion, chemical peels, and advanced skincare treatments by licensed therapists."
      },
      {
        "title": "Nail Services",
        "description": "Offer manicure, pedicure, gel nails, acrylic extensions, and nail art services with sterilized equipment."
      },
      {
        "title": "Massage & Body Treatments",
        "description": "Include therapeutic massage, body wraps, and spa treatments with properly certified therapists."
      },
      {
        "title": "Makeup Services",
        "description": "Professional makeup for bridal, party, editorial, and special occasions using premium cosmetic products."
      },
      {
        "title": "Barbering Services",
        "description": "Traditional barbershop services including beard grooming, hot towel shaves, and men's hair styling."
      }
    ],
    "benefits": [
      "Dubai's beauty and wellness market is growing at 12% annually with strong consumer demand",
      "Separate licenses available for ladies salons, gents barbershops, and unisex spas",
      "Municipality-approved premises ensure client trust and regulatory compliance",
      "100% foreign ownership available for salon businesses in designated areas",
      "High-profit margins on retail product sales alongside service revenue",
      "Visa sponsorship for international stylists, therapists, and beauticians",
      "Regular inspections by Dubai Municipality ensure high industry standards",
      "Opportunity to expand into salon academies and product distribution"
    ],
    "process": [
      {
        "step": 1,
        "title": "Concept & Branding",
        "description": "Define your salon concept - luxury, budget, unisex, or specialized - and choose a suitable location."
      },
      {
        "step": 2,
        "title": "Layout Approval",
        "description": "Submit your salon floor plan to Dubai Municipality for health and safety compliance approval."
      },
      {
        "step": 3,
        "title": "Staff Certification",
        "description": "Ensure all beauticians, stylists, and therapists hold valid DHA or Municipality certifications."
      },
      {
        "step": 4,
        "title": "License & Inspection",
        "description": "Pass the final Municipality inspection and receive your full salon operating license."
      }
    ],
    "faqs": [
      {
        "question": "What are the staff certification requirements for a Salon License?",
        "answer": "All beauty therapists, hairdressers, and nail technicians must hold a recognized certification from an accredited institution and obtain a Health Card from Dubai Municipality. International certifications must be attested and verified by the relevant UAE authorities."
      },
      {
        "question": "Can I operate a unisex salon in Dubai?",
        "answer": "Unisex salons are permitted but typically require separate sections for men and women with separate entrances in some Emirates. Ladies-only and gents-only salons are more common and have simpler regulatory requirements."
      },
      {
        "question": "What is the process for salon location approval?",
        "answer": "The salon must be located in a commercial (not residential) area. Dubai Municipality will inspect the premises for adequate ventilation, proper drainage, sterilization equipment, fire safety, and sufficient space per treatment chair (minimum 4 sq meters per station)."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Salon Licensing"
      },
      {
        "type": "paragraph",
        "text": "Dubai's beauty and wellness industry is flourishing, with residents and tourists alike seeking premium salon and spa experiences. A Salon License in Dubai enables entrepreneurs to establish everything from exclusive ladies' salons to modern barbershops and luxury day spas, all within the UAE's robust regulatory framework."
      },
      {
        "type": "paragraph",
        "text": "The Dubai Municipality strictly regulates salon operations to ensure hygiene, safety, and professional standards. From proper sterilization of equipment to certified therapists and approved products, the licensing process ensures your salon meets the highest standards expected by Dubai's discerning clientele."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1521590832167-161bc6b83316?w=800&q=80"
    ]
  },
  {
    "route": "/license/setting-up-a-company-in-uae-free-zone",
    "title": "Setting Up a Company in UAE Free Zone",
    "subtitle": "Complete guide to free zone company formation in the UAE",
    "heroImage": "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Free Zone Setup",
        "href": "/license/setting-up-a-company-in-uae-free-zone"
      }
    ],
    "features": [
      {
        "title": "100% Foreign Ownership",
        "description": "Own your entire company without a local sponsor - full share capital control by foreign investors."
      },
      {
        "title": "Zero Corporate Tax",
        "description": "Enjoy 0% corporate and personal income tax for the duration of your Free Zone license (currently guaranteed)."
      },
      {
        "title": "Full Repatriation",
        "description": "Repatriate 100% of capital and profits without currency restrictions or transfer limitations."
      },
      {
        "title": "Streamlined Setup",
        "description": "Company incorporation within 5-7 working days with minimal documentation and government fees."
      },
      {
        "title": "Flexible Office Options",
        "description": "Choose from flexi-desks, virtual offices, shared suites, or private warehouses based on your needs."
      },
      {
        "title": "Multiple Free Zones",
        "description": "Select from over 40 Free Zones including JAFZA, DMCC, DIFC, ADGM, Dubai South, and RAK ICC."
      }
    ],
    "benefits": [
      "Complete ownership with no requirement for UAE national partner or sponsor",
      "0% corporate tax guarantee for 15-50 years depending on the Free Zone",
      "0% customs duties on goods imported into the Free Zone for re-export",
      "Strategic location with access to Middle East, Africa, Asia, and European markets",
      "Simplified visa process with quotas based on office space and company type",
      "No currency restrictions and full repatriation of capital and profits",
      "Double taxation avoidance agreements with over 100+ countries",
      "Modern infrastructure with world-class logistics, telecom, and utilities"
    ],
    "process": [
      {
        "step": 1,
        "title": "Free Zone Selection",
        "description": "Choose the most suitable Free Zone based on your business activities, budget, and target market."
      },
      {
        "step": 2,
        "title": "Business Activity & Structure",
        "description": "Define your business activities and legal structure (FZE, FZCO, or branch)."
      },
      {
        "step": 3,
        "title": "Document Submission",
        "description": "Submit passport copies, business plan, and completed application forms to the Free Zone authority."
      },
      {
        "step": 4,
        "title": "Incorporation & Licensing",
        "description": "Receive your Certificate of Incorporation, trade license, and arrange visa processing for shareholders."
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between Free Zone and Mainland company formation?",
        "answer": "Free Zone companies offer 100% foreign ownership, zero corporate tax, and simplified setup but cannot trade directly in the local UAE market without a distributor. Mainland companies can trade anywhere in the UAE but historically required a local partner (now relaxed for most activities)."
      },
      {
        "question": "What is the minimum cost to set up a Free Zone company in the UAE?",
        "answer": "Costs start from approximately AED 12,000 for a basic license in low-cost Free Zones like RAK ICC or Ajman Free Zone. Premium Free Zones like DMCC and DIFC start from AED 50,000 to AED 100,000 depending on office space and activity."
      },
      {
        "question": "Can I have a bank account for my Free Zone company?",
        "answer": "Yes, Free Zone companies can open corporate bank accounts in UAE banks and international banks operating in the UAE. Some Free Zones also offer their own banking services or partnerships with specific banks for faster account opening."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Free Zone Company Formation"
      },
      {
        "type": "paragraph",
        "text": "The UAE's Free Zones are specialized economic areas that offer foreign investors 100% ownership, zero taxation, and streamlined business setup procedures. With over 40 Free Zones across the Emirates, each catering to specific industries from media and technology to logistics and finance, there is a Free Zone suited for every type of business."
      },
      {
        "type": "paragraph",
        "text": "Setting up a company in a UAE Free Zone is one of the most popular routes for international entrepreneurs and investors. The process is straightforward, cost-effective, and can be completed within days. Free Zones provide state-of-the-art infrastructure, business support services, and a vibrant community of like-minded businesses."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1577415124269-fc1140afcb8f?w=800&q=80"
    ]
  },
  {
    "route": "/license/tech-startup-dubai",
    "title": "Tech Startup License in Dubai",
    "subtitle": "Launch your technology startup in Dubai's innovation ecosystem",
    "heroImage": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Tech Startup Dubai",
        "href": "/license/tech-startup-dubai"
      }
    ],
    "features": [
      {
        "title": "Software Development",
        "description": "Build and sell custom software, mobile apps, web platforms, and SaaS products to local and global clients."
      },
      {
        "title": "AI & Machine Learning",
        "description": "Develop AI-powered solutions, predictive analytics, computer vision, and NLP applications for enterprise clients."
      },
      {
        "title": "Blockchain & Web3",
        "description": "Create blockchain-based solutions, smart contracts, dApps, and Web3 platforms in Dubai's crypto-friendly environment."
      },
      {
        "title": "Cloud & DevOps Services",
        "description": "Offer cloud migration, infrastructure management, CI/CD pipeline setup, and DevOps consulting services."
      },
      {
        "title": "IoT & Smart Solutions",
        "description": "Develop IoT devices and smart city solutions aligned with Dubai's Smart City initiative and 10X program."
      },
      {
        "title": "Cybersecurity Solutions",
        "description": "Provide cybersecurity consulting, penetration testing, security audits, and managed security services."
      }
    ],
    "benefits": [
      "Access to Dubai's AED 10 billion technology and innovation ecosystem",
      "Eligibility for government grants and startup funding from Dubai Future Foundation",
      "World-class infrastructure with UAE's 5G network and smart city technologies",
      "Co-working spaces and innovation hubs like Area 2071, In5, and Dubai Silicon Oasis",
      "Golden Visa eligibility for tech founders and specialized AI/engineering talent",
      "Zero corporate tax for qualifying tech startups in Free Zones",
      "Access to venture capital funds including Dubai Future District Fund and regional VCs",
      "Simplified IP registration and patent filing through UAE Patent Office"
    ],
    "process": [
      {
        "step": 1,
        "title": "Idea Validation",
        "description": "Validate your tech concept, define your MVP, and prepare a pitch deck and business plan."
      },
      {
        "step": 2,
        "title": "Incubator/Accelerator",
        "description": "Join a Dubai-based incubator like In5, Techstars, or Area 2071 for mentorship and seed funding."
      },
      {
        "step": 3,
        "title": "Free Zone Registration",
        "description": "Register in a tech-focused Free Zone like Dubai Silicon Oasis, DIFC Innovation Hub, or Dubai Internet City."
      },
      {
        "step": 4,
        "title": "License & IP Protection",
        "description": "Obtain your tech startup license and file for trademark and IP protection through the UAE Patent Office."
      }
    ],
    "faqs": [
      {
        "question": "What is the best Free Zone for tech startups in Dubai?",
        "answer": "Dubai Silicon Oasis (DSO) is the most popular choice for tech startups due to its low cost, flexible office options, and tech-focused ecosystem. Dubai Internet City (DIC) and DIFC Innovation Hub are better for established tech companies and fintech startups respectively."
      },
      {
        "question": "Are there funding opportunities for tech startups in Dubai?",
        "answer": "Yes, Dubai offers numerous funding options including the Dubai Future District Fund (AED 1 billion), Mohammed Bin Rashid Innovation Fund, private venture capital firms like BECO Capital and Wamda, and government grants through the Dubai SME program."
      },
      {
        "question": "Do I need a physical office for a tech startup license?",
        "answer": "Many tech-focused Free Zones offer virtual offices and flexi-desks specifically designed for early-stage startups. Dubai Silicon Oasis offers packages starting from AED 10,000 per year that include a virtual office and access to co-working spaces."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Tech Startup Licensing"
      },
      {
        "type": "paragraph",
        "text": "Dubai has transformed into a global technology hub, attracting startups, scale-ups, and tech giants alike. With initiatives like the Dubai Smart City project, the UAE Strategy for Artificial Intelligence, and the Dubai Blockchain Strategy, the emirate offers unprecedented opportunities for technology entrepreneurs."
      },
      {
        "type": "paragraph",
        "text": "A Tech Startup License in Dubai provides the legal framework to develop and commercialize innovative technology solutions. Whether you're building the next AI platform, a fintech disruptor, or a sustainable smart city solution, Dubai's startup ecosystem offers the infrastructure, funding, and market access to turn your vision into reality."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
    ]
  },
  {
    "route": "/license/technical-service",
    "title": "Technical Service License in UAE",
    "subtitle": "Offer specialized technical and engineering services",
    "heroImage": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Technical Service License",
        "href": "/license/technical-service"
      }
    ],
    "features": [
      {
        "title": "Engineering Services",
        "description": "Provide civil, mechanical, electrical, and structural engineering design, analysis, and consulting services."
      },
      {
        "title": "HVAC & MEP Systems",
        "description": "Design, install, and maintain heating, ventilation, air conditioning, and mechanical/electrical/plumbing systems."
      },
      {
        "title": "Technical Maintenance",
        "description": "Offer preventive and corrective maintenance for industrial equipment, building systems, and facility infrastructure."
      },
      {
        "title": "Solar & Renewable Energy",
        "description": "Install and maintain solar photovoltaic systems, solar water heaters, and renewable energy solutions."
      },
      {
        "title": "Fire & Safety Systems",
        "description": "Design, supply, and maintain fire alarm systems, sprinklers, and fire suppression equipment for buildings."
      },
      {
        "title": "Industrial Automation",
        "description": "Provide PLC programming, SCADA systems, robotics integration, and industrial control solutions."
      }
    ],
    "benefits": [
      "Covers a wide range of technical activities under a single professional license category",
      "100% foreign ownership for technical service companies in Mainland and Free Zones",
      "Growing demand from Dubai's AED 50+ billion construction and infrastructure sector",
      "Eligibility for government tenders and semi-government maintenance contracts",
      "Opportunity to serve the UAE's 200+ industrial zones and free zones",
      "No minimum capital requirement for most technical service license categories",
      "Visa sponsorship for skilled technicians, engineers, and project managers",
      "High recurring revenue potential from maintenance and service contracts"
    ],
    "process": [
      {
        "step": 1,
        "title": "Technical Scope Definition",
        "description": "Define your technical service specialties - MEP, HVAC, fire safety, automation, or renewable energy."
      },
      {
        "step": 2,
        "title": "Engineer Licensing",
        "description": "Ensure lead engineers are registered with the Dubai Municipality or relevant engineering authority."
      },
      {
        "step": 3,
        "title": "Company Registration",
        "description": "Register your technical service company with DED and obtain the required trade license."
      },
      {
        "step": 4,
        "title": "Municipality Classification",
        "description": "Obtain your technical classification certificate from Dubai Municipality for contract eligibility."
      }
    ],
    "faqs": [
      {
        "question": "What engineering classifications are available for technical service companies?",
        "answer": "Dubai Municipality issues classifications from Grade 1 to Grade 5 depending on company capital and experience. Higher grades allow bidding on larger projects. Classifications include building construction, MEP, electrical, mechanical, and specialized technical services."
      },
      {
        "question": "Do I need certified engineers to obtain a Technical Service License?",
        "answer": "Yes, you must have at least one qualified engineer registered with the Dubai Municipality Engineering Committee. The engineer's credentials must be attested and they must hold a valid UAE engineering practice license."
      },
      {
        "question": "Can I bid for government projects with a Technical Service License?",
        "answer": "Yes, but you need to obtain the appropriate municipality classification grade and register on the Dubai Government Procurement portal. Higher classification grades (Grade 1-3) are required for large-scale government infrastructure projects."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Technical Service Licensing"
      },
      {
        "type": "paragraph",
        "text": "Dubai's rapid urban development and ambitious infrastructure projects have created exceptional demand for qualified technical service providers. A Technical Service License in UAE enables companies to offer engineering, maintenance, and specialized technical services to the construction, industrial, and commercial sectors."
      },
      {
        "type": "paragraph",
        "text": "From MEP contracting and HVAC maintenance to solar energy installation and fire safety systems, the technical service license covers a comprehensive range of activities. Licensed companies can bid for contracts ranging from residential building maintenance to large-scale industrial projects across the UAE."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
    ]
  },
  {
    "route": "/license/trade-license-dubai",
    "title": "Trade License Dubai",
    "subtitle": "Get your commercial trade license to do business in Dubai",
    "heroImage": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Trade License Dubai",
        "href": "/license/trade-license-dubai"
      }
    ],
    "features": [
      {
        "title": "Commercial Trading",
        "description": "Engage in the import, export, and re-export of goods across all categories permitted by Dubai Economic Department."
      },
      {
        "title": "Warehousing & Distribution",
        "description": "Operate warehouses and distribution centers for storage, packaging, and logistics of commercial goods."
      },
      {
        "title": "Retail Operations",
        "description": "Open retail stores, showrooms, and shopfronts in Dubai's prime commercial districts and shopping malls."
      },
      {
        "title": "E-Commerce Integration",
        "description": "Combine physical retail with online sales channels for a seamless omnichannel trading operation."
      },
      {
        "title": "Agency & Distribution",
        "description": "Act as a commercial agent or distributor for international brands seeking to enter the UAE market."
      },
      {
        "title": "Supply Chain Services",
        "description": "Offer logistics, freight forwarding, customs clearance, and supply chain management services."
      }
    ],
    "benefits": [
      "The most common and recognized business license for commercial activities in Dubai",
      "Ability to trade directly in the local UAE market with no distributor or middleman",
      "100% foreign ownership in Mainland for most commercial activities since 2021 law change",
      "Access to Dubai's 3+ million population and 20+ million annual tourist market",
      "Strategic geographic location with world-class port and airport infrastructure",
      "Flexible legal structures - Sole Establishment, LLC, or Civil Company",
      "Multiple visa quotas based on office size and company structure",
      "Quick processing - trade license issued within 3-7 working days of application"
    ],
    "process": [
      {
        "step": 1,
        "title": "Trade Name Reservation",
        "description": "Select and reserve a unique trade name approved by the Dubai Economic Department (DED)."
      },
      {
        "step": 2,
        "title": "Activity Selection",
        "description": "Choose your commercial activities from the DED's approved activity list with up to 10 activities."
      },
      {
        "step": 3,
        "title": "Initial Approval",
        "description": "Obtain initial approval from DED confirming your eligibility to conduct business in Dubai."
      },
      {
        "step": 4,
        "title": "License Issuance",
        "description": "Sign the tenancy contract, submit all documents, and receive your official Trade License from DED."
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between a Trade License and a General Trading License?",
        "answer": "A Trade License covers specific commercial activities you select during registration (up to 10 activities), while a General Trading License allows unlimited trading across multiple product categories without restrictions on the number of activities."
      },
      {
        "question": "How much does a Trade License in Dubai cost?",
        "answer": "A basic Trade License in Mainland Dubai starts from approximately AED 12,000 to AED 25,000 including registration, license fees, and chamber of commerce membership. Costs increase based on the number of activities, office space, and visa requirements."
      },
      {
        "question": "Can I change my trade name after the license is issued?",
        "answer": "Yes, you can change your trade name by submitting an amendment application to DED. The process takes 1-2 working days and costs approximately AED 1,000-2,000 depending on the type of amendment and administrative fees."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Trade Licenses"
      },
      {
        "type": "paragraph",
        "text": "A Trade License in Dubai is the foundational business license required for any commercial activity in the emirate. Issued by the Dubai Economic Department (DED), this license allows companies to import, export, distribute, and sell goods within the local market and internationally."
      },
      {
        "type": "paragraph",
        "text": "With recent reforms allowing 100% foreign ownership in most commercial activities, Dubai has become even more accessible to international entrepreneurs. Whether you're opening a retail store, launching a distribution business, or establishing a trading company, a Trade License provides the legal framework you need to operate confidently in one of the world's most dynamic economies."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    ]
  },
  {
    "route": "/license/travel-agency",
    "title": "Travel Agency License in Dubai",
    "subtitle": "Start and operate a travel and tourism agency in Dubai",
    "heroImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License",
        "href": "/services/license"
      },
      {
        "label": "Travel Agency License",
        "href": "/license/travel-agency"
      }
    ],
    "features": [
      {
        "title": "Flight Bookings",
        "description": "Reserve and issue airline tickets for domestic and international travel through IATA-accredited systems."
      },
      {
        "title": "Hotel Reservations",
        "description": "Book hotels, resorts, and accommodations worldwide with competitive rates through GDS platforms."
      },
      {
        "title": "Tour Packages",
        "description": "Design and sell curated tour packages including Dubai city tours, desert safaris, and UAE excursions."
      },
      {
        "title": "Visa Services",
        "description": "Assist clients with UAE tourist visa applications, visa extensions, and visa status tracking."
      },
      {
        "title": "Corporate Travel Management",
        "description": "Provide end-to-end corporate travel solutions including booking, expense management, and travel policy compliance."
      },
      {
        "title": "Hajj & Umrah Services",
        "description": "Organize pilgrimage packages with flights, accommodation, and transportation for Hajj and Umrah travelers."
      }
    ],
    "benefits": [
      "Dubai welcomed over 17 million international tourists in 2024 with continued growth",
      "IATA accreditation enables direct ticket issuance and competitive airline commission rates",
      "DTCM licensing ensures credibility and trust with local and international clients",
      "High-profit margins on tour packages and group travel arrangements",
      "Access to GDS platforms like Amadeus, Sabre, and Galileo for real-time bookings",
      "Eligibility for government and corporate travel management contracts",
      "Partnership opportunities with Dubai's 800+ hotels and 100+ airlines",
      "Seasonal revenue peaks during Dubai Shopping Festival, New Year, and summer"
    ],
    "process": [
      {
        "step": 1,
        "title": "DTCM Application",
        "description": "Submit your travel agency application to Dubai Tourism and Commerce Marketing (DTCM) for initial approval."
      },
      {
        "step": 2,
        "title": "IATA Accreditation",
        "description": "Apply for IATA accreditation to issue airline tickets and access global distribution systems."
      },
      {
        "step": 3,
        "title": "Office & Bond",
        "description": "Secure a commercial office and provide a bank guarantee or insurance bond as required by DTCM."
      },
      {
        "step": 4,
        "title": "License & System Setup",
        "description": "Receive your travel agency license and set up your GDS, booking engine, and accounting systems."
      }
    ],
    "faqs": [
      {
        "question": "What is the bank guarantee requirement for a Travel Agency License?",
        "answer": "DTCM requires a bank guarantee or insurance bond ranging from AED 50,000 to AED 200,000 depending on the type of travel services offered. This protects customer payments and ensures compliance with UAE tourism regulations."
      },
      {
        "question": "Do I need IATA accreditation to operate a travel agency in Dubai?",
        "answer": "IATA accreditation is not mandatory for all travel agencies but is highly recommended. Without IATA, you cannot issue airline tickets directly and must work through a consolidator or IATA-accredited partner, which reduces your profit margins."
      },
      {
        "question": "What are the office requirements for a Travel Agency License?",
        "answer": "DTCM requires a physical commercial office with a minimum area of 500 sq ft. The office must have a reception area, customer service counter, and proper signage. Some Free Zones offer tourism-specific facilities with lower space requirements."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "About Travel Agency Licensing"
      },
      {
        "type": "paragraph",
        "text": "Dubai is one of the world's most visited cities, attracting over 17 million overnight visitors annually. A Travel Agency License in Dubai positions your business at the center of this thriving tourism industry, offering services ranging from flight and hotel bookings to comprehensive tour packages and corporate travel management."
      },
      {
        "type": "paragraph",
        "text": "Regulated by the Dubai Tourism and Commerce Marketing (DTCM), travel agencies in Dubai benefit from a robust regulatory framework that ensures consumer protection and industry professionalism. With Dubai's continuous investment in tourism infrastructure and attractions, the travel agency sector offers exceptional growth potential for new entrants."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
    ]
  },
  {
    "route": "/mainland-business-setup-dubai",
    "title": "Mainland Business Setup in Dubai",
    "subtitle": "Operate anywhere in the UAE with full flexibility and unlimited business opportunities",
    "heroImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
    "category": "Mainland Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Mainland",
        "href": "/mainland-business-setup-dubai"
      }
    ],
    "features": [
      {
        "title": "Trade Anywhere in UAE",
        "description": "No restrictions on where you can do business within the UAE."
      },
      {
        "title": "Government Contracts",
        "description": "Eligible to bid for government tenders and contracts."
      },
      {
        "title": "No Limit on Visas",
        "description": "Unlimited visa allocations based on office space."
      },
      {
        "title": "Local Market Access",
        "description": "Direct access to the UAE local market."
      },
      {
        "title": "Multiple Branches",
        "description": "Ability to open multiple branches across the UAE."
      },
      {
        "title": "Full Control",
        "description": "Complete control over your business operations."
      }
    ],
    "benefits": [
      "Trade freely within the UAE and internationally",
      "Bid for government contracts",
      "No restrictions on business activities",
      "Unlimited visa allocations",
      "Ability to open multiple branches",
      "Access to local market",
      "No minimum capital requirement",
      "Full ownership for most activities"
    ],
    "process": [
      {
        "step": 1,
        "title": "Activity Selection",
        "description": "Choose your business activity and license type"
      },
      {
        "step": 2,
        "title": "Name Approval",
        "description": "Get your trade name approved by DED"
      },
      {
        "step": 3,
        "title": "Documentation",
        "description": "Submit required documents and approvals"
      },
      {
        "step": 4,
        "title": "License Issuance",
        "description": "Receive your trade license and start operations"
      }
    ],
    "faqs": [
      {
        "question": "What is a Mainland company?",
        "answer": "A Mainland company is a business entity registered with the Department of Economic Development (DED) that can operate anywhere in the UAE without restrictions."
      },
      {
        "question": "Can foreigners own 100% of a Mainland company?",
        "answer": "Yes, since 2020, foreigners can own 100% of most Mainland companies without requiring a local sponsor."
      },
      {
        "question": "How many visas can I get?",
        "answer": "The number of visas depends on your office space size. Generally, you can get 1 visa per 100 sq ft of office space."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why Choose Mainland Setup?"
      },
      {
        "type": "paragraph",
        "text": "Mainland company setup in Dubai offers the ultimate flexibility for businesses that want to operate without restrictions. Unlike free zones, mainland companies can trade directly with the local UAE market and bid for government contracts."
      },
      {
        "type": "paragraph",
        "text": "With recent reforms allowing 100% foreign ownership for most activities, mainland setup has become even more attractive for international entrepreneurs and investors."
      },
      {
        "type": "paragraph",
        "text": "Our team will guide you through the entire process, from selecting the right activity to obtaining your trade license and all necessary approvals."
      },
      {
        "type": "paragraph",
        "text": "100%"
      },
      {
        "type": "paragraph",
        "text": "Market Access"
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    ]
  },
  {
    "route": "/meydan-company-formation",
    "title": "Meydan Company Formation | Meydan Free Zone Dubai",
    "subtitle": "Launch your business in Meydan Free Zone - Dubai's most elegant free zone located at the iconic Meydan Racecourse with premium lifestyle and business amenities.",
    "heroImage": "https://images.unsplash.com/photo-1613490494582-5f1f11a04a65?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "Meydan",
        "href": "/meydan-company-formation"
      }
    ],
    "features": [
      {
        "title": "Iconic Meydan Racecourse Location",
        "description": "Located at the world-famous Meydan Racecourse complex, offering a prestigious business address with access to Dubai's finest lifestyle and hospitality venues."
      },
      {
        "title": "Lifestyle-Integrated Business Hub",
        "description": "Meydan Free Zone is integrated with hotels, restaurants, a golf course, and luxury residential communities, creating an ideal work-live-play environment."
      },
      {
        "title": "Affordable License Packages",
        "description": "Competitive pricing with license packages starting from AED 9,900, including flexi-desk options and comprehensive visa allocations."
      },
      {
        "title": "Creative & Media Friendly",
        "description": "Specialized licenses for media production, events management, creative agencies, sports management, and entertainment companies."
      },
      {
        "title": "Modern Office & Event Spaces",
        "description": "Access to the Meydan Conference Centre with 5,000-person capacity, ideal for events, exhibitions, and corporate gatherings."
      },
      {
        "title": "Nad Al Sheba Proximity",
        "description": "Located minutes from Downtown Dubai, Business Bay, and Dubai International Airport, providing seamless connectivity across the city."
      }
    ],
    "benefits": [
      "Prestigious Meydan Racecourse business address",
      "100% foreign ownership and full profit repatriation",
      "Zero corporate and personal income tax",
      "Affordable packages starting from AED 9,900",
      "Ideal for media, events, and creative businesses",
      "World-class lifestyle and hospitality amenities",
      "Minutes from Downtown Dubai and Airport",
      "Streamlined visa processing for shareholders and staff"
    ],
    "process": [
      {
        "step": 1,
        "title": "Free Zone Consultation",
        "description": "Discuss your business idea with a Meydan specialist at Yasa Corporate to determine eligibility and the best package for your needs."
      },
      {
        "step": 2,
        "title": "Document Collection",
        "description": "Submit passport copies, shareholder details, and business activity description. We review and prepare your complete application."
      },
      {
        "step": 3,
        "title": "Authority Submission",
        "description": "We submit your application to Meydan Free Zone authority and track the approval process, typically completed within 3-5 days."
      },
      {
        "step": 4,
        "title": "License & Visa Processing",
        "description": "Receive your trade license and complete visa formalities including medical tests, Emirates ID, and residency stamping for a smooth start."
      }
    ],
    "faqs": [
      {
        "question": "What makes Meydan Free Zone different from other Dubai free zones?",
        "answer": "Meydan Free Zone is uniquely integrated with the Meydan Racecourse and hospitality complex, offering a lifestyle-oriented business environment. It is particularly attractive for media, events, sports management, and creative agencies that benefit from the venue's event infrastructure and prestigious address."
      },
      {
        "question": "Can I host events or exhibitions under a Meydan license?",
        "answer": "Yes, Meydan is perfect for events and exhibition companies. The Meydan Conference Centre can host up to 5,000 guests, and license holders can organize events, conferences, exhibitions, and sports tournaments using the venue's world-class facilities."
      },
      {
        "question": "What is the processing time for a Meydan company setup?",
        "answer": "The license issuance process typically takes 3-5 working days from document submission. Visa processing adds approximately 2-3 weeks depending on medical test appointments and immigration approval times."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why Meydan?"
      },
      {
        "type": "paragraph",
        "text": "Meydan Free Zone offers a unique blend of business and lifestyle, located at Dubai's iconic Meydan Racecourse. It is the ideal choice for media, events, creative agencies, and lifestyle brands that want a prestigious address within a vibrant community setting."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate makes Meydan company formation simple and fast. Our team handles everything from license selection and documentation to visa processing and bank account opening, giving you more time to focus on your creative or business vision in Dubai."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1613490494582-5f1f11a04a65?w=800&q=80"
    ]
  },
  {
    "route": "/neet-15",
    "title": "NEET 15",
    "subtitle": "Master productivity with the 15-minute method. Small focus sessions, big results.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "15 Minutes",
        "description": "Focused work sessions"
      },
      {
        "title": "Zero Distractions",
        "description": "Complete focus mode"
      },
      {
        "title": "Big Results",
        "description": "Compound over time"
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "NEET 15"
      },
      {
        "type": "paragraph",
        "text": "Master productivity with the 15-minute method. Small focus sessions, big results."
      },
      {
        "type": "heading",
        "text": "How the NEET 15 Works"
      }
    ],
    "images": []
  },
  {
    "route": "/news-updates",
    "title": "News & Updates",
    "subtitle": "Stay informed with the latest business, legal, and regulatory updates from the UAE",
    "heroImage": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1920&q=80",
    "category": "Business Resources",
    "breadcrumbs": [
      {
        "label": "News",
        "href": "/news-updates"
      }
    ],
    "features": [
      {
        "title": "UAE Announces New Corporate Tax Regulations for 2026",
        "description": "The UAE has released updated guidelines for corporate tax compliance affecting all mainland and free zone companies."
      },
      {
        "title": "Dubai Launches New Entrepreneur Visa Program",
        "description": "Dubai's new entrepreneur visa offers 5-year residency for founders with innovative business concepts."
      },
      {
        "title": "IFZA Reduces Setup Costs for Tech Startups",
        "description": "IFZA announces reduced licensing fees for technology and AI-focused startups to boost innovation."
      },
      {
        "title": "UAE Golden Visa Updates: New Eligibility Criteria",
        "description": "The UAE has expanded Golden Visa eligibility to include more professional categories and investors."
      },
      {
        "title": "DMCC Reports Record Company Formations in Q1 2026",
        "description": "DMCC saw a 35% increase in new company registrations compared to the same period last year."
      },
      {
        "title": "New UAE Labor Law Amendments Effective July 2026",
        "description": "Amendments to UAE labor law introduce more flexible working arrangements and enhanced employee protections."
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [],
    "images": []
  },
  {
    "route": "/offers",
    "title": "Exclusive Deals & Promotions",
    "subtitle": "Take advantage of our special offers and start your business in the UAE at unbeatable prices",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "Free Zone Company Setup",
        "description": "AED 12,000 | Previously AED 15,000 | Business License | 1 Visa Allocation | 100% Ownership | Bank Account Assistance",
        "href": "/contact-us"
      },
      {
        "title": "Mainland Company Setup",
        "description": "AED 17,900 | Previously AED 22,000 | Trade License | Establishment Card | Visa Processing | PRO Services",
        "href": "/contact-us"
      },
      {
        "title": "Offshore Company Setup",
        "description": "AED 18,500 | Previously AED 25,000 | Company Registration | Corporate Bank Account | 100% Tax Free | No Audit Required",
        "href": "/contact-us"
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Exclusive Deals & Promotions"
      },
      {
        "type": "paragraph",
        "text": "Take advantage of our special offers and start your business in the UAE at unbeatable prices"
      }
    ],
    "images": []
  },
  {
    "route": "/office-spaces",
    "title": "Office Spaces Dubai",
    "subtitle": "Flexible office solutions including virtual, co-working, and private offices",
    "heroImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Office Spaces",
        "href": "/office-spaces"
      }
    ],
    "features": [
      {
        "title": "Virtual Office",
        "description": "Prestigious business address starting from AED 5,000/year."
      },
      {
        "title": "Co-Working Spaces",
        "description": "Flexible desk memberships in prime Dubai locations."
      },
      {
        "title": "Private Offices",
        "description": "Dedicated furnished offices for 1-50 person teams."
      },
      {
        "title": "Meeting Rooms",
        "description": "Bookable meeting and conference room facilities."
      },
      {
        "title": "License Included",
        "description": "Some packages include trade license and visa support."
      },
      {
        "title": "Prime Locations",
        "description": "Offices in Downtown, DIFC, Marina, and business parks."
      }
    ],
    "benefits": [
      "Cost-effective business address solutions",
      "No long-term lease commitments required",
      "Access to premium business districts",
      "Professional reception and mail handling",
      "Scalable space as your team grows",
      "Fully furnished and ready to move in",
      "All utilities and internet included",
      "Meeting room credits with memberships"
    ],
    "process": [
      {
        "step": 1,
        "title": "Needs Assessment",
        "description": "Determine office type, size, and location requirements"
      },
      {
        "step": 2,
        "title": "Property Tour",
        "description": "View available spaces in person or virtually"
      },
      {
        "step": 3,
        "title": "Agreement Signing",
        "description": "Sign lease or membership agreement"
      },
      {
        "step": 4,
        "title": "Move In Ready",
        "description": "Receive keys and start working immediately"
      }
    ],
    "faqs": [
      {
        "question": "What is included in a virtual office package?",
        "answer": "Virtual office typically includes a business address, mail handling, lounge access, and meeting room credits. Ideal for companies needing a registered address."
      },
      {
        "question": "Can I use a co-working space for my trade license?",
        "answer": "Yes, many free zones and DED allow co-working spaces as registered office addresses for trade license purposes."
      },
      {
        "question": "What are the most popular office locations in Dubai?",
        "answer": "Popular locations include Business Bay, DIFC, Dubai Marina, Barsha Heights, JLT, and Downtown Dubai for premium business addresses."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Flexible Workspace Solutions"
      },
      {
        "type": "paragraph",
        "text": "Whether you need a virtual business address, a hot desk in a co-working space, or a full private office, we offer flexible solutions across Dubai's most prestigious business locations."
      },
      {
        "type": "paragraph",
        "text": "Our office space packages are designed to accommodate businesses of all sizes, from solo entrepreneurs to growing teams requiring scalable space."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=800&q=80"
    ]
  },
  {
    "route": "/offshore-company-formation-dubai",
    "title": "Offshore Company Formation in Dubai",
    "subtitle": "Set up your offshore company and operate internationally with maximum tax benefits",
    "heroImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    "category": "Offshore Formation",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Offshore",
        "href": "/offshore-company-formation-dubai"
      }
    ],
    "features": [
      {
        "title": "100% Tax Free",
        "description": "Complete exemption from corporate and income tax."
      },
      {
        "title": "Asset Protection",
        "description": "Protect your assets with a secure offshore structure."
      },
      {
        "title": "Privacy & Confidentiality",
        "description": "Complete privacy of ownership and financial information."
      },
      {
        "title": "Multiple Bank Accounts",
        "description": "Open multiple corporate bank accounts internationally."
      },
      {
        "title": "No Audit Required",
        "description": "No mandatory audit or financial reporting requirements."
      },
      {
        "title": "Global Operations",
        "description": "Operate your business globally from the UAE."
      }
    ],
    "benefits": [
      "Complete tax exemption",
      "Asset protection and privacy",
      "No audit requirements",
      "Multiple bank accounts",
      "International credibility",
      "No paid-up share capital",
      "100% foreign ownership",
      "Easy maintenance"
    ],
    "process": [
      {
        "step": 1,
        "title": "Consultation",
        "description": "Discuss your offshore requirements"
      },
      {
        "step": 2,
        "title": "Documentation",
        "description": "Prepare and submit documents"
      },
      {
        "step": 3,
        "title": "Registration",
        "description": "Company registration and incorporation"
      },
      {
        "step": 4,
        "title": "Banking",
        "description": "Corporate bank account opening"
      }
    ],
    "faqs": [
      {
        "question": "What is an Offshore company?",
        "answer": "An Offshore company is a business entity registered in the UAE that operates outside the country, offering tax benefits and asset protection."
      },
      {
        "question": "Can an offshore company open a bank account?",
        "answer": "Yes, offshore companies can open corporate bank accounts in the UAE and internationally."
      },
      {
        "question": "Is offshore company formation legal?",
        "answer": "Yes, offshore company formation is completely legal and regulated by UAE authorities."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why Choose Offshore Setup?"
      },
      {
        "type": "paragraph",
        "text": "Offshore company formation in the UAE provides a tax-efficient structure for businesses that operate internationally. With complete tax exemption, asset protection, and privacy, offshore companies are ideal for international trade and investment."
      },
      {
        "type": "paragraph",
        "text": "Our team will help you set up your offshore company quickly and efficiently, including corporate bank account opening and all necessary documentation."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    ]
  },
  {
    "route": "/pop-up-testing",
    "title": "Pop-up Testing",
    "subtitle": "Testing various pop-up components, modals, and notification styles.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Pop-up Testing"
      },
      {
        "type": "paragraph",
        "text": "Testing various pop-up components, modals, and notification styles."
      },
      {
        "type": "heading",
        "text": "Click to Test Pop-ups"
      },
      {
        "type": "paragraph",
        "text": "Testing for visual appearance, responsiveness, and user experience."
      },
      {
        "type": "heading",
        "text": "Test Modal"
      },
      {
        "type": "paragraph",
        "text": "This is a test modal window. It demonstrates the modal pop-up component with smooth animations."
      }
    ],
    "images": []
  },
  {
    "route": "/privacy-policy",
    "title": "Privacy Policy",
    "subtitle": "How we protect your data and privacy",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Privacy Policy",
        "href": "/privacy-policy"
      }
    ],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Privacy Policy"
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate Service Provider (\"we\", \"our\", or \"us\") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our service."
      },
      {
        "type": "heading",
        "text": "Information Collection"
      },
      {
        "type": "paragraph",
        "text": "We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or subscribe to our newsletter. This may include your name, email address, phone number, and business information."
      },
      {
        "type": "heading",
        "text": "Information Use"
      },
      {
        "type": "paragraph",
        "text": "We use the information we collect to provide and improve our services, respond to your inquiries, send periodic emails about our services, and improve our website."
      },
      {
        "type": "heading",
        "text": "Information Protection"
      },
      {
        "type": "paragraph",
        "text": "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
      },
      {
        "type": "heading",
        "text": "Contact Us"
      },
      {
        "type": "paragraph",
        "text": "If you have any questions about this Privacy Policy, please contact us at contact@yasacsp.com or call us at +971 50 7778009."
      }
    ],
    "images": []
  },
  {
    "route": "/product-registration",
    "title": "Product Registration UAE",
    "subtitle": "Register your products with UAE authorities for market compliance",
    "heroImage": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Product Registration",
        "href": "/product-registration"
      }
    ],
    "features": [
      {
        "title": "ESMA Registration",
        "description": "Product registration with Emirates Standards Authority."
      },
      {
        "title": "Brand Protection",
        "description": "Trademark registration to protect your brand."
      },
      {
        "title": "Labelling Compliance",
        "description": "Ensure product labels meet UAE standards."
      },
      {
        "title": "Food & Beverage Registration",
        "description": "Municipality registration for food products."
      },
      {
        "title": "Electronics & Appliances",
        "description": "Registration for electronic goods and appliances."
      },
      {
        "title": "Cosmetics Registration",
        "description": "Product notification and registration for cosmetics."
      }
    ],
    "benefits": [
      "Legal market access for your products",
      "Brand and trademark protection",
      "Compliance with UAE standards",
      "Avoid product seizure and penalties",
      "Consumer trust and brand credibility",
      "Smooth customs clearance for goods",
      "Multi-category product expertise",
      "End-to-end registration management"
    ],
    "process": [
      {
        "step": 1,
        "title": "Product Category",
        "description": "Determine the regulatory body for your product type"
      },
      {
        "step": 2,
        "title": "Documentation",
        "description": "Prepare test reports, certificates, and specifications"
      },
      {
        "step": 3,
        "title": "Application Submission",
        "description": "Submit registration to ESMA or relevant authority"
      },
      {
        "step": 4,
        "title": "Certificate Issuance",
        "description": "Receive product registration certificate"
      }
    ],
    "faqs": [
      {
        "question": "Which products need ESMA registration?",
        "answer": "ESMA registration is required for regulated products including electronics, appliances, construction materials, toys, and personal protective equipment."
      },
      {
        "question": "How long does product registration take?",
        "answer": "Standard product registration takes 2 to 4 weeks, depending on the product category and required testing."
      },
      {
        "question": "Is product registration valid indefinitely?",
        "answer": "Product registration certificates typically require renewal every 1 to 3 years, depending on the product category."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Product Compliance for UAE Market"
      },
      {
        "type": "paragraph",
        "text": "Bringing products to the UAE market requires registration with the appropriate authorities. Our product registration service covers everything from ESMA certification to municipality approvals."
      },
      {
        "type": "paragraph",
        "text": "We handle the complete registration process, including document preparation, testing coordination, and liaison with regulatory bodies."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    ]
  },
  {
    "route": "/promotions",
    "title": "Promotions & Offers",
    "subtitle": "Take advantage of our exclusive limited-time offers and save big on your business setup.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "Free Visa Package",
        "description": "Get up to 3 free residence visas with our premium company setup package. Limited time offer for new clients."
      },
      {
        "title": "50% Off PRO Services",
        "description": "Save 50% on all PRO and government documentation services when you sign up for our complete setup package."
      },
      {
        "title": "Free Office Space",
        "description": "Enjoy 6 months of free flexi-desk office space with any company formation package in selected free zones."
      },
      {
        "title": "Family Visa Bundle",
        "description": "Setup your company and get family visa processing at no additional cost. Save up to AED 5,000."
      },
      {
        "title": "License Renewal Discount",
        "description": "Renew your trade license with us and get 20% off on all renewal services for the first year."
      },
      {
        "title": "Bank Account Setup",
        "description": "Free corporate bank account opening assistance with any company formation package. Valued at AED 2,500."
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Promotions & Offers"
      },
      {
        "type": "paragraph",
        "text": "Take advantage of our exclusive limited-time offers and save big on your business setup."
      },
      {
        "type": "heading",
        "text": "Don't Miss Out"
      },
      {
        "type": "paragraph",
        "text": "These offers are available for a limited time only. Contact us today to secure your package and start your business journey with maximum savings."
      }
    ],
    "images": []
  },
  {
    "route": "/proposal",
    "title": "Business Proposal",
    "subtitle": "View our comprehensive business proposal tailored to your requirements",
    "heroImage": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Proposal",
        "href": "/proposal"
      }
    ],
    "features": [
      {
        "title": "Customized Solutions",
        "description": "Each proposal is uniquely tailored to match your specific business activities and requirements."
      },
      {
        "title": "Transparent Pricing",
        "description": "Clear breakdown of all costs including government fees, service charges, and additional expenses."
      },
      {
        "title": "Timeline Estimates",
        "description": "Detailed timeline from incorporation to license issuance and visa processing."
      },
      {
        "title": "Multiple Options",
        "description": "Compare different jurisdiction options with side-by-side comparisons of costs and benefits."
      },
      {
        "title": "Compliance Included",
        "description": "All proposals include compliance requirements and post-incorporation obligations."
      },
      {
        "title": "Ongoing Support",
        "description": "Post-setup support services included in our comprehensive business proposals."
      }
    ],
    "benefits": [
      "Tailored to your specific needs",
      "Full cost transparency",
      "Multiple jurisdiction options",
      "Detailed implementation timeline",
      "Visa and PRO services included",
      "Bank account assistance",
      "Post-incorporation support",
      "No hidden fees or charges"
    ],
    "process": [
      {
        "step": 1,
        "title": "Requirements Analysis",
        "description": "We analyze your business requirements"
      },
      {
        "step": 2,
        "title": "Proposal Preparation",
        "description": "Custom proposal with multiple options"
      },
      {
        "step": 3,
        "title": "Review & Refine",
        "description": "Review and refine the proposal with you"
      },
      {
        "step": 4,
        "title": "Approval & Execute",
        "description": "Approve and begin the setup process"
      }
    ],
    "faqs": [
      {
        "question": "What is included in a proposal?",
        "answer": "A proposal includes jurisdiction recommendation, cost breakdown, timeline, visa information, and post-setup services."
      },
      {
        "question": "Is the proposal free?",
        "answer": "Yes, all initial proposals are free with no obligation. You only pay when you decide to proceed."
      },
      {
        "question": "How long is the proposal valid?",
        "answer": "Proposals are typically valid for 30 days from the date of issuance due to fluctuating government fees."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Your Custom Proposal"
      },
      {
        "type": "paragraph",
        "text": "Our proposals are meticulously prepared to give you a complete understanding of your business setup journey, including all costs, timelines, and requirements."
      },
      {
        "type": "paragraph",
        "text": "We present multiple options so you can make an informed decision based on your budget and business goals."
      },
      {
        "type": "heading",
        "text": "Proposal Includes:"
      }
    ],
    "images": []
  },
  {
    "route": "/rakez-business-setup",
    "title": "RAKEZ Business Setup | Ras Al Khaimah Free Zone",
    "subtitle": "Set up your company in RAKEZ - Ras Al Khaimah's flagship free zone offering world-class infrastructure and the lowest setup costs in the UAE.",
    "heroImage": "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "RAKEZ",
        "href": "/rakez-business-setup"
      }
    ],
    "features": [
      {
        "title": "Lowest Setup Costs in UAE",
        "description": "RAKEZ offers some of the most affordable business setup packages in the country, with licenses starting from just AED 5,750, making it ideal for startups."
      },
      {
        "title": "Over 50 Business Activities",
        "description": "Choose from 50+ licensed activities including trading, consulting, industrial, logistics, and media under one single free zone authority."
      },
      {
        "title": "Strategic Location",
        "description": "Situated in Ras Al Khaimah, RAKEZ provides easy access to RAK ports, RAK Airport, and is just 45 minutes from Dubai International Airport."
      },
      {
        "title": "Flexible Office Solutions",
        "description": "Select from co-working spaces, private offices, warehouses, or industrial land plots based on your operational requirements."
      },
      {
        "title": "Industrial & Logistics Focus",
        "description": "RAKEZ is a hub for manufacturing, warehousing, and logistics businesses with dedicated industrial zones and pre-built factory units."
      },
      {
        "title": "Visa & PRO Services",
        "description": "Comprehensive visa processing and PRO services included, with up to 6 visas for flexi-desk packages and more for larger offices."
      }
    ],
    "benefits": [
      "100% foreign ownership with full control of your business",
      "Zero corporate and personal income tax in the UAE",
      "Full repatriation of capital and profits",
      "No currency restrictions or exchange controls",
      "Affordable pricing starting from AED 5,750",
      "Access to RAK's growing economy and tourism sector",
      "Simplified immigration and visa processing",
      "Dedicated account manager for each business"
    ],
    "process": [
      {
        "step": 1,
        "title": "Free Consultation",
        "description": "Speak with a RAKEZ expert at Yasa Corporate to understand the best package and license type for your business activity and budget."
      },
      {
        "step": 2,
        "title": "Document Collection",
        "description": "We handle all paperwork - passport copies, business plan, and application forms - ensuring everything meets RAKEZ requirements."
      },
      {
        "step": 3,
        "title": "Application & Approval",
        "description": "Submit your application to RAKEZ authority with initial approval granted within 24-48 hours."
      },
      {
        "step": 4,
        "title": "License & Visa Issuance",
        "description": "Receive your RAKEZ trade license and proceed with visa stamping, medical tests, and Emirates ID processing."
      }
    ],
    "faqs": [
      {
        "question": "Is RAKEZ a good choice for a manufacturing business?",
        "answer": "Absolutely. RAKEZ has dedicated industrial zones with pre-built factory units, warehouses, and land plots for manufacturing operations. It is one of the few UAE free zones offering such comprehensive industrial infrastructure, with access to RAK's ports for easy export and import."
      },
      {
        "question": "How long does it take to set up a company in RAKEZ?",
        "answer": "RAKEZ company setup typically takes 3-5 working days for license issuance. The complete process including visa stamping and Emirates ID can be completed within 2-3 weeks, depending on document preparation and medical test appointments."
      },
      {
        "question": "Can I live in Dubai while operating a RAKEZ company?",
        "answer": "Yes, many business owners live in Dubai and operate their RAKEZ company since Ras Al Khaimah is only a 40-50 minute drive from Dubai. You can also get a UAE residency visa through your RAKEZ company and choose to reside anywhere in the UAE."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why Choose RAKEZ?"
      },
      {
        "type": "paragraph",
        "text": "RAKEZ is the fastest-growing free zone in the Northern Emirates, offering unbeatable value for entrepreneurs and SMEs. With over 14,000 companies already registered, it provides a robust ecosystem for trading, industrial, and service businesses at a fraction of the cost of Dubai-based free zones."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate is a trusted RAKEZ partner, ensuring seamless company formation from consultation to license delivery. Our team handles all government paperwork, bank account opening, and visa processing so you can start operating with zero stress."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1586528116311-ad97ddc2e1ab?w=800&q=80"
    ]
  },
  {
    "route": "/rakezoffer",
    "title": "RAKEZ Business Setup Offer",
    "subtitle": "Special pricing for company formation in Ras Al Khaimah Economic Zone - save up to 40%",
    "heroImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Free Zones",
        "href": "/free-zones-dubai"
      },
      {
        "label": "RAKEZ Offer",
        "href": "/rakezoffer"
      }
    ],
    "features": [
      {
        "title": "Discounted License Fee",
        "description": "Get your RAKEZ trade license at a significantly reduced rate with our exclusive offer package."
      },
      {
        "title": "Free Flexi Office",
        "description": "Enjoy complimentary flexi-desk office space for the first 6 months of your membership."
      },
      {
        "title": "Visa Package Included",
        "description": "Up to 3 residence visas included in the special offer bundle at no extra cost."
      },
      {
        "title": "PRO Services Covered",
        "description": "All government documentation and PRO services are included in the package price."
      },
      {
        "title": "Bank Account Support",
        "description": "Free assistance with corporate bank account opening at partner UAE banks."
      },
      {
        "title": "Quick Processing",
        "description": "Guaranteed license issuance within 3-5 business days from application submission."
      }
    ],
    "benefits": [
      "Save up to 40% on setup costs",
      "Free flexi office for 6 months",
      "Up to 3 free residence visas",
      "All PRO services included",
      "Bank account opening assistance",
      "100% foreign ownership",
      "Zero corporate tax",
      "Full profit repatriation"
    ],
    "process": [
      {
        "step": 1,
        "title": "Select Package",
        "description": "Choose the RAKEZ package that suits your business"
      },
      {
        "step": 2,
        "title": "Submit Documents",
        "description": "Upload your documents online"
      },
      {
        "step": 3,
        "title": "Fast Approval",
        "description": "Get approved within 3-5 business days"
      },
      {
        "step": 4,
        "title": "Start Operations",
        "description": "Receive your license and begin trading"
      }
    ],
    "faqs": [
      {
        "question": "What is RAKEZ?",
        "answer": "RAKEZ (Ras Al Khaimah Economic Zone) is one of the UAE's fastest-growing free zones, offering cost-effective business setup solutions for entrepreneurs and SMEs."
      },
      {
        "question": "What activities can I register under RAKEZ?",
        "answer": "RAKEZ supports over 40 business activities including trading, consulting, technology, media, logistics, and industrial operations."
      },
      {
        "question": "Can I get a UAE residence visa with RAKEZ?",
        "answer": "Yes, RAKEZ offers residence visa quotas based on your office space, with our special package including up to 3 visas."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "RAKEZ Special Offer"
      },
      {
        "type": "paragraph",
        "text": "RAKEZ offers one of the most affordable and efficient business setup solutions in the UAE. With our exclusive offer, you can establish your company at a fraction of the regular cost."
      },
      {
        "type": "paragraph",
        "text": "Located in Ras Al Khaimah, RAKEZ provides excellent infrastructure and access to markets while maintaining significantly lower setup and operational costs compared to Dubai free zones."
      },
      {
        "type": "paragraph",
        "text": "Starting from"
      },
      {
        "type": "paragraph",
        "text": "AED 9,999"
      },
      {
        "type": "paragraph",
        "text": "All-inclusive package"
      },
      {
        "type": "paragraph",
        "text": "? Trade license + Visa"
      },
      {
        "type": "paragraph",
        "text": "? 6 months free flexi office"
      },
      {
        "type": "paragraph",
        "text": "? PRO services included"
      }
    ],
    "images": []
  },
  {
    "route": "/ramadan",
    "title": "Ramadan Offers",
    "subtitle": "Celebrate the holy month with exclusive discounts on all our business setup packages.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "30% Off Setup",
        "description": "Get 30% off on all company formation packages this Ramadan."
      },
      {
        "title": "Free Iftar Event",
        "description": "Join our networking iftar event for entrepreneurs and investors."
      },
      {
        "title": "Extended Support",
        "description": "Extended support hours during Ramadan, 9AM - 3PM."
      },
      {
        "title": "Silver Package",
        "description": "AED 9,999 | Trade license | 1 visa quota | Flexi desk | PRO services"
      },
      {
        "title": "Gold Package",
        "description": "AED 15,999 | Trade license | 3 visa quota | Office space | PRO + banking"
      },
      {
        "title": "Platinum Package",
        "description": "AED 24,999 | Trade license | 5 visa quota | Premium office | Full support"
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Ramadan Offers"
      },
      {
        "type": "paragraph",
        "text": "Celebrate the holy month with exclusive discounts on all our business setup packages."
      },
      {
        "type": "heading",
        "text": "Ramadan Packages"
      }
    ],
    "images": []
  },
  {
    "route": "/receipt",
    "title": "Payment Receipt",
    "subtitle": "View and download your payment receipt for our services",
    "heroImage": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Receipt",
        "href": "/receipt"
      }
    ],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Payment Successful"
      },
      {
        "type": "paragraph",
        "text": "Transaction completed successfully"
      },
      {
        "type": "paragraph",
        "text": "For any questions regarding your receipt, please contact our support team."
      }
    ],
    "images": []
  },
  {
    "route": "/referral",
    "title": "Referral Program",
    "subtitle": "Refer a friend and earn rewards. Share the success!",
    "heroImage": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Offers",
        "href": "/offers"
      },
      {
        "label": "Referral",
        "href": "/referral"
      }
    ],
    "features": [
      {
        "title": "Earn AED 1,000",
        "description": "Receive AED 1,000 for every successful referral who completes their company setup with us."
      },
      {
        "title": "Your Friend Saves Too",
        "description": "Your referred friend gets 10% off their first service package as a welcome bonus."
      },
      {
        "title": "Unlimited Referrals",
        "description": "There's no limit on how many friends you can refer. The more you refer, the more you earn."
      },
      {
        "title": "Easy Tracking",
        "description": "Track your referrals and rewards through your personal dashboard."
      },
      {
        "title": "Quick Payout",
        "description": "Rewards are processed within 7 business days after your friend's setup is completed."
      },
      {
        "title": "Share Anytime",
        "description": "Share your unique referral link via WhatsApp, email, or social media."
      }
    ],
    "benefits": [
      "Earn AED 1,000 per successful referral",
      "Your friend gets 10% discount",
      "Unlimited earning potential",
      "Quick and easy payout process",
      "Track your referrals online",
      "Share anywhere with a unique link",
      "No expiration on earned rewards",
      "Support existing clients too"
    ],
    "process": [
      {
        "step": 1,
        "title": "Get Your Link",
        "description": "Receive your unique referral link"
      },
      {
        "step": 2,
        "title": "Share with Friends",
        "description": "Share via WhatsApp, email, or social media"
      },
      {
        "step": 3,
        "title": "Friend Signs Up",
        "description": "Your friend completes their business setup"
      },
      {
        "step": 4,
        "title": "Get Rewarded",
        "description": "Receive your AED 1,000 reward"
      }
    ],
    "faqs": [
      {
        "question": "Who can participate?",
        "answer": "Any existing client or partner of Yasa Corporate can participate in the referral program."
      },
      {
        "question": "How do I track my referrals?",
        "answer": "You will receive a unique referral link and dashboard to track all your successful referrals and earnings."
      },
      {
        "question": "When do I get paid?",
        "answer": "Payouts are processed within 7 business days after the referred client completes their first payment."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "How Referral Works"
      },
      {
        "type": "paragraph",
        "text": "Share your unique referral link with friends and colleagues who are looking to start a business in the UAE. When they sign up and complete their company setup, you both win."
      },
      {
        "type": "paragraph",
        "text": "AED 1,000"
      },
      {
        "type": "paragraph",
        "text": "Per Successful Referral"
      }
    ],
    "images": []
  },
  {
    "route": "/register-will",
    "title": "Register a Will in UAE",
    "subtitle": "Protect your assets and ensure your legacy with a legally registered will in the UAE",
    "heroImage": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Register Will",
        "href": "/register-will"
      }
    ],
    "features": [
      {
        "title": "Asset Distribution",
        "description": "Ensure your assets are distributed according to your wishes under UAE law."
      },
      {
        "title": "Guardian Appointment",
        "description": "Appoint legal guardians for minor children in your will."
      },
      {
        "title": "DIFC Wills Service",
        "description": "Registration through the DIFC Wills Service for common law jurisdictions."
      },
      {
        "title": "Abu Dhabi Judicial",
        "description": "Will registration through the Abu Dhabi Judicial Department for local law."
      },
      {
        "title": "Multiple Asset Types",
        "description": "Cover all asset types including property, bank accounts, investments, and business interests."
      },
      {
        "title": "Legal Compliance",
        "description": "Ensure your will complies with all UAE legal requirements and is properly attested."
      }
    ],
    "benefits": [
      "Peace of mind for your family",
      "Assets distributed as you wish",
      "Avoid family disputes",
      "Protect minor children",
      "Shariah-compliant options",
      "Internationally recognized",
      "Fast registration process",
      "Professional legal guidance"
    ],
    "process": [
      {
        "step": 1,
        "title": "Consultation",
        "description": "Discuss your requirements and asset distribution wishes"
      },
      {
        "step": 2,
        "title": "Document Preparation",
        "description": "We draft your will according to UAE regulations"
      },
      {
        "step": 3,
        "title": "Legal Review",
        "description": "Review and finalize the will with legal experts"
      },
      {
        "step": 4,
        "title": "Official Registration",
        "description": "Register your will with the appropriate UAE authority"
      }
    ],
    "faqs": [
      {
        "question": "Do I need a will in the UAE?",
        "answer": "Yes, without a will, your assets may be distributed according to Shariah law which may not align with your wishes."
      },
      {
        "question": "What happens if I die without a will?",
        "answer": "Without a will, your assets are distributed according to UAE inheritance laws, which follow Shariah principles."
      },
      {
        "question": "Can I register a will if I'm not Muslim?",
        "answer": "Yes, non-Muslims can register wills under the DIFC Wills Service or Abu Dhabi Judicial Department which follow common law principles."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Protect Your Legacy"
      },
      {
        "type": "paragraph",
        "text": "Registering a will in the UAE is essential for anyone with assets in the country. Without a registered will, your assets may not be distributed according to your wishes."
      },
      {
        "type": "paragraph",
        "text": "Our legal team specializes in UAE will registration through both the DIFC Courts and Abu Dhabi Judicial Department, ensuring your will is valid and enforceable."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    ]
  },
  {
    "route": "/register-will-farhana",
    "title": "Register a Will - Farhana",
    "subtitle": "Farhana's guide to securing your family's future through proper will registration in the UAE",
    "heroImage": "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Register Will",
        "href": "/register-will"
      },
      {
        "label": "Farhana's Guide",
        "href": "/register-will-farhana"
      }
    ],
    "features": [
      {
        "title": "Family Protection",
        "description": "Ensure your family is taken care of according to your specific wishes and cultural values."
      },
      {
        "title": "Business Succession",
        "description": "Plan for the smooth transition of your business interests to your chosen successors."
      },
      {
        "title": "Property Distribution",
        "description": "Clearly define how your UAE and international properties should be distributed."
      },
      {
        "title": "Charitable Bequests",
        "description": "Include charitable donations and religious bequests in your will as per your values."
      },
      {
        "title": "Digital Assets",
        "description": "Include provisions for digital assets, online accounts, and cryptocurrency holdings."
      },
      {
        "title": "Ongoing Reviews",
        "description": "Regular review and updates to your will as your family and assets grow."
      }
    ],
    "benefits": [
      "Protect your family's future",
      "Honor your cultural and religious wishes",
      "Avoid inheritance disputes",
      "Secure your business legacy",
      "Peace of mind for loved ones",
      "Professional guidance throughout",
      "Shariah-compliant options available",
      "Internationally recognized documentation"
    ],
    "process": [
      {
        "step": 1,
        "title": "Family Consultation",
        "description": "Discuss your family's needs and your wishes"
      },
      {
        "step": 2,
        "title": "Asset Inventory",
        "description": "Full inventory of all your UAE and international assets"
      },
      {
        "step": 3,
        "title": "Will Drafting",
        "description": "Expert drafting of your will with all provisions"
      },
      {
        "step": 4,
        "title": "Registration",
        "description": "Official registration with UAE authorities"
      }
    ],
    "faqs": [
      {
        "question": "Why is a will important for expats in UAE?",
        "answer": "Without a registered will, expat assets in the UAE are distributed according to Shariah law, which may not align with your personal wishes."
      },
      {
        "question": "Can I update my will later?",
        "answer": "Yes, you can update or revoke your will at any time. We recommend reviewing it every 2-3 years or after major life events."
      },
      {
        "question": "How long does will registration take?",
        "answer": "The entire process from consultation to registration typically takes 1-2 weeks, depending on the complexity of your assets."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Farhana's Guide to Will Registration"
      },
      {
        "type": "paragraph",
        "text": "Farhana understands the importance of protecting her family's future. Through proper will registration, she ensures her assets, business, and children are protected according to her wishes."
      },
      {
        "type": "paragraph",
        "text": "Follow Farhana's example and secure your legacy with a professionally registered will in the UAE. Our team provides compassionate, expert guidance throughout the process."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
    ]
  },
  {
    "route": "/remote-work-visa-uae",
    "title": "Remote Work Visa UAE",
    "subtitle": "Live in the UAE while working remotely for your overseas employer",
    "heroImage": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    "category": "Visa & Immigration",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Visa",
        "href": "/services/visa"
      },
      {
        "label": "Remote Work Visa",
        "href": "/remote-work-visa-uae"
      }
    ],
    "features": [
      {
        "title": "One-Year Stay",
        "description": "Valid for 12 months with option to renew."
      },
      {
        "title": "No Employer Sponsorship",
        "description": "Sponsored by yourself without local employer."
      },
      {
        "title": "Family Sponsorship",
        "description": "Sponsor spouse and children under this visa."
      },
      {
        "title": "Fully Remote Allowed",
        "description": "Continue working for your overseas company legally."
      },
      {
        "title": "Bank Account Access",
        "description": "Open a UAE bank account as a resident."
      },
      {
        "title": "Co-Working Spaces",
        "description": "Access to Dubai's world-class co-working facilities."
      }
    ],
    "benefits": [
      "Work from Dubai's tax-free environment",
      "No corporate tax on foreign income",
      "Enjoy UAE's high standard of living",
      "Access to premium healthcare and education",
      "Flexibility to travel in and out of UAE freely",
      "Sponsored by our partner entities",
      "Fast processing in under 2 weeks",
      "Convertible to other visa types if needed"
    ],
    "process": [
      {
        "step": 1,
        "title": "Eligibility Review",
        "description": "Check income and employment requirements"
      },
      {
        "step": 2,
        "title": "Document Submission",
        "description": "Submit passport, employment proof, and bank statements"
      },
      {
        "step": 3,
        "title": "Visa Approval",
        "description": "Receive initial approval from immigration"
      },
      {
        "step": 4,
        "title": "Residency Issued",
        "description": "Medical, ID, and visa stamping process"
      }
    ],
    "faqs": [
      {
        "question": "What is the minimum income requirement?",
        "answer": "You must demonstrate a minimum annual income of USD 35,000 or equivalent from your remote employment or business."
      },
      {
        "question": "Can I work for a UAE company on this visa?",
        "answer": "No, this visa is specifically for individuals employed by companies outside the UAE. Local employment requires a different visa type."
      },
      {
        "question": "Is the remote work visa renewable?",
        "answer": "Yes, the visa is valid for one year and can be renewed as long as you continue to meet the eligibility requirements."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Your Office, Anywhere"
      },
      {
        "type": "paragraph",
        "text": "The UAE Remote Work Visa allows digital nomads and remote employees to reside in the Emirates while working for foreign employers. Enjoy Dubai's vibrant lifestyle without changing your employment arrangements."
      },
      {
        "type": "paragraph",
        "text": "Our team manages the entire application process, ensuring your documentation meets the digital nomad visa requirements set by the UAE immigration authorities."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80"
    ]
  },
  {
    "route": "/sell-any-business",
    "title": "Sell Any Business",
    "subtitle": "List and sell your business with our comprehensive marketplace and advisory services",
    "heroImage": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Sell Business",
        "href": "/sell-any-business"
      }
    ],
    "features": [
      {
        "title": "Business Valuation",
        "description": "Professional valuation services to determine the fair market value of your business."
      },
      {
        "title": "Listing Platform",
        "description": "Access to a curated marketplace of pre-qualified buyers actively seeking businesses."
      },
      {
        "title": "Confidential Marketing",
        "description": "Discreet marketing of your business to qualified buyers without public exposure."
      },
      {
        "title": "Due Diligence Support",
        "description": "Comprehensive due diligence management to ensure a smooth transaction process."
      },
      {
        "title": "Legal Documentation",
        "description": "Preparation and review of all sale agreements, contracts, and transfer documents."
      },
      {
        "title": "Post-Sale Transition",
        "description": "Support during the transition period to ensure business continuity for the new owner."
      }
    ],
    "benefits": [
      "Professional business valuation",
      "Access to serious buyers network",
      "Confidential sale process",
      "Maximum sale price achieved",
      "Legal and compliance support",
      "Smooth ownership transition",
      "No upfront listing fees",
      "Expert negotiation assistance"
    ],
    "process": [
      {
        "step": 1,
        "title": "Business Assessment",
        "description": "Comprehensive assessment and valuation of your business"
      },
      {
        "step": 2,
        "title": "Listing Preparation",
        "description": "Prepare marketing materials and confidential information"
      },
      {
        "step": 3,
        "title": "Buyer Matching",
        "description": "Match with qualified buyers and manage inquiries"
      },
      {
        "step": 4,
        "title": "Transaction Closing",
        "description": "Finalize sale, transfer ownership, and complete payment"
      }
    ],
    "faqs": [
      {
        "question": "How is my business valued?",
        "answer": "Valuation is based on multiple factors including revenue, profit, assets, market position, growth potential, and industry multiples."
      },
      {
        "question": "How long does it take to sell?",
        "answer": "The timeline varies, but most businesses sell within 3-9 months from listing to closing, depending on the industry and price."
      },
      {
        "question": "What types of businesses do you list?",
        "answer": "We list all types of businesses including retail, e-commerce, trading, manufacturing, professional services, and technology companies."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Sell Your Business with Confidence"
      },
      {
        "type": "paragraph",
        "text": "Whether you're retiring, relocating, or pursuing new opportunities, our business sale advisory team helps you achieve the best possible outcome."
      },
      {
        "type": "paragraph",
        "text": "We handle the entire sale process from valuation to closing, ensuring maximum value and a smooth transition for your business."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&q=80"
    ]
  },
  {
    "route": "/services",
    "title": "Services",
    "subtitle": "Explore Services with YASA CSP.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "License Services",
        "description": "Trade license issuance, renewal, modification, and cancellation across all UAE jurisdictions including mainland, free zones, and offshore.",
        "href": "/services/license"
      },
      {
        "title": "Visa Services",
        "description": "Comprehensive visa solutions including residence, dependent, golden, freelancer, and remote work visas for individuals and families.",
        "href": "/services/visa"
      },
      {
        "title": "Finance & Banking",
        "description": "Corporate bank account opening, VAT registration, bookkeeping, and corporate tax advisory services for UAE businesses.",
        "href": "/services/finance-banking"
      },
      {
        "title": "Other Services",
        "description": "Office spaces, customs registration, product registration, PRO services, and business consultancy under one roof.",
        "href": "/services/other"
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [],
    "images": []
  },
  {
    "route": "/services/finance-banking",
    "title": "Finance & Banking",
    "subtitle": "Corporate banking setup, VAT, tax registration and bookkeeping services",
    "heroImage": "https://images.unsplash.com/photo-1565515114970-6d1b1671faf1?w=1920&q=80",
    "category": "Finance & Compliance",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Finance & Banking",
        "href": "/services/finance-banking"
      }
    ],
    "features": [
      {
        "title": "Bank Account Opening",
        "description": "Corporate and personal account setup with UAE banks."
      },
      {
        "title": "VAT Registration",
        "description": "Federal Tax Authority registration for VAT compliance."
      },
      {
        "title": "Corporate Tax Registration",
        "description": "CT registration and advisory for UAE businesses."
      },
      {
        "title": "Bookkeeping Services",
        "description": "Professional bookkeeping and financial record keeping."
      },
      {
        "title": "Multi-Currency Accounts",
        "description": "Accounts supporting AED, USD, EUR, GBP and more."
      },
      {
        "title": "Banking Advisory",
        "description": "Strategic advice on banking structures and facilities."
      }
    ],
    "benefits": [
      "Relationships with 15+ UAE banks",
      "Fast account opening in 3-5 days",
      "Tax registration with FTA included",
      "Ongoing bookkeeping support",
      "Multi-currency transaction capability",
      "Online banking setup assistance",
      "Compliance and regulatory guidance",
      "Dedicated finance relationship manager"
    ],
    "process": [
      {
        "step": 1,
        "title": "Needs Assessment",
        "description": "Evaluate banking and tax requirements for your business"
      },
      {
        "step": 2,
        "title": "Bank Selection",
        "description": "Match with suitable banks based on your profile"
      },
      {
        "step": 3,
        "title": "Application Processing",
        "description": "Prepare documents and submit to selected banks"
      },
      {
        "step": 4,
        "title": "Account Activation",
        "description": "Activate accounts and set up online banking"
      }
    ],
    "faqs": [
      {
        "question": "Which banks do you work with?",
        "answer": "We partner with Emirates NBD, ADCB, Mashreq, RAKBANK, FAB, CBD, and over 10 other leading UAE banks."
      },
      {
        "question": "What is the minimum deposit for corporate accounts?",
        "answer": "Minimum deposits vary by bank, ranging from AED 0 for some digital accounts to AED 50,000 for premium accounts."
      },
      {
        "question": "Do you handle VAT registration for existing businesses?",
        "answer": "Yes, we handle new VAT registration, VAT return filing, and corporate tax registration for both new and existing businesses."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Financial Solutions for Business"
      },
      {
        "type": "paragraph",
        "text": "Our finance and banking services ensure your business has the right financial infrastructure from day one. We facilitate bank account openings, handle tax registrations, and maintain your financial records."
      },
      {
        "type": "paragraph",
        "text": "With relationships across UAE's banking sector and deep knowledge of FTA requirements, we provide complete financial compliance and banking support."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
    ]
  },
  {
    "route": "/services/license",
    "title": "License Services",
    "subtitle": "Complete trade license solutions for mainland, free zone, and offshore companies",
    "heroImage": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License Services",
        "href": "/services/license"
      }
    ],
    "features": [
      {
        "title": "New License Issuance",
        "description": "Fresh trade license setup in any UAE jurisdiction."
      },
      {
        "title": "License Renewal",
        "description": "Timely renewal of trade licenses with compliance checks."
      },
      {
        "title": "License Modification",
        "description": "Change activities, partners, or company name on license."
      },
      {
        "title": "License Cancellation",
        "description": "Complete closure of trade license with all authorities."
      },
      {
        "title": "Freeze License",
        "description": "Temporarily freeze your license without cancellation."
      },
      {
        "title": "Commercial Registration",
        "description": "CR document issuance and renewal services."
      }
    ],
    "benefits": [
      "End-to-end license management",
      "Dedicated license specialist assigned",
      "Digital tracking of all applications",
      "Compliance and regulatory guidance",
      "Multi-jurisdiction expertise",
      "Transparent pricing with no surprises",
      "Fast processing times guaranteed",
      "Post-issuance support included"
    ],
    "process": [
      {
        "step": 1,
        "title": "Requirement Analysis",
        "description": "Understand business activities and select jurisdiction"
      },
      {
        "step": 2,
        "title": "Document Preparation",
        "description": "Prepare MOA, shareholder agreements, and applications"
      },
      {
        "step": 3,
        "title": "Authority Submission",
        "description": "Submit to DED, free zone or relevant authority"
      },
      {
        "step": 4,
        "title": "License Delivery",
        "description": "Receive trade license and complete post-approval steps"
      }
    ],
    "faqs": [
      {
        "question": "How long does it take to get a new trade license?",
        "answer": "Trade license issuance typically takes 3 to 7 working days in free zones and 5 to 10 working days for mainland companies."
      },
      {
        "question": "Can I modify my existing trade license activities?",
        "answer": "Yes, you can add, remove, or change business activities through a license modification application with the relevant authority."
      },
      {
        "question": "What happens if my license expires?",
        "answer": "Operating with an expired license incurs fines. We recommend renewing at least 30 days before expiry to avoid penalties."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Expert License Management"
      },
      {
        "type": "paragraph",
        "text": "Our license services cover every stage of your trade license lifecycle, from initial issuance through renewal, modification, and eventual cancellation if needed."
      },
      {
        "type": "paragraph",
        "text": "We handle all interactions with the Department of Economic Development, free zone authorities, and other regulatory bodies on your behalf."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    ]
  },
  {
    "route": "/services/other",
    "title": "Other Services",
    "subtitle": "Additional business support services including office spaces, customs, and PRO",
    "heroImage": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Other Services",
        "href": "/services/other"
      }
    ],
    "features": [
      {
        "title": "Office Spaces",
        "description": "Virtual, co-working, and dedicated office spaces across UAE."
      },
      {
        "title": "Customs Registration",
        "description": "Customs code registration for import and export businesses."
      },
      {
        "title": "Product Registration",
        "description": "UAE product registration for consumer goods and electronics."
      },
      {
        "title": "PRO Services",
        "description": "Government document processing and attestation services."
      },
      {
        "title": "Corporate Tax Setup",
        "description": "CT registration, filing, and compliance for businesses."
      },
      {
        "title": "Business Consultancy",
        "description": "Strategic advice on UAE market entry and expansion."
      }
    ],
    "benefits": [
      "Single point of contact for all services",
      "Flexible office solutions for any budget",
      "Customs and trade documentation handled",
      "Product compliance and registration support",
      "Government liaison and PRO representation",
      "Market entry strategy and planning",
      "Cost-effective service packages available",
      "Experienced multi-lingual consultants"
    ],
    "process": [
      {
        "step": 1,
        "title": "Service Selection",
        "description": "Choose from our range of additional services"
      },
      {
        "step": 2,
        "title": "Requirements Brief",
        "description": "Discuss specific needs and documentation required"
      },
      {
        "step": 3,
        "title": "Service Delivery",
        "description": "We execute the service with regular progress updates"
      },
      {
        "step": 4,
        "title": "Completion & Support",
        "description": "Deliver completed work with ongoing support"
      }
    ],
    "faqs": [
      {
        "question": "What types of office spaces do you offer?",
        "answer": "We provide virtual offices starting from AED 5,000/year, co-working memberships, and private offices in prime business locations across Dubai."
      },
      {
        "question": "How long does customs registration take?",
        "answer": "Customs code registration typically takes 3 to 5 business days once all required trade documents are submitted."
      },
      {
        "question": "What are PRO services?",
        "answer": "PRO (Public Relations Officer) services include government document processing, attestation, visa stamping, and liaison with UAE authorities."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Beyond Business Setup"
      },
      {
        "type": "paragraph",
        "text": "Our other services cover every additional requirement your business might need, from physical office space to customs registration and ongoing PRO support."
      },
      {
        "type": "paragraph",
        "text": "We serve as your complete business partner, ensuring you have all the operational pieces in place to run your UAE business smoothly."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
    ]
  },
  {
    "route": "/services/visa",
    "title": "Visa Services",
    "subtitle": "End-to-end UAE visa solutions for individuals, families, and businesses",
    "heroImage": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&q=80",
    "category": "Visa & Immigration",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Visa Services",
        "href": "/services/visa"
      }
    ],
    "features": [
      {
        "title": "Residence Visas",
        "description": "Employment, investment, and family residence visas for all categories."
      },
      {
        "title": "Golden Visas",
        "description": "5 and 10 year long-term residence visas for investors and talent."
      },
      {
        "title": "Freelancer Visas",
        "description": "Independent work and residence permits for freelancers."
      },
      {
        "title": "Dependent Visas",
        "description": "Family sponsorship visas for spouse, children, and parents."
      },
      {
        "title": "Remote Work Visa",
        "description": "One year residency for digital nomads and remote employees."
      },
      {
        "title": "Visa Renewals",
        "description": "Hassle-free renewal of all visa types with timely reminders."
      }
    ],
    "benefits": [
      "Complete visa category coverage",
      "Expert immigration consultants",
      "Digital application tracking",
      "Fast processing with priority options",
      "Family package discounts available",
      "Post-visa support and reminders",
      "Medical and Emirates ID coordination",
      "Doorstep document collection"
    ],
    "process": [
      {
        "step": 1,
        "title": "Visa Consultation",
        "description": "Assess requirements and recommend optimal visa type"
      },
      {
        "step": 2,
        "title": "Document Collection",
        "description": "Gather, attest, and prepare all required documents"
      },
      {
        "step": 3,
        "title": "Application & Follow-up",
        "description": "Submit to immigration authorities and track progress"
      },
      {
        "step": 4,
        "title": "Visa Issuance",
        "description": "Receive visa, Emirates ID, and complete formalities"
      }
    ],
    "faqs": [
      {
        "question": "Which visa type is best for investors?",
        "answer": "Investor visas and Golden Visas are most suitable, offering longer validity and additional benefits like family sponsorship and 100% ownership."
      },
      {
        "question": "Can I switch visa types while in the UAE?",
        "answer": "Yes, you can cancel your existing visa and apply for a new category, subject to meeting the new visa's eligibility requirements."
      },
      {
        "question": "How many visas has Yasa Corporate processed?",
        "answer": "We have successfully processed over 10,000 visas across all categories with a 98% approval rate."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Your Visa, Our Expertise"
      },
      {
        "type": "paragraph",
        "text": "Whether you need a residence visa for employment, a Golden Visa for long-term stability, or a freelance visa for independent work, our team has the expertise to deliver."
      },
      {
        "type": "paragraph",
        "text": "We stay current with UAE immigration regulations and maintain strong relationships with visa processing centres to ensure smooth and timely approvals."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
    ]
  },
  {
    "route": "/setup-dubai",
    "title": "Setup in Dubai",
    "subtitle": "The ultimate destination for global business - set up your Dubai company with ease",
    "heroImage": "https://images.unsplash.com/photo-1582672060465-ff97f36f57a5?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Setup Dubai",
        "href": "/setup-dubai"
      }
    ],
    "features": [
      {
        "title": "Global Business Hub",
        "description": "Dubai connects you to over 2 billion consumers across the Middle East, Africa, and Asia."
      },
      {
        "title": "World-Class Ports & Airports",
        "description": "Access Jebel Ali Port, Dubai International Airport, and Al Maktoum International Airport."
      },
      {
        "title": "Innovation Ecosystem",
        "description": "Thriving startup scene with accelerators, co-working spaces, and innovation centers."
      },
      {
        "title": "Real Estate Opportunities",
        "description": "Freehold property ownership options for businesses and investors."
      },
      {
        "title": "Lifestyle & Talent",
        "description": "Attract top talent with Dubai's exceptional quality of life and safety."
      },
      {
        "title": "Digital Government",
        "description": "Smart government services for quick and efficient business processes."
      }
    ],
    "benefits": [
      "Gateway to regional markets",
      "Excellent infrastructure and logistics",
      "No personal or corporate tax in free zones",
      "100% foreign ownership allowed",
      "Strategic time zone between East and West",
      "High standard of living and safety",
      "Modern legal framework",
      "Diverse multicultural environment"
    ],
    "process": [
      {
        "step": 1,
        "title": "Business Advisory",
        "description": "Free consultation on the best setup option in Dubai"
      },
      {
        "step": 2,
        "title": "Jurisdiction Selection",
        "description": "Choose between mainland, free zone, or offshore"
      },
      {
        "step": 3,
        "title": "Company Registration",
        "description": "Complete registration and documentation process"
      },
      {
        "step": 4,
        "title": "Post-Setup Services",
        "description": "Visa processing, banking, and ongoing support"
      }
    ],
    "faqs": [
      {
        "question": "Is Dubai good for small businesses?",
        "answer": "Absolutely. Dubai offers numerous options for small businesses including flexi-desks, co-working spaces, and affordable free zone packages."
      },
      {
        "question": "Can I open a bank account for my Dubai company?",
        "answer": "Yes, we assist with corporate bank account opening at major UAE banks including Emirates NBD, ADCB, and Mashreq."
      },
      {
        "question": "What is the best free zone in Dubai?",
        "answer": "The best free zone depends on your business activity. Popular options include IFZA, DMCC, Dubai Silicon Oasis, and Meydan."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Dubai Awaits You"
      },
      {
        "type": "paragraph",
        "text": "Dubai has transformed into a global business powerhouse, offering unmatched infrastructure, strategic location, and a pro-business environment that attracts entrepreneurs from every corner of the world."
      },
      {
        "type": "paragraph",
        "text": "Whether you choose a free zone or mainland setup, our team ensures a smooth and efficient company formation process tailored to your needs."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1518684079-3c5a3bebe9b9?w=800&q=80"
    ]
  },
  {
    "route": "/shams-business-setup",
    "title": "SHAMS Business Setup | Sharjah Free Zone",
    "subtitle": "Start your business in SHAMS - Sharjah's premier multi-purpose free zone offering industrial, commercial, and media licenses at competitive rates.",
    "heroImage": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "SHAMS",
        "href": "/shams-business-setup"
      }
    ],
    "features": [
      {
        "title": "Multi-Purpose Free Zone",
        "description": "SHAMS supports commercial, industrial, professional, and media activities under one authority, offering maximum flexibility for diverse business models."
      },
      {
        "title": "Industrial & Warehousing Focus",
        "description": "Dedicated industrial zones with ready-built factories, warehouses, and storage facilities for manufacturing packaging and logistics companies."
      },
      {
        "title": "Competitive Pricing Structure",
        "description": "License packages starting from AED 8,000 with affordable rent for offices and warehouses, significantly lower than Dubai free zones."
      },
      {
        "title": "Sharjah Airport Connectivity",
        "description": "Located near Sharjah International Airport with direct access to major highways connecting to Dubai, Abu Dhabi, and the Northern Emirates."
      },
      {
        "title": "Flexible Office & Industrial Spaces",
        "description": "Choose from flexi-desks, executive offices, showrooms, warehouses, and industrial plots sized to your operational requirements."
      },
      {
        "title": "Employee Visa Support",
        "description": "Comprehensive visa allocation with packages supporting up to 6 visas for flexi-desk and more for warehouse and industrial setups."
      }
    ],
    "benefits": [
      "100% foreign ownership with no local partner needed",
      "Zero corporate and personal tax in the UAE",
      "Full repatriation of profits and capital",
      "Lower operational costs compared to Dubai free zones",
      "Access to Sharjah's industrial and logistics ecosystem",
      "Quick 3-5 day license issuance process",
      "Simplified visa processing for staff and dependents",
      "Strategic location with easy access to all UAE emirates"
    ],
    "process": [
      {
        "step": 1,
        "title": "Business Consultation",
        "description": "Discuss your business activity and requirements with our SHAMS specialist to determine the ideal license type and package."
      },
      {
        "step": 2,
        "title": "Document Preparation",
        "description": "We compile and verify all required documents including passport copies, NOC (if applicable), and completed application forms."
      },
      {
        "step": 3,
        "title": "License Application",
        "description": "Submit your application to SHAMS authority with initial approval typically granted within 24-48 hours."
      },
      {
        "step": 4,
        "title": "License & Visa Processing",
        "description": "Receive your trade license and proceed with employee visa stamping, medical fitness tests, and Emirates ID enrollment."
      }
    ],
    "faqs": [
      {
        "question": "What activities can I license under SHAMS?",
        "answer": "SHAMS covers over 1,000 business activities across commercial trading, general trading, manufacturing, packaging, logistics, professional services, consulting, media, and education. It is one of the most versatile free zones in Sharjah for diverse business operations."
      },
      {
        "question": "Is SHAMS suitable for e-commerce businesses?",
        "answer": "Yes, SHAMS is an excellent choice for e-commerce businesses. It offers e-commerce license packages that include warehouse space for inventory storage and fulfillment, making it ideal for online retailers looking to serve the UAE and Middle East markets."
      },
      {
        "question": "Can I convert my existing mainland license to SHAMS?",
        "answer": "Yes, you can transfer your existing mainland or other free zone license to SHAMS. The process involves obtaining a NOC from your current sponsor (if applicable) and submitting a transfer application. Our team handles the entire conversion process on your behalf."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why Set Up in SHAMS?"
      },
      {
        "type": "paragraph",
        "text": "SHAMS (Sharjah Free Zone) is one of the most versatile free zones in the Northern Emirates, offering commercial, industrial, and media licenses at highly competitive rates. With its strategic location near Sharjah Airport and major highways, it provides excellent connectivity for businesses serving the entire UAE market."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate simplifies SHAMS company setup with end-to-end support - from license selection and documentation to visa processing and bank account opening. Our experienced consultants ensure your business is operational in the shortest possible time."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
    ]
  },
  {
    "route": "/silicon-oasis-company-formation",
    "title": "Dubai Silicon Oasis Company Formation | DSO Free Zone",
    "subtitle": "Launch your tech business in Dubai Silicon Oasis - Dubai's premier technology park and innovation hub with world-class infrastructure for digital enterprises.",
    "heroImage": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "Dubai Silicon Oasis",
        "href": "/silicon-oasis-company-formation"
      }
    ],
    "features": [
      {
        "title": "Technology-Focused Ecosystem",
        "description": "DSO is Dubai's dedicated technology park with specialized infrastructure for IT, software development, semiconductors, AI, IoT, and blockchain companies."
      },
      {
        "title": "DSO Digital Park",
        "description": "Access the DSO Digital Park co-working and innovation campus with over 200 tech startups, accelerators, and R&D centers in a collaborative environment."
      },
      {
        "title": "Silicon Oasis Headquarters",
        "description": "Modern Grade A office buildings designed for tech companies, with high-speed fiber internet, smart building management, and 24/7 operational support."
      },
      {
        "title": "Innovation Centre & Labs",
        "description": "State-of-the-art R&D labs, prototyping facilities, and testing centers for hardware and software development, including a dedicated AI and robotics lab."
      },
      {
        "title": "Intel & Huawei Partnerships",
        "description": "Home to Intel's MENA innovation hub and Huawei's regional training centre, providing DSO companies with access to global tech expertise and training."
      },
      {
        "title": "Residential Community Integration",
        "description": "DSO is a unique integrated free zone with residential apartments, villas, hotels, schools, and retail - allowing you to live and work in the same community."
      }
    ],
    "benefits": [
      "100% foreign ownership for tech companies",
      "Zero corporate and personal income tax",
      "Full profit repatriation with no restrictions",
      "Purpose-built tech infrastructure and labs",
      "Access to global tech partnerships (Intel, Huawei)",
      "Integrated live-work community environment",
      "Fast-track visa processing for tech talent",
      "Close to Dubai International Airport and Downtown"
    ],
    "process": [
      {
        "step": 1,
        "title": "Tech Business Consultation",
        "description": "Discuss your technology business with our DSO specialist to determine the best license category - commercial, professional, or industrial."
      },
      {
        "step": 2,
        "title": "Documentation & Application",
        "description": "Submit company documents, shareholder details, and a business plan. We ensure everything meets DSO's tech sector requirements."
      },
      {
        "step": 3,
        "title": "Approval & Office Selection",
        "description": "Get your application approved within 2-4 days and select your office space from DSO's range of flexi-desks, serviced offices, or tech labs."
      },
      {
        "step": 4,
        "title": "License & Talent Visas",
        "description": "Receive your DSO trade license and process employment visas for your tech talent, including fast-track options for skilled professionals."
      }
    ],
    "faqs": [
      {
        "question": "What makes Dubai Silicon Oasis unique among UAE free zones?",
        "answer": "DSO is the only integrated free zone in Dubai that combines a technology park with a residential community. It offers specialized infrastructure for tech companies including R&D labs, prototyping facilities, and high-speed fiber connectivity, plus the unique advantage of having residential apartments, villas, schools, and retail within the same zone - creating a true live-work ecosystem."
      },
      {
        "question": "Can I get a license for AI, blockchain, or fintech in DSO?",
        "answer": "Absolutely. DSO actively encourages emerging technology sectors and offers specific licenses for AI development, blockchain solutions, fintech services, cybersecurity, and IoT companies. DSO also partners with the Dubai Blockchain Centre and hosts various tech-focused accelerators and innovation programs."
      },
      {
        "question": "What office spaces are available for tech startups in DSO?",
        "answer": "DSO offers a wide range of options including affordable flexi-desks starting from AED 12,000 per year, serviced offices for small teams, dedicated private offices, and R&D lab spaces for hardware and software development. The DSO Digital Park also features co-working spaces designed specifically for early-stage tech startups."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why Dubai Silicon Oasis?"
      },
      {
        "type": "paragraph",
        "text": "Dubai Silicon Oasis (DSO) is the UAE's premier technology park, offering a unique ecosystem for tech companies ranging from early-stage startups to multinational corporations. With specialized infrastructure including R&D labs, innovation centres, and global tech partnerships, DSO provides everything a digital business needs to thrive."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate is a trusted DSO setup partner. We provide end-to-end company formation services - from license selection and documentation to office setup, visa processing, and bank account opening - ensuring your tech business launches smoothly in Dubai's innovation hub."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
    ]
  },
  {
    "route": "/sitemap",
    "title": "Sitemap",
    "subtitle": "Explore all pages and services available on Yasa Corporate",
    "heroImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Sitemap",
        "href": "/sitemap"
      }
    ],
    "features": [
      {
        "title": "Company Setup",
        "description": "Company Setup Overview | Mainland Setup | Free Zone Setup | Offshore Formation | Start Business UAE | Start Company UAE | Setup Dubai | Free Zones Dubai",
        "links": [
          {
            "label": "Company Setup Overview",
            "href": "/company-setup"
          },
          {
            "label": "Mainland Setup",
            "href": "/mainland-business-setup-dubai"
          },
          {
            "label": "Free Zone Setup",
            "href": "/freezone-business-setup-dubai"
          },
          {
            "label": "Offshore Formation",
            "href": "/offshore-company-formation-dubai"
          },
          {
            "label": "Start Business UAE",
            "href": "/start-business-uae"
          },
          {
            "label": "Start Company UAE",
            "href": "/start-company-in-uae"
          },
          {
            "label": "Setup Dubai",
            "href": "/setup-dubai"
          },
          {
            "label": "Free Zones Dubai",
            "href": "/free-zones-dubai"
          }
        ]
      },
      {
        "title": "Licensing",
        "description": "Trade License | Influencer License | License Renewal | License Modification | License Cancellation",
        "links": [
          {
            "label": "Trade License",
            "href": "/services/license"
          },
          {
            "label": "Influencer License",
            "href": "/influencer-license"
          },
          {
            "label": "License Renewal",
            "href": "/trade-license-renewal-uae"
          },
          {
            "label": "License Modification",
            "href": "/trade-license-modification-uae"
          },
          {
            "label": "License Cancellation",
            "href": "/trade-license-cancellation"
          }
        ]
      },
      {
        "title": "Visa & Immigration",
        "description": "UAE Residence Visa | Golden Visa | Freelancer Visa | Remote Work Visa | Dependent Visa | Visa Medical & EID",
        "links": [
          {
            "label": "UAE Residence Visa",
            "href": "/uae-residence-visa"
          },
          {
            "label": "Golden Visa",
            "href": "/golden-visa-in-dubai-uae-decisive-zone"
          },
          {
            "label": "Freelancer Visa",
            "href": "/freelancer-visa-uae"
          },
          {
            "label": "Remote Work Visa",
            "href": "/remote-work-visa-uae"
          },
          {
            "label": "Dependent Visa",
            "href": "/dependent-visa-uae"
          },
          {
            "label": "Visa Medical & EID",
            "href": "/vip-medical-and-eid"
          }
        ]
      },
      {
        "title": "Services",
        "description": "All Services | Corporate Tax | VAT Registration | Bank Account Opening | PRO Services | Office Spaces",
        "links": [
          {
            "label": "All Services",
            "href": "/services"
          },
          {
            "label": "Corporate Tax",
            "href": "/corporate-tax"
          },
          {
            "label": "VAT Registration",
            "href": "/vat-registration-bookkeeping"
          },
          {
            "label": "Bank Account Opening",
            "href": "/bank-account-opening"
          },
          {
            "label": "PRO Services",
            "href": "/services"
          },
          {
            "label": "Office Spaces",
            "href": "/office-spaces"
          }
        ]
      },
      {
        "title": "Company",
        "description": "About Us | Contact Us | Blog | News & Updates | Careers | Privacy Policy | Terms & Conditions",
        "links": [
          {
            "label": "About Us",
            "href": "/about"
          },
          {
            "label": "Contact Us",
            "href": "/contact"
          },
          {
            "label": "Blog",
            "href": "/blog"
          },
          {
            "label": "News & Updates",
            "href": "/news-updates"
          },
          {
            "label": "Careers",
            "href": "/careers"
          },
          {
            "label": "Privacy Policy",
            "href": "/privacy-policy"
          },
          {
            "label": "Terms & Conditions",
            "href": "/terms-and-conditions"
          }
        ]
      },
      {
        "title": "Offers & Promotions",
        "description": "Promotions | Giveaway | Referral Program | Ramadan Offers | Free Visa Package",
        "links": [
          {
            "label": "Promotions",
            "href": "/promotions"
          },
          {
            "label": "Giveaway",
            "href": "/giveaway"
          },
          {
            "label": "Referral Program",
            "href": "/referral"
          },
          {
            "label": "Ramadan Offers",
            "href": "/ramadan"
          },
          {
            "label": "Free Visa Package",
            "href": "/free-visa-for-life-package"
          }
        ]
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [],
    "images": []
  },
  {
    "route": "/smartbusinesses",
    "title": "Smart Business Solutions",
    "subtitle": "Leverage technology and innovation to build a smarter, more efficient business in the UAE",
    "heroImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Smart Business",
        "href": "/smartbusinesses"
      }
    ],
    "features": [
      {
        "title": "Digital-First Setup",
        "description": "Fully digital incorporation process with minimal paperwork and fast turnaround times."
      },
      {
        "title": "AI-Powered Tools",
        "description": "Access to AI-driven business analytics, compliance monitoring, and reporting tools."
      },
      {
        "title": "Cloud Infrastructure",
        "description": "Cloud-based business management systems for remote team coordination and operations."
      },
      {
        "title": "Smart Office Integration",
        "description": "IoT-enabled smart offices with automated climate control, booking systems, and security."
      },
      {
        "title": "E-Commerce Ready",
        "description": "Integrated e-commerce solutions with payment gateways, logistics, and digital marketing."
      },
      {
        "title": "Blockchain Solutions",
        "description": "Blockchain-based document verification and smart contract services for secure transactions."
      }
    ],
    "benefits": [
      "80% faster setup with digital processes",
      "Reduce operational costs by up to 40%",
      "Real-time business analytics",
      "Remote team management capabilities",
      "Automated compliance monitoring",
      "Enhanced data security and privacy",
      "Scalable cloud infrastructure",
      "Future-proof technology stack"
    ],
    "process": [
      {
        "step": 1,
        "title": "Digital Consultation",
        "description": "Online consultation to understand your smart business needs"
      },
      {
        "step": 2,
        "title": "Tech Stack Selection",
        "description": "Choose your digital tools and platforms"
      },
      {
        "step": 3,
        "title": "Smart Integration",
        "description": "Integrate all systems and set up digital workflows"
      },
      {
        "step": 4,
        "title": "Launch & Optimize",
        "description": "Launch your smart business and optimize for growth"
      }
    ],
    "faqs": [
      {
        "question": "What is a smart business?",
        "answer": "A smart business leverages technology, automation, and data analytics to optimize operations, reduce costs, and drive growth."
      },
      {
        "question": "Do I need technical expertise?",
        "answer": "No, our smart business solutions are designed to be user-friendly with ongoing support from our technical team."
      },
      {
        "question": "Can I integrate existing systems?",
        "answer": "Yes, our solutions are compatible with most existing business systems and can be customized to your needs."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Build Smarter"
      },
      {
        "type": "paragraph",
        "text": "The future of business is digital, and we help you build a technology-driven enterprise from day one. Our smart business solutions combine company formation with cutting-edge digital tools."
      },
      {
        "type": "paragraph",
        "text": "From AI-powered analytics to blockchain verification, we ensure your business is equipped for the digital age."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
    ]
  },
  {
    "route": "/spc-business-setup",
    "title": "SPC Business Setup | Sharjah Publishing City Free Zone",
    "subtitle": "Launch your publishing, media, or creative business in Sharjah Publishing City - the UAE's first free zone dedicated to the publishing and knowledge industry.",
    "heroImage": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&q=80",
    "category": "Free Zone Setup",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Free Zone",
        "href": "/freezone-business-setup-dubai"
      },
      {
        "label": "SPC",
        "href": "/spc-business-setup"
      }
    ],
    "features": [
      {
        "title": "Publishing-Focused Ecosystem",
        "description": "SPC is the UAE's only free zone purpose-built for publishing, printing, media, translation, and creative content businesses with tailored infrastructure."
      },
      {
        "title": "Printing & Distribution Facilities",
        "description": "Access state-of-the-art printing presses, binding services, and a dedicated logistics network for book and media distribution across the Middle East."
      },
      {
        "title": "Affordable License Packages",
        "description": "Competitive pricing for publishing and media licenses starting from AED 9,000, with flexible payment plans available for startups."
      },
      {
        "title": "Strategic Location in Sharjah",
        "description": "Located near Sharjah International Airport and major highways, SPC offers easy connectivity to Dubai, Abu Dhabi, and the Northern Emirates."
      },
      {
        "title": "UNESCO World Book Capital",
        "description": "Benefit from Sharjah's status as a UNESCO World Book Capital and its thriving literary and cultural scene, attracting global publishers and authors."
      },
      {
        "title": "Integrated Business Services",
        "description": "Enjoy visa processing, PRO services, bank account assistance, and ongoing administrative support all under one roof."
      }
    ],
    "benefits": [
      "100% foreign ownership for publishing and media businesses",
      "Zero corporate and personal income tax",
      "Full profit and capital repatriation",
      "Access to SPC's printing and distribution network",
      "Networking opportunities with global publishers",
      "Strategic location in Sharjah's cultural district",
      "Streamlined visa processing for employees and dependents",
      "Dedicated support from SPC's business development team"
    ],
    "process": [
      {
        "step": 1,
        "title": "Business Activity Review",
        "description": "Consult with our SPC specialist to confirm your publishing or media activity qualifies and select the appropriate license package."
      },
      {
        "step": 2,
        "title": "Document Submission",
        "description": "Submit passport copies, business plan, and completed application forms. Yasa Corporate reviews everything for accuracy."
      },
      {
        "step": 3,
        "title": "Authority Approval",
        "description": "SPC reviews and approves your application within 2-4 working days, issuing the initial approval certificate."
      },
      {
        "step": 4,
        "title": "License & Operations",
        "description": "Receive your SPC trade license, finalize visa processing, and begin operating your publishing business in Sharjah."
      }
    ],
    "faqs": [
      {
        "question": "What types of businesses can set up in Sharjah Publishing City?",
        "answer": "SPC caters to a wide range of publishing-related activities including book publishing, magazine publishing, newspaper publishing, e-publishing, printing services, translation services, media production, content creation, graphic design, and literary agencies. It also welcomes educational content providers and digital media companies."
      },
      {
        "question": "Can I operate a non-publishing business in SPC?",
        "answer": "SPC is primarily designed for publishing, media, and creative industries. However, certain support activities like printing equipment trading, paper trading, and marketing services are also permitted. If your activity falls outside these categories, our consultants can recommend alternative free zones like SHAMS or RAKEZ."
      },
      {
        "question": "Does SPC provide office space for publishing companies?",
        "answer": "Yes, SPC offers flexible office solutions ranging from flexi-desks and shared workspaces to private offices and dedicated warehouses for printing and distribution. There is also space for bookshops and showrooms within the free zone premises."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why SPC for Publishing?"
      },
      {
        "type": "paragraph",
        "text": "Sharjah Publishing City Free Zone is a groundbreaking initiative that positions Sharjah as a global hub for the publishing industry. It offers world-class printing facilities, a dedicated distribution network, and a supportive regulatory environment for publishers, authors, and content creators from around the world."
      },
      {
        "type": "paragraph",
        "text": "Yasa Corporate makes SPC company formation effortless. From license selection to visa processing and bank account opening, we manage the entire setup so you can focus on bringing your publishing vision to life in the UAE."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80"
    ]
  },
  {
    "route": "/start",
    "title": "Start Your Business Journey",
    "subtitle": "Begin your entrepreneurial adventure in the UAE with confidence and expert support",
    "heroImage": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Start Here",
        "href": "/start"
      }
    ],
    "features": [
      {
        "title": "Entrepreneur Assessment",
        "description": "Discover which business setup option aligns with your goals and budget."
      },
      {
        "title": "Step-by-Step Roadmap",
        "description": "Get a personalized timeline and action plan for your business launch."
      },
      {
        "title": "Cost Analysis",
        "description": "Transparent breakdown of all costs involved in your company formation."
      },
      {
        "title": "Resource Library",
        "description": "Access guides, checklists, and templates for your business setup journey."
      },
      {
        "title": "Expert Matching",
        "description": "Get paired with a dedicated consultant who specializes in your industry."
      },
      {
        "title": "Launch Checklist",
        "description": "A comprehensive checklist ensuring nothing is missed during setup."
      }
    ],
    "benefits": [
      "Clear roadmap to business ownership",
      "Transparent cost structure",
      "Personalized guidance from day one",
      "Access to exclusive entrepreneur resources",
      "Dedicated consultant support",
      "Simplified decision-making process",
      "Time and cost savings",
      "Confidence in your business setup"
    ],
    "process": [
      {
        "step": 1,
        "title": "Tell Us Your Vision",
        "description": "Share your business idea and requirements with us"
      },
      {
        "step": 2,
        "title": "Get Your Roadmap",
        "description": "Receive a customized business setup plan"
      },
      {
        "step": 3,
        "title": "Execute with Support",
        "description": "We guide you through every step of execution"
      },
      {
        "step": 4,
        "title": "Business Launch",
        "description": "Your company is ready to start operations"
      }
    ],
    "faqs": [
      {
        "question": "Where do I start with business setup?",
        "answer": "Start by defining your business activities, target market, and budget. Our consultants can then recommend the best jurisdiction and structure."
      },
      {
        "question": "What information do I need to provide?",
        "answer": "You'll need your business plan, passport copies, proposed activities, and information about shareholders and directors."
      },
      {
        "question": "How much time should I allocate?",
        "answer": "The full process from initial consultation to license issuance typically takes 1-4 weeks, depending on the jurisdiction and complexity."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Begin Your Journey"
      },
      {
        "type": "paragraph",
        "text": "Starting a business in the UAE is an exciting venture, but it comes with important decisions. Our Start program is designed to help you navigate every choice with confidence."
      },
      {
        "type": "paragraph",
        "text": "From understanding different jurisdictions to selecting the right license, we provide the clarity and support you need to launch successfully."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
    ]
  },
  {
    "route": "/start-business-uae",
    "title": "Start Business in UAE",
    "subtitle": "Your complete guide to launching a successful business in the United Arab Emirates",
    "heroImage": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Start Business UAE",
        "href": "/start-business-uae"
      }
    ],
    "features": [
      {
        "title": "Comprehensive Ecosystem",
        "description": "Access one of the world's most business-friendly environments with modern infrastructure."
      },
      {
        "title": "Strategic Location",
        "description": "Located at the crossroads of Europe, Asia, and Africa for global trade."
      },
      {
        "title": "Tax Advantages",
        "description": "Benefit from 0% corporate tax in free zones and no personal income tax."
      },
      {
        "title": "Easy Banking",
        "description": "Simplified corporate bank account opening with multiple banking options."
      },
      {
        "title": "Skilled Workforce",
        "description": "Access to a diverse, highly skilled talent pool from around the world."
      },
      {
        "title": "Government Support",
        "description": "Numerous government initiatives supporting entrepreneurship and innovation."
      }
    ],
    "benefits": [
      "World-class infrastructure and logistics",
      "Political and economic stability",
      "No personal income tax",
      "100% foreign ownership options",
      "Strategic location for global markets",
      "High quality of life and safety",
      "Strong legal framework and IP protection",
      "Access to free trade agreements"
    ],
    "process": [
      {
        "step": 1,
        "title": "Business Planning",
        "description": "Develop your business plan and choose your activity"
      },
      {
        "step": 2,
        "title": "Jurisdiction Selection",
        "description": "Choose between mainland, free zone, or offshore"
      },
      {
        "step": 3,
        "title": "Company Registration",
        "description": "Register your company and obtain your license"
      },
      {
        "step": 4,
        "title": "Launch Operations",
        "description": "Open bank accounts, process visas, and start trading"
      }
    ],
    "faqs": [
      {
        "question": "Is the UAE good for startups?",
        "answer": "Yes, the UAE offers an excellent startup ecosystem with incubators, funding opportunities, and a business-friendly regulatory environment."
      },
      {
        "question": "What is the minimum capital required?",
        "answer": "Most free zones and mainland jurisdictions have no minimum capital requirement, though some activities may require specific capital thresholds."
      },
      {
        "question": "Can I live in the UAE while running my business?",
        "answer": "Yes, you can obtain a residence visa through your company, allowing you to live and work in the UAE."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Why Start in the UAE?"
      },
      {
        "type": "paragraph",
        "text": "The UAE has established itself as the premier destination for entrepreneurs and investors seeking a dynamic, secure, and tax-efficient environment to grow their business."
      },
      {
        "type": "paragraph",
        "text": "With world-class infrastructure, a strategic location, and a government committed to economic diversification, the UAE offers unmatched opportunities for business success."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
    ]
  },
  {
    "route": "/start-company-in-uae",
    "title": "Start a Company in UAE",
    "subtitle": "Everything you need to know about incorporating your business in the UAE",
    "heroImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Company Setup",
        "href": "/company-setup"
      },
      {
        "label": "Start Company UAE",
        "href": "/start-company-in-uae"
      }
    ],
    "features": [
      {
        "title": "Multiple Company Types",
        "description": "Choose from LLC, FZE, FZCO, or branch office structures."
      },
      {
        "title": "Activity Flexibility",
        "description": "Over 2,000 business activities available across different jurisdictions."
      },
      {
        "title": "Digital Infrastructure",
        "description": "Advanced digital services for company registration and management."
      },
      {
        "title": "Shareholder Options",
        "description": "Flexible shareholder structures from single to multiple stakeholders."
      },
      {
        "title": "Capital Flexibility",
        "description": "No minimum capital requirements for most business categories."
      },
      {
        "title": "Visa Quota Flexibility",
        "description": "Visa allocations tailored to your office space and business needs."
      }
    ],
    "benefits": [
      "Quick incorporation process",
      "No minimum capital for most activities",
      "100% ownership for most jurisdictions",
      "Tax-efficient business environment",
      "Strong banking sector",
      "Excellent logistics and connectivity",
      "Protection of intellectual property",
      "Stable legal and regulatory framework"
    ],
    "process": [
      {
        "step": 1,
        "title": "Activity & Structure",
        "description": "Define your business activities and legal structure"
      },
      {
        "step": 2,
        "title": "Name Reservation",
        "description": "Reserve your trade name with the relevant authority"
      },
      {
        "step": 3,
        "title": "Approvals & Documents",
        "description": "Obtain necessary approvals and prepare documents"
      },
      {
        "step": 4,
        "title": "Incorporation & License",
        "description": "Finalize incorporation and receive your license"
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between FZE and LLC?",
        "answer": "An FZE (Free Zone Establishment) has a single shareholder, while an LLC (Limited Liability Company) can have 2-50 shareholders."
      },
      {
        "question": "How long does company incorporation take?",
        "answer": "Company incorporation in the UAE typically takes 3-7 business days for free zones and 2-4 weeks for mainland companies."
      },
      {
        "question": "Do I need office space to start a company?",
        "answer": "Yes, most jurisdictions require a physical office space. Free zones offer flexi-desks and virtual offices as cost-effective options."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Incorporation Made Simple"
      },
      {
        "type": "paragraph",
        "text": "Starting a company in the UAE is a straightforward process when you have the right guidance. Our team simplifies every step from name reservation to license issuance."
      },
      {
        "type": "paragraph",
        "text": "We help you choose the optimal company structure based on your business activities, ownership preferences, and growth plans."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ]
  },
  {
    "route": "/start-dumped",
    "title": "Session Expired",
    "subtitle": "Your previous session was interrupted or dumped. Let's start fresh!",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Session Expired"
      },
      {
        "type": "paragraph",
        "text": "Your previous session was interrupted or dumped. Let's start fresh!"
      },
      {
        "type": "heading",
        "text": "What Happened?"
      },
      {
        "type": "paragraph",
        "text": "It looks like your previous business setup session was dumped or timed out. This can happen due to inactivity, browser issues, or a connection interruption."
      }
    ],
    "images": []
  },
  {
    "route": "/step-up-challenge-step-count",
    "title": "Step Up Challenge",
    "subtitle": "Track your steps, stay active, and win amazing prizes!",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "Daily Goal",
        "description": "10,000"
      },
      {
        "title": "Monthly Target",
        "description": "300,000"
      },
      {
        "title": "Grand Prize",
        "description": "AED 5,000"
      },
      {
        "title": "Register",
        "description": "Sign up for the challenge"
      },
      {
        "title": "Track",
        "description": "Log your daily steps"
      },
      {
        "title": "Win",
        "description": "Top steppers win prizes"
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Step Up Challenge"
      },
      {
        "type": "paragraph",
        "text": "Track your steps, stay active, and win amazing prizes!"
      },
      {
        "type": "heading",
        "text": "Step Counter"
      },
      {
        "type": "paragraph",
        "text": "Steps recorded today"
      },
      {
        "type": "heading",
        "text": "How It Works"
      }
    ],
    "images": []
  },
  {
    "route": "/talk-to-our-expert",
    "title": "Talk to Our Expert",
    "subtitle": "Book a free consultation with our business setup specialists",
    "heroImage": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Contact",
        "href": "/contact"
      },
      {
        "label": "Talk to Expert",
        "href": "/talk-to-our-expert"
      }
    ],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Choose Your Consultation Type"
      },
      {
        "type": "paragraph",
        "text": "Select how you'd like to connect with our experts for a free, no-obligation consultation."
      },
      {
        "type": "heading",
        "text": "Video Call"
      },
      {
        "type": "paragraph",
        "text": "Zoom or Google Meet consultation from anywhere in the world."
      },
      {
        "type": "heading",
        "text": "Phone Call"
      },
      {
        "type": "paragraph",
        "text": "Speak directly with our experts over the phone at your convenience."
      },
      {
        "type": "heading",
        "text": "In-Person"
      },
      {
        "type": "paragraph",
        "text": "Visit our Dubai office for a face-to-face consultation."
      },
      {
        "type": "heading",
        "text": "What to Expect"
      },
      {
        "type": "heading",
        "text": "Needs Analysis"
      },
      {
        "type": "paragraph",
        "text": "We listen to your goals and assess your requirements"
      },
      {
        "type": "heading",
        "text": "Expert Recommendations"
      },
      {
        "type": "paragraph",
        "text": "Get tailored advice on the best setup option"
      },
      {
        "type": "heading",
        "text": "Transparent Pricing"
      },
      {
        "type": "paragraph",
        "text": "Receive a clear cost breakdown with no hidden fees"
      }
    ],
    "images": []
  },
  {
    "route": "/teeestes",
    "title": "Testing Lab",
    "subtitle": "Our experimental zone for new features, ideas, and innovations.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "Experiment",
        "description": "Testing new concepts"
      },
      {
        "title": "Prototype",
        "description": "Building MVPs rapidly"
      },
      {
        "title": "Launch",
        "description": "Refining for production"
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Testing Lab"
      },
      {
        "type": "paragraph",
        "text": "Our experimental zone for new features, ideas, and innovations."
      },
      {
        "type": "heading",
        "text": "Current Experiments"
      }
    ],
    "images": []
  },
  {
    "route": "/terms-and-conditions",
    "title": "Terms & Conditions",
    "subtitle": "Our terms of service",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Terms & Conditions",
        "href": "/terms-and-conditions"
      }
    ],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Terms & Conditions"
      },
      {
        "type": "paragraph",
        "text": "Welcome to Yasa Corporate Service Provider. By accessing or using our services, you agree to be bound by these terms and conditions."
      },
      {
        "type": "heading",
        "text": "Services"
      },
      {
        "type": "paragraph",
        "text": "We provide business setup consultancy services in the UAE, including company formation, visa processing, bank account opening, and related services."
      },
      {
        "type": "heading",
        "text": "Payment Terms"
      },
      {
        "type": "paragraph",
        "text": "Payment for services must be made in advance as per the agreed quote. All fees are non-refundable unless otherwise specified."
      },
      {
        "type": "heading",
        "text": "Liability"
      },
      {
        "type": "paragraph",
        "text": "We strive to provide accurate information and excellent service. However, we are not liable for any decisions made based on the information provided on our website."
      },
      {
        "type": "heading",
        "text": "Contact"
      },
      {
        "type": "paragraph",
        "text": "For any questions regarding these terms, please contact us at contact@yasacsp.com or call +971 50 7778009."
      }
    ],
    "images": []
  },
  {
    "route": "/test-cc",
    "title": "Payment Gateway Test",
    "subtitle": "Testing our secure payment integration with sample transactions.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "Secure",
        "description": "256-bit SSL encryption"
      },
      {
        "title": "Multiple Cards",
        "description": "Visa, Mastercard, Amex"
      },
      {
        "title": "Instant",
        "description": "Real-time processing"
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Payment Gateway Test"
      },
      {
        "type": "paragraph",
        "text": "Testing our secure payment integration with sample transactions."
      },
      {
        "type": "heading",
        "text": "Test Payment Form"
      },
      {
        "type": "paragraph",
        "text": "This is a test page. No real charges will be made."
      }
    ],
    "images": []
  },
  {
    "route": "/thank-you",
    "title": "Thank You!",
    "subtitle": "Your submission has been received successfully. Our team will review your request and get back to you within 24 hours.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Thank You!"
      },
      {
        "type": "paragraph",
        "text": "Your submission has been received successfully. Our team will review your request and get back to you within 24 hours."
      },
      {
        "type": "paragraph",
        "text": "In the meantime, feel free to explore our resources or contact us directly if you have urgent questions."
      }
    ],
    "images": []
  },
  {
    "route": "/thank-you-step-up-challenge",
    "title": "Thank You for Joining!",
    "subtitle": "You're now officially registered for the Step Up Challenge. Get ready to move, compete, and win!",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Thank You for Joining!"
      },
      {
        "type": "paragraph",
        "text": "You're now officially registered for the Step Up Challenge. Get ready to move, compete, and win!"
      },
      {
        "type": "heading",
        "text": "What Happens Next?"
      }
    ],
    "images": []
  },
  {
    "route": "/trade-license-cancellation",
    "title": "Trade License Cancellation",
    "subtitle": "Properly close your UAE trade license with full regulatory compliance",
    "heroImage": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License Cancellation",
        "href": "/trade-license-cancellation"
      }
    ],
    "features": [
      {
        "title": "Full Closure Process",
        "description": "Complete cancellation with all government authorities."
      },
      {
        "title": "Visa Cancellation",
        "description": "Coordinate cancellation of all employee visas."
      },
      {
        "title": "Debt Clearance",
        "description": "Ensure all dues and penalties are cleared."
      },
      {
        "title": "Bank Account Closure",
        "description": "Assistance with corporate bank account closure."
      },
      {
        "title": "Authority Liaison",
        "description": "Direct coordination with DED, free zones, and MOL."
      },
      {
        "title": "Final Clearance",
        "description": "Obtain final clearance certificate from all bodies."
      }
    ],
    "benefits": [
      "Legally compliant business closure",
      "Avoid future penalties and fines",
      "Clean exit from UAE business obligations",
      "Visa and labor file proper closure",
      "Prevent sponsor liability issues",
      "Professional handling of entire process",
      "Clearance from all government entities",
      "Peace of mind with completed closure"
    ],
    "process": [
      {
        "step": 1,
        "title": "Closure Assessment",
        "description": "Review all obligations and outstanding commitments"
      },
      {
        "step": 2,
        "title": "Visa Cancellation",
        "description": "Cancel all sponsored visas and labor cards"
      },
      {
        "step": 3,
        "title": "Dues Clearance",
        "description": "Settle all fees, penalties, and outstanding amounts"
      },
      {
        "step": 4,
        "title": "License Cancelled",
        "description": "Receive final cancellation certificate from authority"
      }
    ],
    "faqs": [
      {
        "question": "How long does trade license cancellation take?",
        "answer": "The full cancellation process typically takes 2 to 4 weeks, depending on outstanding obligations and authority processing times."
      },
      {
        "question": "What happens to employee visas during cancellation?",
        "answer": "All employee visas must be cancelled before or during the license cancellation process. We coordinate this with immigration authorities."
      },
      {
        "question": "Can I cancel my license if there are outstanding penalties?",
        "answer": "Outstanding penalties and dues must be cleared before the cancellation application can be processed by the authorities."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Complete Business Closure"
      },
      {
        "type": "paragraph",
        "text": "Closing a business in the UAE requires proper procedures to avoid future liabilities. Our cancellation service ensures every aspect of your business closure is handled correctly and legally."
      },
      {
        "type": "paragraph",
        "text": "We manage the entire process from visa cancellations to final clearance certificates, giving you a clean exit from the UAE market."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
    ]
  },
  {
    "route": "/trade-license-modification-uae",
    "title": "Trade License Modification UAE",
    "subtitle": "Modify your UAE trade license for changing business needs",
    "heroImage": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License Modification",
        "href": "/trade-license-modification-uae"
      }
    ],
    "features": [
      {
        "title": "Activity Changes",
        "description": "Add or remove business activities on your license."
      },
      {
        "title": "Partner Changes",
        "description": "Add, remove, or change shareholder structure."
      },
      {
        "title": "Name Change",
        "description": "Legal change of company trade name."
      },
      {
        "title": "Address Update",
        "description": "Update registered office address on license."
      },
      {
        "title": "Capital Adjustment",
        "description": "Increase or decrease share capital."
      },
      {
        "title": "Manager Change",
        "description": "Update general manager or director information."
      }
    ],
    "benefits": [
      "Adapt license to evolving business needs",
      "Avoid operating under incorrect activities",
      "Legal compliance with regulatory changes",
      "Fast processing with minimal disruption",
      "Expert guidance on modification types",
      "Document preparation included",
      "Authority fee calculation and payment",
      "Post-modification license delivery"
    ],
    "process": [
      {
        "step": 1,
        "title": "Modification Assessment",
        "description": "Review current license and identify changes needed"
      },
      {
        "step": 2,
        "title": "Document Preparation",
        "description": "Prepare amended MOA and resolution documents"
      },
      {
        "step": 3,
        "title": "Authority Approval",
        "description": "Submit modification application to DED or free zone"
      },
      {
        "step": 4,
        "title": "Updated License",
        "description": "Receive modified trade license with changes reflected"
      }
    ],
    "faqs": [
      {
        "question": "How many activities can I add to my license?",
        "answer": "You can typically add up to 10 business activities on a single trade license, though some activities require additional approvals."
      },
      {
        "question": "How long does a license modification take?",
        "answer": "Standard modifications are processed within 3 to 7 working days, depending on the complexity of the changes."
      },
      {
        "question": "Can I change my company name on the license?",
        "answer": "Yes, company name changes are possible subject to name availability and approval from the relevant authority."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Adapt Your Business License"
      },
      {
        "type": "paragraph",
        "text": "As your business grows and evolves, your trade license needs to reflect those changes. Our modification service handles all types of license amendments quickly and efficiently."
      },
      {
        "type": "paragraph",
        "text": "From adding new business activities to restructuring shareholding, we ensure your license accurately represents your current business operations."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    ]
  },
  {
    "route": "/trade-license-renewal-uae",
    "title": "Trade License Renewal UAE",
    "subtitle": "Hassle-free renewal of your UAE trade license with timely compliance",
    "heroImage": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80",
    "category": "Business Licensing",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "License Renewal",
        "href": "/trade-license-renewal-uae"
      }
    ],
    "features": [
      {
        "title": "On-Time Renewal",
        "description": "License renewed before expiry to avoid penalties."
      },
      {
        "title": "Document Collection",
        "description": "We gather all renewal documents from your side."
      },
      {
        "title": "Authority Coordination",
        "description": "Direct liaison with DED and free zone authorities."
      },
      {
        "title": "Visa Renewal Linkage",
        "description": "Coordination with visa renewal process if needed."
      },
      {
        "title": "Payment Processing",
        "description": "Fee calculation and payment to authorities."
      },
      {
        "title": "Digital License",
        "description": "Receive renewed license electronically."
      }
    ],
    "benefits": [
      "Avoid late renewal penalties and fines",
      "No business disruption or downtime",
      "Professional document verification",
      "Transparent fee structure",
      "Auto-reminder before expiry dates",
      "Multi-license renewal management",
      "Quick turnaround within 24-48 hours",
      "Post-renewal compliance support"
    ],
    "process": [
      {
        "step": 1,
        "title": "Renewal Check",
        "description": "Review license expiry and outstanding requirements"
      },
      {
        "step": 2,
        "title": "Document Update",
        "description": "Update trade license documents and contracts"
      },
      {
        "step": 3,
        "title": "Fee Payment",
        "description": "Calculate and pay renewal fees to authorities"
      },
      {
        "step": 4,
        "title": "License Issued",
        "description": "Receive renewed trade license digitally"
      }
    ],
    "faqs": [
      {
        "question": "When should I renew my trade license?",
        "answer": "Trade licenses should be renewed within 30 days before the expiry date. Late renewals incur daily penalties depending on the jurisdiction."
      },
      {
        "question": "What documents are needed for renewal?",
        "answer": "Typically, you need the original trade license, tenancy contract, tenancy renewal, and Ejari certificate for mainland companies."
      },
      {
        "question": "Can I renew my license if I have outstanding fines?",
        "answer": "Outstanding fines or violations must be cleared before the license can be renewed. We help identify and resolve any issues."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Renew with Confidence"
      },
      {
        "type": "paragraph",
        "text": "Trade license renewal is a critical annual requirement for all UAE businesses. Our renewal service ensures your license is renewed before expiry, keeping your operations compliant and penalty-free."
      },
      {
        "type": "paragraph",
        "text": "We manage the entire renewal process, from document collection to authority submission, so you can focus on running your business."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
    ]
  },
  {
    "route": "/uae-residence-visa",
    "title": "UAE Residence Visa",
    "subtitle": "Obtain your UAE residency quickly with our expert visa services",
    "heroImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
    "category": "Visa & Immigration",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Visa",
        "href": "/services/visa"
      },
      {
        "label": "Residence Visa",
        "href": "/uae-residence-visa"
      }
    ],
    "features": [
      {
        "title": "2-3 Year Validity",
        "description": "Residence visa valid for 2 to 3 years with easy renewal."
      },
      {
        "title": "Family Sponsorship",
        "description": "Sponsor your spouse, children, and parents for residency."
      },
      {
        "title": "Bank Account Access",
        "description": "Open personal and corporate bank accounts as a resident."
      },
      {
        "title": "Driving License Eligibility",
        "description": "Apply for a UAE driving license with your residence visa."
      },
      {
        "title": "Healthcare Access",
        "description": "Register for public and private healthcare services."
      },
      {
        "title": "Education Access",
        "description": "Enrol children in UAE schools and universities."
      }
    ],
    "benefits": [
      "Live and work legally in the UAE",
      "Tax-free personal income",
      "Access to world-class healthcare",
      "Sponsor family members for residency",
      "Open UAE bank accounts easily",
      "Travel freely in and out of the country",
      "Obtain Emirates ID for identification",
      "Eligible for UAE driving license"
    ],
    "process": [
      {
        "step": 1,
        "title": "Visa Application",
        "description": "Submit residence visa application with required documents"
      },
      {
        "step": 2,
        "title": "Medical Examination",
        "description": "Complete health screening at approved medical centre"
      },
      {
        "step": 3,
        "title": "Emirates ID Process",
        "description": "Apply for Emirates ID with biometric registration"
      },
      {
        "step": 4,
        "title": "Visa Stamping",
        "description": "Residence visa stamped in passport or linked digitally"
      }
    ],
    "faqs": [
      {
        "question": "What documents are required for a UAE residence visa?",
        "answer": "You need a valid passport, passport photos, tenancy contract, medical certificate, Emirates ID application, and proof of income or sponsorship."
      },
      {
        "question": "How long does it take to get a UAE residence visa?",
        "answer": "The entire process typically takes 2 to 4 weeks, including medical tests, biometrics, and visa stamping."
      },
      {
        "question": "Can I work on a UAE residence visa without a work permit?",
        "answer": "No, you also need a valid work permit or labor card if employed by a UAE company. Residence alone does not grant work rights."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Comprehensive Residency Solutions"
      },
      {
        "type": "paragraph",
        "text": "A UAE residence visa is your gateway to living and thriving in one of the world's most dynamic countries. We handle the entire residency process, from initial application to final visa stamping."
      },
      {
        "type": "paragraph",
        "text": "Our team works closely with the Federal Authority for Identity and Citizenship (ICP) and local immigration departments to ensure your application meets all requirements."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=800&q=80"
    ]
  },
  {
    "route": "/united-citizenship-program",
    "title": "United Citizenship Program",
    "subtitle": "Explore pathways to global citizenship through investment and residency programs",
    "heroImage": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80",
    "category": "Corporate Services",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Citizenship Program",
        "href": "/united-citizenship-program"
      }
    ],
    "features": [
      {
        "title": "Investment Visa Programs",
        "description": "Access multiple investment-based residency and citizenship programs worldwide."
      },
      {
        "title": "Golden Visa UAE",
        "description": "Long-term 5 and 10 year residency visas for investors, entrepreneurs, and talent."
      },
      {
        "title": "Property Investment",
        "description": "Residency through real estate investment with options across the UAE and international markets."
      },
      {
        "title": "Business Investor Route",
        "description": "Citizenship and residency options through business establishment and job creation."
      },
      {
        "title": "Family Inclusion",
        "description": "Most programs allow inclusion of spouse, children, and dependent parents."
      },
      {
        "title": "Dual Citizenship Options",
        "description": "Many countries now permit dual citizenship alongside existing nationality."
      }
    ],
    "benefits": [
      "Global mobility and visa-free travel",
      "Access to international education and healthcare",
      "Tax optimization opportunities",
      "Business expansion possibilities",
      "Political and economic stability",
      "Legacy and family security",
      "Real estate investment options",
      "Quality of life improvements"
    ],
    "process": [
      {
        "step": 1,
        "title": "Eligibility Assessment",
        "description": "Evaluate your profile for various citizenship programs"
      },
      {
        "step": 2,
        "title": "Program Selection",
        "description": "Choose the best citizenship or residency program"
      },
      {
        "step": 3,
        "title": "Application & Due Diligence",
        "description": "Submit application with full documentation"
      },
      {
        "step": 4,
        "title": "Approval & Issuance",
        "description": "Receive your citizenship or residency approval"
      }
    ],
    "faqs": [
      {
        "question": "What is the UAE Golden Visa?",
        "answer": "The UAE Golden Visa is a long-term residency visa valid for 5 or 10 years for investors, entrepreneurs, scientists, and exceptional talent."
      },
      {
        "question": "Can I get citizenship through investment in UAE?",
        "answer": "The UAE offers citizenship through exceptional merit and investment under specific conditions. Contact us for details."
      },
      {
        "question": "What are the minimum investment amounts?",
        "answer": "Investment requirements vary by program. UAE Golden Visa starts from AED 2 million in real estate or investment funds."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Global Citizenship Solutions"
      },
      {
        "type": "paragraph",
        "text": "Our citizenship and residency programs open doors to new opportunities, markets, and lifestyles. We guide you through the complex landscape of global mobility options."
      },
      {
        "type": "paragraph",
        "text": "From the UAE Golden Visa to international investment citizenship programs, we help you find the perfect solution for your family's future."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
    ]
  },
  {
    "route": "/vat-registration-bookkeeping",
    "title": "VAT Registration & Bookkeeping",
    "subtitle": "Complete VAT registration and professional bookkeeping services in UAE",
    "heroImage": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80",
    "category": "Finance & Compliance",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "VAT & Bookkeeping",
        "href": "/vat-registration-bookkeeping"
      }
    ],
    "features": [
      {
        "title": "VAT Registration",
        "description": "Register your business with the Federal Tax Authority."
      },
      {
        "title": "VAT Return Filing",
        "description": "Quarterly VAT return preparation and submission."
      },
      {
        "title": "Bookkeeping Services",
        "description": "Professional financial record keeping and management."
      },
      {
        "title": "VAT Advisory",
        "description": "Guidance on VAT compliance and input tax recovery."
      },
      {
        "title": "Financial Statements",
        "description": "Preparation of income statements and balance sheets."
      },
      {
        "title": "Tax Invoice Setup",
        "description": "Set up VAT-compliant invoicing systems."
      }
    ],
    "benefits": [
      "FTA registration handled completely",
      "Accurate quarterly VAT returns",
      "Professional financial bookkeeping",
      "Input tax recovery optimization",
      "Penalty avoidance through timely filing",
      "Cloud-based accounting systems",
      "Dedicated accounting team assigned",
      "Regular financial reporting and insights"
    ],
    "process": [
      {
        "step": 1,
        "title": "VAT Assessment",
        "description": "Determine VAT registration eligibility and threshold"
      },
      {
        "step": 2,
        "title": "FTA Registration",
        "description": "Register with Federal Tax Authority for VAT"
      },
      {
        "step": 3,
        "title": "Bookkeeping Setup",
        "description": "Establish accounting system and recording processes"
      },
      {
        "step": 4,
        "title": "Ongoing Filing",
        "description": "Quarterly VAT returns and financial reporting"
      }
    ],
    "faqs": [
      {
        "question": "When is VAT registration mandatory in UAE?",
        "answer": "VAT registration is mandatory for businesses with taxable supplies exceeding AED 375,000 per year. Voluntary registration is available above AED 187,500."
      },
      {
        "question": "What is the current VAT rate in the UAE?",
        "answer": "The standard VAT rate in the UAE is 5%, applied to most goods and services, with certain exemptions for healthcare, education, and financial services."
      },
      {
        "question": "How often do I need to file VAT returns?",
        "answer": "VAT returns must be filed quarterly, within 28 days of the end of each tax period. Late filing incurs penalties."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "VAT & Financial Management"
      },
      {
        "type": "paragraph",
        "text": "Our VAT registration and bookkeeping service ensures your business complies with UAE tax regulations while maintaining accurate financial records. From initial FTA registration to ongoing quarterly returns."
      },
      {
        "type": "paragraph",
        "text": "We combine expert tax knowledge with professional bookkeeping to give you complete financial clarity and regulatory compliance."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
    ]
  },
  {
    "route": "/vip-medical-and-eid",
    "title": "VIP Medical & Emirates ID",
    "subtitle": "Premium medical examination and Emirates ID services with VIP treatment",
    "heroImage": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
    "category": "Visa & Immigration",
    "breadcrumbs": [
      {
        "label": "Services",
        "href": "/services"
      },
      {
        "label": "Visa",
        "href": "/services/visa"
      },
      {
        "label": "VIP Medical & EID",
        "href": "/vip-medical-and-eid"
      }
    ],
    "features": [
      {
        "title": "VIP Medical Package",
        "description": "Priority medical examination at premium health centres."
      },
      {
        "title": "Express EID Processing",
        "description": "Fast-track Emirates ID issuance in 24-48 hours."
      },
      {
        "title": "Concierge Service",
        "description": "Dedicated executive handling your entire process."
      },
      {
        "title": "Mobile Medical Units",
        "description": "On-site medical testing at your office or home."
      },
      {
        "title": "Biometric Registration",
        "description": "Assisted fingerprint and photo registration."
      },
      {
        "title": "Document Handling",
        "description": "Complete document processing and delivery service."
      }
    ],
    "benefits": [
      "Skip regular queues at medical centres",
      "Get Emirates ID in record time",
      "Dedicated relationship manager assigned",
      "Home or office medical visits available",
      "Digital ID tracking via our portal",
      "Doorstep delivery of Emirates ID card",
      "Assistance with medical insurance linkage",
      "Coordination with immigration authorities"
    ],
    "process": [
      {
        "step": 1,
        "title": "Book Appointment",
        "description": "Schedule VIP medical and biometric appointment"
      },
      {
        "step": 2,
        "title": "Medical Examination",
        "description": "Complete VIP medical test at premium centre"
      },
      {
        "step": 3,
        "title": "Biometrics Collection",
        "description": "Fingerprint and photo for Emirates ID"
      },
      {
        "step": 4,
        "title": "Card Delivery",
        "description": "Express Emirates ID printing and delivery"
      }
    ],
    "faqs": [
      {
        "question": "What does the VIP medical package include?",
        "answer": "VIP medical includes priority queue access, private consultation rooms, expedited lab results, and dedicated staff assistance throughout the process."
      },
      {
        "question": "How fast can I get my Emirates ID?",
        "answer": "With our VIP service, Emirates ID can be issued in 24 to 48 hours compared to the standard 5 to 7 business day timeline."
      },
      {
        "question": "Is home medical testing available?",
        "answer": "Yes, we offer mobile medical units that can visit your home or office for the complete medical examination and biometric collection."
      }
    ],
    "content": [
      {
        "type": "heading",
        "text": "Premium Medical & ID Services"
      },
      {
        "type": "paragraph",
        "text": "Our VIP Medical and Emirates ID service is designed for busy professionals and executives who value their time. We offer expedited medical examinations and fast-track Emirates ID processing through premium service centres."
      },
      {
        "type": "paragraph",
        "text": "From appointment booking to doorstep card delivery, our concierge team manages every detail of the medical and Emirates ID process for you and your family."
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    ]
  },
  {
    "route": "/zayna-barakat",
    "title": "Zayna Barakat",
    "subtitle": "Inspiring the next generation through education, mentorship, and community leadership.",
    "heroImage": "",
    "category": "Corporate Services",
    "breadcrumbs": [],
    "features": [
      {
        "title": "Students Mentored",
        "description": "500+"
      },
      {
        "title": "Years Teaching",
        "description": "15+"
      },
      {
        "title": "Awards Received",
        "description": "8"
      }
    ],
    "benefits": [],
    "process": [],
    "faqs": [],
    "content": [
      {
        "type": "heading",
        "text": "Zayna Barakat"
      },
      {
        "type": "paragraph",
        "text": "Inspiring the next generation through education, mentorship, and community leadership."
      },
      {
        "type": "heading",
        "text": "A Voice for Education"
      },
      {
        "type": "paragraph",
        "text": "Zayna Barakat is a dedicated educator and community leader who has touched the lives of hundreds of students across the UAE. Her innovative teaching methods and commitment to excellence have earned her widespread recognition."
      },
      {
        "type": "paragraph",
        "text": "Through her work, Zayna continues to inspire young minds and shape the future of education in the region."
      },
      {
        "type": "paragraph",
        "text": "Featured Achievements"
      },
      {
        "type": "heading",
        "text": "Impact Numbers"
      }
    ],
    "images": []
  }
];

export const sitePageByRoute = new Map(sitePages.map((page) => [page.route, page]));

import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiMysql,
  SiStripe,
  SiReact,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiFramer,
  SiRedis,
  SiGooglecloud,
  SiVercel,
  SiFirebase,
  SiGooglechrome,
  SiJavascript,
  SiCss3,
  SiVite,
} from "react-icons/si";
import { FaDatabase, FaGlobeAmericas, FaCompactDisc } from "react-icons/fa";

// Your custom types
export type Feature = {
  featureTitle: string;
  featurePoints: {
    desc: string;
  }[];
};

export type TechStackItem = {
  category: string;
  technologies: string;
  icons?: IconType[];
};

export type ContentBlock = {
  type: "paragraph" | "list";
  text?: string;
  items?: string[];
};

export type Project = {
  imageUrls: string[];
  thumbnailUrl: string;
  slug: string;
  title: string;
  subTitle: string;
  description: string;
  projectLink?: string;
  githubLink?: string;
  projectSummary: string;
  techStackDetailed: TechStackItem[];
  features: Feature[];
  content: {
    title: string;
    blocks: ContentBlock[];
  }[];
};

// The Data Array
export const projects: Project[] = [
  // 1. Upkeep Connects
  {
    slug: "upkeep-connects",
    title: "Upkeep Connects",
    subTitle: "Marketplace Platform Modernization",
    thumbnailUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/upkeep_thumbnail.jpg",
    projectLink: "https://www.upkeepit.me",
    description:
      "Built the company's flagship marketplace platform from zero-to-one, replacing fragmented manual coordination with a centralized digital ecosystem.",
    imageUrls: [
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/upkeep-mobile.jpg",
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/upkeep-desktop1.jpg",
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/upkeep-desktop2.jpg",
    ],
    projectSummary:
      "Architected a full-stack Next.js application designed to streamline complex internal workflows, leveraging rigorous type safety and real-time data fetching to ensure sub-second load times for mobile users in the field.",
    techStackDetailed: [
      {
        category: "Frontend",
        technologies: "Next.js, React, TypeScript, TailwindCSS",
        icons: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss],
      },
      {
        category: "Backend & DB",
        technologies: "Node.js, Prisma, MySQL",
        icons: [SiNodedotjs, SiPrisma, SiMysql],
      },
      {
        category: "Integrations",
        technologies: "Stripe Connect API",
        icons: [SiStripe],
      },
    ],
    features: [
      {
        featureTitle: "Multi-Party Payment System",
        featurePoints: [
          {
            desc: "Engineered a secure financial pipeline using Stripe Connect.",
          },
          {
            desc: "Automated complex invoicing, payouts, and transaction ledgers for service providers.",
          },
        ],
      },
      {
        featureTitle: "Workflow Automation",
        featurePoints: [
          {
            desc: "Designed scheduling architectures handling quotes, appointments, and job tracking.",
          },
          {
            desc: "Translated intricate business logic into scalable technical requirements.",
          },
        ],
      },
    ],
    content: [
      {
        title: "The Problem",
        blocks: [
          {
            type: "paragraph",
            text: "The existing process relied heavily on fragmented, manual coordination, leading to inefficiencies in scheduling and payment processing for field providers.",
          },
        ],
      },
      {
        title: "The Architecture",
        blocks: [
          {
            type: "paragraph",
            text: "We utilized a Next.js frontend coupled with a Prisma ORM layer communicating with a MySQL database. This ensured strict type safety from the user interface down to the database level, while useSWR handled optimized, real-time data fetching.",
          },
        ],
      },
    ],
  },

  // 2. PocketDoc (Perlman Clinic)
  {
    slug: "perlman-clinic",
    title: "PocketDoc (Perlman Clinic)",
    subTitle: "Telehealth Modernization",
    thumbnailUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/perlman-logo.jpg",
    description:
      "Modernized patient-facing tools and internal workflows for a high-volume healthcare provider under strict HIPAA compliance.",
    imageUrls: [
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/pocketdoc.jpg",
    ],
    projectSummary:
      "Maintained and optimized a React Native telehealth application, debugging real-time video protocols to reduce session drop-offs and engineering new revenue-driving modules.",
    techStackDetailed: [
      {
        category: "Frontend & Mobile",
        technologies: "React Native, React, TypeScript",
        icons: [SiReact, SiTypescript],
      },
      {
        category: "Backend & Integrations",
        technologies: "Epic Systems API, Node.js",
        icons: [SiNodedotjs],
      },
    ],
    features: [
      {
        featureTitle: "Follow-Up Booking Module",
        featurePoints: [
          {
            desc: "Engineered a custom booking workflow that directly increased patient retention by 13%.",
          },
          {
            desc: "Integrated scheduling data securely with the Epic Systems API.",
          },
        ],
      },
      {
        featureTitle: "Health Data Visualization",
        featurePoints: [
          {
            desc: "Designed and implemented interactive health tracking features, including calorie tracking and zoomable medical imaging.",
          },
        ],
      },
    ],
    content: [
      {
        title: "The Challenge",
        blocks: [
          {
            type: "paragraph",
            text: "Operating in the healthcare space requires balancing seamless user experiences with rigorous HIPAA compliance. The goal was to reduce friction in telehealth sessions while integrating modern React frontends with legacy hospital systems.",
          },
        ],
      },
    ],
  },

  // 3. Penya Blaugrana San Diego
  {
    imageUrls: [
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/penya-mobile1.jpg",
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/penya-mobile2.jpg",
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/penya-desktop1.jpg",
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/penya-desktop2.jpg",
    ],
    slug: "penya-blaugrana-sandiego",
    title: "Penya Blaugrana San Diego",
    thumbnailUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/penya.png",
    subTitle: "Official Supporters Group Platform",
    description:
      "A full-stack, multilingual platform managing the official FC Barcelona supporters group of San Diego. Features a time-aware match scheduler, a custom membership engine with historical tracking, and a secure admin portal.",
    projectLink: "https://www.penyasd.com",
    githubLink: "https://github.com/jnmendza/penya-sd",
    projectSummary:
      "This project serves as the digital headquarters for Penya Blaugrana San Diego (Official Penya #2309). It solves the complex logistics of managing a non-profit supporters group by automating match schedules, handling seasonal membership renewals without data duplication, and providing a fully localized experience (EN/ES/CA) for a diverse community.",
    techStackDetailed: [
      {
        category: "Frontend & Framework",
        technologies:
          "Next.js 15 (App Router), React, TypeScript, Tailwind CSS",
        icons: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss],
      },
      {
        category: "Backend & Data",
        technologies:
          "Supabase (PostgreSQL), SQL Functions, External Sports API",
        icons: [SiSupabase, SiPostgresql, FaDatabase],
      },
      {
        category: "Internationalization",
        technologies: "next-intl, Middleware routing",
        icons: [FaGlobeAmericas],
      },
      {
        category: "Integrations",
        technologies: "Stripe Payments, Framer Motion",
        icons: [SiStripe, SiFramer],
      },
    ],
    features: [
      {
        featureTitle: "Dynamic Match Scheduler",
        featurePoints: [
          {
            desc: "Automated sync fetches fixtures via external API, reducing manual entry.",
          },
          {
            desc: "Time-aware 'Smart Display' automatically promotes the next upcoming match.",
          },
          {
            desc: "Location logic distinguishes between Home (Barcelona) and Away context.",
          },
        ],
      },
      {
        featureTitle: "Membership Engine",
        featurePoints: [
          {
            desc: "Custom SQL upsert logic handles new vs. returning veterans to prevent duplicates.",
          },
          {
            desc: "Uses PostgreSQL text[] arrays to track historical 'seasons_active' (e.g., ['24/25', '25/26']).",
          },
          {
            desc: "Conflict resolution allows profile updates (phone/name) during renewals.",
          },
        ],
      },
      {
        featureTitle: "Admin Dashboard",
        featurePoints: [
          {
            desc: "Role-based access control via Supabase Auth for board members.",
          },
          {
            desc: "Global config controls to toggle membership enrollment windows.",
          },
          {
            desc: "Match control system to designate specific fixtures as 'Official Watch Parties'.",
          },
        ],
      },
      {
        featureTitle: "Venue & Community",
        featurePoints: [
          {
            desc: "Interactive Google Maps integration for the Otay Ranch headquarters.",
          },
          {
            desc: "Responsive Bento Grid gallery showcasing the atmosphere and tech.",
          },
          {
            desc: "Digital 'Chants' songbook replacing physical paper sheets.",
          },
        ],
      },
    ],
    content: [
      {
        title: "The Challenge",
        blocks: [
          {
            type: "paragraph",
            text: "The organization needed a way to manage recurring seasonality without creating duplicate records for returning members. Additionally, match schedules change frequently, and manually updating the homepage was prone to error.",
          },
        ],
      },
      {
        title: "The Solution",
        blocks: [
          {
            type: "paragraph",
            text: "I engineered a 'NextMatch' component that acts as the site's heartbeat. It interfaces with an external sports API to fetch the season schedule and uses client-side time logic to automatically rotate the hero banner to the immediately upcoming fixture.",
          },
          {
            type: "paragraph",
            text: "For the membership system, I moved beyond simple CRUD. I implemented a 'Smart Upsert' strategy in PostgreSQL. Using a text array column (`seasons_active`), the system tracks a member's entire history in a single row, simply appending the new season upon renewal while preserving their original join date.",
          },
          {
            type: "list",
            items: [
              "Full localization (i18n) for English, Spanish, and Catalan users.",
              "Bento Grid gallery layout for a modern, responsive visual experience.",
              "Secure Admin portal for toggling 'Watch Party' status on specific matches.",
            ],
          },
        ],
      },
    ],
  },

  // 4. Union Hub
  {
    imageUrls: [
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/unionhub-mobile.jpg",
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/unionhub-desktop.jpg",
    ],
    slug: "union-hub",
    title: "Union Hub",
    subTitle: "The Operating System for Modern Supporters Groups",
    thumbnailUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/unionhub_thumbmnail.jpg",
    description:
      "A multi-tenant PWA designed to centralize communication, resources, and membership verification for football supporters groups.",
    projectLink: "https://unionhub.us",
    githubLink: "https://github.com/jnmendza/union-hub",
    projectSummary:
      "Supporters groups often rely on a chaotic mix of WhatsApp for chat, Google Drive for files, and spreadsheets for membership. Union Hub unifies these into a secure 'Digital Clubhouse.' It features real-time chat, role-based admin tools, a resource vault, and verifiable digital IDs.",
    techStackDetailed: [
      {
        category: "Frontend Core",
        technologies: "Next.js 14 (App Router), React, TypeScript",
        icons: [SiNextdotjs, SiReact, SiTypescript],
      },
      {
        category: "Styling & UI",
        technologies: "Tailwind CSS, Lucide React, Shadcn/UI patterns",
        icons: [SiTailwindcss],
      },
      {
        category: "Backend & Data",
        technologies:
          "Firebase Authentication, Cloud Firestore (NoSQL), Firebase Storage",
        icons: [SiFirebase],
      },
      {
        category: "Architecture",
        technologies: "PWA (Progressive Web App), Multi-Tenant Workspace Model",
      },
    ],
    features: [
      {
        featureTitle: "Multi-Tenant Architecture",
        featurePoints: [
          {
            desc: "Workspace-based isolation allows multiple unions to exist on the same platform without data leakage.",
          },
          {
            desc: "Nested sub-collection structure in Firestore ensures scalable data separation.",
          },
        ],
      },
      {
        featureTitle: "Real-Time Communication",
        featurePoints: [
          {
            desc: "Instant group messaging powered by Firestore listeners with Optimistic UI updates for zero-latency feel.",
          },
          {
            desc: "Rich media support allowing image uploads directly within the chat stream.",
          },
        ],
      },
      {
        featureTitle: "Security & Role Management",
        featurePoints: [
          {
            desc: "Granular Role-Based Access Control (RBAC) distinguishing between Members, Board, and Admins.",
          },
          {
            desc: "Strict Firestore Security Rules preventing cross-union access or unauthorized writes.",
          },
          { desc: "Age-gating compliance logic during registration." },
        ],
      },
      {
        featureTitle: "Digital Membership",
        featurePoints: [
          {
            desc: "Dynamic QR Code generation for in-person event verification.",
          },
          { desc: "Admin-verified 'Union IDs' linked to user profiles." },
        ],
      },
    ],
    content: [
      {
        title: "The Problem",
        blocks: [
          {
            type: "paragraph",
            text: "Managing a large sports supporters group is a logistical nightmare. Leadership struggles to broadcast urgent updates through noisy WhatsApp groups, bylaws and chant sheets get lost in email chains, and verifying active members at tailgates is often manual and error-prone.",
          },
        ],
      },
      {
        title: "The Architecture",
        blocks: [
          {
            type: "paragraph",
            text: "I built Union Hub as a Progressive Web App (PWA) to offer a native-app experience without the friction of App Store downloads. The backend relies on a serverless Firebase architecture.",
          },
          {
            type: "paragraph",
            text: "One of the key technical decisions was the migration from a Relational SQL DB (Supabase) to a NoSQL Document DB (Firestore). This transition was driven by the need for:",
          },
          {
            type: "list",
            items: [
              "Native real-time listeners for chat (avoiding polling).",
              "Deeply nested sub-collections (Unions -> Groups -> Messages) which mapped perfectly to the multi-tenant mental model.",
              "Unified Auth/Database security rules for granular permission checks.",
            ],
          },
        ],
      },
      {
        title: "Admin & Governance",
        blocks: [
          {
            type: "paragraph",
            text: "Beyond the mobile member experience, the application includes a comprehensive Desktop Admin Dashboard. This allows leadership to broadcast urgent announcements to the mobile home feed, upload official documents to the read-only Vault, and manage user roles and bans.",
          },
        ],
      },
    ],
  },

  // 5. DocuMind
  {
    imageUrls: [
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/documind1.jpg",
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/documind2.jpg",
    ],
    slug: "documind",
    title: "DocuMind",
    subTitle: "AI-Powered Document Intelligence SaaS",
    thumbnailUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/documind.png",
    description:
      "A full-stack SaaS application that transforms static documents into interactive knowledge using Google's Gemini 1.5 Flash. Features real-time streaming analysis, PDF text extraction, and a usage-based rate limiting system.",
    projectLink: "https://documind-coral.vercel.app/",
    githubLink: "https://github.com/Jnmendza/documind",
    projectSummary:
      "DocuMind leverages the massive context window of Gemini 1.5 Flash to allow users to 'chat' with their PDF documents. Unlike traditional RAG pipelines, this application uses a context-stuffing approach for faster, more coherent document analysis. It includes a complete SaaS infrastructure with secure authentication, database persistence, and a credit-based usage system to prevent API abuse.",
    techStackDetailed: [
      {
        category: "Frontend & Framework",
        technologies:
          "Next.js 16 (App Router), TypeScript, Tailwind CSS, Shadcn UI",
        icons: [SiNextdotjs, SiTypescript, SiTailwindcss],
      },
      {
        category: "Backend & Database",
        technologies:
          "Server Actions, Drizzle ORM, PostgreSQL (Neon), Upstash Redis",
        icons: [SiPostgresql, SiRedis],
      },
      {
        category: "AI & Intelligence",
        technologies: "Google Gemini 1.5 Flash, Vercel AI SDK, PDF-Parse",
        icons: [SiGooglecloud],
      },
      {
        category: "Infrastructure",
        technologies: "Clerk Auth, Vercel Deployment",
        icons: [SiVercel],
      },
    ],
    features: [
      {
        featureTitle: "Real-Time AI Streaming",
        featurePoints: [
          {
            desc: "Implemented Vercel AI SDK to stream responses character-by-character, eliminating wait times for long summaries.",
          },
          {
            desc: "Customized prompt engineering to handle both summarization and professional rewriting tasks.",
          },
        ],
      },
      {
        featureTitle: "PDF Intelligence Engine",
        featurePoints: [
          {
            desc: "Built a server-side parsing pipeline to extract raw text from uploaded PDF binaries.",
          },
          {
            desc: "Optimized Next.js config to handle large file buffers and external node modules.",
          },
        ],
      },
      {
        featureTitle: "SaaS Infrastructure",
        featurePoints: [
          {
            desc: "Integrated Upstash Redis to track daily API usage per user (Rate Limiting).",
          },
          {
            desc: "Developed a 'dirty state' editor that auto-saves manual edits to the database.",
          },
          {
            desc: "Secure multi-tenant architecture ensuring users only access their own documents.",
          },
        ],
      },
    ],
    content: [
      {
        title: "The Problem",
        blocks: [
          {
            type: "paragraph",
            text: "Reading through dense technical documentation, legal contracts, or academic papers is time-consuming. Most users don't need to read every word; they need to understand the core concepts and extract key insights quickly. Traditional tools are often static, offering no way to interact with or query the text.",
          },
        ],
      },
      {
        title: "The Solution",
        blocks: [
          {
            type: "paragraph",
            text: "DocuMind bridges the gap between static files and active intelligence. By combining high-performance text extraction with the massive context window of Gemini 1.5 Flash, the application can 'read' an entire document instantly. Users can then ask for summaries, tonal rewrites, or specific data extraction.",
          },
          {
            type: "list",
            items: [
              "Instant PDF-to-Text conversion for immediate analysis.",
              "Dual-pane editor allowing side-by-side comparison of original vs. AI output.",
              "Credit-based system that resets daily, protecting the API from overuse.",
            ],
          },
        ],
      },
      {
        title: "Technical Challenges",
        blocks: [
          {
            type: "paragraph",
            text: "One of the biggest hurdles was handling the PDF parsing within the Next.js Server Actions environment. The library relied on Node.js specific APIs that conflicted with the edge-ready bundling of Next.js.",
          },
          {
            type: "paragraph",
            text: "I solved this by configuring `serverExternalPackages` in the Next.js config to prevent bundling of the parser and implemented a polyfill for the `DOMMatrix` API to satisfy the library's legacy dependencies without pulling in heavy canvas engines.",
          },
        ],
      },
    ],
  },
  // 6. Diggin. Chrome Extension
  {
    imageUrls: [
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/diggin.png",
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/digginext-screenshot3.jpg",
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/digginext-screenshot2.jpg",
    ], // <-- Converted to an array to match the TypeScript schema!
    slug: "diggin-vinyl-search",
    title: "Diggin.",
    subTitle: "Chrome Extension for Vinyl Collectors",
    thumbnailUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/projects/diggin-ext-logo.jpg",
    description:
      "A browser extension that instantly fetches Discogs market pricing for vinyl records via a right-click context menu.",
    projectLink: "https://digginext.us/",
    githubLink: "https://github.com/Jnmendza/diggin-ext",
    projectSummary:
      "Digging is a 'Brutalist' style Chrome Extension designed to reduce the friction between discovering music and collecting it. Instead of manually copying album names, opening a new tab, navigating to Discogs, and filtering for vinyl, users simply highlight text and right-click. The extension intelligently queries the Discogs API, filters for LP formats (ignoring CDs and singles), and injects a non-intrusive popup with the current market floor price directly into the active viewport.",

    techStackDetailed: [
      {
        category: "Core",
        technologies: "Manifest V3, JavaScript (ES6+)",
        icons: [SiGooglechrome, SiJavascript],
      },
      {
        category: "UI & Injection",
        technologies: "React, Shadow DOM Injection",
        icons: [SiReact, SiCss3],
      },
      {
        category: "Data & Build",
        technologies: "Discogs API, Vite",
        icons: [FaCompactDisc, SiVite],
      },
    ],

    features: [
      {
        featureTitle: "Context Menu Integration",
        featurePoints: [
          {
            desc: "Adds a native right-click option to 'Search Vinyl' on any text selection.",
          },
          {
            desc: "Sanitizes user selection to remove special characters and optimize API query relevance.",
          },
        ],
      },
      {
        featureTitle: "Smart Market Pricing",
        featurePoints: [
          {
            desc: "Fetches real-time market data from the Discogs Marketplace API.",
          },
          {
            desc: "Implements a 'Market Floor' logic to display the lowest available price for Mint/Near Mint copies.",
          },
          {
            desc: "Automatically filters out CD, Cassette, and Single formats to ensure LP relevance.",
          },
        ],
      },
      {
        featureTitle: "Adaptive UI Injection",
        featurePoints: [
          {
            desc: "Programmatically injects a React component into the host page's DOM.",
          },
          {
            desc: "Calculates viewport constraints to intelligently render the popup above or below the cursor to prevent clipping.",
          },
          {
            desc: "Uses isolated styling to ensure the extension UI is not affected by the host website's CSS.",
          },
        ],
      },
    ],

    content: [
      {
        title: "The Problem",
        blocks: [
          {
            type: "paragraph",
            text: "For vinyl collectors, reading music reviews or browsing online stores is often a disconnected experience. You see an album you like, but checking its market value requires a tedious multi-step process: copy text, open Discogs, search, filter by format, and sort by condition. This friction often breaks the flow of discovery.",
          },
        ],
      },
      {
        title: "The Solution",
        blocks: [
          {
            type: "paragraph",
            text: "Diggin removes the context switch. By leveraging the Chrome Context Menu API, the extension brings the marketplace data to the user. I designed the UI with a 'Brutalist' aesthetic—high contrast black and yellow—to ensure readability on any background while maintaining a distinct brand identity.",
          },
        ],
      },
      {
        title: "Technical Challenges",
        blocks: [
          {
            type: "list",
            items: [
              "API 'Noise' Filtering: The Discogs search API is noisy. Searching for an album often returns CD reissues or 7-inch singles first. I implemented a strict filtering logic in the background script to prioritize 'LP' formats and 'Master' releases, ensuring the price shown reflects the actual vinyl record.",
              "Viewport Awareness: A common issue with injected UIs is screen clipping. If a user selects text at the very bottom of the page, a standard popup gets cut off. I wrote a custom positioning hook that measures the selection's bounding client rect against `window.innerHeight`. If space is tight, the popup automatically inverts its position and animation direction to render *above* the cursor.",
              "Manifest V3 Compliance: Moving away from persistent background pages to Service Workers required rethinking how state is handled. The extension uses `activeTab` and `scripting` permissions to inject code on-demand, ensuring a light memory footprint and compliance with modern browser security standards.",
            ],
          },
        ],
      },
    ],
  },
];

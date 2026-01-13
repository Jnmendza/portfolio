import { Project } from "@/types";
import {
  FaDatabase,
  FaGithub,
  FaGlobeAmericas,
  FaReact,
  FaYoutube,
} from "react-icons/fa";
import {
  SiTypescript,
  SiShadcnui,
  SiPrisma,
  SiZod,
  SiSanity,
  SiGooglemaps,
  SiVercel,
  SiReacthookform,
  SiJavascript,
  SiFramer,
  SiCss3,
  SiMysql,
  SiStripe,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiFigma,
} from "react-icons/si";
import { IoBarChartSharp } from "react-icons/io5";
import {
  RiNextjsLine,
  RiTailwindCssFill,
  RiSupabaseLine,
  RiWindowsFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiMoreLine,
} from "react-icons/ri";
import { MdDataObject, MdOutlineSdStorage, MdAnimation } from "react-icons/md";
import { SiOpenai } from "react-icons/si";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative, TbBrandRedux } from "react-icons/tb";

export const IMAGE_PLACEHOLDER =
  "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const LINKEDIN_URL = "https://www.linkedin.com/in/jnmendza/";
export const GITHUB_URL = "https://github.com/Jnmendza";

export const SKILLS_ICONS = [
  // Core
  { Icon: BiLogoTypescript, name: "TypeScript" },
  { Icon: RiJavascriptFill, name: "JavaScript" },
  { Icon: FaReact, name: "React" },
  { Icon: RiNextjsFill, name: "Next.js" },
  // Styles & Mobile
  { Icon: RiTailwindCssFill, name: "Tailwind CSS" },
  { Icon: TbBrandReactNative, name: "React Native" },
  // Backend & Data
  { Icon: TbBrandRedux, name: "Redux" },
  { Icon: SiSupabase, name: "Supabase" },
  { Icon: SiFirebase, name: "Firebase" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: BiLogoPostgresql, name: "PostgreSQL" },
  { Icon: SiPrisma, name: "Prisma" },
  // Design & Workflow
  { Icon: SiFigma, name: "Figma" },
  { Icon: RiMoreLine, name: "and still learning..." },
];

export const PROJECTS: Project[] = [
  // =================================================================
  // Project 1: Penya Blaugrana San Diego Website
  // =================================================================
  {
    imageUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/penya.png",
    slug: "penya-blaugrana-sandiego",
    title: "Penya Blaugrana San Diego",
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
  // =================================================================
  // Project 2: Early Doors
  // =================================================================
  {
    imageUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/ed-ss.png",
    slug: "early-doors",
    title: "Early Doors",
    subTitle: "A Hub for San Diego's Football Supporters",
    description:
      "A map-based web app that helps fans in San Diego find venues hosting watch parties for football clubs from around the world. With an admin dashboard for managing events, clubs, and supporter groups, EarlyDoors empowers local fan communities to organize and discover matchday experiences in their city.",
    projectLink: "https://earlydoors.vercel.app/",
    githubLink: "https://github.com/Jnmendza/earlydoors",
    projectSummary:
      "Early Doors is a web application designed to bridge the gap between San Diego's passionate football supporters and the local establishments that broadcast the games. As the city's soccer culture flourishes with the arrival of SDFC, this platform provides a vital service: 'Find your tribe and enjoy watching your club's games with the same passion and support.' The application features an interactive map for users to discover watch party venues and a comprehensive admin dashboard for managing all underlying data, including venues, clubs, supporter groups, and events.",
    techStackDetailed: [
      {
        category: "Framework",
        technologies: "Next.js 14 (App Router)",
        icons: [RiNextjsLine],
      },
      {
        category: "Language",
        technologies: "TypeScript",
        icons: [SiTypescript],
      },
      {
        category: "Styling",
        technologies: "Tailwind CSS, Shadcn/UI",
        icons: [RiTailwindCssFill, SiShadcnui],
      },
      {
        category: "State Mngmt",
        technologies: "Zustand",
        icons: [MdOutlineSdStorage],
      },
      {
        category: "Form Mngmt",
        technologies: "React Hook Form with Zod",
        icons: [SiZod, SiReacthookform],
      },
      {
        category: "Database/Backend",
        technologies: "Supabase (PostgreSQL), Prisma",
        icons: [RiSupabaseLine, SiPrisma],
      },
      { category: "CMS (Blog)", technologies: "Sanity.io", icons: [SiSanity] },
      {
        category: "APIs & Services",
        technologies: "Google Maps, Distance Matrix, OAuth",
        icons: [SiGooglemaps],
      },
      {
        category: "Data Viz (Admin)",
        technologies: "Recharts",
        icons: [IoBarChartSharp],
      },
      {
        category: "Deployment",
        technologies: "Vercel, GitHub",
        icons: [SiVercel, FaGithub],
      },
    ],
    features: [
      {
        featureTitle: "Interactive Venue Map",
        featurePoints: [
          {
            desc: "Users can search for football clubs from the homepage, which redirects them to an interactive Google Map displaying all relevant venues.",
          },
          {
            desc: "The map allows for dynamic filtering by club or venue name and provides a seamless discovery experience.",
          },
        ],
      },
      {
        featureTitle: "Dynamic Venue Information Cards",
        featurePoints: [
          {
            desc: "Each venue on the map has a detailed information card displaying its address, website, and a list of affiliated clubs.",
          },
          {
            desc: "Leveraging the Google Distance Matrix API, the card shows the real-time distance and estimated travel time from the user's location (with their permission).",
          },
        ],
      },
      {
        featureTitle: "Comprehensive Admin Dashboard",
        featurePoints: [
          {
            desc: "A secure, login-protected dashboard serves as the control center for the application. ",
          },
          {
            desc: "Admins have full CRUD capabilities to manage venues, football clubs, supporter groups, and events. The dashboard also features data visualization tools like a calendar (React Big Calendar) and metric charts (Recharts) to track platform activity.",
          },
        ],
      },
      {
        featureTitle: "Integrated Blog Platform",
        featurePoints: [
          {
            desc: "To further engage the community and improve SEO, a blog was built using Sanity as a headless CMS.",
          },
          {
            desc: "This allows for easy creation and management of articles and news related to the San Diego soccer scene.",
          },
        ],
      },
    ],
    content: [
      {
        title: "Problem & Purpose",
        blocks: [
          {
            type: "paragraph",
            text: "The excitement around San Diego's football scene is at an all-time high. However, this growth has created a fragmented landscape for fans. As a supporter myself (member of Penya Blaugrana San Diego), I experienced firsthand the difficulty of finding official and unofficial watch parties for various clubs. Information is often scattered across social media, group chats, and disparate websites, making it a challenge for fans to find a place to watch a match with fellow supporters.",
          },
          {
            type: "paragraph",
            text: "The primary goal of Early Doors was to create a single source of truth for the local football community. I aimed to develop a robust, user-friendly platform that would:",
          },
          {
            type: "list",
            items: [
              "Allow users to easily search for pubs and bars hosting games for their favorite teams.",
              "Provide a seamless experience through Google OAuth and traditional authentication.",
              "Build a powerful admin dashboard with full CRUD (Create, Read, Update, Delete) functionality to manage the platform's data.",
              "Demonstrate a strong command of a modern front-end stack, full-stack development principles, and foundational skills like API construction, database management, and state management.",
            ],
          },
        ],
      },
      {
        title: "Development Process",
        blocks: [
          {
            type: "paragraph",
            text: "A structured and professional workflow was essential to the project's success.",
          },
          {
            type: "list",
            items: [
              "Design & Prototyping: The process began in Figma, where I designed wireframes and high-fidelity mockups for the landing page, the map interface, and the admin dashboard. This design-first approach included creating database schema diagrams and planning the API structure, which ensured a clear vision before writing a single line of code.",
              "Version Control: The project was managed using Git, following the GitFlow branching model. Features and pages were developed on separate branches, ensuring the main branch remained stable and deployable. Each feature was integrated through a formal Pull Request (PR) process.",
              "Task Management: Project tasks and feature development were meticulously tracked using a Kanban board in Notion, allowing for clear prioritization and progress monitoring from conception to completion.",
            ],
          },
        ],
      },
      {
        title: "Technical Challenge & Solution",
        blocks: [
          {
            type: "paragraph",
            text: "The most significant technical challenge was implementing the multi-faceted search and filtering logic while ensuring optimal application performance. The goal was to allow users to find venues not just by name, but also by associated football clubs and supporter groups. Navigating this challenge deepened my understanding of data optimization, the importance of efficient state management, and the performance trade-offs between client-side and server-side data manipulation.",
          },
          {
            type: "list",
            items: [
              "State Management with Zustand: I implemented Zustand for centralized state management. Its minimalistic API and hook-based approach helped in handling the global state of filters and search results efficiently without causing unnecessary component re-renders.",
              "Optimized Data Fetching: I refactored my data retrieval logic to be more precise. Instead of fetching broad datasets and filtering on the client-side, I optimized the Prisma queries to perform the complex filtering and joining operations directly within the database. This significantly reduced the payload size and the processing load on the client.",
              "Memoization: I strategically used React's memoization hooks (useMemo, useCallback) to prevent re-computation of expensive functions and re-rendering of components that did not have their props changed.",
            ],
          },
        ],
      },
      {
        title: "Lessons Learned & Future Scope",
        blocks: [
          {
            type: "list",
            items: [
              "Reflection: This project was a tremendous learning experience. I gained a much deeper understanding of system design, the nuances of state management with Zustand, and the critical importance of data optimization. A key takeaway was the value of focusing on reaching a Minimum Viable Product (MVP) first, rather than getting sidetracked by adding features mid-development. I also learned to break down complex problems into smaller, more manageable tasks, which ultimately accelerated the development cycle. Had I prioritized optimizing my data retrieval strategies earlier, it would have saved considerable time.",
              "Future Scope: The foundation is set for several exciting future enhancements. I envision integrating with social media APIs to automatically pull event data from supporter groups' feeds. Another ambitious feature would be to build an in-app community where fans can communicate, RSVP to events, and reserve space at venues, further solidifying Early Doors as the ultimate tool for San Diego's football community.",
            ],
          },
        ],
      },
    ],
  },
  // =================================================================
  // Project 3: Oaxaca DDLM 2023
  // =================================================================
  {
    imageUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/ox.png",
    slug: "dia-de-los-muertos-oaxaca-2023",
    title: "Dia de los Muertos — Oaxaca 2023",
    subTitle: "Photography-forward interactive web experience",
    description:
      "An immersive, motion-rich photo story from my 2023 trip to Oaxaca. Built to honor the color, ritual, and humanity of Día de los Muertos with performance-minded engineering and a photography-first UI.",
    projectLink: "https://ddlm.vercel.app/en",
    githubLink: "https://github.com/Jnmendza/ddlm",
    projectSummary:
      "Dia de los Muertos — Oaxaca 2023 is a custom Next.js (App Router) site that blends documentary photography with subtle motion design. Sections move from street life to candlelit cemetery vigils, with papel-picado overlays, and scroll-timed scenes. High-res assets live in Supabase Storage and are optimized through Next/Image with explicit sizes and responsive breakpoints. Under the hood, transform-only animations, debounced listeners, and careful layout primitives keep the experience smooth despite heavy media.",
    techStackDetailed: [
      {
        category: "Framework",
        technologies: "Next.js (App Router), TypeScript",
        icons: [RiNextjsLine, BiLogoTypescript],
      },
      {
        category: "Styling",
        technologies: "Tailwind CSS",
        icons: [RiTailwindCssFill],
      },
      {
        category: "Animations",
        technologies: "GSAP, ScrollTrigger",
        icons: [MdAnimation],
      },
      {
        category: "Media/Hosting",
        technologies: "Supabase Storage",
        icons: [RiSupabaseLine],
      },
    ],
    features: [
      {
        featureTitle: "Immersive Hero & Motion",
        featurePoints: [
          {
            desc: "Layered video/imagery with papel-picado overlays and gentle parallax.",
          },
          {
            desc: "Scene-scoped GSAP timelines that guide attention without overpowering the photography.",
          },
        ],
      },
      {
        featureTitle: "Photography-First Layouts",
        featurePoints: [
          {
            desc: "Edge-to-edge grids with controlled whitespace and typographic rhythm.",
          },
          {
            desc: "Color palette echoing the holiday: marigold (#ffb300), crimson (#a50044), indigo (#2a2d74).",
          },
        ],
      },
      {
        featureTitle: "Performance Care",
        featurePoints: [
          {
            desc: "Transform-only animations (translate3d, will-change) to keep jank low.",
          },
          {
            desc: "Explicit image dimensions and stable aspect boxes to prevent CLS.",
          },
          {
            desc: "Debounced scroll listeners and route-level code splitting.",
          },
        ],
      },
      {
        featureTitle: "Structured Storytelling",
        featurePoints: [
          {
            desc: "Themed sections for Locals & Face Paint, Street Processions, Markets & Altars, and Cemeteries.",
          },
          {
            desc: "Copy and pacing encourage lingering and contemplation over quick scrolling.",
          },
        ],
      },
    ],
    content: [
      {
        title: "Overview",
        blocks: [
          {
            type: "paragraph",
            text: "This project captures Oaxaca’s Día de los Muertos through portraits, street scenes, and nocturnal ceremonies. The goal was to let the images breathe while adding just enough motion to guide the eye and honor the festival’s energy.",
          },
          {
            type: "paragraph",
            text: "A restrained, performance-minded animation system supports the photography: no heavy effects, just scene-scoped GSAP timelines and transform-only parallax.",
          },
        ],
      },
      {
        title: "Technical Architecture",
        blocks: [
          {
            type: "list",
            items: [
              "Next.js App Router + TypeScript for typed, modular page composition.",
              "Tailwind for consistent spacing and responsive utilities.",
              "GSAP + ScrollTrigger for timeline-based, scroll-driven animation.",
              "Supabase Storage + Next/Image for optimized, responsive media.",
              "Netlify for CI/CD and global caching.",
            ],
          },
        ],
      },
      {
        title: "Key Components",
        blocks: [
          {
            type: "paragraph",
            text: "The hero stacks imagery and papel-picado overlays with subtle depth. Section templates standardize typography, grids, and captions across themes.",
          },
        ],
      },
      {
        title: "Performance Strategy",
        blocks: [
          {
            type: "list",
            items: [
              "Explicit image dimensions and stable aspect boxes to avoid layout shift.",
              "LQIP placeholders and responsive srcsets via Next/Image.",
              "Debounced scroll listeners; timelines paused when off-screen.",
              "Hardware-accelerated transforms (translate3d, will-change).",
            ],
          },
        ],
      },
      {
        title: "Challenges & Solutions",
        blocks: [
          {
            type: "paragraph",
            text: "Heavy media risked jank and hydration drift. Standardizing container ratios, precomputing image sizes, and isolating animations per section kept the UI stable and silky.",
          },
        ],
      },
      {
        title: "Roadmap",
        blocks: [
          {
            type: "list",
            items: [
              "Toggle for EXIF/camera details per photo.",
              "Keyboard navigation and slideshow mode.",
              "Optional captions from a lightweight CMS.",
              "Export a curated PDF lookbook.",
            ],
          },
        ],
      },
      {
        title: "Locals & Face Paint",
        blocks: [
          {
            type: "paragraph",
            text: "A portrait series focused on the people of Oaxaca—calavera makeup, handmade costumes, and the quiet pride behind each gaze. The copy and pacing invite viewers to linger rather than scroll.",
          },
        ],
      },
    ],
  },
  // =================================================================
  // Project 4: CD-Mixtape
  // =================================================================
  {
    imageUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/cd-mixtape.png",
    slug: "cd-mixtape",
    title: "CD-Mixtape",
    subTitle: "A Nostalgic Windows 98 Media Experience",
    description:
      "A retro-inspired web application that combines the classic Windows 98 interface with modern YouTube integration, allowing users to create and play custom CD mixtapes in a fully interactive environment. Relive the late 90s computing experience with authentic UI elements and CD player functionality.",
    projectLink:
      "https://cd-mixtape-ifkkwrne7-jonatmendozas-projects.vercel.app/",
    githubLink: "https://github.com/Jnmendza/cd-mixtape",
    projectSummary:
      "CD-Mixtape is a front-end application that captures the nostalgic essence of the late 90s personal computing era. By meticulously recreating the Windows 98 desktop environment, it offers users a unique, interactive experience. The core functionality allows users to search for tracks on YouTube, compile them into a 'mixtape,' and then 'burn' them to a virtual CD. The application then transitions to a classic CD player interface to play back the custom playlist, blending retro aesthetics with modern streaming technology.",
    techStackDetailed: [
      { category: "Core", technologies: "React 18", icons: [FaReact] },
      {
        category: "Language",
        technologies: "JavaScript (ES6+)",
        icons: [SiJavascript],
      },
      {
        category: "Styling",
        technologies: "98.css, Custom CSS",
        icons: [SiCss3, RiWindowsFill],
      },
      {
        category: "API Integration",
        technologies: "YouTube Data API v3",
        icons: [FaYoutube],
      },
      {
        category: "State Mngmt",
        technologies: "React Hooks (useState, useContext)",
        icons: [FaReact],
      },
      {
        category: "Deployment",
        technologies: "Vercel, GitHub",
        icons: [SiVercel, FaGithub],
      },
    ],
    features: [
      {
        featureTitle: "Authentic Windows 98 Experience",
        featurePoints: [
          {
            desc: "Leveraged the 98.css library to recreate the classic Windows 98 desktop environment with pixel-perfect window chrome, icons, and interaction patterns.",
          },
          {
            desc: "Implemented authentic system behaviors including window dragging, minimizing, and focus states.",
          },
        ],
      },
      {
        featureTitle: "Interactive CD Mixtape Creator",
        featurePoints: [
          {
            desc: "Custom-built media player interface that mimics real CD player functionality with play/pause, track skipping, and volume controls.",
          },
          {
            desc: "YouTube integration allowing users to create playlists of up to 10 videos and save them as named 'mixtapes'.",
          },
        ],
      },
      {
        featureTitle: "Seamless State Management",
        featurePoints: [
          {
            desc: "Implemented complex state logic to maintain playlist data between the mixtape creation and playback modes.",
          },
          {
            desc: "Developed a smooth transition between 'burning' the CD and switching to player mode with preserved playlist data.",
          },
        ],
      },
      {
        featureTitle: "Responsive Retro Design",
        featurePoints: [
          {
            desc: "Maintained the Windows 98 aesthetic while ensuring full responsiveness across modern devices.",
          },
          {
            desc: "Carefully balanced nostalgic UI elements with intuitive UX patterns for contemporary users.",
          },
        ],
      },
    ],
    content: [
      {
        title: "Problem & Purpose",
        blocks: [
          {
            type: "paragraph",
            text: "In an age of hyper-sleek, minimalist design, there's a growing appreciation for the tangible, quirky interfaces of the past. This project began as a personal challenge to explore 'skeuomorphic' design—making digital items resemble their real-world counterparts. The goal was to create more than just a media player; it was to build an 'experience' that evokes the feeling of crafting a personal CD mixtape, a ritual many of us cherished.",
          },
          { type: "paragraph", text: "The primary objectives were to:" },
          {
            type: "list",
            items: [
              "Master advanced CSS and component styling to replicate a complex, retro UI.",
              "Integrate with a major third-party API (YouTube) for dynamic content.",
              "Handle complex, multi-stage state management within a client-side React application.",
              "Showcase creativity and attention to detail in UI/UX design.",
            ],
          },
        ],
      },
      {
        title: "Technical Challenge & Solution",
        blocks: [
          {
            type: "paragraph",
            text: "The main challenge was managing the application's state across different 'modes' or 'scenes'—the desktop, the mixtape creator, and the CD player—without a formal state management library like Redux or Zustand. The state, including the Youtube results, the pending mixtape tracklist, and the final 'burned' playlist, needed to persist seamlessly as the user navigated the experience.",
          },
          { type: "paragraph", text: "Solution:" },
          {
            type: "list",
            items: [
              "I architected the state using a combination of React's `useState` for local component state and `useContext` for global state. A primary `AppContext` was created to hold the tracklist and application mode.",
              "By lifting state up to this shared context, I could ensure that when the user 'burned' their CD, the playlist data was immediately available to the CD Player component without prop drilling, enabling a smooth and logical transition between interfaces.",
            ],
          },
        ],
      },
      {
        title: "Lessons Learned",
        blocks: [
          {
            type: "paragraph",
            text: "This project was a deep dive into the fundamentals of React state management, reinforcing the power and utility of the Context API for medium-sized applications. It also highlighted the importance of component architecture in preventing performance issues, especially when dealing with interactive, draggable UI elements. Finally, it was a valuable lesson in balancing nostalgic design with modern usability standards to create an app that is both fun and functional.",
          },
        ],
      },
    ],
  },
  // =================================================================
  // Project 5: AI-Powered Quiz App
  // =================================================================
  {
    imageUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/aiquiz.png",
    slug: "ai-quiz-generator",
    title: "AI Quiz Generator",
    subTitle: "Transform PDFs into personalized quizzes with AI",
    description:
      "Upload a PDF and instantly generate multiple-choice quizzes to test your knowledge. Designed for students, educators, and professionals looking to actively recall what they've read.",
    projectLink: "https://ai-quiz-eight-indol.vercel.app/",
    githubLink: "https://github.com/Jnmendza/ai-quiz",
    projectSummary:
      "The AI Quiz Generator is a study-focused web app that converts PDF content into interactive quizzes using the OpenAI API. It encourages active recall, a powerful learning technique, by allowing users to test themselves on any uploaded material. It's designed to be fast, intuitive, and effective for studying notes, textbooks, manuals, and more.",
    techStackDetailed: [
      {
        category: "Framework",
        technologies: "Next.js 14 (App Router)",
        icons: [RiNextjsLine],
      },
      {
        category: "Language",
        technologies: "TypeScript",
        icons: [SiTypescript],
      },
      {
        category: "Styling",
        technologies: "Tailwind CSS, Shadcn/UI",
        icons: [RiTailwindCssFill, SiShadcnui],
      },
      {
        category: "PDF Parsing",
        technologies: "pdf-parse",
        icons: [],
      },
      {
        category: "API Integration",
        technologies: "OpenAI GPT-4o",
        icons: [SiOpenai],
      },
      {
        category: "State Mngmt",
        technologies: "React Hooks",
        icons: [],
      },
      {
        category: "Deployment",
        technologies: "Vercel, GitHub",
        icons: [SiVercel, FaGithub],
      },
    ],
    features: [
      {
        featureTitle: "PDF Upload + Parsing",
        featurePoints: [
          {
            desc: "Users can upload a PDF containing study content, lecture notes, or articles. The app extracts text and sends it to the AI for question generation.",
          },
          {
            desc: "Displays the uploaded file name and disables upload button until a file is selected.",
          },
        ],
      },
      {
        featureTitle: "AI-Generated Quizzes",
        featurePoints: [
          {
            desc: "OpenAI's GPT-4o generates multiple-choice questions based on the content of the uploaded PDF.",
          },
          {
            desc: "Includes explanations for each correct answer to enhance understanding.",
          },
        ],
      },
      {
        featureTitle: "Results with Feedback",
        featurePoints: [
          {
            desc: "After completing a quiz, users see a summary of their score with percentage and color-coded feedback.",
          },
          {
            desc: "Correct answers are highlighted in green, while incorrect selections are marked in red alongside the correct option.",
          },
        ],
      },
      {
        featureTitle: "Minimal UI with Dark Mode",
        featurePoints: [
          {
            desc: "Clean, distraction-free interface styled with Tailwind and shadcn/ui components.",
          },
          {
            desc: "Built-in dark mode toggle for better accessibility and comfort.",
          },
        ],
      },
    ],
    content: [
      {
        title: "Purpose & Motivation",
        blocks: [
          {
            type: "paragraph",
            text: "Active recall is one of the most effective ways to study, yet many learners passively read and re-read material. I built the AI Quiz Generator to bridge this gap — turning static content into dynamic self-assessments with zero effort required from the user.",
          },
          {
            type: "paragraph",
            text: "The tool allows students and professionals alike to upload any PDF and instantly receive a quiz tailored to the contents. Whether it’s a lecture PDF, a user manual, or a policy document, the app helps test understanding quickly and effectively.",
          },
        ],
      },
      {
        title: "Development Notes",
        blocks: [
          {
            type: "list",
            items: [
              "Used pdf-parse to extract raw text from uploaded PDFs on the server.",
              "Generated questions with GPT-4o using a structured prompt and returned a JSON array of questions, choices, and explanations.",
              "Handled unpredictable AI output with JSON parsing safeguards and user-facing error alerts.",
              "Stored answers in sessionStorage for client-side quiz state and result analysis.",
              "Styled the UI with Tailwind CSS and used shadcn/ui for a clean, modern look.",
            ],
          },
        ],
      },
      {
        title: "Challenges & Learnings",
        blocks: [
          {
            type: "list",
            items: [
              "Parsing unpredictable GPT output was a major challenge. I added logic to strip Markdown formatting like ```json blocks and fail gracefully.",
              "Ensured minimum question count regardless of word count by enforcing a floor of 4 questions.",
              "Improved UX by adding a progress bar, upload feedback, and interactive result feedback to reinforce correct and incorrect answers.",
            ],
          },
        ],
      },
    ],
  },
  // =================================================================
  // Project 6: AI-Powered Policy Summarizer
  // =================================================================
  {
    imageUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/policy.png",
    slug: "my-policy",
    title: "My Policy",
    subTitle: "Understand any privacy policy before you click 'Accept'",
    description:
      "My Policy uses AI to summarize privacy policies so users can make informed decisions before agreeing to terms. Upload a PDF or paste text to see key takeaways, flagged concerns, and what data you're giving up.",
    projectLink: "https://my-policy-seven.vercel.app/",
    githubLink: "https://github.com/Jnmendza/my-policy",
    projectSummary:
      "My Policy is an AI-powered web app designed to help users understand complex privacy policies in seconds. By either uploading a PDF or pasting the full policy text, users receive a categorized summary outlining what data is collected, how it's used, who it's shared with, and potential red flags. Emojis give quick insight into which parts are safe, questionable, or concerning. Ideal for anyone who wants to make smarter digital choices without reading through pages of legalese.",
    techStackDetailed: [
      {
        category: "Framework",
        technologies: "Next.js 14 (App Router)",
        icons: [RiNextjsLine],
      },
      {
        category: "Language",
        technologies: "TypeScript",
        icons: [SiTypescript],
      },
      {
        category: "Styling",
        technologies: "Tailwind CSS, Shadcn/UI",
        icons: [RiTailwindCssFill, SiShadcnui],
      },
      {
        category: "PDF Parsing",
        technologies: "pdf-parse",
        icons: [],
      },
      {
        category: "API Integration",
        technologies: "OpenAI GPT-4o",
        icons: [SiOpenai],
      },
      {
        category: "State Mngmt",
        technologies: "React Hooks, sessionStorage",
        icons: [],
      },
      {
        category: "Deployment",
        technologies: "Vercel, GitHub",
        icons: [SiVercel, FaGithub],
      },
    ],
    features: [
      {
        featureTitle: "PDF & Text Input Modes",
        featurePoints: [
          {
            desc: "Users can upload a privacy policy in PDF form or paste raw text directly into a textarea.",
          },
          {
            desc: "Once a PDF is uploaded, text input is disabled to avoid duplication.",
          },
          {
            desc: "Users can also clear the uploaded file or text input and switch methods at any time.",
          },
        ],
      },
      {
        featureTitle: "AI-Powered Summary",
        featurePoints: [
          {
            desc: "OpenAI GPT-4o breaks down policies into 5 categories: Personal Data Collected, How Data Is Used, Who Data Is Shared With, Tracking & Analytics, and Red Flags.",
          },
          {
            desc: "Uses emoji indicators to highlight safe (🟢), caution (🟡), and dangerous (🔴) sections.",
          },
        ],
      },
      {
        featureTitle: "Minimal UI with Feedback",
        featurePoints: [
          {
            desc: "Responsive UI with dark mode toggle for accessibility.",
          },
          {
            desc: "Live character count and file upload name display for input validation.",
          },
          {
            desc: "Progress bar and toast notifications for user feedback during generation.",
          },
        ],
      },
    ],
    content: [
      {
        title: "Purpose & Use Case",
        blocks: [
          {
            type: "paragraph",
            text: "Most users blindly agree to privacy policies without understanding what they're giving up. My Policy helps people slow down and make better-informed decisions by summarizing what data is collected and how it's handled.",
          },
          {
            type: "paragraph",
            text: "The app was inspired by real-world experiences of clicking 'accept' on policies without fully reading them. With increasing concerns around data privacy, this tool empowers users to take control by simplifying the fine print into something they can actually understand.",
          },
        ],
      },
      {
        title: "Development Notes",
        blocks: [
          {
            type: "list",
            items: [
              "Used pdf-parse to convert uploaded PDF files to raw text for analysis.",
              "Crafted a structured AI prompt to enforce Markdown output with clear categories and emoji markers.",
              "Saved summary results in sessionStorage to persist across reloads.",
              "Handled edge cases like missing input, invalid files, or malformed AI responses with try/catch and alerts.",
              "Styled the UI with Tailwind and shadcn/ui, maintaining clean form layouts with responsive spacing and feedback.",
            ],
          },
        ],
      },
      {
        title: "Challenges & Learnings",
        blocks: [
          {
            type: "list",
            items: [
              "AI output in Markdown can break layout if not properly stripped. Added regex filtering to clean results before display.",
              "Managing dual input modes (PDF vs. text) required clear UX boundaries and conditional validation.",
              "Deploying with pdf-parse in Next.js 14 involved customizing server settings via `serverExternalPackages` to avoid build issues.",
            ],
          },
        ],
      },
    ],
  },

  // =================================================================
  // Project 7: Portfolio Website
  // =================================================================
  {
    imageUrl:
      "https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/portfolio.png",
    slug: "portfolio-website",
    title: "Personal Portfolio",
    subTitle: "Modern Developer Portfolio",
    description:
      "A performant, minimalist portfolio built with Next.js and React 19, featuring responsive design, dark/light mode, and smooth animations. Showcases projects, skills, and contact information with optimal loading speed and SEO.",
    projectLink: "https://www.jonathanmendoza.dev/",
    githubLink: "https://github.com/Jnmendza/portfolio",
    projectSummary:
      "This portfolio itself is a testament to my skills and design philosophy. Built from the ground up with Next.js 14 and React 19, it serves as a high-performance, content-driven platform to showcase my work. The project emphasizes speed, accessibility, and a clean aesthetic. Key features include a dynamic project showcase, a themeable design with dark/light modes, and subtle animations to enhance the user experience, all while maintaining top-tier Lighthouse scores.",
    techStackDetailed: [
      {
        category: "Framework",
        technologies: "Next.js 14, React 19",
        icons: [RiNextjsLine, FaReact],
      },
      {
        category: "Language",
        technologies: "TypeScript",
        icons: [SiTypescript],
      },
      {
        category: "Styling",
        technologies: "Tailwind CSS, Framer Motion",
        icons: [RiTailwindCssFill, SiFramer],
      },
      {
        category: "Content",
        technologies: "Local Constants (as CMS)",
        icons: [MdDataObject],
      },
      {
        category: "Deployment",
        technologies: "Vercel, GitHub Actions",
        icons: [SiVercel, FaGithub],
      },
    ],
    features: [
      {
        featureTitle: "Next.js Optimized Performance",
        featurePoints: [
          {
            desc: "Leveraged Next.js static generation (SSG) and React Server Components for instantaneous loading and excellent Lighthouse scores.",
          },
          {
            desc: "Implemented efficient code splitting and Next/Image optimization for optimal performance across all devices.",
          },
        ],
      },
      {
        featureTitle: "Responsive & Adaptive Design",
        featurePoints: [
          {
            desc: "Built with a mobile-first approach using Tailwind CSS, ensuring a flawless display on all screen sizes.",
          },
          {
            desc: "Includes a system-aware dark/light mode toggle with a smooth theme transition for comfortable viewing in any environment.",
          },
        ],
      },
      {
        featureTitle: "Modern Development Practices",
        featurePoints: [
          {
            desc: "Utilized React 19 features and TypeScript for a type-safe, maintainable, and modern code architecture.",
          },
          {
            desc: "Configured with a CI/CD pipeline through GitHub Actions for automated checks and seamless deployment via Vercel.",
          },
        ],
      },
    ],
    content: [
      {
        title: "Purpose & Design Philosophy",
        blocks: [
          {
            type: "paragraph",
            text: "A developer's portfolio should be more than a list of projects; it should be a demonstration of their capabilities. The purpose of this site was to create a platform that not only presents my work clearly but also embodies the principles of clean code, performance, and thoughtful design that I bring to every project.",
          },
          {
            type: "paragraph",
            text: "The design philosophy was 'content-first and performant'. The minimalist UI ensures that the projects are the heroes of the page. Every decision, from font choice to animation, was made to enhance the content, not distract from it.",
          },
        ],
      },
      {
        title: "Technical Implementation",
        blocks: [
          {
            type: "paragraph",
            text: "The site's architecture is built around Next.js's App Router, which allows for a powerful combination of Server Components for static content and Client Components for interactive elements.",
          },
          {
            type: "list",
            items: [
              "Static Site Generation (SSG): Project pages like this one are statically generated at build time, resulting in ultra-fast page loads and improved SEO.",
              "Component-Based Theming: Dark/Light mode is handled efficiently using CSS variables and a React Context provider, avoiding FOUC (Flash of Unstyled Content) and ensuring instant theme switching.",
              "Subtle Animations: Framer Motion was used to add tasteful animations to page transitions and interactive elements, providing a polished feel without compromising performance.",
            ],
          },
        ],
      },
      {
        title: "Lessons Learned",
        blocks: [
          {
            type: "paragraph",
            text: "Building your own portfolio is a unique challenge that forces you to be both the client, the designer, and the developer. This project reinforced the importance of planning and self-discipline. It was an excellent opportunity to experiment with the latest features of React 19 and the Next.js App Router in a production environment. The biggest takeaway was the power of incremental improvements—constantly refining Lighthouse scores, accessibility, and code structure leads to a far superior final product.",
          },
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

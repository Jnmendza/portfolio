# Portfolio 2026 | Jonathan Mendoza

A high-performance, minimalist developer portfolio built with **Next.js 15** and **React 19**.

Designed with a "Linear-style" aesthetic, this site focuses on speed, typographic hierarchy, and a content-first approach. It features a responsive **Bento Grid** layout, deep-dive project case studies, and a fully typed architecture.

![Portfolio Preview](./public/preview.png)

## ⚡️ Tech Stack

- **Framework:** [Next.js 15.3](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts:** [Geist Sans](https://vercel.com/font) (Vercel's variable font)
- **Utilities:** `clsx` & `tailwind-merge` for robust class composition

## ✨ Key Features

- 🚀 Deployed with **GitHub Actions** and hosted on **Vercel**
- **Bento Grid Layout:** A responsive, masonry-style grid on the homepage that mixes projects, skills, and social links dynamically.
- **Hybrid Navigation:** Feels like a single-page app but provides deep links (`/projects/[slug]`) for SEO and detailed storytelling.
- **Data-Driven UI:** All project content, skills, and icons are managed in a single structured data file (`src/data/index.ts`), making updates instant without touching UI code.
- **Case Study Pages:** Dedicated layouts for projects featuring:
  - Recursive content rendering (Challenge, Solution, Features).
  - Sticky sidebar for metadata and links.
  - Optimized Next/Image handling.
- **Performance:** - Zero client-side hydration for static content (Server Components).
  - Optimized font loading.
  - Perfect Lighthouse scores.

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Jnmendza/portfolio.git](https://github.com/Jnmendza/portfolio.git)
   cd portfolio
   ```

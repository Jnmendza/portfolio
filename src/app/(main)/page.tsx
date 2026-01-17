import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import { HeroActions } from "@/components/HeroActions";
import { PROJECTS } from "@/data";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowRight,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  // 1. Grab the specific projects you want to feature on the Home Page
  // We use your existing data source.
  const featuredProject1 =
    PROJECTS.find((p) => p.slug === "penya-blaugrana-sandiego") || PROJECTS[0];
  const featuredProject2 =
    PROJECTS.find((p) => p.slug === "documind") || PROJECTS[1];

  // 2. Define the Layout Matrix
  // This mixes your Dynamic Data (Projects) with Static Data (Stack, Github)
  const gridItems = [
    // --- ROW 1: Big Project + Small Stack ---
    {
      title: featuredProject1.title,
      description: featuredProject1.subTitle,
      header: <SkeletonImage src={featuredProject1.imageUrl} />,
      className: "md:col-span-2",
      icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />,
      href: `/projects/${featuredProject1.slug}`,
    },
    {
      title: "The Stack",
      description: "Next.js 15, React 19, TS, Tailwind, Supabase.",
      header: (
        <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500' />
      ),
      className: "md:col-span-1",
      icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
      href: "/about",
    },

    // --- ROW 2: Small Project + Big Github ---
    {
      title: featuredProject2.title,
      description: featuredProject2.subTitle,
      header: <SkeletonImage src={featuredProject2.imageUrl} />,
      className: "md:col-span-1",
      icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
      href: `/projects/${featuredProject2.slug}`,
    },
    {
      title: "Project Archive",
      description: "View all 7+ projects, experiments, and case studies.",
      header: (
        <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover/bento:bg-slate-800 transition-colors'>
          <div className='flex flex-col items-center gap-2'>
            <div className='h-10 w-10 rounded-full bg-indigo-500/10 flex items-center justify-center'>
              <IconArrowRight className='h-5 w-5 text-indigo-400' />
            </div>
            <span className='text-sm font-semibold text-slate-300'>
              View All Work
            </span>
          </div>
        </div>
      ),
      className: "md:col-span-2",
      icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
      href: "/projects",
    },
  ];

  return (
    <main className='min-h-screen py-12 space-y-12'>
      {/* HEADER SECTION */}
      <section className='flex flex-col items-start justify-center max-w-2xl gap-4'>
        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl'>
          Jonathan Mendoza
        </h1>
        <p className='text-lg text-slate-400'>
          <span className='text-indigo-400'>Full Stack Engineer</span> bridging
          the gap between design and performance. I build pixel-perfect,
          scalable web applications with{" "}
          <span className='text-indigo-400'>Next.js, Typescript</span> and{" "}
          <span className='text-indigo-400'>Tailwind.</span>. Based in
          Oceanside, CA.
        </p>
        <HeroActions />
      </section>

      {/* BENTO GRID */}
      <BentoGrid className='max-w-4xl mx-0'>
        {gridItems.map((item, i) => (
          <BentoItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={item.className}
            href={item.href}
          />
        ))}
      </BentoGrid>
    </main>
  );
}

// Helper to render the Project Images
const SkeletonImage = ({ src }: { src: string }) => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative border border-white/10'>
    <Image
      src={src}
      alt='Preview'
      fill
      className='object-cover object-top hover:scale-105 transition-transform duration-500'
    />
  </div>
);

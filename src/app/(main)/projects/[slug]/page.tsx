import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data"; // Importing your data array
import { ArrowLeft, ExternalLink, Github } from "lucide-react"; // UI Icons
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  // Await params because you are using Next.js 15
  const { slug } = await params;

  // Find the specific project
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className='min-h-screen pb-20 pt-24 px-4 sm:px-6'>
      {/* 1. TOP NAV: Back Button */}
      <div className='max-w-6xl mx-auto mb-8'>
        <Link
          href='/'
          className='inline-flex items-center text-sm text-slate-400 hover:text-indigo-400 transition-colors group'
        >
          <ArrowLeft className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform' />
          Back to Projects
        </Link>
      </div>

      {/* 2. HEADER: Title & Subtitle */}
      <header className='max-w-6xl mx-auto mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight'>
          {project.title}
        </h1>
        <p className='text-xl text-slate-400 max-w-2xl leading-relaxed'>
          {project.subTitle}
        </p>
      </header>

      {/* 3. HERO IMAGE */}
      <div className='max-w-6xl mx-auto mb-16'>
        <div className='relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl'>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>

      {/* 4. MAIN LAYOUT: Content (Left) + Sidebar (Right) */}
      <div className='max-w-6xl mx-auto lg:grid lg:grid-cols-[1fr_350px] lg:gap-16'>
        {/* LEFT COLUMN: The Story */}
        <article className='space-y-16'>
          {/* Executive Summary */}
          <section>
            <h3 className='text-sm font-bold uppercase tracking-wider text-indigo-400 mb-4'>
              Project Overview
            </h3>
            <p className='text-slate-300 leading-relaxed text-lg'>
              {project.projectSummary}
            </p>
          </section>

          {/* Dynamic Content Blocks (Challenge, Solution, etc.) */}
          {project.content.map((section, idx) => (
            <section key={idx}>
              <h3 className='text-2xl font-semibold text-slate-100 mb-6'>
                {section.title}
              </h3>
              <div className='space-y-6'>
                {section.blocks.map((block, bIdx) => {
                  if (block.type === "paragraph") {
                    return (
                      <p key={bIdx} className='text-slate-300 leading-relaxed'>
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul
                        key={bIdx}
                        className='list-disc pl-5 space-y-3 text-slate-300 marker:text-indigo-500'
                      >
                        {block.items?.map((item, iIdx) => (
                          <li key={iIdx} className='pl-1'>
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>
            </section>
          ))}

          {/* Key Features Grid */}
          <section className='pt-8 border-t border-slate-800'>
            <h3 className='text-2xl font-semibold text-slate-100 mb-8'>
              Key Features
            </h3>
            <div className='grid sm:grid-cols-2 gap-6'>
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className='p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors'
                >
                  <h4 className='font-semibold text-indigo-300 mb-3 text-lg'>
                    {feature.featureTitle}
                  </h4>
                  <ul className='space-y-2'>
                    {feature.featurePoints.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className='text-sm text-slate-400 leading-normal flex items-start'
                      >
                        <span className='mr-2 text-indigo-500/50'>•</span>
                        {point.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* RIGHT COLUMN: Sticky Sidebar */}
        <aside className='mt-16 lg:mt-0'>
          <div className='sticky top-24 space-y-8'>
            {/* Action Buttons */}
            <div className='flex flex-col gap-3'>
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20'
                >
                  <ExternalLink className='w-4 h-4' />
                  Visit Live Site
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium transition-all border border-slate-700'
                >
                  <Github className='w-4 h-4' />
                  View Source Code
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <div className='p-6 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm'>
              <h4 className='text-sm font-bold uppercase tracking-wider text-slate-500 mb-6'>
                Technology Stack
              </h4>
              <div className='space-y-6'>
                {project.techStackDetailed.map((stack, idx) => (
                  <div key={idx} className='group'>
                    <div className='flex justify-between items-baseline mb-2'>
                      <span className='text-xs font-semibold text-indigo-400 uppercase'>
                        {stack.category}
                      </span>
                    </div>

                    <div className='text-sm text-slate-300 mb-3 leading-snug'>
                      {stack.technologies}
                    </div>

                    {/* Rendering the Icons */}
                    <div className='flex flex-wrap gap-2'>
                      {stack.icons?.map((Icon, iconIdx) => (
                        <div
                          key={iconIdx}
                          className='p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors ring-1 ring-inset ring-slate-700/50'
                          title='Technology Icon'
                        >
                          {/* Render the Icon Component directly */}
                          <Icon className='w-5 h-5' />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

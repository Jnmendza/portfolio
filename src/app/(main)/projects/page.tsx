import { PROJECTS, getProjectBySlug } from "@/data";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

export default function ProjectsIndex() {
  return (
    <main className='min-h-screen py-24 px-4 sm:px-6'>
      {/* 1. HEADER */}
      <div className='max-w-6xl mx-auto mb-16 space-y-4'>
        <Link
          href='/'
          className='inline-flex items-center text-sm text-slate-400 hover:text-indigo-400 transition-colors mb-4 group'
        >
          <ArrowLeft className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform' />
          Home
        </Link>
        <h1 className='text-4xl md:text-5xl font-bold text-slate-100 tracking-tight'>
          All Projects
        </h1>
        <p className='text-lg text-slate-400 max-w-2xl'>
          A collection of web applications, experiments, and tools I've built
          using
          <span className='text-indigo-400 mx-1'>Next.js</span> and
          <span className='text-indigo-400 ml-1'>TypeScript</span>.
        </p>
      </div>

      {/* 2. THE GRID */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {PROJECTS.map((project, idx) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className='group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300'
          >
            {/* Image Section */}
            <div className='relative aspect-[16/9] w-full overflow-hidden'>
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                priority={idx === 0}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />
              {/* Overlay Gradient (Optional: Makes text pop if you put text over image, 
                  but here it adds a nice depth effect) */}
              <div className='absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/10 transition-colors' />
            </div>

            {/* Content Section */}
            <div className='p-6 flex flex-col flex-1'>
              <div className='mb-auto space-y-2'>
                <h2 className='text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors'>
                  {project.title}
                </h2>
                <p className='text-sm text-slate-400 line-clamp-3 leading-relaxed'>
                  {project.description}
                </p>
              </div>

              {/* Mini Tech Stack Row */}
              <div className='mt-6 pt-6 border-t border-slate-800 flex items-center justify-between'>
                <div className='flex items-center -space-x-2'>
                  {/* We grab the first 4 icons from the project's tech stack to show a preview */}
                  {getProjectIcons(project)
                    .slice(0, 4)
                    .map((Icon: IconType, i: number) => (
                      <div
                        key={i}
                        className='relative w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 ring-2 ring-slate-900 z-0 hover:z-10 hover:scale-110 transition-all'
                      >
                        <Icon className='w-4 h-4' />
                      </div>
                    ))}
                  {/* If there are more than 4, show a +X badge */}
                  {getProjectIcons(project).length > 4 && (
                    <div className='relative w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-medium text-slate-300 ring-2 ring-slate-900'>
                      +{getProjectIcons(project).length - 4}
                    </div>
                  )}
                </div>

                <span className='text-xs font-medium text-indigo-400 group-hover:translate-x-1 transition-transform'>
                  View Case Study &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

// Helper to flatten your nested techStackDetailed into a simple array of Icons
// This makes it easy to map over them in the card footer
function getProjectIcons(project: any) {
  return project.techStackDetailed.flatMap(
    (category: any) => category.icons || []
  );
}

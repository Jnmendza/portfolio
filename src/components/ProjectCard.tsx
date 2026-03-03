"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const allIcons = project.techStackDetailed.flatMap(
    (stack) => stack.icons || [],
  );
  const uniqueIcons = Array.from(new Set(allIcons));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className='h-full'
    >
      {/* 1. We removed the <Link> wrapper here. This is now just a div. */}
      <div className='group flex flex-col h-full rounded-2xl bg-zinc-900/50 border border-zinc-800/50 overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-900/80 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]'>
        {/* Image Container */}
        <div className='relative h-56 md:h-64 w-full overflow-hidden bg-zinc-950 pointer-events-none'>
          {project.thumbnailUrl ? (
            <Image
              src={project.thumbnailUrl}
              alt={`${project.title} thumbnail`}
              fill
              className='object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out'
            />
          ) : (
            <div className='absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700 ease-in-out' />
          )}
        </div>

        {/* Content Container */}
        <div className='flex flex-col flex-grow p-6 md:p-8'>
          <h3 className='font-syne text-2xl font-bold text-zinc-50 mb-1 group-hover:text-cyan-400 transition-colors'>
            {project.title}
          </h3>
          <p className='text-cyan-500 font-mono text-xs uppercase tracking-wider mb-4 pointer-events-none'>
            {project.subTitle}
          </p>

          <p className='text-zinc-400 text-sm leading-relaxed mb-8 flex-grow pointer-events-none'>
            {project.description}
          </p>

          {/* Footer: Tech Stack & CTA */}
          <div className='flex items-center justify-between mt-auto pt-6 border-t border-zinc-800/50'>
            <div className='flex items-center gap-3 text-zinc-500 pointer-events-none'>
              {uniqueIcons.slice(0, 5).map((Icon, index) => (
                <Icon key={index} className='w-5 h-5' />
              ))}
              {uniqueIcons.length > 5 && (
                <span className='text-xs font-mono ml-1'>
                  +{uniqueIcons.length - 5}
                </span>
              )}
            </div>

            {/* 2. We moved the <Link> strictly to the button area! */}
            <Link
              href={`/projects/${project.slug}`}
              className='flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors z-10 py-2 px-1'
            >
              View Case Study
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

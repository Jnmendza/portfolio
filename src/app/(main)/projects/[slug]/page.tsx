"use client";

import { use, useRef, useEffect, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { FiGithub } from "react-icons/fi";

export default function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
        );
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [project.imageUrls]);

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className='min-h-screen bg-zinc-950 pt-24 pb-20 px-6 md:px-12 lg:px-24'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className='max-w-6xl mx-auto'
      >
        {/* Back Navigation */}
        <motion.div variants={fadeIn} className='mb-12'>
          <Link
            href='/#projects'
            className='inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors text-sm font-medium'
          >
            <ArrowLeft className='w-4 h-4' />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.header variants={fadeIn} className='mb-16'>
          <h1 className='font-syne text-5xl md:text-7xl font-bold text-zinc-50 tracking-tight mb-4'>
            {project.title}
          </h1>
          <p className='text-cyan-400 font-mono uppercase tracking-widest text-sm md:text-base mb-8'>
            {project.subTitle}
          </p>
          <p className='text-zinc-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-10'>
            {project.projectSummary}
          </p>

          {/* Action Links */}
          <div className='flex flex-wrap items-center gap-4'>
            {project.projectLink && (
              <a
                href={project.projectLink}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 bg-zinc-50 text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors'
              >
                <ExternalLink className='w-4 h-4' />
                Live Site
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 bg-zinc-900 text-zinc-50 border border-zinc-800 px-6 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors'
              >
                <FiGithub className='w-4 h-4' />
                Source Code
              </a>
            )}
          </div>
        </motion.header>

        {/* Hero Image / Media Carousel */}
        <motion.div variants={fadeIn} className='mb-24 relative w-full'>
          {project.imageUrls && project.imageUrls.length > 0 ? (
            <div className='relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]'>
              <motion.div
                ref={carouselRef}
                className='cursor-grab overflow-hidden active:cursor-grabbing pb-4 pt-4 pl-6 md:pl-12 lg:pl-24'
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  drag='x'
                  dragConstraints={{ right: 0, left: -width }}
                  dragElastic={0.15}
                  dragTransition={{ bounceStiffness: 400, bounceDamping: 25 }}
                  className='flex gap-6 md:gap-8 pr-6 md:pr-12 lg:pr-24'
                >
                  {project.imageUrls.map((url, i) => (
                    <div
                      key={i}
                      className='w-[65vw] md:w-[600px] lg:w-[690px] aspect-[4/3] flex-shrink-0 relative rounded-2xl overflow-hidden border border-zinc-800'
                    >
                      <Image
                        src={url}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        sizes='(max-width: 768px) 65vw, (max-width: 1200px) 600px, 690px'
                        className='object-cover pointer-events-none'
                        priority={i === 0}
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          ) : (
            <div className='w-full h-[40vh] md:h-[60vh] bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden relative'>
              <div className='absolute inset-0 bg-gradient-to-tr from-cyan-900/10 to-zinc-900/50' />
              <div className='absolute inset-0 flex items-center justify-center text-zinc-600 font-syne text-xl'>
                [ High-Res Screenshot Placeholder ]
              </div>
            </div>
          )}
        </motion.div>

        {/* TWO-COLUMN LAYOUT
          'items-start' is critical here so the sticky child doesn't stretch to the parent's height 
        */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start'>
          {/* LEFT COLUMN: Main Content & Features */}
          <div className='lg:col-span-8 space-y-20'>
            {/* Architecture & Problem Blocks */}
            <div className='space-y-16'>
              {project.content.map((section, index) => (
                <motion.section key={index} variants={fadeIn}>
                  <h2 className='font-syne text-3xl font-bold text-zinc-50 mb-6'>
                    {section.title}
                  </h2>
                  <div className='space-y-6 text-zinc-300 text-lg leading-relaxed'>
                    {section.blocks.map((block, i) => (
                      <div key={i}>
                        {block.type === "paragraph" && <p>{block.text}</p>}
                        {block.type === "list" && block.items && (
                          <ul className='list-disc list-inside space-y-3 text-zinc-400 marker:text-cyan-500'>
                            {block.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Key Features */}
            {project.features.length > 0 && (
              <motion.section variants={fadeIn}>
                <h2 className='font-syne text-3xl font-bold text-zinc-50 mb-8 pb-4 border-b border-zinc-800/50'>
                  Key Features
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className='bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800/50'
                    >
                      <h3 className='text-xl font-bold text-zinc-50 mb-4'>
                        {feature.featureTitle}
                      </h3>
                      <ul className='space-y-4'>
                        {feature.featurePoints.map((point, i) => (
                          <li
                            key={i}
                            className='flex items-start gap-3 text-zinc-400 text-sm md:text-base'
                          >
                            <CheckCircle2 className='w-5 h-5 text-cyan-500 shrink-0 mt-0.5' />
                            <span className='leading-relaxed'>
                              {point.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* RIGHT COLUMN: Sticky Tech Stack */}
          <motion.aside
            variants={fadeIn}
            className='lg:col-span-4 sticky top-32'
          >
            <div className='bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-8'>
              <h2 className='text-zinc-500 font-mono text-xs uppercase tracking-widest mb-8'>
                Technology Stack
              </h2>

              <div className='space-y-8'>
                {project.techStackDetailed.map((stack, index) => (
                  <div key={index}>
                    <h3 className='text-cyan-500 font-mono text-xs uppercase tracking-wider mb-2'>
                      {stack.category}
                    </h3>
                    <p className='text-zinc-300 text-sm leading-relaxed mb-3'>
                      {stack.technologies}
                    </p>

                    {/* Icon display modeled after the reference screenshot */}
                    {stack.icons && stack.icons.length > 0 && (
                      <div className='flex flex-wrap gap-2 text-zinc-400'>
                        {stack.icons.map((Icon, i) => (
                          <div
                            key={i}
                            className='p-2 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center'
                          >
                            <Icon className='w-5 h-5' />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </main>
  );
}

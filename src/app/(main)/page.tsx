"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Logo } from "@/components/Logo";

export default function Home() {
  // Animation variants for a clean, staggered reveal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <main className='relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden'>
        {/* Subtle background glow effect to break up the solid black */}
        <div className='absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none' />

        <motion.div
          className='max-w-4xl z-10'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.p
            variants={itemVariants}
            className='text-cyan-400 font-mono text-sm md:text-base mb-6 tracking-wide'
          >
            Based in Oceanside, CA
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className='font-syne text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8'
          >
            Bridging the gap between{" "}
            <span className='text-zinc-500'>design</span> and{" "}
            <span className='text-zinc-500'>performance.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12'
          >
            I am Jonathan Mendoza, a Full Stack Engineer building pixel-perfect,
            scalable web applications with
            <span className='text-zinc-100 font-medium'> Next.js</span>,
            <span className='text-zinc-100 font-medium'> TypeScript</span>, and
            <span className='text-zinc-100 font-medium'> Tailwind</span>.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='flex flex-wrap items-center gap-6'
          >
            {/* We will build this button out with shadcn next */}
            <Link
              href='#projects'
              className='group flex items-center gap-2 bg-zinc-50 text-zinc-950 px-6 py-3 rounded-full font-medium transition-all hover:bg-zinc-200'
            >
              View Projects
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </Link>

            <div className='flex items-center gap-4 text-zinc-400'>
              <Link
                href='https://github.com/jnmendza'
                target='_blank'
                className='hover:text-cyan-400 transition-colors'
              >
                <FiGithub className='w-6 h-6' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/jnmendza/'
                target='_blank'
                className='hover:text-cyan-400 transition-colors'
              >
                <FiLinkedin className='w-6 h-6' />
              </Link>
              <Link
                href='mailto:contact@jonathanmendoza.dev'
                className='hover:text-cyan-400 transition-colors'
              >
                <Mail className='w-6 h-6' />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* NEW: Projects Section */}
      <section
        id='projects'
        className='py-24 bg-zinc-950 relative z-10 overflow-hidden'
      >
        <div className='px-6 md:px-12 lg:px-24'>
          <div className='mb-12'>
            <h2 className='font-syne text-4xl md:text-5xl font-bold text-zinc-50 mb-4'>
              Featured Work
            </h2>
            <div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
              <p className='text-zinc-400 text-lg max-w-2xl'>
                A selection of my recent projects, focusing on scalable
                architecture, seamless user experiences, and bridging the gap
                between design and engineering.
              </p>
              {/* Optional: Add a subtle hint for desktop users */}
              <p className='text-zinc-600 font-mono text-sm hidden md:block'>
                [ Drag to explore ]
              </p>
            </div>
          </div>
        </div>

        {/* NEW: Drop the carousel in here! */}
        <ProjectCarousel projects={projects} />
      </section>

      <section
        id='about'
        className='py-32 px-6 md:px-12 lg:px-24 bg-zinc-950 relative z-10 border-t border-zinc-900'
      >
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24'
          >
            {/* Left Column: The Narrative */}
            <div className='lg:col-span-7 space-y-8'>
              <h2 className='font-syne text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight'>
                Design-driven. <br />
                <span className='text-zinc-600'>Performance-obsessed.</span>
              </h2>

              <div className='space-y-6 text-zinc-300 text-lg leading-relaxed'>
                <p>
                  I’m Jonathan, a Full Stack Engineer based in Oceanside,
                  California. I specialize in building fast, user-centric web
                  experiences using{" "}
                  <span className='text-zinc-50 font-medium'>
                    React, TypeScript, and Next.js
                  </span>
                  .
                </p>
                <p>
                  Because of my background in Graphic & UI Design, I speak Figma
                  fluently. This allows me to bridge the gap between creative
                  vision and technical implementation. I care deeply about
                  smooth interactions, pixel-level detail, and writing code that
                  scales.
                </p>
                <p>
                  I’ve worked on everything from modernizing patient-facing
                  healthcare apps under strict compliance standards to
                  architecting early-stage startup MVPs from zero-to-one. I
                  thrive in collaborative environments where engineers wear
                  multiple hats and product ideas move fast.
                </p>
                <p className='pt-6 border-t border-zinc-800/50 text-zinc-400'>
                  <strong className='text-zinc-200 font-medium block mb-2'>
                    When I&apos;m not coding:
                  </strong>
                  I’m usually digging through crates for vinyl records, hunting
                  for the best tacos in San Diego, or watching football—whether
                  I&apos;m backing SDFC locally or cheering on Barça with the
                  Penya Blaugrana San Diego.
                </p>
              </div>
            </div>

            {/* Right Column: The "At a Glance" Stats */}
            <div className='lg:col-span-5 flex flex-col justify-center space-y-10'>
              <div>
                <h3 className='text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4'>
                  Core Focus
                </h3>
                <ul className='space-y-2 text-zinc-300 font-medium text-lg'>
                  <li>Full Stack Development</li>
                  <li>Legacy System Modernization</li>
                  <li>UI/UX Engineering</li>
                  <li>Workflow Automation</li>
                </ul>
              </div>

              <div>
                <h3 className='text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4'>
                  Background
                </h3>
                <ul className='space-y-2 text-zinc-400'>
                  <li>Software Engineer @ Upkeep Connects</li>
                  <li>Jr Software Engineer @ Perlman Clinic</li>
                  <li>Graphic & UI Designer @ ReviewBuzz</li>
                </ul>
              </div>

              <div>
                <h3 className='text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4'>
                  Education
                </h3>
                <ul className='space-y-2 text-zinc-400'>
                  <li>Bloom Tech (Lambda School)</li>
                  <li>Digital Content Creation Program, UCSD Extension</li>
                  <li>B.S. in 3D Design, Platt College</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Very basic footer to cap off the page */}
      <footer className='py-8 flex items-center justify-center gap-2 text-zinc-600 text-sm border-t border-zinc-900 bg-zinc-950 relative z-10'>
        <Logo width={12} height={12} fill='#737373' />
        <p>
          © {new Date().getFullYear()} Jonathan Mendoza. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

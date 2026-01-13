import { IMAGE_PLACEHOLDER, SKILLS_ICONS } from "@/data";
import { ArrowLeft, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className='min-h-screen py-24 px-4 sm:px-6'>
      {/* 1. BACK LINK */}
      <div className='max-w-4xl mx-auto mb-12'>
        <Link
          href='/'
          className='inline-flex items-center text-sm text-slate-400 hover:text-indigo-400 transition-colors group'
        >
          <ArrowLeft className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform' />
          Back Home
        </Link>
      </div>

      <div className='max-w-4xl mx-auto space-y-24'>
        {/* 2. HERO: BIO & STORY */}
        <section className='grid md:grid-cols-[1.5fr_1fr] gap-12 items-start'>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold text-slate-100 tracking-tight'>
              About Me
            </h1>
            <div className='space-y-4 text-slate-300 leading-relaxed text-lg'>
              <p>
                I’m Jonathan, a Full Stack Engineer based in Oceanside,
                California.
              </p>
              <p>
                I specialize in building fast, user-centric web experiences
                using <span className='text-indigo-400 font-medium'>React</span>
                ,{" "}
                <span className='text-indigo-400 font-medium'>TypeScript</span>,
                and <span className='text-indigo-400 font-medium'>Next.js</span>
                . My background in design allows me to "speak Figma" fluently,
                bridging the gap between creative vision and technical
                implementation. I care deeply about smooth interactions,
                pixel-level detail, and writing code that scales.
              </p>
              <p>
                I’ve worked on everything from patient-facing healthcare apps to
                early-stage startup MVPs. I thrive in collaborative environments
                where engineers wear multiple hats and product ideas move fast.
              </p>
              <p>
                <span className='text-slate-100 font-semibold block mb-1'>
                  When I'm not coding:
                </span>
                I’m usually digging for vinyl records, watching football (Visca
                el Barça!), or hunting for the best tacos in North County.
              </p>
            </div>

            {/* Social Links */}
            <div className='flex gap-4 pt-4'>
              <a
                href='https://www.linkedin.com/in/jnmendza/'
                target='_blank'
                className='inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors'
              >
                <FaLinkedin className='w-4 h-4' />
                LinkedIn
              </a>
              <a
                href='mailto:me@jonathanmendoza.dev'
                className='inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors'
              >
                <Mail className='w-4 h-4' />
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Visual / Image */}
          <div className='relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 rotate-3 hover:rotate-0 transition-transform duration-500'>
            {/* Replace this with a real photo of you or a setup shot later */}
            <Image
              src={IMAGE_PLACEHOLDER} // Placeholder or Headshot
              alt='Jonathan Mendoza'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-indigo-500/10 mix-blend-overlay' />
          </div>
        </section>

        {/* 3. THE STACK */}
        <section>
          <div className='mb-8 border-b border-slate-800 pb-4'>
            <h2 className='text-2xl font-bold text-slate-100'>
              Technical Toolkit
            </h2>
            <p className='text-slate-400 mt-1'>
              The technologies I use to build robust applications.
            </p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            {SKILLS_ICONS.map((skill, idx) => (
              <div
                key={idx}
                className='flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all group'
              >
                <div className='p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors'>
                  <skill.Icon className='w-5 h-5' />
                </div>
                <span className='font-medium text-slate-300 text-sm'>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

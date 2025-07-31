import {
  GITHUB_URL,
  IMAGE_PLACEHOLDER,
  LINKEDIN_URL,
  SKILLS_ICONS,
} from "@/constants";
import Image from "next/image";
import React from "react";
import { HiDocumentDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TitleBanner from "@/components/TitleBanner";
import ContactBtn from "@/components/ContactBtn";
import Link from "next/link";

const AboutPage = () => {
  const iconCss =
    "cursor-pointer transform transition-transform duration-200 hover:scale-110 text-primary w-10 h-10";
  return (
    <div className='px-6 mt-4 space-y-4'>
      <TitleBanner title='About' />

      <div className='flex flex-col bg-blackBlue rounded-lg p-6 md:flex-row gap-6 md:gap-8'>
        {/* Image Container - Left */}
        <div className='w-full md:w-1/3 flex-shrink-0 h-[350px] relative aspect-[3/4]'>
          <Image
            src={IMAGE_PLACEHOLDER}
            alt='Profile picture'
            fill
            className='rounded-lg object-cover'
            sizes='(max-width: 768px) 100vw, 33vw'
          />
        </div>

        {/* Text Content - Right */}
        <div className='flex-1 md:w-2/3'>
          <p className='text-sm text-mayGray dark:text-gray-300 leading-relaxed'>
            I&#39;m Jonathan, a Front-End Engineer based out of Oceanside,
            California. I build fast, clean, user-friendly web experiences using
            tools like React, TypeScript, and Tailwind. I&#39;ve worked on
            everything from patient-facing healthcare apps to early-stage
            startups, always focusing on smooth interactions, pixel-level
            detail, and code that scales. Before tech, I was deep in the world
            of design — which means I speak a little Figma and love
            collaborating with designers to bring ideas to life. I enjoy working
            on small, scrappy teams where engineers wear multiple hats and
            product ideas move fast. Outside of code, I&#39;m all about music
            (especially vinyl), photography, football (the global kind), and
            exploring new places. I love building things that connect people —
            whether that&#39;s helping someone book a home repair or discover a
            cool local event. Right now, I&#39;m leveling up my engineering
            skills, experimenting with some new project ideas, and always
            looking to join teams where creativity and thoughtful UX matter. If
            you&#39;re working on something cool — or just want to talk code,
            design, or where to find the best tacos in North County — feel free
            to reach out.
          </p>
          <div className='flex items-center mt-4 p-2 space-x-2'>
            <Link
              href='https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/J.Mendoza-resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='flex cursor-pointer items-center border-2 border-primary border-solid rounded-lg px-4 py-2 text-primary hover:bg-primary hover:text-blackBlue transition-colors'
            >
              Download Resume
              <HiDocumentDownload className='ml-2' />
            </Link>
            <ContactBtn className='text-blackBlue' />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        <div className='flex flex-col bg-blackBlue col-span-2 p-4 md:p-6 rounded-lg'>
          <h1 className='font-bold text-xl md:text-2xl mb-2 md:mb-4'>Skills</h1>
          <div className='flex flex-wrap justify-between gap-3 md:gap-4 text-3xl md:text-4xl'>
            {SKILLS_ICONS.map(({ Icon, name }, index) => (
              <div key={index} className='relative group'>
                <Icon className='flex-shrink-0' />
                <span className='absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none'>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center justify-center bg-blackBlue p-4 rounded-lg'>
          <div className='flex flex-wrap justify-center gap-3 md:gap-4'>
            <Link href={GITHUB_URL}>
              <FaGithub className={iconCss} />
            </Link>
            <Link href={LINKEDIN_URL}>
              <FaLinkedin className={iconCss} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import { IMAGE_PLACEHOLDER } from "@/constants";
import Image from "next/image";
import React from "react";
import { HiDocumentDownload } from "react-icons/hi";
import { FaGithub, FaLink, FaFigma, FaReact } from "react-icons/fa";
import TitleBanner from "@/components/TitleBanner";

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
            I&#39;m a Computer Science student at SRM Institute of Science and
            Technology. My passion lies in building user-friendly solutions that
            enhance overall user experiences. I am currently focused on React
            Native, Expo, Firebase, and React, leveraging these technologies to
            create responsive and functional applications. One of my ongoing
            projects is Rescue Paws, a mobile app designed to facilitate the
            rescue and adoption of stray and pet dogs. The app will soon be
            published on the Play Store and App Store, and it incorporates
            AI-driven features to guide users through the adoption process. In
            addition to app development, I&#39;ve led the design and development
            of platforms like the GitHub Community SRM website, which serves as
            an all-in-one platform for the community. I&#39;ve also organized
            and managed events such as hackathons and workshops, mentoring
            others in UI/UX and graphic design. I thrive in Agile Scrum
            environments and believe collaboration and teamwork are essential to
            delivering successful projects. I&#39;m always eager to work on
            impactful projects that challenge me to grow while also contributing
            to meaningful outcomes. So, whether you&#39;re looking for a
            dedicated developer, a creative designer, or a collaborative team
            member, I&#39;m here to help bring ideas to life. Let&#39;s connect
            and create innovative solutions together!
          </p>
          {/* <button
           className='flex cursor-pointer items-center border-2 border-primary border-solid rounded-lg px-4 py-2 text-primary mt-4 hover:bg-primary hover:text-blackBlue transition-colors'>
            Download Resume
            <HiDocumentDownload className='ml-2' />
          </button> */}
          <button>
            <a
              href='https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/ed-public/portfolio/jm-0625.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='flex cursor-pointer items-center border-2 border-primary border-solid rounded-lg px-4 py-2 text-primary mt-4 hover:bg-primary hover:text-blackBlue transition-colors'
            >
              Download Resume
              <HiDocumentDownload className='ml-2' />
            </a>
          </button>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        <div className='flex flex-col bg-blackBlue col-span-2 p-4 md:p-6 rounded-lg'>
          <h1 className='font-bold text-xl md:text-2xl mb-2 md:mb-4'>Skills</h1>
          <div className='flex flex-wrap justify-between gap-3 md:gap-4 text-3xl md:text-4xl'>
            {[
              FaGithub,
              FaLink,
              FaFigma,
              FaReact,
              FaGithub,
              FaLink,
              FaFigma,
              FaReact,
            ].map((Icon, index) => (
              <Icon key={index} className='flex-shrink-0' />
            ))}
          </div>
        </div>
        <div className='flex items-center justify-center bg-blackBlue p-4 rounded-lg'>
          <div className='flex flex-wrap justify-center gap-3 md:gap-4'>
            <FaGithub className={iconCss} />
            <FaLink className={iconCss} />
            <FaFigma className={iconCss} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

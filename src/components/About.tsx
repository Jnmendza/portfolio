import { bebasFont } from "@/lib/font";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className='bg-primary text-background flex flex-col justify-center items-center p-10'>
      <h1 className={`${bebasFont.className} text-4xl`}>About</h1>
      <p className='mt-4'>
        Hello! I&apos;m a Front-End Engineer based in Oceanside, CA, focused on
        building fast, intuitive web interfaces with React, TypeScript, and
        Tailwind. I&apos;ve worked on healthcare apps and early-stage startups,
        always prioritizing clean code, thoughtful UX, and strong collaboration
        with designers and teams. Outside of tech, I&apos;m into music (vinyl
        especially), photography, football, and travel. I&apos;m always
        exploring new ideas and looking to create experiences that are useful,
        beautiful, and genuinely fun to use.
      </p>
      <div className='w-full flex justify-end mt-4'>
        <Link
          href={"/about"}
          className='bg-background cursor-pointer text-primary rounded-lg py-2 px-4 hover:scale-[1.02]'
        >
          More...
        </Link>
      </div>
    </div>
  );
};

export default About;

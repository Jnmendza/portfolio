import React from "react";
import { bebasFont } from "@/lib/font";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <div
        className={`${bebasFont.className} absolute inset-0 z-0 flex flex-col justify-center overflow-hidden`}
      >
        <div className='w-[200%] -translate-x-1/4 opacity-30'>
          <h1 className='text-[250px] text-[#1C1C1C] text-stroke-1 whitespace-nowrap'>
            Web Developer Web Developer Web Developer Web Developer
          </h1>
          <h1 className='text-[250px] text-[#1C1C1C] text-stroke-1 whitespace-nowrap leading-[0.6]'>
            Developer Web Developer Web Developer Web Developer
          </h1>
        </div>
      </div>

      {/* Vignettes */}
      <div className='absolute left-0 top-0 h-full w-1/3 z-1 bg-gradient-to-r from-black to-transparent pointer-events-none' />
      <div className='absolute right-0 top-0 h-full w-1/3 z-1 bg-gradient-to-l from-black to-transparent pointer-events-none' />

      <div className='absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-8 space-y-4'>
        <p className='text-3xl font-bold text-primary'>Hey There I&apos;m</p>
        <h1 className={`text-9xl ${bebasFont.className} text-primary`}>
          Jonathan
        </h1>
        <p className='text-xl font-bold max-w-80 text-primary -mt-4'>
          Thriving where creativity meets thoughtful execution.
        </p>
        <div className='flex space-x-10 mt-2 text-primary'>
          <Link href={"https://github.com/Jnmendza"}>
            <FaGithub
              size={50}
              className='cursor-pointer transform transition-transform duration-200 hover:scale-110'
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/jnmendza/"}>
            <FaLinkedin
              size={50}
              className='cursor-pointer transform transition-transform duration-200 hover:scale-110'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

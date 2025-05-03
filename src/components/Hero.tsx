import React from "react";
import { bebasFont } from "@/lib/font";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='relative min-h-screen w-full overflow-hidden -mt-32'>
      {/* Background Text - Extends beyond both edges */}
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

      {/* Perfectly Centered Content */}
      <div className='relative z-10 h-screen flex flex-col justify-center items-center text-center p-8 space-y-4'>
        <p className='text-3xl font-bold text-primary'>Hey There I&apos;m</p>
        <h1 className={`text-9xl ${bebasFont.className} text-primary`}>
          Jonathan
        </h1>
        <p className='text-xl font-bold max-w-80 text-primary -mt-4'>
          Currently studying computer science and engineering.
        </p>
        <div className='flex space-x-10 mt-2 text-primary'>
          <FaGithub size={50} />
          <FaLinkedin size={50} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

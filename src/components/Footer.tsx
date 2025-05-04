import { bebasFont } from "@/lib/font";
import React from "react";
import { BiLogoMagento } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='px-6 md:px-6 mt-4'>
      <div className='bg-blackBlue rounded-t-lg grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6'>
        {/* Logo - Full width on mobile, 2 cols on desktop */}
        <div className='md:col-span-2 flex justify-center md:justify-start'>
          <BiLogoMagento
            size={120}
            className='text-gray-700 w-full max-w-[200px] md:w-auto'
          />
        </div>

        {/* Text content - Full width on mobile, 1 col on desktop */}
        <div className='text-gray-700 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
          <h1
            className={`${bebasFont.className} text-3xl md:text-5xl leading-tight`}
          >
            Something <span className='text-primary'>catchy</span> or{" "}
            <span className='text-primary'>corny</span> to get a response.
          </h1>
          <p className='mt-2 md:mt-4 text-sm md:text-base'>
            Portfolio v2.3 © 2025 Mendoza.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

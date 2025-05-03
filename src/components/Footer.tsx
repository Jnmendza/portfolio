import { bebasFont } from "@/lib/font";
import React from "react";
import { BiLogoMagento } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='px-6 mt-4'>
      <div className='bg-blackBlue rounded-t-lg grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <BiLogoMagento size={200} className='text-gray-700' />
        </div>
        <div className='text-gray-700 flex flex-col justify-center'>
          <h1 className={`${bebasFont.className} text-5xl`}>
            Something <span className='text-primary'>catchy</span> or{" "}
            <span className='text-primary'>corny</span> to get a response.
          </h1>
          <p>Portfolio v2.3 © 2025 Mendoza.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

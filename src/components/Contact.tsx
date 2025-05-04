import { bebasFont } from "@/lib/font";
import React from "react";
import { FaFigma, FaGithub, FaLink, FaReact } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const iconCss =
    "cursor-pointer transform transition-transform duration-200 hover:scale-110 text-gray-700 w-5 h-5";
  return (
    <div className='px-6 mt-4'>
      <div className='flex p-6 rounded-lg justify-between bg-primary text-background'>
        <div className='w-1/3 space-y-2'>
          <h1 className={`${bebasFont.className} text-6xl`}>Get in touch</h1>
          <p>
            If you are interested in my work or want to provide feedback about
            this website, I am open to exchanging ideas .
          </p>
        </div>
        <div className='flex flex-col items-end'>
          <p className='font-bold'>Follow me on</p>
          <div className='flex gap-4 mt-2'>
            <FaGithub className={iconCss} />
            <FaLink className={iconCss} />
            <FaFigma className={iconCss} />
            <FaReact className={iconCss} />
          </div>
          <button className='mt-6 flex items-center justify-center rounded-2xl p-2 border-black border-2 border-solid cursor-pointer transform transition-transform duration-200 hover:scale-110'>
            <p className='font-bold mr-2'>Contact Me</p>
            <IoIosSend size={20} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

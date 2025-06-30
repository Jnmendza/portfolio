import { GITHUB_URL, LINKEDIN_URL } from "@/constants";
import { bebasFont } from "@/lib/font";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ContactBtn from "./ContactBtn";

const Contact = () => {
  const iconCss =
    "cursor-pointer transform transition-transform duration-200 hover:scale-110 text-mayGray w-5 h-5";
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
            <Link href={GITHUB_URL}>
              <FaGithub className={iconCss} />
            </Link>
            <Link href={LINKEDIN_URL}>
              <FaLinkedin className={iconCss} />
            </Link>
          </div>
          <ContactBtn className='mt-6' />
        </div>
      </div>
    </div>
  );
};

export default Contact;

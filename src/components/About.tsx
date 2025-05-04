import { bebasFont } from "@/lib/font";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className='bg-primary text-background flex flex-col justify-center items-center p-10'>
      <h1 className={`${bebasFont.className} text-4xl`}>About</h1>
      <p className='mt-4'>
        Hi there! I&apos;m Jonathan, a third-year Computer Science student at
        SRM Institute with a passion for crafting user-centric experiences. I
        specialize in UI/UX design, front-end development, and graphic design,
        with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS,
        QML, and C++. I thrive on collaboration and bring experience in agile
        scrum methodologies. Beyond coding, I enjoy photography, graphic design,
        and exploring music. Let&apos;s connect and bring your digital visions
        to life
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

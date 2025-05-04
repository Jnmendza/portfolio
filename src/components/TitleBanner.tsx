import { bebasFont } from "@/lib/font";
import React from "react";

const TitleBanner = ({ title }: { title: string }) => {
  return (
    <div className='bg-blackBlue w-full p-6 text-center text-6xl mt-20'>
      <h1 className={`${bebasFont.className}`}>{title}</h1>
    </div>
  );
};

export default TitleBanner;

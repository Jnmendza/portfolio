import { bebasFont } from "@/lib/font";
import React from "react";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa6";
import { PROJECTS } from "@/constants";
import Link from "next/link";

const Projects = () => {
  return (
    <div className='px-6 mt-4 space-y-4'>
      <div className={`bg-blackBlue rounded-lg flex justify-between p-4`}>
        <h1 className={`${bebasFont.className} text-4xl`}>Recent Projects</h1>
        <Link
          href={"/projects"}
          className='flex items-center cursor-pointer hover:text-primary transition-transform transform hover:translate-x-1'
        >
          <p className='font-bold text-2xl mr-2'>See all</p>
          <FaArrowRight size={20} />
        </Link>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {PROJECTS.slice(0, 3).map(
          (
            { imageUrl, slug, title, subTitle, description, techStackDetailed },
            index
          ) => (
            <ProjectCard
              key={index}
              slug={slug}
              imageUrl={imageUrl}
              title={title}
              subTitle={subTitle}
              description={description}
              techStackDetailed={techStackDetailed}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;

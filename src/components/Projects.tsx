import { bebasFont } from "@/lib/font";
import React from "react";
import ProjectCard, { CardProps } from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa6";
import { IMAGE_URL } from "@/constants";

const Projects = () => {
  const projects: CardProps[] = [
    {
      imageUrl: IMAGE_URL,
      title: "Project Title",
      subTitle: "Project Subtitle",
      description: "This is a brief description of the project.",
    },
    {
      imageUrl: IMAGE_URL,
      title: "Project Title",
      subTitle: "Project Subtitle",
      description: "This is a brief description of the project.",
    },
    {
      imageUrl: IMAGE_URL,
      title: "Project Title",
      subTitle: "Project Subtitle",
      description: "This is a brief description of the project.",
    },
  ];

  return (
    <div className='px-6 mt-4'>
      <div className={`bg-blackBlue rounded-lg flex justify-between p-4`}>
        <h1 className={`${bebasFont.className} text-4xl`}>Recent Projects</h1>
        <button className='flex items-center cursor-pointer hover:text-primary transition-transform transform hover:-translate-x-1'>
          <p className='font-bold text-2xl mr-2'>See all</p>
          <FaArrowRight size={20} />
        </button>
      </div>
      <div className='flex justify-between space-x-4 mt-4'>
        {projects.map(({ imageUrl, title, subTitle, description }, index) => (
          <ProjectCard
            key={index}
            imageUrl={imageUrl}
            title={title}
            subTitle={subTitle}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

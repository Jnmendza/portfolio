import TitleBanner from "@/components/TitleBanner";
import React from "react";
import { PROJECTS } from "@/constants";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className='px-6 mt-4 space-y-4'>
      <TitleBanner title='Projects' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {PROJECTS.map(
          (
            {
              imageUrl,
              slug,
              title,
              subTitle,
              description,
              projectLink,
              githubLink,
              techStack,
            },
            index
          ) => (
            <ProjectCard
              key={index}
              slug={slug}
              imageUrl={imageUrl}
              title={title}
              subTitle={subTitle}
              description={description}
              projectLink={projectLink}
              githubLink={githubLink}
              techStack={techStack}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;

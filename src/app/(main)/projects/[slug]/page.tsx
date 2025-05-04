import React from "react";
import { PROJECTS } from "@/constants";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaLaptop } from "react-icons/fa";
import Image from "next/image";
import ProjectLink from "@/components/ProjectLink";
import FeatureList from "@/components/FeatureList";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return <div>No project found</div>;
  const {
    imageUrl,
    title,
    subTitle,
    description,
    techStack,
    projectLink,
    githubLink,
    features,
  } = project;

  return (
    <div className='px-6 mt-4 space-y-4'>
      <div className='bg-blackBlue w-full p-6 text-start text-xl mt-20'>
        <Link
          href={"/projects"}
          className='flex items-center cursor-pointer hover:text-primary transition-transform transform hover:-translate-x-1 space-x-2'
        >
          <FaArrowLeft size={20} />
          <p className='font-bold text-2xl mr-2'>Back</p>
        </Link>
      </div>
      <div className='flex flex-col bg-blackBlue rounded-lg p-6 md:flex-row gap-6 md:gap-8 items-start'>
        {/* Image Container - Left */}
        <div className='w-full md:w-auto flex-shrink-0'>
          <Image
            src={imageUrl}
            alt='stock-image'
            width={250}
            height={350}
            className='rounded-lg object-cover w-full h-auto md:h-[350px]'
          />
        </div>

        <div className='flex-1 space-y-4 '>
          <h1 className='text-2xl font-bold'>{title}</h1>
          <h3 className='text-primary'>{subTitle}</h3>
          <p className='text-sm text-gray-700 dark:text-gray-300 leading-relaxed'>
            {description}
          </p>
          <div className='mt-2'>
            <p className='font-bold'>Tech Stack</p>
            <div className='flex space-x-2 text-4xl mt-2'>
              {techStack.map((Icon, index) => (
                <Icon key={index} />
              ))}
            </div>
          </div>

          <div className='flex space-x-4'>
            <ProjectLink link={projectLink} Icon={FaLaptop} iconLabel='Demo' />
            <ProjectLink link={githubLink} Icon={FaGithub} iconLabel='GitHub' />
          </div>
        </div>
      </div>
      <div className='bg-blackBlue rounded-lg p-6'>
        <h1 className='text-primary font-bold text-2xl'>Main Features</h1>
        <FeatureList features={features} />
      </div>
    </div>
  );
};

export default ProjectPage;

import React from "react";
import { PROJECTS } from "@/constants"; // Your data file
import { FaArrowLeft, FaGithub, FaLaptop } from "react-icons/fa";
import Image from "next/image";
import ProjectLink from "@/components/ProjectLink";
import FeatureList from "@/components/FeatureList";
import Link from "next/link";
import type { ContentBlock } from "@/types";
import { notFound } from "next/navigation";

const ProjectSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className='bg-blackBlue rounded-lg p-6'>
    <h2 className='text-primary font-bold text-2xl mb-4'>{title}</h2>
    <div className='text-mayGray dark:text-gray-300 leading-relaxed space-y-4'>
      {children}
    </div>
  </div>
);

const ContentBlock = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "list":
      return (
        <ul className='list-disc space-y-2 pl-5'>
          {block.items?.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const {
    imageUrl,
    title,
    subTitle,
    projectLink,
    githubLink,
    projectSummary,
    techStackDetailed,
    features,
    content,
  } = project;

  return (
    <div className='px-6 mt-4 space-y-6 pb-12'>
      {/* Back Button and other static elements */}
      <div className='bg-blackBlue w-full p-6 text-start text-xl mt-20'>
        <Link
          href={"/projects"}
          className='flex items-center cursor-pointer hover:text-primary transition-transform transform hover:-translate-x-1 space-x-2'
        >
          <FaArrowLeft size={20} />
          <p className='font-bold text-2xl mr-2'>All Projects</p>
        </Link>
      </div>

      {/* --- TOP SUMMARY SECTION --- */}
      <div className='flex flex-col bg-blackBlue rounded-lg p-6 md:flex-row gap-6 md:gap-8 items-start'>
        <div className='w-full md:w-1/3 flex-shrink-0'>
          <Image
            src={imageUrl}
            alt={`${title} project screenshot`}
            width={400}
            height={300}
            className='rounded-lg object-cover w-full h-auto'
          />
          <div className='flex space-x-4 mt-4'>
            <ProjectLink
              link={projectLink || ""}
              Icon={FaLaptop}
              iconLabel='Live Demo'
            />
            <ProjectLink
              link={githubLink || ""}
              Icon={FaGithub}
              iconLabel='GitHub'
            />
          </div>
        </div>
        <div className='flex-1 space-y-4'>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <h3 className='text-primary text-lg'>{subTitle}</h3>
          <p className='text-sm text-mayGray dark:text-gray-300 leading-relaxed'>
            {projectSummary}
          </p>
        </div>
      </div>

      {/* --- DYNAMIC CONTENT SECTIONS --- */}
      {content?.map((section) => (
        <ProjectSection key={section.title} title={section.title}>
          {section.blocks.map((block, index) => (
            <ContentBlock key={index} block={block} />
          ))}
        </ProjectSection>
      ))}

      {/* --- TECH STACK SECTION --- */}
      {techStackDetailed && (
        <ProjectSection title='Tech Stack & Architecture'>
          <div className='overflow-x-auto'>
            <table className='min-w-full text-left text-sm font-light'>
              <thead className='border-b font-medium dark:border-neutral-500'>
                <tr>
                  <th scope='col' className='px-6 py-3 text-primary'>
                    Category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Technologies
                  </th>
                </tr>
              </thead>
              <tbody>
                {techStackDetailed.map((item) => (
                  <tr
                    key={item.category}
                    className='border-b dark:border-neutral-500 align-middle'
                  >
                    <td className='whitespace-nowrap px-6 py-4 font-semibold text-primary'>
                      {item.category}
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-x-4'>
                        <span>{item.technologies}</span>
                        <div className='flex items-center gap-x-2 text-2xl text-mayGray'>
                          {item.icons?.map((Icon, index) => (
                            <Icon
                              key={index}
                              className='transition-transform hover:scale-110'
                            />
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ProjectSection>
      )}

      {features && (
        <ProjectSection title='Key Features'>
          <FeatureList features={features} />
        </ProjectSection>
      )}
    </div>
  );
};

export default ProjectPage;

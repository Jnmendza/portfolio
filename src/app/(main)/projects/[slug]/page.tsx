import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-zinc-950 text-zinc-50'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24'>
        {/* Navigation */}
        <Link
          href='/#projects'
          className='inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors mb-12 group'
        >
          <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24'>
          <div>
            <p className='text-cyan-400 font-mono text-sm uppercase tracking-widest mb-4'>
              {project.subTitle}
            </p>
            <h1 className='font-syne text-5xl md:text-7xl font-bold mb-8'>
              {project.title}
            </h1>
            <p className='text-zinc-400 text-xl leading-relaxed mb-12'>
              {project.projectSummary}
            </p>

            <div className='flex flex-wrap gap-6'>
              {project.projectLink && (
                <Link
                  href={project.projectLink}
                  target='_blank'
                  className='flex items-center gap-2 bg-zinc-50 text-zinc-950 px-6 py-3 rounded-full font-medium transition-all hover:bg-zinc-200'
                >
                  Live Site
                  <ExternalLink className='w-4 h-4' />
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target='_blank'
                  className='flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 text-zinc-50 px-6 py-3 rounded-full font-medium transition-all hover:bg-zinc-800 hover:border-zinc-700'
                >
                  View Code
                  <Github className='w-4 h-4' />
                </Link>
              )}
            </div>
          </div>

          <div className='relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-zinc-800/50 bg-zinc-900'>
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>

        {/* Content Blocks */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24'>
          {/* Main Content */}
          <div className='lg:col-span-8 space-y-24'>
            {project.content.map((section, idx) => (
              <div key={idx} className='space-y-8'>
                <h2 className='font-syne text-3xl font-bold border-b border-zinc-900 pb-4'>
                  {section.title}
                </h2>
                <div className='space-y-6'>
                  {section.blocks.map((block, bIdx) => {
                    if (block.type === "paragraph") {
                      return (
                        <p
                          key={bIdx}
                          className='text-zinc-400 text-lg leading-relaxed'
                        >
                          {block.text}
                        </p>
                      );
                    }
                    if (block.type === "list") {
                      return (
                        <ul key={bIdx} className='space-y-4'>
                          {block.items?.map((item, iIdx) => (
                            <li
                              key={iIdx}
                              className='flex items-start gap-3 text-zinc-400 text-lg'
                            >
                              <span className='text-cyan-400 mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0' />
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}

            {/* Features */}
            {project.features.length > 0 && (
              <div className='space-y-12'>
                <h2 className='font-syne text-3xl font-bold border-b border-zinc-900 pb-4'>
                  Key Features
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className='p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50'
                    >
                      <h3 className='text-zinc-50 font-bold text-xl mb-4'>
                        {feature.featureTitle}
                      </h3>
                      <ul className='space-y-3'>
                        {feature.featurePoints.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className='text-zinc-400 text-sm leading-relaxed flex items-start gap-2'
                          >
                            <span className='text-cyan-400 mt-1.5 block w-1 h-1 rounded-full flex-shrink-0' />
                            {point.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Tech Stack */}
          <div className='lg:col-span-4'>
            <div className='sticky top-24 space-y-12'>
              <div>
                <h3 className='text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6'>
                  Technology Stack
                </h3>
                <div className='space-y-8'>
                  {project.techStackDetailed.map((stack, idx) => (
                    <div key={idx}>
                      <h4 className='text-zinc-200 font-medium mb-3'>
                        {stack.category}
                      </h4>
                      <div className='flex flex-wrap gap-3'>
                        <span className='text-zinc-400 text-sm'>
                          {stack.technologies}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery / More Images (Optional) */}
              {project.imageUrls.length > 0 && (
                <div>
                  <h3 className='text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6'>
                    Gallery
                  </h3>
                  <div className='grid grid-cols-1 gap-4'>
                    {project.imageUrls.map((url, idx) => (
                      <div
                        key={idx}
                        className='relative h-48 rounded-xl overflow-hidden border border-zinc-800/50'
                      >
                        <Image
                          src={url}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          fill
                          className='object-cover hover:scale-105 transition-transform duration-500'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

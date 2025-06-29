import { TechStackItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

interface ProjectCardProps {
  slug: string;
  imageUrl: string;
  title: string;
  subTitle: string;
  description: string;
  techStackDetailed: TechStackItem[];
}

const ProjectCard = ({
  slug,
  imageUrl,
  title,
  subTitle,
  description,
  techStackDetailed,
}: ProjectCardProps) => {
  const icons: IconType[] = techStackDetailed.flatMap(
    (item) => item.icons ?? []
  );
  return (
    <Link
      href={{
        pathname: `/projects/${slug}`,
        query: { from: "home" },
      }}
      as={`/projects/${slug}`}
      className='block h-full'
    >
      <div className='w-full md:flex-1 rounded-lg overflow-hidden shadow-lg bg-white  cursor-pointer hover:scale-[1.02]'>
        {/* Image with fixed dimensions */}
        <div className='relative aspect-video bg-gray-200'>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className='object-cover'
            priority={false}
          />
        </div>

        {/* Content */}
        <div className='p-6 bg-blackBlue'>
          <h2 className='text-xl font-bold text-white mb-1'>{title}</h2>
          <p className='text-sm text-primary mb-4'>{subTitle}</p>
          <p className='text-gray-500 mb-6 line-clamp-3'>{description}</p>

          <div className='flex items-baseline space-x-2 text-2xl text'>
            {icons?.slice(0, 4).map((Icon, index) => <Icon key={index} />)}
            <p className='text-sm text-gray-500'>...more</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

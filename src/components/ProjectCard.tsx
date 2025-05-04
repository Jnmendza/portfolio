import Image from "next/image";
import { FaGithub, FaLink, FaFigma, FaReact } from "react-icons/fa";

export type CardProps = {
  imageUrl: string;
  title: string;
  subTitle: string;
  description: string;
};

const ProjectCard = ({ imageUrl, title, subTitle, description }: CardProps) => (
  <div className='w-full md:flex-1 rounded-lg overflow-hidden shadow-lg bg-white  cursor-pointer transform transition-transform duration-200 hover:scale-102'>
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
      <p className='text-gray-500 mb-6'>{description}</p>

      <div className='flex gap-4'>
        <FaGithub className='text-gray-700 w-5 h-5' />
        <FaLink className='text-gray-700 w-5 h-5' />
        <FaFigma className='text-gray-700 w-5 h-5' />
        <FaReact className='text-gray-700 w-5 h-5' />
      </div>
    </div>
  </div>
);

export default ProjectCard;

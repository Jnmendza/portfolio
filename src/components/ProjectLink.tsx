import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

const ProjectLink = ({
  link,
  Icon,
  iconLabel,
}: {
  link: string;
  Icon: IconType;
  iconLabel: string;
}) => {
  return (
    <Link
      href={link}
      className='flex items-center justify-center space-x-2 text-blackBlue bg-primary rounded-lg font-bold py-2 px-4 transform transition-transform duration-200 hover:scale-110'
    >
      <Icon />
      <p>{iconLabel}</p>
    </Link>
  );
};

export default ProjectLink;

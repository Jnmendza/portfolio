import { IconType } from "react-icons";

export type Feature = {
  featureTitle: string;
  featurePoints: {
    desc: string;
  }[];
};

export type CardProps = {
  imageUrl: string;
  slug: string;
  title: string;
  subTitle: string;
  description: string;
  projectLink: string;
  githubLink: string;
  techStack: IconType[];
  features: Feature[];
};

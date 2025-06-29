import { IconType } from "react-icons";

export type Feature = {
  featureTitle: string;
  featurePoints: {
    desc: string;
  }[];
};

export type TechStackItem = {
  category: string;
  technologies: string;
  icons?: IconType[];
};

export type ContentBlock = {
  type: "paragraph" | "list";
  text?: string;
  items?: string[];
};

export type Project = {
  imageUrl: string;
  slug: string;
  title: string;
  subTitle: string;
  description: string;
  projectLink?: string;
  githubLink?: string;
  projectSummary: string;
  techStackDetailed: TechStackItem[];
  features: Feature[];
  content: {
    title: string;
    blocks: ContentBlock[];
  }[];
};

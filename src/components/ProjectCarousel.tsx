"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Calculate the total drag constraints based on the width of the inner track vs the outer container
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
        );
      }
    };

    updateWidth();

    // Recalculate if the user resizes their browser
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [projects]);

  return (
    // The outer container hides the overflow and sets the cursor to a grab hand
    <motion.div
      ref={carouselRef}
      className='cursor-grab overflow-hidden active:cursor-grabbing pb-12 pt-4 pl-6 md:pl-12 lg:pl-24'
      whileTap={{ cursor: "grabbing" }}
    >
      {/* Added right padding (pr) to the inner track so the final card doesn't hit a hard wall */}
      <motion.div
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.15}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 25 }}
        className='flex gap-6 md:gap-8 pr-6 md:pr-12 lg:pr-24'
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            className='w-[85vw] sm:w-[350px] md:w-[420px] lg:w-[480px] flex-shrink-0'
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

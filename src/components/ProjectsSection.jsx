"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: " A showcase of my skills and projects built using cutting-edge technologies. Leveraging the power of Next.js, Vercel, and Node.js, this project embodies modern web development practices to create a seamless and responsive portfolio experience.Explore my projects, skills, and experience in an intuitive interface, crafted with expertise using React.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/16wass/portfolio-website",
    previewUrl: "https://github.com/16wass/portfolio-website"
  },
  {
    id: 2,
    title: "LibGdx Game Development",
    description: "Led a collaborative effort on a dynamic game project utilizing the LibGDX Java game library. Working closely with a teammate, we adopted pair programming techniques ,fostering a synergistic work environment where ideas were shared and problems were solved collaboratively. Leveraged Bitbucket and GitHub for efficient version control and streamlined code reviews, facilitating seamless integration of new features and bug fixes.",
    image: "/images/projects/MenuScreen.jpg",
    tag: ["All", "Game Development"],
    gitUrl: "https://github.com/16wass/Game-project",
    previewUrl: "https://github.com/16wass/Game-project"
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game Development"
          isSelected={tag === "Game Development"}
        />
         <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
import {
  AI_PROJECTS,
  FRONTEND_PROJECTS,
  FULL_STACK_PROJECTS,
} from "../constants";
import { motion } from "motion/react";
import ProjectCategorySection from "./ProjectCategorySection";

const Projects = () => {
  return (
    <div
      className="border-b border-neutral-700 pb-4 max-w-7xl mx-auto"
      id="projects"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="sm:my-20 text-center text-4xl text-blue-400 font-bold"
      >
        Projects
      </motion.h2>
      <div className="grid">
        <ProjectCategorySection
          title="Full Stack Projects"
          projects={FULL_STACK_PROJECTS}
        />
        <ProjectCategorySection title="AI Projects" projects={AI_PROJECTS} />
        <ProjectCategorySection
          title="Frontend Projects"
          projects={FRONTEND_PROJECTS}
        />
      </div>
    </div>
  );
};

export default Projects;

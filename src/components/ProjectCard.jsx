import { motion } from "motion/react";
import PropTypes from "prop-types";

const linkClass =
  "mb-4 border-green-400 border-b pb-1 text-center text-sm mx-auto text-green-400 hover:text-blue-400 hover:border-blue-400";

const ProjectCard = ({ project }) => (
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 1 }}
    className="w-full"
  >
    <div className="relative group overflow-hidden rounded w-full h-[250px]">
      <img
        src={project.image}
        alt={project.name ?? project.title}
        className="w-full h-full object-contain rounded"
      />
      <div
        className="
          absolute inset-0
          bg-black text-blue-400
          transform translate-y-full
          group-hover:translate-y-0
          transition-transform duration-500 ease-in-out
          p-4 text-sm grid
        "
      >
        <p className="text-white">{project.description}</p>
        <p>{project.technologies.join(", ")}</p>
      </div>
    </div>

    <h1 className="font-bold text-center my-2">{project.title}</h1>

    <div className="text-center text-green-400">
      {project.links?.length > 1 ? (
        <>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.links[0]}
            className={`${linkClass} mr-5`}
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.links[1]}
            className={linkClass}
          >
            Website
          </a>
        </>
      ) : (
        <a
          target="_blank"
          rel="noreferrer"
          href={project.link ?? project.links?.[0]}
          className={linkClass}
        >
          Github
        </a>
      )}
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.object,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;

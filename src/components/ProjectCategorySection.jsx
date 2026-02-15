import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

const ProjectCategorySection = ({ title, projects }) => (
  <div>
    <h1 className="text-center mb-5 text-lg font-bold underline text-blue-400">
      {title}
    </h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto max-w-6xl px-4">
      {projects.map((project, index) => (
        <div key={index} className="w-full mb-10 lg:mb-10">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  </div>
);

ProjectCategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectCategorySection;

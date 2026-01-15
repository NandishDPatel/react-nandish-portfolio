import {
  AI_PROJECTS,
  FRONTEND_PROJECTS,
  FULL_STACK_PROJECTS,
  PROJECTS,
} from "../constants";
import { motion } from "motion/react";

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
      {/* <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-10 lg:flex grid lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full flex flex-wrap lg:justify-left justify-center"
            >
              <img
                src={project.image}
                height={project.height}
                width={project.width}
                alt={project.name}
                className="lg:mb-0 mb-4 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:text-left text-center "
            >
              <h6 className="mb-2 font-semibold text-green-400">
                <a
                  href={project.link}
                  target="_blank"
                  className="border-b-2 border-b-green-400 hover:text-black hover:border-b-black hover:bg-white"
                >
                  {project.title}
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div>
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-500 hover:bg-white hover:text-black"
                  >
                    {index == 0 ? "Github" : "Website"}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div> */}
      <div className="grid">
        <div>
          <h1 className="text-center mb-5 text-lg font-bold underline text-blue-400">
            Full Stack Projects
          </h1>
          <div className="flex flex-wrap mx-auto max-w-6xl">
            {FULL_STACK_PROJECTS.map((project, index) => (
              <div key={index} className="w-full lg:w-1/2 px-4 mb-10">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <div className="relative group overflow-hidden rounded w-full h-[250px]">
                    <img
                      src={project.image}
                      alt={project.name}
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

                  <h1 className="font-bold text-center my-2">
                    {project.title}
                  </h1>

                  <div className="text-center text-green-400">
                    {project.links.length > 1 ? (
                      <>
                        <a
                          target="_blank"
                          href={project.links[0]}
                          className="mb-4 border-green-400 border-b pb-1 text-center text-sm mx-auto text-green-400 hover:text-blue-400 hover:border-blue-400 mr-5"
                        >
                          Github
                        </a>
                        <a
                          target="_blank"
                          href={project.links[1]}
                          className="mb-4 border-green-400 border-b pb-1 text-center text-sm mx-auto  text-green-400 hover:text-blue-400 hover:border-blue-400"
                        >
                          Website
                        </a>
                      </>
                    ) : (
                      <a
                        target="_blank"
                        href={project.link}
                        className="mb-4 border-green-400 border-b pb-1 text-center text-sm mx-auto  text-green-400 hover:text-blue-400 hover:border-blue-400"
                      >
                        Github
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-center mb-5 text-lg font-bold underline text-blue-400">
            AI Projects
          </h1>
          <div className="flex flex-wrap mx-auto max-w-6xl">
            {AI_PROJECTS.map((project, index) => (
              <div key={index} className="w-full lg:w-1/2 px-4 mb-10">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <div className="relative group overflow-hidden rounded w-full h-[250px]">
                    <img
                      src={project.image}
                      alt={project.name}
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

                  <h1 className="font-bold text-center my-2">
                    {project.title}
                  </h1>

                  <div className="text-center text-green-400">
                    {project.links.length > 1 ? (
                      <>
                        <a
                          target="_blank"
                          href={project.links[0]}
                          className="mb-4 border-green-400 border-b pb-1 text-center text-sm mx-auto text-green-400 hover:text-blue-400 hover:border-blue-400 mr-5"
                        >
                          Github
                        </a>
                        <a
                          target="_blank"
                          href={project.links[1]}
                          className="mb-4 border-green-400 border-b pb-1 text-center text-sm mx-auto  text-green-400 hover:text-blue-400 hover:border-blue-400"
                        >
                          Website
                        </a>
                      </>
                    ) : (
                      <a
                        target="_blank"
                        href={project.link}
                        className="mb-4 border-green-400 border-b pb-1 text-center text-sm mx-auto  text-green-400 hover:text-blue-400 hover:border-blue-400"
                      >
                        Github
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-center mb-5 text-lg font-bold underline text-blue-400">
            Frontend Projects
          </h1>
          <div className="flex flex-wrap mx-auto max-w-6xl">
            {FRONTEND_PROJECTS.map((project, index) => (
              <div key={index} className="w-full lg:w-1/2 px-4 mb-10">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="w-full"
                >
                  <div className="relative group overflow-hidden rounded w-full h-[250px]">
                    <img
                      src={project.image}
                      alt={project.name}
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

                  <h1 className="font-bold text-center my-2">
                    {project.title}
                  </h1>

                  <div className="text-center text-green-400">
                    {project.links.length > 1 ? (
                      <>
                        <a
                          target="_blank"
                          href={project.links[0]}
                          className="mb-4 border-green-400 border-b pb-1 text-center text-sm mx-auto text-green-400 hover:text-blue-400 hover:border-blue-400 mr-5"
                        >
                          Github
                        </a>
                        <a
                          target="_blank"
                          href={project.links[1]}
                          className="mb-4 border-green-400 border-b pb-1 text-center text-sm mx-auto  text-green-400 hover:text-blue-400 hover:border-blue-400"
                        >
                          Website
                        </a>
                      </>
                    ) : (
                      <a
                        href={project.link}
                        className="mb-4 border-green-400 border-b pb-1 text-center text-sm mx-auto  text-green-400 hover:text-blue-400 hover:border-blue-400"
                      >
                        Github
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

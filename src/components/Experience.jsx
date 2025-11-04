import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div
      className="border-b border-neutral-700 pb-4 max-w-7xl mx-auto"
      id="experience"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="sm:my-20 my-8 text-center text-4xl text-blue-400 font-bold"
      >
        Experience
      </motion.h2>
      <div className="max-w-7xl mx-auto text-center">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 lg:flex grid justify-center text-center w-full"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full "
            >
              <p className="mb-2 text-lg text-neutral-400 text-center">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full text-justify text-center"
            >
              <h6 className="mb-2 font-semibold lg:text-left text-center">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 lg:text-justify text-center lg:text-left mx-auto">
                {experience.description}
              </p>
              <div className="lg:text-left text-center">
                {experience.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-400 lg:text-left justify-center"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

import aboutImg from "../assets/aboutSection.jpg";
import { ABOUT_FIRST, ABOUT_SECOND } from "../constants";
import { motion } from "motion/react";

const About = () => {
  return (
    <div
      className="border-b border-neutral-700 pb-4 lg:text-left text-center max-w-7xl mx-auto"
      id="aboutme"
    >
      <h2 className="sm:my-10 my-5 text-center text-4xl text-blue-400 font-bold">
        About Me
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center items-center lg:mb-0 mb-6">
            <img
              className="rounded-2xl sm:w-50"
              width={400}
              src={aboutImg}
              alt="about image"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center">
            <p className="my-2 lg:py-8 md:text-lg text-sm">{ABOUT_FIRST}</p>
          </div>
          <div className="flex justify-center">
            <p className="my-2 py-3 lg:py-8 md:text-lg text-sm">
              {ABOUT_SECOND}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

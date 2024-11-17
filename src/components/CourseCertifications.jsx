import React from "react";
import { motion } from "motion/react";
import image1 from "../assets/courseCertificates/07_core_java.png";
import image2 from "../assets/courseCertificates/08_python_basics.png";
import image3 from "../assets/courseCertificates/09_data_structures.png";

const CourseCertifications = () => {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Course Certifications
      </motion.h2>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-4"
        >
          <img src={image1} alt="" className="rounded h-auto" />
          <img src={image3} alt="" className="rounded   h-auto" />
          <img src={image2} alt="" className="rounded   h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default CourseCertifications;
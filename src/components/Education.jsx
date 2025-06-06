import { motion } from "motion/react";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="education">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-blue-400"
      >
        Education
      </motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-lg text-neutral-400">{education.year}</p>
              <p
                className={`mb-2 text-lg ${
                  education.gpa === "GPA: 4.0/4.0"
                    ? "text-bold text-xl text-blue-400"
                    : "text-gray-400"
                }`}
              >
                <span className={education.gpa === 4 ? "font-bold" : ""}>
                  {education.gpa}
                </span>
              </p>
              {education.courses? <p className="text-bold text-xl text-white mt-3 hidden lg:block ">Courswork :</p> : ""}
              
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-lg">
                <span className="font-semibold">{education.degree}</span> -{" "}
                <span className="text-sm text-neutral-200 font-normal">
                  {education.field}
                </span>
              </h6>
              <p className="mb-4 text-neutral-200">
                <span className="font-semibold">{education.university}</span> |{" "}
                <span className="text-neutral-400 text-sm">
                  {" "}
                  {education.address}
                </span>
              </p>
              {
                education.courses ? 
                <p>
                    {
                        education.courses.map((course,index) => (
                            <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-400 whitespace-nowrap inline-block my-1'>
                                    {course}
                                </span>
                        ))
                    }
                </p> : ""
              }
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

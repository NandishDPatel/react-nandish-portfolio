import { motion } from "motion/react";
import image3 from "../assets/nontech-projects/DecisionSciences.png";
import image2 from "../assets/nontech-projects/toothpastedispenser.png";
import image1 from "../assets/nontech-projects/UberConnect.png";

const NonTechnicalProjects = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Non Technical Projects
      </motion.h2>
      <div className="mb-8 flex flex-wrap lg:justify-center justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          <a
            href="https://drive.google.com/drive/folders/1Lx0wbWeNqN5GQg57CjL8FO4gYMIaaxTV"
            target="_blank"
            className=" flex justify-center"
          >
            <img
              src={image1}
              alt=""
              className="rounded h-aut max-w-[400px] w-full h-auto"
            />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1Tjz1W0XH2zymtimqz_H5-pXCEL9ZEOkm"
            target="_blank"
            className="flex justify-center"
          >
            <img src={image2} alt="" className="rounded max-w-[200px] h-auto" />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1K1TyIw4QAdo_IUzK_bDuc0ax-yguu1yt"
            target="_blank"
            className="flex justify-center"
          >
            <img
              src={image3}
              alt=""
              className="rounded max-w-[400px] w-full h-auto"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NonTechnicalProjects;

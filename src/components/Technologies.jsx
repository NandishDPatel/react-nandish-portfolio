import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import {
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiAndroid } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { motion } from "motion/react";

const iconDuration = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="technologies">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-blue-400"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4 items-center"
      >
        <motion.div
          variants={iconDuration(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 p-4 rounded-2xl inline-block" />
        </motion.div>
        <motion.div
          variants={iconDuration(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <RiNextjsFill className="text-7xl text-white p-4 rounded-2xl inline-block" />
        </motion.div>
        <motion.div
          variants={iconDuration(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <FaJava className="text-7xl text-red-700 p-4 rounded-2xl inline-block" />
        </motion.div>
        <motion.div
          variants={iconDuration(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiJavascript className="text-7xl text-yellow-400 p-4 rounded-2xl inline-block" />
        </motion.div>
        <motion.div
          variants={iconDuration(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiTypescript className="text-7xl text-blue-600  p-4 rounded-2xl inline-block" />
        </motion.div>

        <motion.div
          variants={iconDuration(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <FaPython className="text-7xl text-yellow-400 p-4 rounded-2xl inline-block" />
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4 items-center mt-10"
      >
        <motion.div
          variants={iconDuration(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiMongodb className="text-7xl text-green-500 p-4 rounded-2xl inline-block" />
        </motion.div>
        <motion.div
          variants={iconDuration(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiMysql className="text-7xl text-orange-300 p-4 rounded-2xl inline-block" />
        </motion.div>
        <motion.div
          variants={iconDuration(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiPostgresql className="text-7xl text-blue-600 p-4 rounded-2xl inline-block" />
        </motion.div>
        <motion.div
          variants={iconDuration(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiFirebase className="text-7xl text-orange-500 p-4 rounded-2xl inline-block" />
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4 items-center mt-10"
      >

        <motion.div
          variants={iconDuration(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiDocker className="text-7xl text-sky-600 p-4 rounded-2xl inline-block" />
        </motion.div>
        <motion.div
          variants={iconDuration(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiPostman className="text-7xl text-orange-500 p-4 rounded-2xl inline-block" />
        </motion.div>
        <motion.div
          variants={iconDuration(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiGithub className="text-7xl text-white p-4 rounded-2xl inline-block" />
        </motion.div>
        <motion.div
          variants={iconDuration(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiFigma className="text-7xl text-purple-700 p-4 rounded-2xl inline-block" />
        </motion.div>
        <motion.div
          variants={iconDuration(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiJira className="text-7xl text-sky-600 p-4 rounded-2xl inline-block" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

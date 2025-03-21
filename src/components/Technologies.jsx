import React from 'react';
import { SiDjango } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { animate, motion } from "framer-motion";
import { FaAngular } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "linear",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        style={{ color: "#FFD700" }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <FaAngular className="text-7xl" style={{ color: "#DD0031" }} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <FaReact className="text-7xl" style={{ color: "#61DAFB" }} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <AiOutlineDotNet className="text-7xl" style={{ color: "#512BD4" }} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiCsharp className="text-7xl" style={{ color: "#239120" }} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <FaJava className="text-7xl" style={{ color: "#007396" }} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <BiLogoTypescript className="text-7xl" style={{ color: "#3178C6" }} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <RiJavascriptFill className="text-7xl" style={{ color: "#F7DF1E" }} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <FaHtml5 className="text-7xl" style={{ color: "#E34F26" }} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <FaCss3Alt className="text-7xl" style={{ color: "#1572B6" }} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiMysql className="text-7xl" style={{ color: "#00758F" }} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <FaGitSquare className="text-7xl" style={{ color: "#F05032" }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

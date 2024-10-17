import React from 'react'
import { SiDjango } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiAndroidstudio } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaGit } from "react-icons/fa";
import {animate, motion} from "framer-motion";
import { FaAngular } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiCsswizardry } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
     y: [10, -10],
     transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"linear"
     }
  }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Technologies
      </motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
       className='flex flex-wrap itemso-center justify-center gap-4'>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
         className='p-4'>
          <FaAngular className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
         className='p-4'>
          <AiOutlineDotNet className='text-7xl'/>
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
         className='p-4'>
          <SiMysql className='text-7xl text-cyan-500' />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2)}
         className='p-4'>
          <IoLogoJavascript className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(6)}
         className='p-4'>
          <TiHtml5 className="text-7xl text-white-700" />
        </motion.div>
        <div className='p-4'>
          <SiCsswizardry className="text-7xl text-grey-700" />
        </div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(4)}
         className='p-4'>
          <SiTypescript className="text-7xl text-700" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
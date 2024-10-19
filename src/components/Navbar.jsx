
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { SiCredly } from "react-icons/si";
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
            <h1>Portfolio</h1>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/shashank-mishra1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com/shashankmishra1415" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
            <a href="https://leetcode.com/u/shashankmishra1415/" target="_blank" rel="noopener noreferrer" aria-label="Leetcode">
                <SiLeetcode />
            </a>
            {/* <a href="https://www.instagram.com/shashank_mishra19/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
            </a> */}
        </div>
    </nav>
  )
}

export default Navbar
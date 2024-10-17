
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { SiCredly } from "react-icons/si";
import logo from "../assets/raviKumarLogo.webp"
import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
            <h1>Portfolio</h1>
            {/* <img src={logo} className="mx-2" width={50} height={33} alt="Portfolio"/> */}
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/shashank-mishra1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com/shashankmishra1415" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/shashank_mishra19/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
            </a>
        </div>
    </nav>
  )
}

export default Navbar
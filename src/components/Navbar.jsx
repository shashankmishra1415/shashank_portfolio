import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
//import React from 'react';
import React, { useState } from 'react'; // Import useState

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        {/* <a href="/" aria-label='Portfolio'
         className="bg-blue-600 rounded-full p-2 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
         >
          <h1>Portfolio</h1>
        </a> */}
        <a
        href="/"
        aria-label='Portfolio'
        className="bg-teal-600 rounded-full p-2 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
        onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
        onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
      >
        <h1>{hovered ? 'Shashank Mishra' : 'Portfolio'}</h1> {/* Change text based on hover state */}
      </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-xl"> 
        {/* LinkedIn Icon */}
        <div className="relative group">
          <a
            href="https://www.linkedin.com/in/shashank-mishra1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-blue-600 rounded-full p-2 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <span className="absolute bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-blue-600 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            LinkedIn
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-blue-600"></span>
          </span>
        </div>

        {/* GitHub Icon */}
        <div className="relative group">
          <a
            href="https://github.com/shashankmishra1415"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="bg-gray-800 rounded-full p-2 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <span className="absolute bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            GitHub
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-800"></span>
          </span>
        </div>

        {/* Leetcode Icon */}
        <div className="relative group">
          <a
            href="https://leetcode.com/u/shashankmishra1415/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="bg-yellow-500 rounded-full p-2 flex items-center justify-center text-black transition-transform duration-300 hover:scale-110"
          >
            <SiLeetcode />
          </a>
          <span className="absolute bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-yellow-500 text-black text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            LeetCode
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-yellow-500"></span>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


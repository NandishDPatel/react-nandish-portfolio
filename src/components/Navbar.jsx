import logo from "../assets/nameLogo.png";
import React from 'react';
import {FaLinkedin, FaGithub,FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className='mb-20 py-6 flex justify-between items-center'>
        <div className='flex flex-shrink-0 items-center'>
            <img className="mx-2 w-16"  src={logo} alt="" />
        </div>
        <div className="flex m-8 items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/nandish-patel-492086193/" target="_blank">
            <FaLinkedin className="hover:text-blue-600" />
            </a>
            <a href="https://github.com/NandishDPatel?tab=repositories" target="_blank">
            <FaGithub className="hover:text-black"/>
            </a>
            <a href="https://leetcode.com/u/nandishdpatel22/" target="_blank">
            <SiLeetcode className="hover:text-orange-400"/>
            </a>
            <a href="https://www.hackerrank.com/profile/nandishdpatel22" target="_blank">
            <FaHackerrank className="hover:text-green-400"/>
            </a>
            

        </div>
    </nav>    
)
}

export default Navbar
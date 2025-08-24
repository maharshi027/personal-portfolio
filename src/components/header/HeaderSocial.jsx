import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/maharshi027/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/maharshi027/" target='_blank'><FaGithub /></a>
        <a href="https://instagram.com/maharshi027/" target='_blank'><AiFillInstagram /></a>
      
    </div>
  )
}

export default HeaderSocial;

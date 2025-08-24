import React from 'react'
import './footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer>
        <a href="#" className='footer_logo'>Albatross</a>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>

        <div className="footer_socials">
            <a href="https://instagram.com/maharshi027"><FaInstagramSquare /></a>
            <a href="https://snapchat.com/add/maharshi027"><FaSnapchatSquare /></a>
            <a href="https://x.com/maharshi_27"><FaSquareXTwitter /></a>
        </div>

        <div className="footer_copyright">
            <small>&copy; Albatross's Profile. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer

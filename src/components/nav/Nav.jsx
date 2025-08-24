import {useState} from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { RiShieldUserFill } from "react-icons/ri";
import { FaBookReader } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
function Nav() {

    const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiShieldUserFill /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBookReader /></a>
        <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><MdHomeRepairService /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBookFill /></a>
    </nav>
  )
}

export default Nav

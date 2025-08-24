import React from 'react'
import './about.css'
import ME from '../../assets/about_img.png'
import { RiAwardFill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { HiUsers } from "react-icons/hi2";
function About() {
  return (
    <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_img">
                    <img src={ME} alt="About Image" />
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className='about_card'>
                        <RiAwardFill className='about_icon'/>
                       <h5>Experience</h5> 
                       <small>fresher</small>
                    </article>
                    <article className='about_card'>
                        <HiUsers className='about_icon'/>
                       <h5>Client</h5> 
                       <small>200+ worldwide</small>
                    </article>
                    <article className='about_card'>
                        <GoProjectSymlink className='about_icon'/>
                       <h5>Projects</h5> 
                       <small>10+ completed</small>
                    </article>
                </div>
                <p>
                    Motivated Front-End Developer with strong skills in HTML, CSS, JavaScript and React.js Actively learning C/C++ and Python to enhance
                    problem-solving abilities. Eager to contribute to dynamic teams, create responsive web applications, and continuously grow in front-end
                    development and programming.
                </p>
                <a href="#contact" className='btn btn-primary'>Let's talk</a>
            </div>
        </div>
    </section>
  )
}

export default About

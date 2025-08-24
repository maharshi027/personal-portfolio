import React from 'react'
import './experience.css'
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
function Experience() {
  return (
   <section id="experience">
    <h5>Skills</h5>
    <h2>My Experience</h2>
    <div className="container experience_container">
        <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
                <article className='experience_details'>
                    <FaHtml5 className="experience_details-icon"/>
                    <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <FaCss3Alt className="experience_details-icon"/>
                    <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <FaJsSquare className="experience_details-icon"/>
                    <div>
                        <h4>JAVAscript</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <FaBootstrap className="experience_details-icon"/>
                    <div> 
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <RiTailwindCssFill className="experience_details-icon"/>
                    <div>
                        <h4>Tailwind</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <FaReact className="experience_details-icon"/>
                    <div>
                        <h4>React js</h4>
                        <small className='text-light'>Intermediate</small>  
                    </div>
                </article>
            </div>
        </div>

 {/* -------------------- End of frontend skills ----------------- */}

        <div className="experience_backend">
            <h3>Backend Development</h3>
            <div className="experience_content">
                <article className='experience_details'>
                    <FaNodeJs className="experience_details-icon"/>
                    <div>
                        <h4>Node JS</h4>
                        <small className='text-light'>Beginner</small>     
                    </div>
                </article>
                <article className='experience_details'>
                    <SiMongodb className="experience_details-icon"/>
                    <div>
                        <h4>MongoDB</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <GrMysql className="experience_details-icon"/>
                    <div>
                        <h4>MySQL</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <FaPython className="experience_details-icon"/>
                    <div>
                        <h4>python(Django)</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <SiExpress className="experience_details-icon"/>
                    <div>
                        <h4>Express js</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
            </div>
        </div>
    </div>

   </section>
  )
}

export default Experience

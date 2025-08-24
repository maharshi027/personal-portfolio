import React from 'react'
import './service.css'
import { FaCheck } from "react-icons/fa";

const Service = () => {
  return (
    <section id="service">
        <h5>What I Offer !</h5>
        <h2>Services</h2>

        <div className="container service_container">
            
            {/* -------------------- UI/UX Design ------------------------*/}
            <article className="service">
                <div className="service_head">
                    <h3>UI/UX Design</h3>
                </div>

                <ul className="service_list">
                    <li>
                        <FaCheck className="service_list-icon"/>
                        <p>Designing modern, responsive and user-friendly interfaces</p>
                    </li>
                    <li>
                        <FaCheck className="service_list-icon"/>
                        <p>Creating interactive prototypes and wireframes with Figma</p>
                    </li>
                    <li>
                        <FaCheck className="service_list-icon"/>
                        <p>Implementing clean typography, layouts, and color theory</p>
                    </li>
                </ul>
            </article>
            
            {/* -------------------- Web Development ------------------------*/}
            <article className="service">
                <div className="service_head">
                    <h3>Web Development</h3>
                </div>

                <ul className="service_list">
                    <li>
                        <FaCheck className="service_list-icon"/>
                        <p>Building responsive websites using HTML, CSS, JavaScript</p>
                    </li>
                    <li>
                        <FaCheck className="service_list-icon"/>
                        <p>Developing dynamic applications with React.js & Vite</p>
                    </li>
                    <li>
                        <FaCheck className="service_list-icon"/>
                        <p>Creating smooth animations and effects with Framer Motion</p>
                    </li>
                </ul>
            </article>

            {/* -------------------- Problem Solving ------------------------*/}
            <article className="service">
                <div className="service_head">
                    <h3>Problem Solving</h3>
                </div>

                <ul className="service_list">
                    <li>
                        <FaCheck className="service_list-icon"/>
                        <p>Proficient in C++ & Data Structures and Algorithms (DSA)</p>
                    </li>
                    <li>
                        <FaCheck className="service_list-icon"/>
                        <p>Strong analytical and logical thinking abilities</p>
                    </li>
                    <li>
                        <FaCheck className="service_list-icon"/>
                        <p>Experience with competitive programming challenges</p>
                    </li>
                </ul>
            </article>
          
        </div>
    
    </section>
  )
}

export default Service

import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_8475ynq', 'template_jrqx7ih', form.current, {
      publicKey: 'TIbVRU3YdZTcq8PJ-',
    })
    .then(
      () => {
        alert('✅ Message sent successfully! You will also receive a confirmation email.');
        form.current.reset();
      },
      (error) => {
        alert('❌ Something went wrong: ' + error.text);
      }
    );
    e.target.reset();
};
  return (
    <section id="contact">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
            <div className="contact_options">
                <article className='contact_option'>
                    <MdEmail className='contact_option-icon'/>
                    <h4>Email</h4>
                    <h5>harshkush15sep@gmail.com</h5>
                    <a href="mailto:harshkush15sep@gmail.com" target='_blank'>Send a Email</a>
                </article>
                <article className='contact_option'>
                    <FaFacebookMessenger className='contact_option-icon'/>
                    <h4>Messenger</h4>
                    <h5>maharshi027</h5>
                    <a href="https://ig.me/m/maharshi027" target='_blank'>Send a message</a>
                </article>
                <article className='contact_option'>
                    <FaWhatsapp className='contact_option-icon'/>
                    <h4>Whatsaap</h4>
                    <h5>+91-7398464400</h5>
                    <a href="https://wa.me/917398464400" target='_blank'>Chat On Whatsaap</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required/>
                <input type="email" name='email' placeholder='Your Email' />
                <textarea name="message"  rows="7" placeholder="Your Message...." required></textarea>
                <button type='submit' className='btn btn-primary' >Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact

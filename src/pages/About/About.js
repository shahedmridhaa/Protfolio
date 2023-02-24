import React from 'react'
import AboutCard from './AboutCard'
import Aboutme from './Aboutme'
import Education from './Education'
import "../DefaultCss/default.css"
import MySkill from './MySkill'
import { BsFacebook,BsLinkedin,BsTwitter,BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import "../DefaultCss/default.css"



const About = () => {
  return (
    <div data-aos="fade-zoom"
    data-aos-easing="linear"
    data-aos-duration="500">
      {/* ===mobile icon==== */}
      <div className='md:hidden'>
      <div class="other-device">
      <div class="email">
                <div class="email-btn">
                    <a href="mailto:shahedmridha01@gmail.com">
                    <div class="btn">
                        <span><AiOutlineMail/></span>
                    </div>
                    </a>
                </div>
            </div>
           
            <div class="email">
                <a href="tel:01842485396">
                <div class="email-btn">
                    <div class="btn">
                        <span><BsWhatsapp/></span>
                    </div>
                </div>
                </a>
            </div>
            <div class="social">
                <div class="social-btn">
                   <a href='https://www.linkedin.com'>
                   <div class="btn">
                        <span><BsLinkedin/></span>
                    </div>
                   </a>
                </div>
            </div>
            <div class="social">
                <div class="social-btn">
                   <a href='https://www.linkedin.com'>
                   <div class="btn">
                        <span><BsTwitter/></span>
                    </div>
                   </a>
                </div>
            </div>
            <div class="social">
                <div class="social-btn">
                   <a href='https://www.linkedin.com'>
                   <div class="btn">
                        <span><BsFacebook/></span>
                    </div>
                   </a>
                </div>
            </div>
        </div>
      </div>

        <div className="m-5 class">
      <Aboutme />
      <AboutCard/>
      <Education/>
      <MySkill/>
    </div>
    </div>
  )
}

export default About

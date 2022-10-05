import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Avater from '../../img/measavtr.png'
import Crown from '../../img/crown.png'
import Glasswsimoji from '../../img/glassesimoji.png'
import Thumbup from '../../img/thumbup.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from "framer-motion"
import { Link } from 'react-scroll'

const Intro = () => {

  const transition = { duration: 2, type: "spring" };


  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy!  I  Am</span>
          <span>Sajid Alam</span>
          <span>Full Stack Developer with High
            level of experience in Web / App Designing and
            Development, Producting Quality work</span>
        </div>
        <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
          <button className="button i-button" id='Conract'>Hire Me</button>
        </Link>

        <div className="i-icons">
          <a href="https://github.com/IamSajidAlam">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/sajid-alam-54705798/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/i_am_sid_alm/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Avater} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glasswsimoji} alt="" />

        <motion.div
          initial={{ top: '-4%', left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1='Full Stack' txt2='Developer' />
        </motion.div>


        <motion.div
          initial={{ left: "9rem", top: '18rem' }}
          whileInView={{ left: "0%" }}
          transition={transition}
          
        >
          <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award' />
        </motion.div>
        {/*Blur divs*/}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div className="blur" style={{
          background: '#C1F5FF',
          top: '17rem',
          width: '21rem',
          height: '11rem',
          left: '-9rem'
        }}
        ></div>
      </div>

    </div>
  )
}

export default Intro
import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Works = () => {

  return (
    <div className="works">
      {/*Left Side*/}
      <div className="s-left">
        <span>Works for All these</span>
        <span>Brands and Clients</span>
        <span>
          I’m interested in freelance / Full time opportunities – especially ambitious or large projects.
          <br />
          However, if you have other request or question, don’t hesitate to use the form.
          <br />
          Have Any Project in Mind

        </span>
        {/* <button className="button s-button">Hire Me</button> */}
        <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
          <button className="button s-button" id='Conract'>Hire Me</button>
        </Link>
        
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*Right Side*/}
      <div className="w-rigth">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 10, type: "spring" }}

          className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          {/*Background Circle*/}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default Works
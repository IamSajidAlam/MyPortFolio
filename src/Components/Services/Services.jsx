import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import GlassesEmoji from '../../img/glasses.png'
import HumbleEmoji from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './SajidAlam.pdf'
import { motion } from 'framer-motion'
const Services = () => {


  const transition = { duration: 2, type: "spring" };



  return (
    <div className="services" id='Services'>
      {/*Left Side */}
      <div className="s-left">
        <span>My Awesome</span>
        <span>Services</span>
        <span><b>I ANALYZE CUSTOMER NEEDS, DESIGN AND CREATE INNOVATIVE PRODUCTS</b>
          <br />
          Being a passionate learner, I constantly explore in different
          fields to strengthen my IT skills. Combining my multi-cultural
          background,
          <br />
          Business IT knowledge, and energized personality,
          all together give me a unique design perspective.
          <br />
          My greatest strength is my confidence in challenging the status quo.
        </span>
        <a style={{ width: '8rem' }} href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blurl" style={{
          background: "#ABF1FF94"
        }}></div>
      </div>

      {/*Right Side */}
      <div className="s-r-cards">
        {/*First Card*/}
        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "22rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            details={"Figma, Sketch, Adobe Photoshop, Adobe XD, Figma, Adobe Express"}
          />
        </motion.div>

        {/*Second Card*/}
        <motion.div
          initial={{top:'12rem', left: "25rem" }}
          whileInView={{left: "2rem" }}
          transition={transition}
        >
          <Card
            emoji={GlassesEmoji}
            heading={'Developer'}
            details={"Html, Css, JavaScript, React, Java, Python, SQL, Ibm Db2, My Sql"}
          />
        </motion.div>
        {/*Third Card*/}
        <motion.div 
        initial={{ top: "18rem", left: "25rem" }}
        whileInView={{ left: "20rem" }}
        
        >
          <Card
            emoji={HumbleEmoji}
            heading={'AI / ML'}
            details={"Data Analytics, Business Analytics, Mechine Learning, Data Mining"}
          />
        </motion.div>
        <div className="blur s-blur1" style={{ background: '#C1F5FF' }}></div>
        <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
      </div>

    </div>
  )
}

export default Services
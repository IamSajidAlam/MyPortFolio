import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import GlassesEmoji from '../../img/glasses.png'
import HumbleEmoji from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './SajidAlam.pdf'
const Services = () => {
  return (
    <div className="services">
      {/*Left Side */}
      <div className="s-left">
        <span>My Awesome</span>
        <span>Services</span>
        <span><b>I ANALYZE CUSTOMER NEEDS, DESIGN AND CREATE INNOVATIVE PRODUCTS</b>
          <br/>
          Being a passionate learner, I constantly explore in different
          fields to strengthen my IT skills. Combining my multi-cultural 
          background, 
          <br />
          Business IT knowledge, and energized personality, 
          all together give me a unique design perspective. 
          <br />
          My greatest strength is my confidence in challenging the status quo.
          </span>
          <a style={{width : '8rem'}} href={Resume} download>
          <button className="button s-button">Download CV</button>
          </a>
          
          <div className="blur s-blurl" style={{
            background: "#ABF1FF94"
            }}></div>
      </div>

      {/*Right Side */}
      <div className="s-r-cards">
        {/*First Card*/}
        <div style={{left: '22rem'}}>
          <Card
          emoji = {HeartEmoji}
          heading = {'Design'}
          details = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
          />
        </div>
        {/*Second Card*/}
        <div style={{top: '8rem', left: '5rem'}}>
          <Card
          emoji = {GlassesEmoji}
          heading = {'Developer'}
          details = {"Html, Css, JavaScript, React, Java, Python"}
          />
        </div>
        {/*Third Card*/}
        <div style={{ top: '18rem',left: '20rem'}}>
          <Card
          emoji = {HumbleEmoji}
          heading = {'AI / ML'}
          details = {"Data Analytics, Business Analytics, Mechine Learning, Data Mining"}
          />
        </div>
        <div className="blur s-blur1" style={{background: '#C1F5FF'}}></div>
        <div className="blur s-blur2" style={{background : 'var(--purple)'}}></div>
      </div>

    </div>
  )
}

export default Services
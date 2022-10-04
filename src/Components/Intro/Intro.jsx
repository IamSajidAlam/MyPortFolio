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

const Intro = () => {
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
            <button className="button i-button">Hire Me</button>
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
          <img src={Glasswsimoji} alt="" />
          <div style={{top: '-2.2%', left: '40%'}}>
          <FloatingDiv image={Crown} txt1='Full Stack' txt2='Developer'/>
          </div>
          <div style={{top: '18rem', left: '0rem'}}>
            <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award'/>
          </div>
          {/*Blur divs*/}
          <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
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
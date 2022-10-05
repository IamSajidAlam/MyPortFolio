import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import GitHub from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{width: '100%'}}/>
      <div className="f-content">
        <span>iamsajidalam@outlook.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/i_am_sid_alm/">
            <Insta color='white' size='3rem'/>
          </a>
          <a href="https://www.facebook.com/sajidalamshubho">
            <Facebook color='white' size='3rem'/>
          </a>
          <a href="https://github.com/IamSajidAlam">
            <GitHub color='white' size='3rem'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
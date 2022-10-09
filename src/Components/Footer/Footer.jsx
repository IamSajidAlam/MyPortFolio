import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-whatsapp'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import GitHub from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{width: '100%'}}/>
      <div className="f-content">
        <a href="mailto:iamsajidalam@outlook.com?">
          <span>iamsajidalam@outlook.com</span>
        </a>
        <div className="f-icons">
          <a href="https://wa.me/message/QD4XQ7YE4H2RG1">
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
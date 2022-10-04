import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Sajid</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul className = "n-ul">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    {/*<li>Testimonial</li>*/}
                </ul>
            </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar
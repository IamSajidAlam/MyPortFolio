import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'
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
                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} activeClass="activeClass">
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience'smooth={true} activeClass="activeClass">
                        <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass">
                        <li>Portfolio</li>
                    </Link>
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
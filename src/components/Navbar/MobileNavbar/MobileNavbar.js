import React from 'react'
import './MobileNavbar.css'

const MobileNavbar = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active": ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <img src="./assets/images/logosmall.png" alt="logo" className="logo" />
                <ul>
                    <li>
                        <a className="menu-item" href='/'>Home</a>
                    </li>
                    <li>
                        <a className="menu-item" href='https://www.linkedin.com/in/semiintrovert/details/skills/' target='_blank'>Skills</a>
                    </li>
                    <li>
                        <a className="menu-item" href='https://www.linkedin.com/in/semiintrovert/details/experience/' target='_blank'>Work Experience</a>
                    </li>
                    <li>
                        <a className="menu-item" href='https://wa.me/919627385102' target='_blank'>Contact Me</a>
                    </li>

                    <a href="https://drive.google.com/file/d/1OQ9K78P88FtQbJuEczkRZWYCJ2B969R0/view?usp=sharing" target='_blank'><button className="contact-btn"onClick={()=>{}}>
                        Download Resume
                    </button>
                    </a>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNavbar

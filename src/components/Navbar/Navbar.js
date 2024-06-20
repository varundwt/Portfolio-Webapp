import React, { useState } from 'react'
import './Navbar.css'
import MobileNavbar from './MobileNavbar/MobileNavbar';

const Navbar = () => {

    const[openMenu, setOpenMenu] = useState(false);

    const toggleMenu = ()=>{
        setOpenMenu(!openMenu);
    };

  return (
    <>
        <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}/>
        <nav className="nav-wrapper">
            <div className="nav-content">
                <img src="./assets/images/logo.png" alt="logo" className="logo" />
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
                    
                    <a href="https://drive.google.com/file/d/1zm4i6aUzxxXX3SdaatTV0f5TjOG6XR9S/view?usp=sharing" target='_blank'><button className="contact-btn" onClick={()=>{}}>
                        Download Resume
                    </button>
                    </a>
                </ul>
                <button className="menu-btn" onClick={toggleMenu}>
                <span class={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}>
                    {openMenu ? "close" : "menu"}
                </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar

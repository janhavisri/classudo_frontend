"use client";
import React from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import '../stylesheets/nav.css'
import '../stylesheets/style.css'
import { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
  return (
   
    <div className='nav'>
        <div className='nav-container'>
            <div className='navbar'>
                <div className='logo'>Classudo</div>
                <div className='menu-toggle' onClick={() => setNavOpen(!navOpen)}>
                    <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                        <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                        <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                    </div>
                </div>
            </div>
            <div className='nav-overlay' style={{
                top: navOpen ? "0" : "-100%",
                transitionDelay: navOpen ? "0s" : "0s",
            }}>

                <ul className='nav-links'>
                    <li className='nav-item'>
                        <Link to="/">Home</Link>
                        <div className='nav-item-wrapper'></div>
                    </li>
                    <li className='nav-item'>
                        <Link to="">Services</Link>
                        <div className='nav-item-wrapper'></div>
                    </li>
                    <li className='nav-item'>
                        <Link to="">About</Link>
                        <div className='nav-item-wrapper'></div>
                    </li>
                    <li className='nav-item'>
                        <Link to="">Portfolio</Link>
                        <div className='nav-item-wrapper'></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar

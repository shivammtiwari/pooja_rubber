import React, { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    // window.addEventListener("scroll", function () {
    //     const header = document.querySelector(".navbar")
    //     header.classList.toggle("activee", window.scrollY > 100)
    //   })
  


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <SiDatabricks className='icon' />
                    <h2>Pooja Rubber.</h2>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink> </li>
                    <li><NavLink to='/cloud'>Services</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    <button>Call now</button>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar

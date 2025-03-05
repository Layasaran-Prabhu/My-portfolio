import React, { useState } from 'react'
import "./navbar.css"
import {Link} from 'react-scroll'
import menu from '../../assets/menu_open.svg'
const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  return (
      <nav className="navbar">
        <h1 className='logo'>Layasaran</h1>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Contact</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
              Contact Me
        </button>

        <img src={menu} alt="" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}} >
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu()}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu()}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu()}>Contact</Link>
        </div>
      </nav>
  )
}

export default Navbar

import React from 'react'
import './Navbar.css'
import icon from "../assets/fungus-icon.svg";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
        <a className='icon' href='https://github.com/amanitaa'><img src={icon} alt="" />amanitaa</a>
        <ul className='nav-menu'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/repositories">REPOSITORIES</Link></li>
        </ul>
        <div className='contact'>
            <Link to='/contact'>CONTACT</Link>
        </div>
    </div>
  )
}

export default Navbar
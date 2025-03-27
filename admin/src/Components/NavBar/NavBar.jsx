import React from "react";
import './NavBar.css'
import navlogo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';

const NavBar = () => {
    return (
        <div className="navbar">
            <img className='nav-logo' src={navlogo} alt=""/>
            <img src={navProfile} alt=""/>
        </div>
    )
}

export default NavBar;
import React from "react";
import logo from '../img/favicon.png'
import '../index.css'

const Footer = () => {
    return (
        <div className='textAndLogo'>
            <p>created for you</p>
            <img src={logo} alt="logo"></img>
      </div>
    )
}

export default Footer
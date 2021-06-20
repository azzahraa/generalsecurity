import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import header from './img/header.jpeg'
import { Link } from 'react-router-dom';



function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={header} alt="cam" className="img1"></img>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>GENERAL SECURITY</h1>
      <p>Lun-Ven 08:00-18:00 </p>
      
      <p>Sam 08:00-13:00</p>
      <div className='hero-btns'>
        <h2>Contact Support</h2>
        <p>+216 73 324 920</p>
        <p>sales@gstunisia.com</p>
      </div>
      
      
    </div>
  );
}

export default HeroSection;

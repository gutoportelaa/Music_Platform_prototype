import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'


const Header = () => {
  return (
    
    <div className= "header">
     
      <img src={logoSpotify} alt ="Logo do Spotify"/>

      <Link className="header__link" href="/">
        <h1>SpotiGruto</h1>

      </a>
  </div>
  );
};

export default Header;
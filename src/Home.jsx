import React, { useEffect } from 'react';
import './css/home.css';
import { Link } from 'react-router-dom';

import screenSquidLogo from '../src/images/screen-squid-logo.png';

export default function Home() {
  useEffect(() => {
    const logo = document.querySelector('.tilted-logo');

    function randomizeAnimation() {
      const animations = ['jiggle', 'rotate', 'flipX', 'spinY'];
      logo.classList.remove('jiggle', 'rotate', 'flipX', 'spinY');
      void logo.offsetWidth;
      logo.classList.add(animations[Math.floor(Math.random() * animations.length)]);
    }

    function setRandomTimer() {
      const maxTime = 30000;
      const randomTime = Math.random() * 5000 + 15000;
      setTimeout(() => {
        randomizeAnimation();
        setRandomTimer();
      }, randomTime);
    }

    setRandomTimer();
    return () => clearTimeout(setRandomTimer);
  }, []);

  return (
    <div className='home-screen'>
      <div className='button-container'>
        <img src={screenSquidLogo} className='tilted-logo' alt="Screen Squid Logo" />
        <Link to="/create" className="button-body left">
          <div className='button-text'>Create a Room</div>
        </Link>
        <Link to="/create" className="button-body">
          <div className='button-text'>Join a Room</div>
        </Link>
      </div>
    </div>
  );
}

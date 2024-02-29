import React, { useEffect } from 'react';
import './css/home.css'
import { Link } from 'react-router-dom'

import screenSquidLogo from '../src/images/screen-squid-logo.png'

export default function Home() {
  useEffect(() => {
    const logo = document.querySelector('.tilted-logo');

    function randomizeAnimation() {
      const animations = ['jiggle', 'rotate'];
      // Remove any existing animation classes and force reflow to restart the animation
      logo.classList.remove('jiggle', 'rotate');
      void logo.offsetWidth; // Trigger reflow
      // Randomly add one of the animation classes
      logo.classList.add(animations[Math.floor(Math.random() * animations.length)]);
    }

    function setRandomTimer() {
      // Ensure animation happens at least every 30 seconds
      // Randomize interval for a bit of unpredictability but cap it at 30000ms
      const maxTime = 30000;
      const randomTime = Math.random() * 5000 + 15000; // Random time between 15s and 30s
      setTimeout(() => {
        randomizeAnimation();
        setRandomTimer(); // Schedule the next animation
      }, randomTime);
    }

    setRandomTimer(); // Initial call to start the animation sequence
    return () => clearTimeout(setRandomTimer); // Cleanup on unmount
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

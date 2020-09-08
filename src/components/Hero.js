import React from 'react';
import '../App.css';
import './Hero.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/v/vid.mp4' autoPlay loop muted />
       <div id="overlay-text">
	      <h1> COPA <i style={{
							color:'orange',
							padding:5
						}} class='fas fa-coffee'/>..grow your bussiness with us</h1>
			<button id="hero-but">GET STARTED <i style={{
							color:'orange',
							padding:5
						}} class='fas fa-coffee'/></button>

		</div>
    </div>
  );
}

export default HeroSection;

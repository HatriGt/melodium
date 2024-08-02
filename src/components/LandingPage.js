import React from 'react';

import musicImage from '../images/MusicImages/MainPageMusicImage.png';

function LandingPage() {
  return (
    <section id="home" className="landing-page">
      <div className="hero">
        <h1>Discover the Magic of Music</h1>
        <p>Learn Carnatic, Tamil, and English songs at Melodious Harmony</p>
        <a href="#register" className="cta-button">Start Your Musical Journey</a>
      </div>
      <div className="hero-image">
        <img src={musicImage} alt="Students performing" />
      </div>
    </section>
  );
}

export default LandingPage;
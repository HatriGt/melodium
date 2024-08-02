import React from 'react';

function LandingPage() {
  return (
    <section id="home" className="landing-page">
      <div className="hero">
        <h1>Discover the Magic of Music</h1>
        <p>Explore Carnatic, Tamil, and English songs at Melodious Harmony</p>
        <a href="#register" className="cta-button">Start Your Musical Journey</a>
      </div>
      <div className="hero-image">
        <img src="https://example.com/hero-image.jpg" alt="Students performing" />
      </div>
    </section>
  );
}

export default LandingPage;
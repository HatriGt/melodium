import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import CourseInfo from './components/CourseInfo';
import RegistrationForm from './components/RegistrationForm';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FeaturedInstructors from './components/FeaturedInstructors';
import './styles.css';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.9; // Set volume to 20%
      audioRef.current.play().catch(error => {
        // Autoplay was prevented. You might want to show a "Play" button to the user.
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <LandingPage />
        <audio ref={audioRef} loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
        <CourseInfo />
        <FeaturedInstructors />
        <Gallery />
        <Testimonials />
        <RegistrationForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
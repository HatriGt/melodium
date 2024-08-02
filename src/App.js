import React from 'react';
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
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <LandingPage />
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
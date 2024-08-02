import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import headerLogo from '../images/Header/HeaderLogo.png';
import wave from '../images/Header/Wave.gif';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <div className="logo">
        <img src={headerLogo} alt="Melodious Harmony Logo" id="header-logo" />
        <h1>Melodious Harmony</h1>
        <img src={wave} alt="Wave" style={{ marginLeft: '10px' }} />
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#instructors">Instructors</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#register">Register</a></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}

export default Header;
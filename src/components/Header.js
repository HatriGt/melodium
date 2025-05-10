import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import headerLogo from '../images/Header/HeaderLogo.png';
import wave from '../images/Header/Wave.gif';
import { motion } from 'framer-motion';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = ['Home', 'Courses', 'Instructors', 
    // 'Gallery',
     'Register'];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`header ${theme}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <motion.div 
        className="logo"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img src={headerLogo} alt="Melodious Harmony Logo" id="header-logo" />
        <h1>Melodious Harmony</h1>
        <img src={wave} alt="Wave" style={{ marginLeft: '10px' }} />
      </motion.div>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item.toLowerCase())}>{item}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
      <motion.button 
        onClick={toggleTheme} 
        className="theme-toggle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </motion.button>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </motion.header>
  );
}

export default Header;
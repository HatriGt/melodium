import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function FeaturedInstructors() {
  const [isVisible, setIsVisible] = useState(false);
  const instructors = [
    {
      name: 'Madhumitha',
      specialty: '',
      video: require('../images/Instructor/MadhuSinging.mp4'),
      info: 'Madhumitha is a renowned vocalist with over 15 years of experience. She has performed in numerous concerts across India and abroad.'
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="instructors" className="featured-instructors">
      <h2>Our Expert Instructors</h2>
      <div className="instructor-grid">
        {instructors.map((instructor, index) => (
          <motion.div 
            key={index} 
            className={`instructor-card ${isVisible ? 'visible' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="instructor-image-container">
              <video src={instructor.video} alt={instructor.name} autoPlay loop muted playsInline />
              <div className="dotted-circle"></div>
            </div>
            <div className="instructor-info">
              <h3>{instructor.name}</h3>
              <p className="specialty">{instructor.specialty}</p>
              <p className="bio">{instructor.info}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedInstructors;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    {
      name: 'Priya S.',
      course: 'Carnatic Vocals',
      quote: 'The instructors at Melodious Harmony are truly exceptional. My singing has improved tremendously!',
    },
    {
      name: 'Rahul M.',
      course: 'Tamil Film Songs',
      quote: 'I never thought I could sing like a playback artist, but this course made it possible. Highly recommended!',
    },
    {
      name: 'Jessica T.',
      course: 'English Pop',
      quote: 'The instructors are amazing and the course content is very engaging. I highly recommend it!',
    },
    {
      name: 'Vijay K.',
      course: 'Tamil Film Songs',
      quote: 'This course has reignited my passion for singing. The instructors are very supportive and encouraging.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-carousel">
        <AnimatePresence initial={false}>
          {testimonials.map((testimonial, index) => {
            const position = (index - currentIndex + testimonials.length) % testimonials.length;
            let className = '';
            if (position === 0) className = 'active';
            else if (position === testimonials.length - 1) className = 'prev';
            else if (position === 1) className = 'next';
            else return null;

            return (
              <motion.div
                key={index}
                className={`testimonial-card ${className}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: className === 'active' ? 1 : 0.7,
                  scale: className === 'active' ? 1.1 : 0.9,
                  x: `${(position - 1) * 110}%`
                }}
                transition={{ duration: 0.5 }}
              >
                <p>"{testimonial.quote}"</p>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.course}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Testimonials;
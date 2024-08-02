import React from 'react';

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
      name: 'Sarah J.',
      course: 'English Pop',
      quote: 'The supportive environment and expert guidance have helped me find my unique voice. Im so grateful!',
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.quote}"</p>
            <h4>{testimonial.name}</h4>
            <p>{testimonial.course}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
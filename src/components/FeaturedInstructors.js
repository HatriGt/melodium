import React from 'react';

function FeaturedInstructors() {
  const instructors = [
    {
      name: 'Lakshmi Priya',
      specialty: 'Carnatic Vocals',
      image: 'https://example.com/instructor1.jpg',
    },
    {
      name: 'Rajesh Kumar',
      specialty: 'Tamil Film Songs',
      image: 'https://example.com/instructor2.jpg',
    },
    {
      name: 'Emily Watson',
      specialty: 'English Pop',
      image: 'https://example.com/instructor3.jpg',
    },
  ];

  return (
    <section id="instructors" className="featured-instructors">
      <h2>Our Expert Instructors</h2>
      <div className="instructor-grid">
        {instructors.map((instructor, index) => (
          <div key={index} className="instructor-card">
            <img src={instructor.image} alt={instructor.name} />
            <h3>{instructor.name}</h3>
            <p>{instructor.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedInstructors;
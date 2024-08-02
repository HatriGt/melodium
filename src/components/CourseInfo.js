import React from 'react';

function CourseInfo() {
  const courses = [
    {
      name: 'Carnatic Vocals',
      description: 'Master the ancient art of Carnatic music with our expert instructors.',
      image: 'https://example.com/carnatic.jpg'
    },
    {
      name: 'Tamil Film Songs',
      description: 'Learn to sing popular Tamil cinema melodies and express emotions through music.',
      image: 'https://example.com/tamil.jpg'
    },
    {
      name: 'English Pop',
      description: 'Explore contemporary English pop music and develop your unique style.',
      image: 'https://example.com/english-pop.jpg'
    }
  ];

  return (
    <section id="courses" className="course-info">
      <h2>Our Courses</h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <a href="#register" className="enroll-button">Enroll Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseInfo;
import React from 'react';

function CourseInfo() {
  const courses = [
    {
      name: 'Carnatic Vocals',
      description: 'Master the ancient art of Carnatic music with our expert instructors.',
      image: require('../images/CourseInfo/Carnatic.png')
    },
    {
      name: 'Tamil Film Songs',
      description: 'Learn to sing popular Tamil cinema melodies and express emotions through music.',
      image: require('../images/CourseInfo/TamilSingers1.png')
    },
    {
      name: 'English Pop',
      description: 'Explore contemporary English pop music and develop your unique style.',
      video: require('../images/CourseInfo/EnglishPop.mp4') // Use a different key for video
    }
  ];

  return (
    <section id="courses" className="course-info">
      <h2>Our Courses</h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            {course.image && <img src={course.image} alt={course.name} />}
            {course.video && (
              <div className="video-container">
                <video controls autoPlay muted loop>
                  <source src={course.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
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
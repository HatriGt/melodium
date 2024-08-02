import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@melodiousharmony.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Music Street, Harmony City</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#instructors">Instructors</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Melodious Harmony. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
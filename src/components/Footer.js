import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: madhumitha.balendar@gmail.com</p>
                    <p>Phone: +971 545483401</p>
                    <p>Address: Dubai, UAE</p>
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
                    <div class="follow-us">
                        <h2>Follow Us</h2>
                        <div class="social-icons">
                            <a href="#" class="social-icon facebook" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-facebook-f"></i>
                                <span>Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/madzz26official/" class="social-icon instagram" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                            <a href="#" class="social-icon youtube" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-youtube"></i>
                                <span>YouTube</span>
                            </a>
                        </div>
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
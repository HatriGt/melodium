import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
    const socialLinks = [
        { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/madzz26official/' },
        { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com' }
    ];

    return (
        <motion.footer 
            className="footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="footer-content">
                <motion.div 
                    className="footer-section"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3>Contact Us</h3>
                    <p>Email: madhumitha.balendar@gmail.com</p>
                    <p>Phone: +971 545483401</p>
                    <p>Address: Dubai, UAE</p>
                </motion.div>
                <motion.div 
                    className="footer-section"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3>Quick Links</h3>
                    <ul>
                        {['Home', 'Courses', 'Instructors', 'Register'].map((item, index) => (
                            <motion.li 
                                key={item}
                                whileHover={{ x: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <a href={`#${item.toLowerCase()}`}>{item}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div 
                    className="footer-section"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="follow-us">
                        <h2>Follow Us</h2>
                        <div className="social-icons">
                            {socialLinks.map((social, index) => (
                                <motion.a 
                                    key={social.name}
                                    href={social.url} 
                                    className={`social-icon ${social.name.toLowerCase()}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <i className={social.icon}></i>
                                    <span>{social.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                className="footer-bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p>&copy; 2023 Melodious Harmony. All rights reserved.</p>
            </motion.div>
        </motion.footer>
    );
}

export default Footer;
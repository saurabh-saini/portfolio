import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="custom-footer mt-auto">
      <div className="container">
        <div className="row g-4">

          {/* About Section */}
          <div className="col-lg-4 col-md-6">
            <Link className="navbar-brand-custom footer-logo mb-3" to="/">
              <i className="ri-terminal-box-line me-2"></i>
              DEV-STREET
            </Link>
            <p className="footer-text">
              The intersection of creativity & code. Dedicated to building high-performance, modern, and engaging web applications.
            </p>
          </div>

          {/* Quick NavLinks */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link-custom"><i className="ri-arrow-right-s-line"></i> Home</Link></li>
              <li><Link to="/about" className="footer-link-custom"><i className="ri-arrow-right-s-line"></i> About</Link></li>
              <li><Link to="/projects" className="footer-link-custom"><i className="ri-arrow-right-s-line"></i> Projects</Link></li>
              <li><Link to="/contact" className="footer-link-custom"><i className="ri-arrow-right-s-line"></i> Contact</Link></li>
              <li><Link to="/admin" className="footer-link-custom text-warning"><i className="ri-arrow-right-s-line text-warning"></i> Admin Dashboard</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-heading">Let's Connect</h5>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <i className="ri-mail-line"></i>
              </div>
              <span className="footer-text">saurabhsaini736@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <i className="ri-phone-line"></i>
              </div>
              <span className="footer-text">+91 63980 80037</span>
            </div>

            <div className="footer-social-wrapper">
              <a href="https://github.com/saurabh-saini" target="_blank" rel="noopener noreferrer" className="footer-social-pill github">
                <i className="ri-github-fill"></i>
              </a>
              <a href="https://www.linkedin.com/in/saurabh-saini-141a94184/" target="_blank" rel="noopener noreferrer" className="footer-social-pill linkedin">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="mailto:saurabhsaini736@gmail.com" target="_blank" className="footer-social-pill email">
                <i className="ri-mail-fill"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="text-center footer-bottom">
          <p className="mb-0">&copy; {new Date().getFullYear()} Saurabh Saini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Headder = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <Link className="navbar-brand-custom" to="/">
            <i className="ri-terminal-box-line me-2"></i>
            SAINI.DEV
          </Link>
          <button
            className="navbar-toggler navbar-toggler-custom"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-center align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/projects">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/skills">Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Headder

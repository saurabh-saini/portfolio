import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'


const Home = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const heroSkills = [
    { name: 'React.js', icon: 'ri-reactjs-fill', color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.1)', desc: 'For building responsive and dynamic web interfaces.' },
    { name: 'JavaScript (ES6+)', icon: 'ri-javascript-fill', color: '#F7DF1E', bg: 'rgba(247, 223, 30, 0.1)', desc: 'For programming powerful client-side logic and features.' },
    { name: 'TypeScript', icon: 'ri-braces-line', color: '#3178C6', bg: 'rgba(49, 120, 198, 0.1)', desc: 'For adding scale and type safety to modern applications.' },
    { name: 'Next.js', icon: 'ri-instance-line', color: '#ffffff', bg: 'rgba(255, 255, 255, 0.1)', desc: 'For lightning-fast server-rendered React applications.' },
    // { name: 'React Native', icon: 'ri-smartphone-line', color: '#0dcaf0', bg: 'rgba(13, 202, 240, 0.1)', desc: 'For building cross-platform native mobile applications.' },
    { name: 'Node.js', icon: 'ri-nodejs-fill', color: '#339933', bg: 'rgba(51, 153, 51, 0.1)', desc: 'For high-performance server-side scripting and engines.' },
    { name: 'MongoDB', icon: 'ri-database-2-fill', color: '#47A248', bg: 'rgba(71, 162, 72, 0.1)', desc: 'For scalable, flexible document-based database storage.' },
    { name: 'MySQL', icon: 'ri-database-line', color: '#00758F', bg: 'rgba(0, 117, 143, 0.1)', desc: 'For modeling relational databases and managing structured data.' },
    { name: 'Tailwind CSS', icon: 'ri-windy-line', color: '#38BDF8', bg: 'rgba(56, 189, 248, 0.1)', desc: 'For rapid UI design using utility-first styling classes.' }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % heroSkills.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [heroSkills.length]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section text-center text-lg-start">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Column: Intro */}
            <div className="col-lg-6">
              {/* Name Section */}
              <h1 className="hero-title">
                Hi, I'm <span className="text-gradient">Saurabh</span>{" "}
                <span className="wave-emoji">👋</span>
              </h1>

              {/* Main Headline */}
              <h2 className="hero-subtitle fw-bold mb-2" style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>
                Senior MERN Stack Developer | Building High-Throughput Web Architectures
              </h2>

              {/* Detailed Specialization — Color Updated for Readability */}
              <p
                className="hero-description"
                style={{
                  fontSize: '1.1rem',
                  color: '#cbd5e1', // Faint text ko readable banane ke liye
                  opacity: '0.85',
                  marginTop: '10px'
                }}
              >
                Specializing in TypeScript, Next.js, Elasticsearch, and scaling Node.js backends with Redis, MySQL & Docker.
              </p>

              {/* CTA Buttons */}
              <div className="hero-buttons mt-4 d-flex justify-content-center justify-content-lg-start flex-wrap gap-3">
                {/* 1. My Projects (Solid Blue) */}
                <Link
                  to="/projects"
                  className="btn-hero-primary text-decoration-none"
                >
                  My Projects
                </Link>

                {/* 2. Resume (Outline + Immediate Joiner Status) */}
                <a
                  href="/resume.pdf"
                  className="btn-hero-outline text-decoration-none d-inline-flex align-items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="status-dot me-2"
                    style={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#28a745',
                      borderRadius: '50%',
                      display: 'inline-block',
                      boxShadow: '0 0 8px #28a745'
                    }}
                  ></span>
                  Resume (Immediate Joiner)
                </a>

                {/* 3. Contact Me (Clean Border) */}
                <Link
                  to="/contact"
                  className="btn-hero-outline text-decoration-none"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right Column: Skill Showcase Animation */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="hero-skill-showcase-container">
                <div className="glowing-orb orb-1"></div>
                <div className="glowing-orb orb-2"></div>
                <div className="skill-card-glass">
                  <div className="skill-card-body animate-skill-content" key={currentSkillIndex}>
                    <div
                      className="skill-icon-outer-wrapper"
                      style={{
                        color: heroSkills[currentSkillIndex].color,
                        background: heroSkills[currentSkillIndex].bg,
                        boxShadow: `0 8px 30px ${heroSkills[currentSkillIndex].bg}`
                      }}
                    >
                      <i className={`${heroSkills[currentSkillIndex].icon} skill-icon-animate`}></i>
                    </div>
                    <h3 className="skill-showcase-title">{heroSkills[currentSkillIndex].name}</h3>
                    <p className="skill-showcase-desc">{heroSkills[currentSkillIndex].desc}</p>

                    <div className="skill-dots-wrapper">
                      {heroSkills.map((_, idx) => (
                        <span
                          key={idx}
                          className={`skill-dot ${idx === currentSkillIndex ? 'active' : ''}`}
                          onClick={() => setCurrentSkillIndex(idx)}
                          style={{
                            backgroundColor: idx === currentSkillIndex ? heroSkills[currentSkillIndex].color : 'rgba(255, 255, 255, 0.2)'
                          }}
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="welcome-section">
        <div className="container">
          <h2 className="welcome-title">Welcome to My Portfolio</h2>
          <div className="welcome-line"></div>
          <p className="text-muted lead mx-auto fs-5" style={{ maxWidth: '650px' }}>
            Explore my work, technical skill sets, and projects, or get in touch directly to collaborate.
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="home-cards-section">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* About Me Card */}
            <div className="col-lg-3 col-md-6 col-sm-10">
              <Link to="/about" className="nav-card-link">
                <div className="nav-card card-about">
                  <div className="nav-card-icon-wrapper">
                    <i className="ri-user-3-line"></i>
                  </div>
                  <h4 className="nav-card-title">About Me</h4>
                  <p className="nav-card-text">Know more about my educational background, experience, and interests.</p>
                  <div className="nav-card-action mt-auto">
                    Explore Profile <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </Link>
            </div>

            {/* Skills Card */}
            <div className="col-lg-3 col-md-6 col-sm-10">
              <Link to="/skills" className="nav-card-link">
                <div className="nav-card card-skills">
                  <div className="nav-card-icon-wrapper">
                    <i className="ri-braces-line"></i>
                  </div>
                  <h4 className="nav-card-title">My Skills</h4>
                  <p className="nav-card-text">Explore the full range of technologies, languages, and tools I specialize in.</p>
                  <div className="nav-card-action mt-auto">
                    View Skills <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </Link>
            </div>

            {/* Projects Card */}
            <div className="col-lg-3 col-md-6 col-sm-10">
              <Link to="/projects" className="nav-card-link">
                <div className="nav-card card-projects">
                  <div className="nav-card-icon-wrapper">
                    <i className="ri-folder-open-line"></i>
                  </div>
                  <h4 className="nav-card-title">Projects</h4>
                  <p className="nav-card-text">Browse through my portfolio of responsive web applications and live demos.</p>
                  <div className="nav-card-action mt-auto">
                    See My Work <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </Link>
            </div>

            {/* Contact Card */}
            <div className="col-lg-3 col-md-6 col-sm-10">
              <Link to="/contact" className="nav-card-link">
                <div className="nav-card card-contact">
                  <div className="nav-card-icon-wrapper">
                    <i className="ri-mail-send-line"></i>
                  </div>
                  <h4 className="nav-card-title">Contact Me</h4>
                  <p className="nav-card-text">Get in touch to collaborate on projects, discuss opportunities, or connect.</p>
                  <div className="nav-card-action mt-auto">
                    Let's Connect <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
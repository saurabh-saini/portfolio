import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout>
      <section className="about-section">
        <div className="container mt-4">

          {/* Main Card Wrapper */}
          <div className="about-card-glass mb-5">
            <div className="row align-items-center g-5">

              {/* Profile Avatar Icon Column */}
              <div className="col-lg-4 text-center">
                <div className="about-avatar-container">
                  <div className="about-avatar-spinner"></div>
                  <div className="about-avatar-icon-box">
                    <i className="ri-code-s-slash-line"></i>
                  </div>
                </div>
              </div>

              {/* Description Column */}
              <div className="col-lg-8">
                <h2 className="welcome-title text-start mb-2">About Me</h2>
                <div className="welcome-line ms-0 mb-4" style={{ width: '50px' }}></div>

                <p className="about-paragraph">
                  Hello! I'm <strong>Saurabh Saini</strong>, a <strong>Senior MERN Stack Developer</strong> with <strong>4.5+ years of experience</strong> dedicated to architecting high-throughput web applications and scalable REST APIs. I specialize in engineering production-ready systems using <strong>React.js, Next.js, Node.js, Express, TypeScript, MongoDB, and MySQL</strong>.
                </p>
                <p className="about-paragraph">
                  My core expertise lies in designing robust <strong>microservices architectures</strong>, implementing high-performance caching & message queues (<strong>Redis, BullMQ</strong>), integrating advanced search engines (<strong>Elasticsearch</strong>), and handling secure cloud storage (<strong>AWS S3</strong>). I focus deeply on backend security via JWT/RBAC, performance optimization, and containerized deployments.
                </p>
                <p className="about-paragraph">
                  I love breaking down complex business requirements into clean, type-safe code, leveraging modern AI workflows via <strong>Cursor and GitHub Copilot</strong>, and shipping seamless architectures via <strong>Docker & PM2 Cluster Mode</strong>.
                </p>
                <p className="about-paragraph mb-0">
                  When I'm not coding, you can find me reading tech blogs to keep up with industry trends, exploring open-source projects, or playing badminton.
                </p>
              </div>
            </div>
          </div>

          {/* Background Sections Rendered as cards */}
          <div className="row g-4 justify-content-center">
            {/* Education Info Card */}
            <div className="col-lg-4 col-md-6">
              <div className="info-card-custom">
                <div className="info-card-icon-box bg-blue">
                  <i className="ri-graduation-cap-line"></i>
                </div>
                <h5 className="info-card-title">Education</h5>
                <p className="info-card-text">
                  <strong>BCA (Bachelor of Computer Applications)</strong>
                  <br />
                  Chaudhary Charan Singh University
                </p>
              </div>
            </div>

            {/* Specialization Info Card */}
            <div className="col-lg-4 col-md-6">
              <div className="info-card-custom">
                <div className="info-card-icon-box bg-cyan">
                  <i className="ri-terminal-window-line"></i>
                </div>
                <h5 className="info-card-title">Specialization</h5>
                <p className="info-card-text">
                  Microservices, High-Throughput APIs, Devops, Caching & System Design
                </p>
              </div>
            </div>

            {/* Tools Info Card */}
            <div className="col-lg-4 col-md-6">
              <div className="info-card-custom">
                <div className="info-card-icon-box bg-purple">
                  <i className="ri-tools-line"></i>
                </div>
                <h5 className="info-card-title">Infrastructure & Tools</h5>
                <p className="info-card-text">
                  Docker, Redis, BullMQ, PM2, Git, Postman, AWS S3
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default About
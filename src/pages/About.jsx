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
                  Hello! I'm <strong>Saurabh Saini</strong>, a <strong>Senior Full Stack / MERN Developer</strong> with <strong>4.5+ years of experience</strong> dedicated to architecting high-throughput distributed systems, real-time analytics platforms, and scalable REST APIs. I specialize in engineering production-grade applications using <strong>React.js, Next.js, Node.js, Express, TypeScript, MongoDB, MySQL, and OpenSearch</strong>.
                </p>
                <p className="about-paragraph">
                  My core expertise lies in designing robust <strong>microservices architectures</strong>, building asynchronous background worker pipelines (<strong>BullMQ, Redis</strong>), sub-50ms geospatial search indexing (<strong>OpenSearch / Elasticsearch</strong>), and secure cloud media workflows (<strong>AWS S3 Presigned URLs</strong>). I focus deeply on automated Cron Jobs, data integrity, and containerized deployments.
                </p>
                <p className="about-paragraph">
                  I love turning complex engineering challenges into clean, type-safe code, leveraging modern AI workflows via <strong>Cursor, Amazon Q, and GitHub Copilot</strong>, and ensuring high-availability production environments via <strong>Linux CLI, Docker, and PM2 Cluster Mode</strong>.
                </p>
                <p className="about-paragraph mb-0">
                  When I'm not coding, you can find me exploring system design architectures, diving into open-source repositories, or playing badminton.
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
                  <strong>MCA (Online)</strong> — Chandigarh University
                  <br />
                  <small className="text-muted">BCA — CCS University</small>
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
                  Distributed Systems, High-Throughput Pipelines, GIS Radar, OpenSearch & Zero-Downtime Scaling
                </p>
              </div>
            </div>

            {/* Tools Info Card */}
            <div className="col-lg-4 col-md-6">
              <div className="info-card-custom">
                <div className="info-card-icon-box bg-purple">
                  <i className="ri-tools-line"></i>
                </div>
                <h5 className="info-card-title">Infrastructure & DevOps</h5>
                <p className="info-card-text">
                  Linux CLI, Docker, PM2 (Cluster Mode), BullMQ, Redis, AWS S3, OpenSearch, Automated Cron
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
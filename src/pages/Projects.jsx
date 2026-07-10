import React from 'react'
import Layout from '../components/Layout/Layout'

const Projects = () => {

  const projects = [
    {
      title: 'My Best Venue',
      description: 'An Event Venue & Vendor Marketplace Platform. Architected a high-throughput enterprise REST API with MySQL, integrating Elasticsearch for full-text search, BullMQ & Redis for async task processing, and AWS S3 storage.',
      liveLink: 'https://mybestvenue.com/',
      githubLink: 'https://github.com/Saurabh-Saini', // Apni proper github link dalna yha
      icon: 'ri-building-2-line',
      image: '/projects/MyBestVenue.png',
      tech: 'Next.js, Redux-Query, Node.js, TypeScript, MySQL, Elasticsearch, Redis'
    },
    {
      title: 'DSY Luxury PG',
      description: 'A comprehensive PG Booking Management System featuring role-based dashboards (User/Admin). Handles complete booking lifecycles, smart room search, gender-based bed assignments, and auto-status update logic.',
      liveLink: 'https://dsyluxurypg.in/',
      githubLink: 'https://github.com/Saurabh-Saini',
      icon: 'ri-home-heart-line',
      image: '/projects/DsyLuxuryPg.png',
      tech: 'Next.js, Redux-Query, Node.js, Express, MongoDB'
    },
    {
      title: 'The Bold MIC',
      description: 'A Full-stack News Publishing Platform built with role-based admin/user dashboards. Supports internal content management, direct article publishing pipelines, and dynamic third-party news API integrations.',
      liveLink: 'https://theboldmic.com/',
      githubLink: 'https://github.com/Saurabh-Saini',
      icon: 'ri-newspaper-line',
      image: '/projects/TheBoldMic.png',
      tech: 'Next.js, Redux-Query, Node.js, Express, MySQL, Third-Party APIs'
    },
    {
      title: 'Barfolio',
      description: 'A B2B Mobile CRM & Field Sales Platform tailored for the beverage industry. Engineered responsive web components and dashboards for real-time order tracking, interaction logging, and automated sales analytics.',
      liveLink: 'https://offsureit.com/portfolio/barfolio',
      githubLink: 'https://github.com/Saurabh-Saini',
      icon: 'ri-dashboard-3-line',
      image: '/projects/Barfolio.png',
      tech: 'React.js, Redux-Toolkit, REST APIs'
    },
    {
      title: 'Laundry Service Management Platform',
      description: 'Developed high-performance interactive frontend modules for seamless customer onboarding, automated order tracking, and asynchronous service workflows while resolving critical production issues.',
      liveLink: '', // Iska live link empty choda h jesa apne btaya
      githubLink: 'https://github.com/Saurabh-Saini',
      icon: 'ri-bubble-chart-line',
      image: '/projects/Laundry.png',
      tech: 'React.js, Redux-Saga, HTML5, CSS3, REST Services'
    }
  ];
  return (
    <Layout>
      <section className="projects-section py-5">
        <div className="container mt-4">
          <div className="text-center mb-5">
            <h2 className="welcome-title">My Projects</h2>
            <div className="welcome-line"></div>
            <p className="text-muted lead mx-auto fs-5" style={{ maxWidth: '650px' }}>
              Explore my recent client works, web applications, and landing pages built using modern development techniques.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className={`project-card-custom proj-${index}`}>
                  <div className="project-banner-image-container">
                    <img src={project.image} alt={project.title} className="project-banner-img" />
                    <div className="project-banner-overlay">
                      <i className={project.icon}></i>
                    </div>
                    <span className="project-tech-badge">{project.tech}</span>
                  </div>
                  <div className="project-content-body">
                    <h5 className="project-title-custom">{project.title}</h5>
                    <p className="project-desc-custom">{project.description}</p>
                    <div className="mt-auto d-flex gap-2">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-project-primary">
                          <i className="ri-external-link-line"></i> Live Demo
                        </a>
                      )}
                      {/* {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-project-outline">
                          <i className="ri-github-fill"></i> GitHub
                        </a>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects

import React from 'react'
import Layout from '../components/Layout/Layout'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      catIcon: 'ri-code-box-line',
      catColor: '#0d6efd',
      skills: [
        { name: 'JavaScript (ES6+)', icon: 'ri-javascript-fill', color: '#F7DF1E' },
        { name: 'TypeScript', icon: 'ri-braces-line', color: '#3178C6' },
        { name: 'SQL', icon: 'ri-database-line', color: '#00758F' },
        { name: 'Bash / Linux CLI', icon: 'ri-terminal-line', color: '#FCC624' }
      ]
    },
    {
      title: 'Frontend Development',
      catIcon: 'ri-window-line',
      catColor: '#0dcaf0',
      skills: [
        { name: 'React.js', icon: 'ri-reactjs-fill', color: '#61DAFB' },
        { name: 'Next.js 16 (App Router)', icon: 'ri-instance-line', color: '#111827' },
        { name: 'Leaflet.js (GIS Radar)', icon: 'ri-map-pin-user-line', color: '#10B981' },
        { name: 'Redux Toolkit', icon: 'ri-loop-left-line', color: '#764ABC' },
        { name: 'RTK Query', icon: 'ri-git-merge-line', color: '#764ABC' },
        { name: 'Tailwind CSS', icon: 'ri-windy-line', color: '#38BDF8' }
      ]
    },
    {
      title: 'Databases & Search',
      catIcon: 'ri-database-2-line',
      catColor: '#198754',
      skills: [
        { name: 'OpenSearch / Elasticsearch', icon: 'ri-search-eye-line', color: '#005571' },
        { name: 'MongoDB (Mongoose)', icon: 'ri-database-2-fill', color: '#47A248' },
        { name: 'MySQL (Connection Pooling)', icon: 'ri-database-line', color: '#00758F' },
        { name: 'Redis (Upstash Caching)', icon: 'ri-flashlight-line', color: '#DC382D' },
        { name: 'BullMQ (Async Workers)', icon: 'ri-stack-line', color: '#FFB000' }
      ]
    },
    {
      title: 'DevOps & Cloud Infrastructure',
      catIcon: 'ri-instance-fill',
      catColor: '#6c757d',
      skills: [
        { name: 'Linux / Unix CLI', icon: 'ri-ubuntu-line', color: '#E95420' },
        { name: 'Docker / Docker Compose', icon: 'ri-docker-fill', color: '#2496ED' },
        { name: 'PM2 (Cluster Mode)', icon: 'ri-dashboard-3-line', color: '#2B3A42' },
        { name: 'AWS S3 (Presigned URLs)', icon: 'ri-amazon-fill', color: '#FF9900' },
        { name: 'CI/CD & Render / Vercel', icon: 'ri-cloud-line', color: '#46E3B7' }
      ]
    },
    {
      title: 'Architecture & Security Integrations',
      catIcon: 'ri-git-merge-line',
      catColor: '#764abc',
      skills: [
        { name: 'Microservices & Distributed Queues', icon: 'ri-node-tree', color: '#0d6efd' },
        { name: 'REST APIs & Automated S3 Cron Jobs', icon: 'ri-api-line', color: '#FF8C00' },
        { name: 'JWT & RBAC Security', icon: 'ri-shield-keyhole-line', color: '#D63AFF' },
        { name: 'Redis Rate Limiting & Dynamic CORS', icon: 'ri-shield-check-line', color: '#FF3366' },
        { name: 'Zod Schema Validation & Helmet', icon: 'ri-checkbox-circle-line', color: '#00C8FF' },
        { name: 'AI Assistants (Cursor, Amazon Q, Gemini, Copilot)', icon: 'ri-sparkling-fill', color: '#8B5CF6' }
      ]
    }
  ];

  return (
    <Layout>
      <section className="skills-section py-5">
        <div className="container mt-4">
          <div className="text-center mb-5">
            <h2 className="welcome-title">My Skills</h2>
            <div className="welcome-line"></div>
            <p className="text-muted lead mx-auto fs-5" style={{ maxWidth: '750px' }}>
              Advanced technical proficiency in architecting microservices, optimizing heavy databases, scaling backend infrastructures, and building high-performance UIs.
            </p>
          </div>

          {/* Main 2x2 grid for first 4 categories */}
          <div className="row g-4 justify-content-center mb-4">
            {skillCategories.slice(0, 4).map((category, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="skills-category-card" style={{ '--cat-color': category.catColor }}>
                  <h4 className="category-title mb-4">
                    <i className={`${category.catIcon} me-2`} style={{ color: category.catColor }}></i>
                    {category.title}
                  </h4>
                  <div className="skills-grid">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="skill-tile-custom"
                        title={skill.name}
                        style={{
                          '--skill-color': skill.color,
                          '--skill-glow': `${skill.color}20`
                        }}
                      >
                        <div
                          className="skill-tile-icon-wrapper"
                          style={{ color: skill.color, background: `${skill.color}15` }}
                        >
                          <i className={skill.icon}></i>
                        </div>
                        <span className="skill-tile-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full-width horizontal flex card for Architecture & Security */}
          {skillCategories[4] && (
            <div className="row g-4 justify-content-center">
              <div className="col-12">
                <div className="skills-category-card" style={{ '--cat-color': skillCategories[4].catColor }}>
                  <h4 className="category-title mb-4">
                    <i className={`${skillCategories[4].catIcon} me-2`} style={{ color: skillCategories[4].catColor }}></i>
                    {skillCategories[4].title}
                  </h4>

                  <div className="d-flex flex-wrap gap-3">
                    {skillCategories[4].skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="skill-tile-custom"
                        title={skill.name}
                        style={{
                          '--skill-color': skill.color,
                          '--skill-glow': `${skill.color}20`,
                          width: 'auto',
                          flex: '0 0 auto'
                        }}
                      >
                        <div
                          className="skill-tile-icon-wrapper"
                          style={{ color: skill.color, background: `${skill.color}15` }}
                        >
                          <i className={skill.icon}></i>
                        </div>
                        <span className="skill-tile-name" style={{ overflow: 'visible', whiteSpace: 'normal' }}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Skills
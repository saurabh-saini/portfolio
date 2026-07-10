// import React from 'react'
// import Layout from '../components/Layout/Layout'

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: 'Languages',
//       catIcon: 'ri-code-box-line',
//       catColor: '#0d6efd',
//       skills: [
//         { name: 'JavaScript (ES6+)', icon: 'ri-javascript-fill', color: '#F7DF1E' },
//         { name: 'TypeScript', icon: 'ri-braces-line', color: '#3178C6' }
//       ]
//     },
//     {
//       title: 'Frameworks & Libraries',
//       catIcon: 'ri-window-line',
//       catColor: '#0dcaf0',
//       skills: [
//         { name: 'React.js', icon: 'ri-reactjs-fill', color: '#61DAFB' },
//         { name: 'Next.js', icon: 'ri-instance-line', color: '#111827' },
//         { name: 'React Native', icon: 'ri-smartphone-line', color: '#0dcaf0' },
//         { name: 'Redux Toolkit', icon: 'ri-loop-left-line', color: '#764ABC' },
//         { name: 'RTK Query', icon: 'ri-git-merge-line', color: '#764ABC' },
//         { name: 'HTML5', icon: 'ri-html5-fill', color: '#E34F26' },
//         { name: 'CSS3', icon: 'ri-css3-fill', color: '#1572B6' },
//         { name: 'Tailwind CSS', icon: 'ri-windy-line', color: '#38BDF8' }
//       ]
//     },
//     {
//       title: 'Back-End & Databases',
//       catIcon: 'ri-database-2-line',
//       catColor: '#198754',
//       skills: [
//         { name: 'Node.js', icon: 'ri-nodejs-fill', color: '#339933' },
//         { name: 'Express.js', icon: 'ri-terminal-box-fill', color: '#828282' },
//         { name: 'MongoDB', icon: 'ri-database-2-fill', color: '#47A248' },
//         { name: 'MySQL', icon: 'ri-database-line', color: '#00758F' }
//       ]
//     },
//     {
//       title: 'Tools & Platforms',
//       catIcon: 'ri-tools-line',
//       catColor: '#6c757d',
//       skills: [
//         { name: 'Git', icon: 'ri-git-branch-line', color: '#F05032' },
//         { name: 'GitHub', icon: 'ri-github-fill', color: '#181717' },
//         { name: 'VS Code', icon: 'ri-code-line', color: '#007ACC' },
//         { name: 'Postman', icon: 'ri-send-plane-fill', color: '#FF6C37' },
//         { name: 'NPM', icon: 'ri-npmjs-fill', color: '#CB3837' },
//         { name: 'Render', icon: 'ri-cloud-line', color: '#46E3B7' }
//       ]
//     },
//     {
//       title: 'Architecture & Integration',
//       catIcon: 'ri-git-merge-line',
//       catColor: '#764abc',
//       skills: [
//         { name: 'RESTful APIs', icon: 'ri-api-line', color: '#0d6efd' },
//         { name: 'JSON', icon: 'ri-file-code-line', color: '#FF8C00' },
//         { name: 'Third-Party APIs', icon: 'ri-external-link-line', color: '#198754' },
//         { name: 'JWT', icon: 'ri-shield-keyhole-line', color: '#D63AFF' },
//         { name: 'Bcrypt', icon: 'ri-lock-password-line', color: '#FF3366' },
//         { name: 'Role-Based Access Control', icon: 'ri-user-settings-line', color: '#00C8FF' },
//         { name: 'Nodemailer', icon: 'ri-mail-send-fill', color: '#007acc' }
//       ]
//     }
//   ];

//   return (
//     <Layout>
//       <section className="skills-section py-5">
//         <div className="container mt-4">
//           <div className="text-center mb-5">
//             <h2 className="welcome-title">My Skills</h2>
//             <div className="welcome-line"></div>
//             <p className="text-muted lead mx-auto fs-5" style={{ maxWidth: '650px' }}>
//               A detailed breakdown of language expertise, frameworks, tools, database management, and architecture integration.
//             </p>
//           </div>

//           {/* Main 2x2 grid for first 4 categories */}
//           <div className="row g-4 justify-content-center mb-4">
//             {skillCategories.slice(0, 4).map((category, index) => (
//               <div key={index} className="col-12 col-md-6">
//                 <div className="skills-category-card" style={{ '--cat-color': category.catColor }}>
//                   <h4 className="category-title mb-4">
//                     <i className={`${category.catIcon} me-2`} style={{ color: category.catColor }}></i>
//                     {category.title}
//                   </h4>
//                   <div className="skills-grid">
//                     {category.skills.map((skill, sIdx) => (
//                       <div 
//                         key={sIdx} 
//                         className="skill-tile-custom" 
//                         title={skill.name}
//                         style={{
//                           '--skill-color': skill.color,
//                           '--skill-glow': `${skill.color}20`
//                         }}
//                       >
//                         <div 
//                           className="skill-tile-icon-wrapper" 
//                           style={{ color: skill.color, background: `${skill.color}15` }}
//                         >
//                           <i className={skill.icon}></i>
//                         </div>
//                         <span className="skill-tile-name">{skill.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Full-width horizontal flex card for Architecture & Integration */}
//           {skillCategories[4] && (
//             <div className="row g-4 justify-content-center">
//               <div className="col-12">
//                 <div className="skills-category-card" style={{ '--cat-color': skillCategories[4].catColor }}>
//                   <h4 className="category-title mb-4">
//                     <i className={`${skillCategories[4].catIcon} me-2`} style={{ color: skillCategories[4].catColor }}></i>
//                     {skillCategories[4].title}
//                   </h4>

//                   {/* Flex wrap container instead of Grid */}
//                   <div className="d-flex flex-wrap gap-3">
//                     {skillCategories[4].skills.map((skill, sIdx) => (
//                       <div 
//                         key={sIdx} 
//                         className="skill-tile-custom" 
//                         title={skill.name}
//                         style={{
//                           '--skill-color': skill.color,
//                           '--skill-glow': `${skill.color}20`,
//                           width: 'auto',
//                           flex: '0 0 auto'
//                         }}
//                       >
//                         <div 
//                           className="skill-tile-icon-wrapper" 
//                           style={{ color: skill.color, background: `${skill.color}15` }}
//                         >
//                           <i className={skill.icon}></i>
//                         </div>
//                         <span className="skill-tile-name" style={{ overflow: 'visible', whiteSpace: 'normal' }}>{skill.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}        </div>
//       </section>
//     </Layout>
//   )
// }

// export default Skills


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
        { name: 'SQL', icon: 'ri-database-line', color: '#00758F' }
      ]
    },
    {
      title: 'Frontend Development',
      catIcon: 'ri-window-line',
      catColor: '#0dcaf0',
      skills: [
        { name: 'React.js', icon: 'ri-reactjs-fill', color: '#61DAFB' },
        { name: 'Next.js', icon: 'ri-instance-line', color: '#111827' },
        { name: 'Redux (Toolkit/Saga)', icon: 'ri-loop-left-line', color: '#764ABC' },
        { name: 'RTK Query', icon: 'ri-git-merge-line', color: '#764ABC' },
        { name: 'HTML5/CSS3', icon: 'ri-html5-fill', color: '#E34F26' },
        { name: 'Tailwind CSS', icon: 'ri-windy-line', color: '#38BDF8' }
      ]
    },
    {
      title: 'Back-End & Databases',
      catIcon: 'ri-database-2-line',
      catColor: '#198754',
      skills: [
        { name: 'Node.js', icon: 'ri-nodejs-fill', color: '#339933' },
        { name: 'Express.js', icon: 'ri-terminal-box-fill', color: '#828282' },
        { name: 'MongoDB', icon: 'ri-database-2-fill', color: '#47A248' },
        { name: 'MySQL (Pooling)', icon: 'ri-database-line', color: '#00758F' },
        { name: 'Elasticsearch', icon: 'ri-search-eye-line', color: '#005571' }
      ]
    },
    {
      title: 'DevOps & Cloud Infrastructure',
      catIcon: 'ri-instance-fill',
      catColor: '#6c757d',
      skills: [
        { name: 'Docker / Compose', icon: 'ri-docker-fill', color: '#2496ED' },
        { name: 'PM2 (Cluster Mode)', icon: 'ri-dashboard-3-line', color: '#2B3A42' },
        { name: 'Redis (Caching)', icon: 'ri-コイン-line', color: '#DC382D' },
        { name: 'BullMQ (Async Queues)', icon: 'ri-stack-line', color: '#FFB000' },
        { name: 'AWS S3', icon: 'ri-amazon-fill', color: '#FF9900' }
      ]
    },
    {
      title: 'Architecture & Security Integrations',
      catIcon: 'ri-git-merge-line',
      catColor: '#764abc',
      skills: [
        { name: 'Microservices Architecture', icon: 'ri-node-tree', color: '#0d6efd' },
        { name: 'RESTful APIs & Cron Jobs', icon: 'ri-api-line', color: '#FF8C00' },
        { name: 'JWT & RBAC Security', icon: 'ri-shield-keyhole-line', color: '#D63AFF' },
        { name: 'Redis Rate Limiting & Dynamic CORS', icon: 'ri-error-warning-line', color: '#FF3366' },
        { name: 'Zod Validation & Helmet', icon: 'ri-checkbox-circle-line', color: '#00C8FF' },
        { name: 'Git, Postman & AI Tools (Cursor/Copilot)', icon: 'ri-tools-line', color: '#007acc' }
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

          {/* Full-width horizontal flex card for Architecture & Integration */}
          {skillCategories[4] && (
            <div className="row g-4 justify-content-center">
              <div className="col-12">
                <div className="skills-category-card" style={{ '--cat-color': skillCategories[4].catColor }}>
                  <h4 className="category-title mb-4">
                    <i className={`${skillCategories[4].catIcon} me-2`} style={{ color: skillCategories[4].catColor }}></i>
                    {skillCategories[4].title}
                  </h4>

                  {/* Flex wrap container instead of Grid */}
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
                        <span className="skill-tile-name" style={{ overflow: 'visible', whiteSpace: 'normal' }}>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}        </div>
      </section>
    </Layout>
  )
}

export default Skills

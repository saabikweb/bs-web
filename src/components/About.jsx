import React from 'react'
import './About.css'

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about creating innovative solutions and bringing ideas to life through code
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-content">
          {/* Text Content */}
          <div className="about-text">
            <h3 className="about-heading">
              Building Digital Experiences That Matter
            </h3>
            <div className="about-description">
              <p>
                I'm a dedicated full-stack developer with a passion for creating intuitive, 
                efficient, and scalable web applications. My journey in tech began 3 years ago, 
                and since then, I've been constantly learning and evolving with the latest technologies.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user experiences that 
                not only look great but also solve real-world problems. Whether it's a complex 
                enterprise application or a simple landing page, I approach every project with 
                the same level of dedication and attention to detail.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                blog posts and tutorials.
              </p>
            </div>

            {/* Download CV Button */}
            <div className="about-cta">
              <a href="#" className="btn btn-primary">
                Download CV
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="about-visual">
            <div className="about-card">
              <div className="about-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="about-card-title">Clean Code Enthusiast</h4>
              <p className="about-card-text">Writing maintainable and scalable solutions</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

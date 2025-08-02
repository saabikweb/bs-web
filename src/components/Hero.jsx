import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      
      <div className="container">
        <div className="hero-content">
          {/* Profile Image */}
          <div className="hero-avatar animate-fadeInUp">
            <div className="avatar">
              <svg className="avatar-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title animate-fadeInUp delay-200">
            Hi, I'm{' '}
            <span className="hero-name">John Doe</span>
          </h1>

          {/* Subheading */}
          <p className="hero-subtitle animate-fadeInUp delay-300">
            A passionate{' '}
            <span className="hero-highlight">Full Stack Developer</span>
            {' '}creating digital experiences that make a difference
          </p>

          {/* Description */}
          <p className="hero-description animate-fadeInUp delay-400">
            I specialize in building modern web applications with React, Node.js, and cutting-edge technologies. 
            Let's bring your ideas to life with clean, efficient, and scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta animate-fadeInUp delay-500">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator animate-fadeInUp delay-500">
            <div className="scroll-arrow animate-bounce">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

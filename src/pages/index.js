// Step 1: Import React
import * as React from 'react'
import { useEffect, useState } from 'react'
import './global.css'
import { FaFileDownload } from 'react-icons/fa'

import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import SocialLinks from '../components/SocialLinks'

// Floating resume badge styles
const floatingResumeBadgeStyle = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: 'rgba(10, 25, 47, 0.85)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(100, 255, 218, 0.3)',
  borderRadius: '50px',
  padding: '12px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
  zIndex: 100,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  color: '#64ffda',
  textDecoration: 'none',
  fontSize: '14px',
};

const IndexPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="container">
      <div 
        className="cursor-spotlight" 
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          pointerEvents: 'none'
        }}
      ></div>
      <div className="left-column">
        <Header />
        <SocialLinks />
      </div>
      <div className="right-column">
        <About />
        <Experience />
        <Projects />
        <Education />
        <div
          style={{
            marginTop: 'auto',
            paddingBottom: '30px',
            paddingTop: '55px',
            marginRight: '50px',
            fontSize: '1rem',
            color: '#8892b0',
            letterSpacing: '0.02em',
            fontWeight: 400,
            lineHeight: 1.6,
            textAlign: 'right',
            fontStyle: 'italic',
            fontFamily: 'Courier New, Courier, monospace',
          }}
        >
          {/*Shoutout <a href="https://github.com/bchiang7/v4" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline' }}>github.com/bchiang7/v4</a> .. love the website design*/}
          Shoutout github.com/bchiang7/v4 .. love the website design
        </div>
      </div>

      {/* Floating resume badge */}
      <a
        href="/TylerDuretteResumeFinal.pdf"
        download
        className="interactive-element"
        style={floatingResumeBadgeStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
        }}
      >
        <FaFileDownload /> Resume
      </a>
    </div>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Tyler Durette | Software Engineer</title>
    <meta name="viewport" content="width=device-width, initial-scale=0.9" />
  </>
)

// Step 3: Export your component
export default IndexPage

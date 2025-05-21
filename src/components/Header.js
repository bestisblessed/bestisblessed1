import React, { useState } from 'react'
import profileImage from '../images/image.png'

const navLinks = [
  { name: 'ABOUT', url: '#about' },
  { name: 'EXPERIENCE', url: '#experience' },
  { name: 'PROJECTS', url: '#projects' },
  { name: 'EDUCATION', url: '#education' }
]

const styles = {
  header: {
    marginBottom: '40px',
    maxWidth: '90%'
  },
  headerTop: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginBottom: '10px'
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #64ffda'
  },
  name: {
    fontSize: '56px',
    margin: '0 0 10px 0',
    color: '#e6f1ff',
    fontWeight: '600'
  },
  title: {
    fontSize: '22px',
    fontWeight: 'normal',
    margin: '0 0 20px 0',
    color: '#e6f1ff',
    fontStyle: 'italic'
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '1.5',
    maxWidth: '300px',
    color: '#8892b0',
    marginBottom: '60px'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px'
  },
  navItem: {
    color: '#a8b2d1',
    textDecoration: 'none',
    fontSize: '15px',
    letterSpacing: '1.2px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease'
  },
  navText: {
    transition: 'transform 0.3s ease',
    display: 'inline-block'
  },
  navLine: {
    position: 'relative',
    width: '24px',
    height: '2px',
    backgroundColor: '#64ffda',
    marginRight: '12px',
    transition: 'width 0.3s ease'
  },
  navLineHover: {
    width: '70px'
  }
}

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  
  return (
    <header style={styles.header}>
      <div style={styles.headerTop}>
        <img src={profileImage} alt="Tyler Durette" style={styles.profileImage} />
        <h1 style={styles.name}>Tyler Durette</h1>
      </div>
      <h2 style={styles.title}><span style={{fontStyle: 'normal'}}>Engineer</span>&nbsp;&nbsp;<span style={{fontSize: '15px', fontWeight: 'normal'}}>DevOps / Software / AI</span></h2>
      <p style={styles.subtitle}>
        I do cool things with AI in sports and love data analysis, machine learning, automation, finance, and trading bots.
      </p>

      {/* Navigation */}
      <nav style={styles.nav}>
        {navLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            style={{
              ...styles.navItem,
              color: hoveredItem === index ? '#e6f1ff' : '#a8b2d1'
            }}
            className="interactive-element"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span style={{
              ...styles.navLine,
              width: hoveredItem === index ? '70px' : '24px'
            }}></span>
            <span style={styles.navText}>
              {link.name}
            </span>
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
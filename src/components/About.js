import React from 'react'

const styles = {
  section: {
    marginBottom: '100px'
  },
  sectionHeading: {
    fontSize: '24px',
    marginBottom: '40px',
    color: '#ccd6f6',
    fontWeight: '600'
  },
  paragraph: {
    color: '#8892b0',
    fontSize: '18px',
    lineHeight: '1.7',
    maxWidth: '700px',
    marginBottom: '20px'
  },
  highlight: {
    color: '#64ffda'
  },
  glitchResumeLink: {
    color: '#64ffda',
    textDecoration: 'none',
    fontSize: '18px',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    padding: '4px 16px',
    marginTop: '30px',
    display: 'inline-flex',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: '4px',
    transition: 'border 0.2s ease'
  }
}

const About = () => {
  return (
    <section id="about" style={styles.section}>
      {/*<h2 style={styles.sectionHeading}>ABOUT</h2>*/}
      <p style={styles.paragraph}>
        I'm a software engineer specializing in building AI-powered applications and data analysis tools.
        My work focuses on creating sophisticated solutions that leverage machine learning and data science
        to solve complex problems in various domains, particularly sports analytics, finance, and blockchain.
      </p>
      <p style={styles.paragraph}>
        Currently, I'm developing <span style={styles.highlight}>AI tools for sports analysis</span> and
        <span style={styles.highlight}> trading bots</span> for cryptocurrency markets. I've created 
        multiple web applications that provide advanced data analysis for NFL and UFC/MMA sports,
        helping users make more informed decisions.
      </p>
      <p style={styles.paragraph}>
        My expertise includes <span style={styles.highlight}>Python</span>, <span style={styles.highlight}>data science</span>,
        <span style={styles.highlight}> machine learning</span>, <span style={styles.highlight}>web development</span>,
        and <span style={styles.highlight}>blockchain technologies</span>. I'm passionate about creating tools that
        transform complex data into actionable insights and automated systems.
      </p>
      <p style={styles.paragraph}>
        Based in Boca Raton, FL, I'm always looking for new challenges and opportunities to apply
        AI and data science to create innovative solutions. Feel free to check out my projects
        on GitHub and connect with me on LinkedIn.
      </p>
    </section>
  )
}

export default About 
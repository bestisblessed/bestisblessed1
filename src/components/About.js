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
  profileContainer: {
    display: 'flex',
    gap: '30px',
    marginBottom: '30px',
    alignItems: 'flex-start'
  },
  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '5px',
    objectFit: 'cover',
    border: '2px solid #64ffda'
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
        I'm a software engineer with over 5 years of professional experience.
        My passions include building AI-powered applications and data analysis tools in various domains, 
        particularly sports and finance.

        My portfolio includes multiple web applications for NFL, MLB, UFC/MMA analytics, predictive modeling systems, 
        AI agents and automation templates, and various data processing pipelines and monitoring systems. 
        I also dabble in trading bots and algorithms.
      </p>
      <p style={styles.paragraph}>
        Currently, I'm developing <span style={styles.highlight}>AI tools</span> for things such as sports analysis and
        creating <span style={styles.highlight}>trading algorithms</span> and bots for different financial markets. 

        I've developed and maintained CI/CD pipelines, containerized applications, and other complex data systems and infrastructure 
        throughout my professional career as well.
      </p>

      {/*<p style={styles.paragraph}>
        My expertise includes <span style={styles.highlight}>Python</span>, <span style={styles.highlight}>data science</span>,
        <span style={styles.highlight}> machine learning</span>, <span style={styles.highlight}>web development</span>,
        and <span style={styles.highlight}>blockchain technologies</span>. I'm passionate about creating tools that
        transform complex data into actionable insights and automated systems.
      </p>*/}

    </section>
  )
}

export default About 
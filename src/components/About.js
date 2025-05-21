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
  resumeContainer: {
    marginTop: '40px',
    padding: '20px',
    border: '1px solid rgba(100, 255, 218, 0.3)',
    borderRadius: '5px',
    maxWidth: '700px',
    backgroundColor: 'rgba(100, 255, 218, 0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  resumeInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  resumeIcon: {
    color: '#64ffda',
    fontSize: '24px'
  },
  resumeText: {
    color: '#ccd6f6'
  },
  resumeLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#64ffda',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'all 0.2s ease'
  }
}

const About = () => {
  // removed unused state hook

  return (
    <section id="about" style={styles.section}>
      {/*<h2 style={styles.sectionHeading}>ABOUT</h2>*/}
      <p style={styles.paragraph}>
        I'm a software engineer with 5+ years of professional experience.
        My passions include developing and experimenting with various AI autmoations, workflows, processes, libraries, and architectures  
        as well as scripting out data collection pipelines and building analysis tools and dashboards across a variety of projects.
        {/*Particularly in sports/sports handicapping is what I most enjoy.*/}
      </p>
      <p style={styles.paragraph}>
        My current portfolio includes multiple web applications for NFL, MLB, MMA analytics and predictive models, 
        AI agents and automation templates to help the public and for my projects,
        functioning and automated trading bots in production running from my RPi on the Solana and BASE blockchains, 
        and numerous other data collection, processing, monitoring and alerting systems. 
      </p>
      {/*<p style={styles.paragraph}>
        Currently, I'm developing <span style={styles.highlight}>AI tools</span> for things such as sports analysis and
        creating <span style={styles.highlight}>trading algorithms</span> and bots for different financial markets. 

        I've developed and maintained CI/CD pipelines, containerized applications, and other complex data systems and infrastructure 
        throughout my professional career as well.
      </p>*/}

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
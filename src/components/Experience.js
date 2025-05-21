import React from 'react'
import './Experience.css'

const experienceData = [
  {
    date: 'Mar 2023 — PRESENT',
    title: 'DevOps Engineer',
    company: 'Booz Allen Hamilton',
    companyUrl: 'https://www.boozallen.com/',
    description: 'Implementing DevOps practices and managing cloud infrastructure to support government and commercial clients. Working with containerization, CI/CD pipelines, and infrastructure as code to streamline application deployment and management.',
    skills: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'Terraform']
  },
  {
    date: 'Aug 2021 — Mar 2023',
    title: 'DevOps Engineer',
    company: 'Forterra (formerly RRAI)',
    companyUrl: 'https://www.forterra.com/',
    description: 'Architected and implemented cloud-based solutions using modern DevOps practices. Automated infrastructure deployment and application delivery pipelines, resulting in improved reliability and faster release cycles.',
    skills: ['Cloud Infrastructure', 'GitOps', 'Containerization', 'Automation', 'Monitoring']
  }
]

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">EXPERIENCE</h2>
      
      {experienceData.map((job, index) => (
        <a 
          key={index} 
          className="experience-item"
          href={job.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${job.title} at ${job.company} - ${job.date}`}
        >
          <div className="experience-wrapper">
            <div className="experience-date">{job.date}</div>
            <div className="experience-content">
              <div className="experience-title">
                {job.title}
                <span className="experience-company">
                  · {job.company} <span className="experience-arrow">↗</span>
                </span>
              </div>
              <p className="experience-description">{job.description}</p>
              <div className="experience-skills">
                {job.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="experience-skill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </section>
  )
}

export default Experience 
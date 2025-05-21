import React from 'react'
import './Education.css'

const educationData = [
  {
    school: 'James Madison University',
    degree: 'Bachelor of Science - BS, Integrated Science and Technology',
    date: '2017 — 2021',
    activities: 'Activities and societies: ISAT Honor Society, Sigma Phi Epsilon'
  },
  {
    school: 'Herndon High School',
    degree: 'Advanced Diploma',
    date: 'Sep 2013 — Jun 2017',
    activities: 'Activities and societies: Men\'s Varsity Lacrosse Captain'
  }
]

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="education-heading">EDUCATION</h2>
      
      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-wrapper">
            <div className="education-date">{edu.date}</div>
            <div className="education-content">
              <div className="education-school">{edu.school}</div>
              <div className="education-degree">{edu.degree}</div>
              <div className="education-activities">{edu.activities}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Education 
import React from 'react'
import './Projects.css'

const projectsData = [
//  { title: 'AI Templates', url: 'https://github.com/bestisblessed/ai-templates', description: 'Various templates for different use cases of the OpenAI API (mostly assistants) designed to help beginners get started. A collection of boilerplate code and examples to accelerate AI application development.', skills: ['OpenAI API', 'Python', 'AI', 'Templates'] },
//  { title: 'AI Local Builds', url: 'https://github.com/bestisblessed/ai-local-builds', description: 'Python-based examples showcasing different LLM frameworks (Ollama, LangChain, Open Interpreter) with agent workflows and tool integrations.', skills: ['Python', 'Ollama', 'Langchain', 'Open Interpreter'] },
//  { title: 'Deepseek', url: 'https://github.com/bestisblessed/deepseek', description: 'Python scripts demonstrating Deepseek API interactions for streaming embeddings and data processing with pandas.', skills: ['Python', 'Deepseek API', 'Pandas'] },
  { title: 'The Fight Predictor Agent', url: 'https://github.com/bestisblessed/the-fight-predictor-agent', description: 'Automated AI agent designed for professional fight analysis. Currently deployed on Twitter, this bot analyzes upcoming fights, fighter statistics, and provides predictive insights for the fighting community.', skills: ['Python', 'AI', 'Twitter API', 'Machine Learning'] },
  { title: 'MMA-AI', url: 'https://mma-ai.streamlit.app/', description: 'UFC/MMA data analysis platform with AI report generation and fight prediction capabilities. Built for advanced sports handicappers to analyze fighter statistics, matchup histories, and generate predictive insights.', skills: ['Python', 'Streamlit', 'AI', 'Data Analysis', 'Jupyter Notebook'] },
  { title: 'MMA-AI Swift App', url: 'https://github.com/bestisblessed/mma-ai-swift-app', description: 'SwiftUI-based iOS application providing AI-driven MMA statistics and fight predictions, backed by a Flask/Python API.', skills: ['Swift', 'SwiftUI', 'Flask', 'Python'] },
  { title: 'MLB-AI', url: 'https://github.com/bestisblessed/mlb-ai', description: 'Streamlit app for MLB data analysis and prediction, featuring interactive visualizations, machine learning insights, and comprehensive statistical breakdowns for baseball enthusiasts.', skills: ['Python', 'Streamlit', 'AI', 'Data Analysis'] },
  { title: 'NFL-AI', url: 'https://nfl-ai.streamlit.app/', description: 'NFL data analysis website designed for advanced sports handicappers. Features interactive visualization tools, AI-driven insights, and comprehensive statistical analysis to help users make more informed decisions.', skills: ['Python', 'Streamlit', 'AI', 'Data Analysis', 'Jupyter Notebook'] },
  { title: 'Odds Monitoring', url: 'https://github.com/bestisblessed/odds-monitoring', description: 'Odds monitoring scripts for NFL, NCAAF, UFC, and more from various books designed to run in cron jobs throughout the day. These tools help track betting lines and identify value opportunities across different markets.', skills: ['Python', 'Jupyter Notebook', 'Data Scraping', 'Cron Jobs'] },
  { title: 'Trading Bots (Public)', url: 'https://github.com/bestisblessed/trading-bots-public', description: 'Collection of Solana and Base chain scripts for building trading bots. These tools provide the building blocks for automated cryptocurrency trading systems with various strategies and risk management techniques.', skills: ['Shell', 'Blockchain', 'Solana', 'Base', 'Trading'] },
//  { title: 'Trading Bots (Private)', url: 'https://github.com/bestisblessed/trading-bots-private', description: 'Robust production-grade trading bots for automated cryptocurrency strategies on Solana and Base chains, including risk management and performance monitoring.', skills: ['Shell', 'Blockchain'] },
  { title: 'Oil AI Dashboard', url: 'https://github.com/bestisblessed/oil-ai-dashboard', description: 'Streamlit-based dashboard for oil & gas analytics, featuring interactive charts, machine learning forecasts, and geospatial data visualizations for industry insights.', skills: ['Python', 'Streamlit'] }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">PROJECTS</h2>
      
      {projectsData.map((project, index) => (
        <a 
          key={index} 
          className="project-item"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} - ${project.description}`}
        >
          <div className="project-content">
            <div className="project-title">
              {project.title}
              <span className="project-link">
                <span className="project-arrow">↗</span>
              </span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-skills">
              {project.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="project-skill">{skill}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </section>
  )
}

export default Projects 
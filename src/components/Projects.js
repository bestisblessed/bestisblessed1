import React from 'react'
import './Projects.css'
import mmaAiImage from '../images/mma-ai.png'
import mmaAiSwiftImage from '../images/mma-ai-swift-final2.png'
import oddsMonitoringImage from '../images/odds-monitoring.png'
import theFightAgentImage from '../images/the-fight-agent.png'
import mlbAiImage from '../images/mlb-ai.png'
import nflAiImage from '../images/nfl-ai.png'
import oilAiImage from '../images/oil-ai.png'
import tradingBotImage from '../images/trading-bot-1.png'
import aiTemplatesImage from '../images/ai-templates.png'
import ollamaImage from '../images/ollama.png'

const projectsData = [
  { title: 'MMA-AI Swift App', url: 'https://apps.apple.com/us/app/mma-ai/id6743686924', description: 'SwiftUI-based iOS application providing AI-driven MMA statistics and fight predictions, backed by a Flask/Python API.', skills: ['XCode', 'SwiftUI', 'iOS', 'Flask'], image: mmaAiSwiftImage },
  { title: 'AI Templates', url: 'https://github.com/bestisblessed/ai-templates', description: 'Various templates for different use cases of the OpenAI API (mostly assistants) designed to help beginners get started. A collection of boilerplate code and examples to accelerate AI application development.', skills: ['AI', 'OpenAI API', 'Assistants', 'Agents'], image: aiTemplatesImage },
  { title: 'AI Local Builds', url: 'https://github.com/bestisblessed/ai-local-builds', description: 'Python-based examples showcasing different LLM frameworks (Ollama, LangChain, Open Interpreter) with agent workflows and tool integrations.', skills: ['AI', 'Ollama', 'Langchain', 'Open Interpreter', 'Deepseek', 'CrewAI'], image: ollamaImage },
  { title: 'MMA-AI', url: 'https://mma-ai.streamlit.app/', description: 'UFC/MMA data analysis platform with AI report generation and fight prediction capabilities. Built for advanced sports handicappers to analyze fighter statistics, matchup histories, and generate predictive insights.', skills: ['AI', 'Data Analysis', 'Machine Learning', 'Streamlit'], image: mmaAiImage },
  { title: 'The Fight Prediction Agent', url: 'https://x.com/TheFightAgent', description: 'Automated AI agent designed for professional fight analysis. Currently deployed on Twitter, this bot analyzes upcoming fights, fighter statistics, and provides predictive insights for the fighting community.', skills: ['AI', 'Agents', 'Twitter API'], image: theFightAgentImage },
  { title: 'MLB-AI', url: 'https://mlb-ai.streamlit.app/', description: 'MLB data analysis and prediction app featuring interactive visualizations, machine learning insights, and comprehensive statistical breakdowns for baseball enthusiasts.', skills: ['AI', 'Data Analysis', 'Streamlit'], image: mlbAiImage },
  { title: 'NFL-AI', url: 'https://nfl-ai.streamlit.app/', description: 'NFL data analysis website designed for advanced sports handicappers. Features interactive visualization tools, AI-driven insights, and comprehensive statistical analysis to help users make more informed decisions.', skills: ['AI', 'Data Analysis', 'Streamlit'], image: nflAiImage },
  { title: 'Odds Monitoring', url: 'https://github.com/bestisblessed/odds-monitoring', description: 'Odds monitoring scripts for NFL, NCAAF, UFC, and more from various books designed to run in cron jobs throughout the day. These tools help track betting lines and identify value opportunities across different markets.', skills: ['Data Analysis', 'Data Monitoring & Alerts'], image: oddsMonitoringImage },
  { title: 'Trading Bots (Public)', url: 'https://github.com/bestisblessed/trading-bots-public', description: 'Collection of Solana and Base chain scripts for building trading bots. These tools provide the building blocks for automated cryptocurrency trading systems with various strategies and risk management techniques.', skills: ['Trading Algorithms', 'Bots', 'Blockchain', 'Solana', 'BASE'], image: tradingBotImage },
//  { title: 'Trading Bots (Private)', url: 'https://github.com/bestisblessed/trading-bots-private', description: 'Robust production-grade trading bots for automated cryptocurrency strategies on Solana and Base chains, including risk management and performance monitoring.', skills: ['Shell', 'Blockchain'] },
  { title: 'Oil AI Dashboard', url: 'https://oil-ai-dashboard.streamlit.app/', description: 'Streamlit-based dashboard for oil & gas analytics, featuring interactive charts, machine learning forecasts, and geospatial data visualizations for industry insights.', skills: ['AI', 'Data Analysis', 'Streamlit'], image: oilAiImage },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading style10">PROJECTS</h2>
      
      {projectsData.map((project, index) => (
        <a 
          key={index} 
          className="project-item"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} - ${project.description}`}
        >
          <div className="project-layout">
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
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="project-image" 
                loading="lazy"
              />
            </div>
          </div>
        </a>
      ))}
    </section>
  )
}

export default Projects
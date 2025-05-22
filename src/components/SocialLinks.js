import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaFacebook } from 'react-icons/fa'
//FaYoutube

const styles = {
  socialLinks: {
    display: 'flex',
    gap: '20px',
    marginTop: 'auto',
    marginBottom: '0px',
    marginLeft: '50px'
  },
  socialIcon: {
    color: '#a8b2d1',
    fontSize: '24px',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '20px'
  },
  socialIconHover: {
    color: '#64ffda'
  },
  emailIcon: {
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease-in-out'
  },
  emailIconHover: {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-2px)'
  },
  socialLink: {
    textDecoration: 'none',
    cursor: 'pointer'
  }
}

// Social links
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/bestisblessed', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tyler-durette-43b54317a/', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:tyler.durette@gmail.com', icon: 'email' },
  { name: 'Instagram', url: 'https://www.instagram.com/tylerdurette1/#', icon: 'instagram' },
  { name: 'Facebook', url: 'https://www.facebook.com/tyler.durette', icon: 'facebook' },
  // { name: 'YouTube', url: 'https://www.youtube.com/@drty6818', icon: 'youtube' }
]

const SocialIcon = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const iconStyle = {
    ...styles.socialIcon,
    ...(isHovered ? styles.socialIconHover : {}),
    ...(name === 'email' ? styles.emailIcon : {}),
    ...(name === 'email' && isHovered ? styles.emailIconHover : {})
  }

  return (
    <span 
      style={iconStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-hidden="true"
    >
      {name === 'github' && <FaGithub />}
      {name === 'linkedin' && <FaLinkedin />}
      {name === 'instagram' && <FaInstagram />}
      {name === 'facebook' && <FaFacebook />}
      {/*{name === 'youtube' && <FaYoutube />}*/}
      {name === 'email' && <FaEnvelope />}
    </span>
  )
}

const SocialLinks = () => {
  return (
    <footer style={styles.socialLinks}>
      {socialLinks.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          style={styles.socialLink}
          className="interactive-element"
          target={link.icon !== 'email' ? '_blank' : undefined}
          rel={link.icon !== 'email' ? 'noopener noreferrer' : undefined}
          aria-label={link.name}
        >
          <SocialIcon name={link.icon} />
        </a>
      ))}
    </footer>
  )
}

export default SocialLinks 
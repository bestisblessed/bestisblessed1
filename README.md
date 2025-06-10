# MY WEBSITE

***Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Gatsby.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.***


## Main Directories

- **src/**: Contains all the source code for the website
  - **components/**: Reusable React components
  - **pages/**: Page components that Gatsby turns into actual pages
  - **images/**: Static images used in the website

## Key Files

### Configuration Files

- **gatsby-config.js**: Main configuration file for Gatsby
- **package.json**: NPM dependencies and scripts

### Page Files

- **src/pages/index.js**: Main entry point for the website
  - Sets up the two-column layout
  - Imports and renders all components
  - Change this file to modify the overall structure

- **src/pages/global.css**: Global CSS styles
  - Contains layout settings (column sizes, spacing)
  - Sets global typography, colors and responsive breakpoints
  - Edit this file to change layout dimensions, colors, or spacing

### Component Files

- **src/components/Header.js**: The left column header
  - Your name, title, and introduction
  - Navigation menu items
  - Edit this to change your personal info and navigation

- **src/components/About.js**: About section content
  - Personal bio and description
  - Current role and background
  - Edit to update your personal information

- **src/components/Experience.js**: Work experience section
  - Job history with dates, titles, and descriptions
  - Contains the `experienceData` array to easily edit work history
  - Modify this array to update your job experiences

- **src/components/Projects.js**: Projects showcase
  - Featured projects with descriptions
  - Contains the `projectsData` array
  - Edit this array to showcase different projects

- **src/components/SocialLinks.js**: Social media links
  - Social platform links in the footer
  - Contains the `socialLinks` array
  - Update this array to change your social profiles

## Common Tweaks

### Layout Adjustments

- To change column widths or spacing:
  - Edit `src/pages/global.css`
  - Look for `.container`, `.left-column`, and `.right-column`

### Color Scheme

- The main colors are defined in various CSS files:
  - Background color: `#0a192f` (dark blue)
  - Text color: `#e6f1ff` (light blue/white)
  - Accent color: `#64ffda` (teal)
  - Secondary text: `#8892b0` (light gray/blue)

### Content

- To update personal information:
  - Header.js: Name, title, short intro
  - About.js: Detailed bio and background
  - Experience.js: Work history
  - Projects.js: Portfolio projects

### Responsive Behavior

- Mobile breakpoints are at 1080px, 768px, and 480px
- Modify the media queries in global.css to change responsive behavior 
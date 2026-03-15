
import { useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {
  const [projects] = useState([
    { id: 1, name: 'AI Code Assistant', description: 'AI-powered code completion tool', stars: 45, forks: 12, issues: 3 },
    { id: 2, name: 'DevCollab Platform', description: 'Main collaboration platform', stars: 89, forks: 23, issues: 7 },
    { id: 3, name: 'React Components', description: 'Reusable UI components library', stars: 34, forks: 8, issues: 2 }
  ])

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>Projects</h1>
        <button className="btn-primary">New Project</button>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
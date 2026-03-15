
import { Link } from 'react-router-dom'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-meta">
        <span>⭐ {project.stars}</span>
        <span>🔄 {project.forks}</span>
        <span>🐛 {project.issues}</span>
      </div>
      <Link to={`/projects/${project.id}`} className="card-link">
        View Details →
      </Link>
    </div>
  )
}

export default ProjectCard
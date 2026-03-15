
import { useParams } from 'react-router-dom'
import './ProjectDetails.css'

const ProjectDetails = () => {
  const { id } = useParams()

  return (
    <div className="project-details">
      <h1>Project Details - {id}</h1>
      
      <div className="details-grid">
        <div className="details-main">
          <div className="readme">
            <h3>README.md</h3>
            <p>Project documentation goes here...</p>
          </div>
        </div>
        
        <div className="details-sidebar">
          <div className="info-card">
            <h4>About</h4>
            <p>Created: 2 days ago</p>
            <p>Last updated: 1 hour ago</p>
            <p>Language: JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
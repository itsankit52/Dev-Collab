
import './Dashboard.css'

const Dashboard = () => {
  const stats = [
    { label: 'Projects', value: '12' },
    { label: 'Contributions', value: '234' },
    { label: 'AI Sessions', value: '45' },
    { label: 'Team Members', value: '8' }
  ]

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        {stats.map(stat => (
          <div key={stat.label} className="stat-card">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <span>📁</span>
            <div>
              <p>Updated project "AI Assistant"</p>
              <small>2 hours ago</small>
            </div>
          </div>
          <div className="activity-item">
            <span>🤖</span>
            <div>
              <p>AI code review completed</p>
              <small>5 hours ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
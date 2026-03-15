

import './Profile.css'

const Profile = () => {
  const user = {
    name: 'Ankit Thakur',
    email: 'john@example.com',
    role: 'Full-Stack Developer',
    joinDate: 'March 2026'
  }

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-avatar">
          <span>👤</span>
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.role}</p>
          <p>Joined: {user.joinDate}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <h3>15</h3>
          <p>Projects</p>
        </div>
        <div className="stat">
          <h3>234</h3>
          <p>Contributions</p>
        </div>
        <div className="stat">
          <h3>8</h3>
          <p>Teams</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
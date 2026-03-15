
import { useState } from 'react'
import './Settings.css'

const Settings = () => {
  const [notifications, setNotifications] = useState(true)
  const [theme, setTheme] = useState('light')

  return (
    <div className="settings">
      <h1>Settings</h1>
      
      <div className="settings-section">
        <h3>Profile Settings</h3>
        <div className="settings-item">
          <label>Display Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="settings-item">
          <label>Bio</label>
          <textarea placeholder="Tell us about yourself"></textarea>
        </div>
      </div>

      <div className="settings-section">
        <h3>Preferences</h3>
        <div className="settings-item">
          <label>Theme</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
        <div className="settings-item">
          <label>
            <input 
              type="checkbox" 
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            Enable notifications
          </label>
        </div>
      </div>

      <button className="btn-primary">Save Changes</button>
    </div>
  )
}

export default Settings
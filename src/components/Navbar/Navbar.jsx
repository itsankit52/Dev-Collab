import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import logo from './Logo_AT.png'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="nav-logo">
          <img src={logo} alt="DevCollab" />
          <p><span>Dev</span>Collab</p>
        </Link>

        {/* MENU BUTTON */}
        <div 
          className={`menu-toggle ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/projects">Projects</Link>
          {/* <Link to="/ai-chat">AI Chat</Link> */}
          <Link to="/login">Login</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
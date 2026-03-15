import { Link } from 'react-router-dom'
import './Landing.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import heroBg from './hero-bg.png'

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />

      <main className="landing-main">
        <div className="container">

          <div className="landing-left">
            <h1>Welcome to DevCollab</h1>

            <p className="subtitle">
              Connect with developers, share ideas, and build amazing projects together.            </p>

            <div className="cta-buttons">
              <Link to="/signup" className="btn-primary btn-large">
                Login
              </Link>

              <Link to="/login" className="btn-secondary btn-large">
                Sign In
              </Link>
            </div>
          </div>

          <div className="landing-right">
            <img src={heroBg} alt="Bg Image" />
          </div>

        </div>
      </main>
      <main className="landing-main">
        <div className="container">

          <div className="landing-left">
            <h1>Welcome to DevCollab</h1>

            <p className="subtitle">
              Connect with developers, share ideas, and build amazing projects together.            </p>

            <div className="cta-buttons">
              <Link to="/signup" className="btn-primary btn-large">
                Login
              </Link>

              <Link to="/login" className="btn-secondary btn-large">
                Sign In
              </Link>
            </div>
          </div>

          <div className="landing-right">
            <img src={heroBg} alt="Bg Image" />
          </div>

        </div>
      </main>
      <main className="landing-main">
        <div className="container">

          <div className="landing-left">
            <h1>Welcome to DevCollab</h1>

            <p className="subtitle">
              Connect with developers, share ideas, and build amazing projects together.            </p>

            <div className="cta-buttons">
              <Link to="/signup" className="btn-primary btn-large">
                Login
              </Link>

              <Link to="/login" className="btn-secondary btn-large">
                Sign In
              </Link>
            </div>
          </div>

          <div className="landing-right">
            <img src={heroBg} alt="Bg Image" />
          </div>

        </div>
      </main>
      <main className="landing-main">
        <div className="container">

          <div className="landing-left">
            <h1>Welcome to DevCollab</h1>

            <p className="subtitle">
              Connect with developers, share ideas, and build amazing projects together. </p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn-primary btn-large">
                Login
              </Link>

              <Link to="/login" className="btn-secondary btn-large">
                Sign In
              </Link>
            </div>
          </div>

          <div className="landing-right">
            <img src={heroBg} alt="Bg Image" />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Landing
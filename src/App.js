import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import logoImg from './assets/Culture Club Logo(Final).svg'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
      <nav>
        <Link style={{marginLeft: "50px"}} to="/">Culture Club</Link>
        <Link to="/"><img id="logoImg" src={logoImg} /></Link>
        <Link style={{marginRight: "50px"}} to="/">Products</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
      <footer>
        <ul>
          <li></li>
          <li>@2018 CultureClub</li>
          <li className="footer-socials-li">
            <img className="social-svg" src="https://image.flaticon.com/icons/svg/33/33702.svg" />
            <img className="social-svg" src="https://image.flaticon.com/icons/svg/69/69366.svg" />
          </li>
        </ul>
      </footer>
    </div>
  </Router>
)

export default hot(module)(App)

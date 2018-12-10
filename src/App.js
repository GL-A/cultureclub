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
        <Link to="/">Culture Club</Link>
        <Link to="/"><img id="logoImg" src={logoImg} /></Link>
        <Link to="/about">Products</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
      <footer>
        <ul>
          <li></li>
          <li>@2018 CultureClub</li>
          <li className="footer-socials-li">
            <img className="social-svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png" />
            <img className="social-svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2000px-Instagram_logo_2016.svg.png" />
          </li>
        </ul>
      </footer>
    </div>
  </Router>
)

export default hot(module)(App)

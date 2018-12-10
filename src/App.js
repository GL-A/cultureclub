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
    </div>
  </Router>
)

export default hot(module)(App)

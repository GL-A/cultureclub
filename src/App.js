import React, { Component } from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import logoImg from './assets/Culture Club Logo(Final).svg'
import basket from './assets/laundry-basket-svgrepo-com.svg'

//
import Routes from 'react-static-routes'

import './app.css'

class App extends Component {
  state = {
    showLogo: false
  }
  componentDidMount() {
    if(window.location.pathname !== '/'){
      this.showLogo()
    }
    window.addEventListener('scroll', this.onScroll)
  }
  componentDidUnMount() {
    window.removeEvenListener('scroll', this.onScroll)
  }
  showLogo = () => {
    this.setState({showLogo: true})
  }
  hideLogo = () => {
    this.setState({showLogo: false})
  }
  onScroll = () => {
    if(window.location.pathname == '/'){
      const content = document.getElementById('home-jumbotron').getBoundingClientRect().bottom - 50
      if(content < 0) {
        this.showLogo()
      } else {
        this.hideLogo()
      }
    } else {
      this.showLogo()
    }
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div>
              <Link  to="/">Culture Club</Link>
            </div>
            <div>
              { this.state.showLogo &&
                <Link to="/"><img id="logoImg" src={logoImg} /></Link>
              }

            </div>
            <div style={{ position: 'relative' }}>
              <img 
                href="#" 
                className="snipcart-checkout" 
                style={{ width: '30px' }} src={basket}></img>
              <div style={{ color: '#A50F15' }} className="snipcart-summary items-inbag">
                <span className="snipcart-total-items"></span>
              </div>
            </div>
          </nav>
          <div id="content" className="content">
            <Routes hideLogo={this.hideLogo} showLogo={this.showLogo} />
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
  }
}

export default hot(module)(App)

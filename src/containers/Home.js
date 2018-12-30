import React, { Component } from 'react'
import { withSiteData, withRouteData, Link } from 'react-static'
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

//
import Products from './Products'
import logoImg from '../assets/Culture Club Logo(Final).svg'
import img1 from '../assets/Carnaval-Tlaxcala-2017-3.jpg'
import img2 from '../assets/tlaxcala.jpg'
import img3 from '../assets/sedivision.jpg'

import '../styles/home.css'
const product3 = "https://s7d9.scene7.com/is/image/LuckyBrandJeans/7M12805_420_2?$productThumbDesktopRetina$"
const text = "what makes this brand grow and what it feeds off of is the passion for international music, fashion and arts to show that culture has no limits or boundries."
const sedivision = 'Culture Club grew up in to less known area of the S.E Portland. From seeing the diverse urban culture the S.E is one of many branches that have grown in this company. What has and forever will motivate this brand is the struggle to success. '
const wierdHatguyText = "The roots and forever the heart to this company are born Tlaxcala,MX. With living the everyday influences of the indigenous community ways of life from culture, language, history, identity, and very unique attire"

class JumboSection extends Component{
  state = {
    hovered: false
  }
  render() {
    const hovered = this.state.hovered
    return (
      <div
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
        className="home-jumbo-inner" style={{backgroundImage: `url(${this.props.img})`}}>
          {this.props.svg && <img style={{width: '80%', position: 'absolute' }} src={this.props.img}/>}
          <div
            className={ hovered ? "home-jumbo-hovered show" : "home-jumbo-hovered" }>
          </div>
          <p style={ hovered ? {} : {display: 'none'}}>{this.props.text}</p>
        </div>
    )
  }
}
class Home extends Component{
  scrollTo = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {
    return (
      <div>
        <section id="home-jumbotron" className="home-jumbotron">
          <JumboSection text={wierdHatguyText} img={img2} />
          <JumboSection svg={true} text={text} img={logoImg}>
            <img
              style={{width: '100%', position: 'absolute', left: '-5%', top: '5%' }}
              src={logoImg} />
          </JumboSection>
          <JumboSection text={sedivision} img={img3} />
        </section>
        <section className="home-featured">
          <div className="home-featured-header">
            <h3>Featured Products</h3>
          </div>
          <Products products={this.props.shirts}/>
        </section>
      </div>
    )
  }
}

export default withRouteData(Home)

import React, { Component } from 'react'
import { withSiteData, withRouteData, Link } from 'react-static'
//
import Products from './Products'
import logoImg from '../assets/Culture Club Logo(Final).svg'
import img1 from '../assets/Carnaval-Tlaxcala-2017-3.jpg'
import img2 from '../assets/tlaxcala.jpg'
import img3 from '../assets/sedivision.jpg'

import '../styles/home.css'
const product3 = "https://s7d9.scene7.com/is/image/LuckyBrandJeans/7M12805_420_2?$productThumbDesktopRetina$"
const text = "The brand feeds of and what makes it grow, is  the passion for the international arts from music art, and fashion. To show that culture has no limits, and no limits. Culture Club is more than a tag on a shirt but a map on a canvass."
class JumboSection extends Component{
  state = {
    hovered: false
  }
  render() {
    const hovered = this.state.hovered
    console.log('this.state', hovered);
    return (
      <div
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
        className="home-jumbo-inner" style={{backgroundImage: `url(${this.props.img})`}}
        >
          <div
            className={ hovered ? "home-jumbo-hovered show" : "home-jumbo-hovered" }
            >

            </div>
            <p style={ hovered ? {} : {display: 'none'}}>{this.props.text}</p>
        </div>
    )
  }
}
class Home extends Component{
  render() {
    return (
      <div>
        <section className="home-jumbotron">
          <JumboSection text={text} img={img2} />
          <div className="home-jumbo-inner" style={{ position: 'relative' }} >
            <img
              style={{width: '100%', position: 'absolute', left: '-5%', top: '5%' }}
              src={logoImg} />
          </div>
          <JumboSection text={text} img={img3} />
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

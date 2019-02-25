import React, { Component } from 'react'
import { withRouteData, Link } from 'react-static'
import Products from './Products'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import '../styles/product.css'
//

class Product extends Component {
  state = {
    size: 's',
    small: 0,
    medium: 0,
    large: 0,
    xLarge: 0
  }
  changeSize = (s) => {
    this.setState({size: s})
  }
  componentDidMount() {
    console.log('we testing', "https://cultureclub.netlify.com"+ this.props.route)
    const { small, medium, large } = this.props.shirt.data
    console.log('sizes', small, medium, large)
  }
  render() {

    const shirt = this.props.shirt
    const shirts = this.props.shirts
    return (
      <div className="product">
        <div className="product-jumbotron">
          <div className="product-images">
            <ul className="product-thumbs-ul">
              {
                Object.keys(shirt.data).map((key, idx) => {
                  if(key.includes('thumbnail')){
                    return <li
                      style={{backgroundImage: `url(${shirt.data[key]})`}}
                      className="product-thumb" key={idx}>
                    </li>
                  }
                })
              }
            </ul>
          </div>
          <div className="product-desc-container">
            <div>
              <h3>{shirt.data.title}</h3>
              <h3>${shirt.data.price}</h3>
              <p>{shirt.content}</p>
              <div className="product-desc-size">
                <h3>Size</h3>
                <ul>
                  {['S', 'M', 'L'].map((size,idx) => {
                    return (
                      <li
                        key={idx}
                        style={{ background: size === this.state.size ? '#F95639' : ''}}
                        onClick={() => this.changeSize(size)}>
                        {size}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <a
              href='#'
              className="snipcart-add-item"
              data-item-id={shirt.data.slug}
              data-item-name={shirt.data.title + ' ' + this.state.size}
              data-item-price={`${shirt.data.price.toString()}`}
              data-item-weight="20"
              data-item-url={"https://cultureclub.netlify.com"+ this.props.route}
              data-item-custom2-name="Size"
              data-item-custom2-options="Small|Medium|Large"
              data-item-custom3-name="Color"
              data-item-custom3-options="White|Black|Blue"
              data-item-description={shirt.data.content}
              >
                Add To Bag
            </a>

          </div>
        </div>
        <div className="home-featured-header">
          <h3>Featured Products</h3>
        </div>
        <Products size="m" products={shirts} />

      </div>
    )
  }
}

export default withRouteData(Product)

import React from 'react'
import { withRouteData, Link } from 'react-static'
import Products from './Products'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import '../styles/product.css'
//

export default withRouteData(({ shirt, shirts }) => (
  <div className="product">
    <div className="product-jumbotron">
      <div className="product-images">
        <ul className="product-thumbs-ul">
          {shirt.productThumbs.map((thumb, idx) => {
            return <li
              style={{backgroundImage: `url(${thumb})`}}
              className="product-thumb" key={idx}>
            </li>
          })}
        </ul>
      </div>
      <div className="product-desc-container">
        <h3>{shirt.data.title}</h3>
        <h3>${shirt.data.price}</h3>
        <p>{shirt.content}</p>
      </div>
      <br />
    </div>
    <div className="home-featured-header">
      <h3>Featured Products</h3>
    </div>
    <Products products={shirts} />
  </div>
))

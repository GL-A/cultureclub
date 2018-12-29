import React from 'react'
import { withRouteData, Link } from 'react-static'
import Products from './Products'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import '../styles/product.css'
//

export default withRouteData(({ shirt, shirts, route }) => (
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
          </div>

          <button
            href='#'
            className="snipcart-add-item"
            data-item-id={shirt.data.slug}
            data-item-name={shirt.data.title}
            data-item-price={`${shirt.data.price.toString()}`}
            data-item-weight="20"
            data-item-custom2-options="Small|Medium|Large"
            data-item-custom2-value="Medium"
            data-item-url={"https://cultureclub.netlify.com/"}
            data-item-description={shirt.data.content}
            >
              Add To Bag
          </button>

        </div>
        {/* <a
          href='#'
          className="snipcart-add-item"
          data-item-id={shirt.data.slug}
          data-item-name={shirt.data.title}
          data-item-price={`${shirt.data.price.toString()}`}
          data-item-weight="20"
          data-item-custom2-options="Small|Medium|Large"
          data-item-custom2-value="Medium"
          data-item-url={"https://cultureclub.netlify.com/"}
          data-item-description={shirt.data.content}
          >
          Buy Shirt
        </a> */}
      </div>
      <div className="home-featured-header">
        <h3>Featured Products</h3>
      </div>
      <Products products={shirts} />
    </div>
  )
)

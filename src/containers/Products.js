import React from 'react'
import { Link } from 'react-static'

//

export default ({products}) => (
  <div className="home-featured-products">
    { products.map((shirt, idx) => {
      return (
        <div key={idx} className="home-featured-item">
          <Link to={`/product/${shirt.data.slug}`}>
            <img src={shirt.data.thumbnail} />
          </Link>
        </div>
      )
    })}
  </div>
)

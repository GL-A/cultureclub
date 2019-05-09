import React from 'react'
import { Link } from 'react-static'

//

export default ({products, size}) => (
  <div className="home-featured-products">
    { products && products.map((shirt, idx) => {
      return (
        <div
          style={{backgroundImage: `${shirt.data.thumbnail}`}}
          // style={{ height: size === 'm' && '210px', width: size === 'm' && '180px' }}
          key={idx} className="home-featured-item">
          <Link to={`/product/${shirt.data.slug}`}>
            {/* <img src={shirt.data.thumbnail} /> */}
            <div
              style={{

                backgroundImage: `url(${shirt.data.thumbnail})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "200px",
                width: "200px",
                // background: "green"
              }}
              >

            </div>
          </Link>
        </div>
      )
    })}
  </div>
)

import React from 'react'
import { withSiteData, withRouteData, Link } from 'react-static'
//
import Products from './Products'
import logoImg from '../assets/Culture Club Logo(Final).svg'
import img1 from '../assets/Carnaval-Tlaxcala-2017-3.jpg'
import img2 from '../assets/tlaxcala.jpg'

import '../styles/home.css'
const product3 = "https://s7d9.scene7.com/is/image/LuckyBrandJeans/7M12805_420_2?$productThumbDesktopRetina$"
export default withRouteData(({shirts}) => (
  <div>
    { console.log("posts", shirts)}
    <section className="home-jumbotron">
      <div className="home-jumbo-inner" style={{
        backgroundImage: `url(${img2})`
      }}>

      </div>
      <div className="home-jumbo-inner" style={{ position: 'relative' }} >
        <img
          style={{width: '220%', position: 'absolute', left: '-70%', top: '5%' }}
          src={logoImg} />
      </div>
      <div className="home-jumbo-inner" style={{
        backgroundImage: `url(${img2})`
      }}>
      </div>
    </section>

    <section className="home-featured">
      <div className="home-featured-header">
        <h3>Featured Products</h3>
      </div>
      {/* <div className="home-featured-products">
        { shirts.map((shirt, idx) => {
          console.log('shirt', shirt)
          return (
            <div key={idx} className="home-featured-item">
              <Link to={`/product/${shirt.data.slug}`}>
                <img src={shirt.data.thumbnail} />
              </Link>
            </div>
          )
        })}
      </div> */}
      <Products products={shirts}/>
    </section>

  </div>
))

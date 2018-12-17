import React from 'react'
import { withSiteData, withRouteData, Link } from 'react-static'
//
import logoImg from '../assets/Culture Club Logo(Final).svg'
import img1 from '../assets/Carnaval-Tlaxcala-2017-3.jpg'
import img2 from '../assets/tlaxcala.jpg'

import '../styles/home.css'
const product3 = "https://s7d9.scene7.com/is/image/LuckyBrandJeans/7M12805_420_2?$productThumbDesktopRetina$"
export default withRouteData(({posts}) => (
  <div>
    { console.log("posts", posts)}
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
      <div className="home-featured-products">
        <div className="home-featured-item">
          <Link to="/product">
            <img src="http://s7d9.scene7.com/is/image/LuckyBrandJeans/7W51176_610_1?$productMainDesktop$" />
          </Link>
        </div>
        <div className="home-featured-item">
          <Link to="/product">
            <img src="http://s7d9.scene7.com/is/image/LuckyBrandJeans/7M71709_760_1?$productMainDesktop$" />
          </Link>
        </div>
        <div className="home-featured-item">
          <Link to="/product">
            <img src="https://cdna.lystit.com/photos/6pm/b4a4579a/lucky-brand-Multi-Shearless-Fleece-Mock-Neck-Sweatshirt.jpeg" />
          </Link>
        </div>
      </div>
    </section>

  </div>
))

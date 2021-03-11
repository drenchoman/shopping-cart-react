import React from 'react'
import {Link} from 'react-router-dom'
import mons from '../images/mons.jpg'
import hero from '../images/heroImage.jpg'
import Footer from './Footer'

function AdditionalHome() {
    return (
        <div className="additionalHome">
          <h2>Portage Plants offers a wide range of indoor plants and accessories</h2>
          <div className="additionalContent">
            <div className="leftSide">


                  <Link className="additionalButton left" to="/shop">
                    Shop Now!
                  </Link>

            </div>
            <div className="rightSide">


                <Link className="additionalButton right" to="/shop">
                  Shop Now!
                </Link>


            </div>
          </div>
          <Footer />
        </div>
    )
}

export default AdditionalHome

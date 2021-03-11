import React from 'react'
import cover from "../images/cover.jpg"
import heart from "../images/heart.svg"
import { Link } from 'react-router-dom';
import AdditionalHome from "./AdditionalHome.js"

function Home() {
    return (
      <div className="homeContainer">


        <div className="landingContainer">

            <div className="welcomeTitle">
              <h1>Let's Grow Together</h1>
              <Link className="welcomeButton" to="/shop">
                Shop Now!
              </Link>
            </div>
        </div>
        <div className="otherContainer">
          <AdditionalHome />
        </div>
      </div>


    )
}

export default Home

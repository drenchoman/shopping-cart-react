import React from 'react'
import mons from "../images/mons.jpg"
import heart from "../images/heart.svg"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="homeContainer">
          <div className="welcome">
            <div className="welcomeTitle">
              <h1>Let's Grow Together</h1>
              <img className="heart" src={heart} alt="Heart"></img>
              <img className="heart2" src={heart} alt="Heart2"></img>
              <Link className="welcomeButton" to="/shop">
                Shop Now!
              </Link>

            </div>

          </div>
          <div className="heroImageContainer">
            <img className="heroImage" alt="Man holding plant" src={mons}></img>
          </div>


        </div>
    )
}

export default Home

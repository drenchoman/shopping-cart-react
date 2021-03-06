import React from 'react'
import plant from '../images/plant.jpg'
import Footer from './Footer'

function About() {
    return (
        <div className="aboutContainer">
          <div className="aboutTitle">
            <h2>~ About ~</h2>
          </div>
          <div className="aboutContent">
          <div className="aboutImage">
            <img alt="Plant" src={plant}></img>
          </div>
          <div className="aboutText">
            <p>Portage Plants began as many things do, as an idea.</p>

            <p>This idea soon sprouted (excuse the pun) and took the form of an online store.</p>

              <p>We are a two man team and hope to spread our love of plants with you all.</p>

              <p>Thanks for shopping with us, we really appreciate your support</p>

              <span className="signature">Katelyn & Oscar</span>


          </div>
          </div>
<Footer />
        </div>
    )
}

export default About

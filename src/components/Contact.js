import React from 'react'
import sunflower from '../images/sunflower.jpg'
import Footer from './Footer'

function Contact() {
    return (
        <div className="contactContainer">
          <div className="contactHeader">
            <h2>Let's get in touch!</h2>
          </div>
          <div className="contactMain">
            <div className="contactImage">
              <img src={sunflower} alt="Happy Sunflower"></img>
            </div>
            <div className="contactCopy">
              <p>Having trouble with something? Keen for a yarn? Or just want to share your plant news with someone who cares?</p>
              <p>You can email us at sayhi@portageplants.com</p>
              <p>Or maybe chuck us a follow on the 'Gram', we love to get to know our customers plus it's the best way to keep in touch with Portage Plants.</p>
            </div>

          </div>
<Footer />
        </div>
    )
}

export default Contact

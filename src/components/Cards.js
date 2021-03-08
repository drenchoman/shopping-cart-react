import React from 'react'
import {Link} from 'react-router-dom'

function Cards(props) {

    return (
        <div className="imageGrid">
          {props.images.map((image, i) =>
            <div className="plantCard" key={i}>
            <Link to={`/shop/${image.id}`}>
              <img className="plantImages" key={image.id} alt={image.alt_description} src={image.urls.small}></img>
            </Link>
              <div className="plantDetails">
                <p>{image.description}</p>
                <p>Price: $$$</p>
              </div>


            </div>)}

        </div>

    )
}

export default Cards

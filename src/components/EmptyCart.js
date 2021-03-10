import React from 'react'
import sad from '../images/sad.jpg'
import { Link } from 'react-router-dom';

function EmptyCart() {
    return (
        <div className="emptyCart">
          <h3 className="emptyCartTitle">Your cart is empty</h3>
          <img className="emptyCartImage" src={sad} alt="Sad Pug wrapped in blankets"></img>
          <Link className="welcomeButton" to="/shop">
            Shop Now!
          </Link>
        </div>
    )
}

export default EmptyCart

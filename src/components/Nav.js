import React from 'react';
import { Link } from 'react-router-dom';
import cart from "../images/cart.svg";


function Nav() {
    return (
        <nav className="navBar">
          <div className="logo">
            <Link to="/">
            <h3>Portage Plants</h3>
            </Link>
          </div>
          <ul className="navLinks">
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/shop">
              <li>Shop</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <li className="cart"><img  src={cart} alt="cart"></img></li>

          </ul>
        </nav>

    )
}

export default Nav

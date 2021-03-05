import React from 'react';
import { Link } from 'react-router-dom';


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

          </ul>
        </nav>

    )
}

export default Nav

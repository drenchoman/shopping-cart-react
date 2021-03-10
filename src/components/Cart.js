import React, {useState, useEffect} from 'react'
import EmptyCart from './EmptyCart'

function Cart(props) {

if (props.cartCount === 0){
  return <EmptyCart />

} else{
  return (
    <div className="cartContainer">
    <h3 className="fullCart">My Shopping Cart</h3>
    <div className="cartItems">
      {props.cartItems.map((item, i) =>
        <div key={i} className="cartCard">
          <img alt="Cart item" className="cartImage" src={item.image}></img>
          <h3>{item.title}</h3>
          <span>${item.price}</span>
          <div className="cartQty">
            <button>-</button>
            <span>{item.qty}</span>
            <button>+</button>
          </div>
        </div>

    )}


    </div>
    <div className="cartTotal">
      <h3>Total: <span>${props.cartTotal}</span></h3>
      <button>Checkout</button>
    </div>
    </div>


  )

}


}

export default Cart

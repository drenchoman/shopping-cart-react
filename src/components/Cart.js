import React, {useEffect} from 'react'
import EmptyCart from './EmptyCart'

function Cart(props) {

const thanks = () =>{
  alert(`Thanks for your purchase. You bought ${props.cartCount} items for $${props.cartTotal}.`)
}

  useEffect(()=>{
    props.getTotal();
  })

if (props.cartCount === 0){
  return <EmptyCart />

} else{
  return (
    <div className="cartContainer">
    <h3 className="fullCart">My Shopping Cart</h3>
    <div className="cartItems">
      {props.cartItems.map((item, i) =>
        <div key={i} className="cartCard">
          <img alt="Cart item" className="cartImage" src={item.src}></img>
          <h3>{item.title}</h3>
          <span>${item.price}</span>
          <div className="cartQty">
            <div className="cartButtons">
              <button onClick={()=>props.changeQty(item.id, -1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={()=> props.changeQty(item.id, 1)}>+</button>
            </div>

            <span className="deleteCart" onClick={()=> props.removeItem(item.id)}>Remove</span>
          </div>
        </div>

    )}


    </div>
    <div className="cartTotal">
      <h3>Total: <span>${props.cartTotal}</span></h3>
      <button onClick={thanks} className="cartCheckoutButton">Checkout</button>
    </div>
  </div>


  )

}


}

export default Cart

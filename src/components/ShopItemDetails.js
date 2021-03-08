import React, {useEffect, useState} from 'react'
import Cart from './Cart'

function ShopItemDetails(props) {


  useEffect(()=>{

  }, [])

  return(
    <div className="shopItem">
      <div className="shopItemDiv">
        <h3 className="shopItemHeader">{props.desc}</h3>
        <img alt="poop" src={props.image}></img>
      </div>

    <div className="shopItemPricing">
      <span>${props.price}</span>
      <button onClick={()=>props.grabCartItems(props.desc, props.price)}>Add to Cart</button>
      <p>A very lovely plant, perfect for every home.</p>


    </div>

    </div>
  )

}










export default ShopItemDetails

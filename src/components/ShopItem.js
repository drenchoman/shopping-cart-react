import React, {useEffect, useState} from 'react'
import p1 from '../images/1.jpg'
import p2 from '../images/2.jpg'
import p3 from '../images/3.jpg'
import p4 from '../images/4.jpg'
import p5 from '../images/5.jpg'
import p6 from '../images/6.jpg'
import p7 from '../images/7.jpg'
import p8 from '../images/8.jpg'

function ShopItem(props) {

const [shopItem, setShopItem]= useState({})

const findItem = () => {
  const result = shopItems.find(x => x.id === parseInt(props.match.params.id))
  setShopItem(result)
  console.log(shopItem)
}

const shopItems = [{
  id: 0,
  src: p1,
  title: "Something",
  price: 60,
  description: "This stunning plant will make you smile"

},
{
  id: 1,
  src: p2,
  title: "Pretty plant",
  price: 25,
  description: "This stunning plant will make you smile"
},
{
  id: 2,
  src: p3,
  title: "Pretty plant",
  price: 80,
  description: "This stunning plant will make you smile"
},
{
  id: 3,
  src: p4,
  title: "Pretty plant",
  price: 10,
  description: "This stunning plant will make you smile"
},
{
  id: 4,
  src: p5,
  title: "Pretty plant",
  price: 20,
  description: "This stunning plant will make you smile"
},
{
  id: 5,
  src: p6,
  title: "Pretty plant",
  price: 30,
  description: "This stunning plant will make you smile"
},
{
  id: 6,
  src: p7,
  title: "Pretty plant",
  price: 80,
  description: "This stunning plant will make you smile"
},
{
  id: 7,
  src: p8,
  title: "Pretty plant",
  price: 20,
  description: "This stunning plant will make you smile"
},

]

useEffect(()=>{
  findItem();
  console.log(props)
}, [])


    return(
      <div className="itemContainer">
        <div className="shopItem">
          <div className="shopItemDiv">
            <h3 className="shopItemHeader">{shopItem.title}</h3>
            <img alt="poop" src={shopItem.src}></img>
          </div>

        <div className="shopItemPricing">
          <span>${shopItem.price}</span>
          <button onClick={()=>props.addToCart({
            id: shopItem.id,
            title: shopItem.title,
            image: shopItem.src,
            price: shopItem.price,
            qty: 1,
          })}>Add to Cart</button>
          <p>{shopItem.description}</p>


        </div>

        </div>
      </div>


    )




}

export default ShopItem

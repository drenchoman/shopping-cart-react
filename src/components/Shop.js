import React, {useState, useEffect} from 'react'
import Cards from "./Cards.js";
import p1 from '../images/1.jpg'
import p2 from '../images/2.jpg'
import p3 from '../images/3.jpg'
import p4 from '../images/4.jpg'
import p5 from '../images/5.jpg'
import p6 from '../images/6.jpg'
import p7 from '../images/7.jpg'
import p8 from '../images/8.jpg'

function Shop(props) {

const [plantImages, setPlantImages] = useState([])


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



useEffect(() => {
  setPlantImages(shopItems)

}, []);


    return (
        <div className="shopContainer">
          <div className="productsNavigation">
            <h3 className="navHeader">All Products</h3>
            <div className="navSelector">
              <ul className="navTitles">
                <li>Plants</li>

              </ul>
            </div>
          </div>
          <div>
            <div className="shopItemsContainer">
                <Cards images={plantImages} />






            </div>
          </div>
        </div>
    )
}

export default Shop

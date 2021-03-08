import React, {useState, useEffect} from 'react'
import { createApi } from 'unsplash-js'
import Cards from "./Cards.js"

const unsplash = createApi({
  accessKey: '7ijk06Kuh2JSMjuxrQQcP11YYuJNiMPf7o6yWJ3rgsQ',

});

function Shop(props) {

const [plantImages, setPlantImages] = useState([])
const [initialSearch, setInitialSearch] =useState('Indoor Plant')


const getPlantImages = (url) => {
console.log(url)
setPlantImages(url)
console.log(plantImages)
}

const getCards = (query) => {
  setInitialSearch(query)
}



const getImages = (query) =>{
  unsplash.search.getPhotos({
    'query': query,
    'page': 1,
    'perPage': 16,
    'orientation': 'portrait',
  })
  .then(result => {
      if(result.err){
        console.log("error occured:", result.err[0]);
      } else {
        const photo = result.response.results
        console.log(photo)
        getPlantImages(photo)

      }
    })
}

useEffect(() => {
  getImages(initialSearch)

}, [initialSearch]);







    return (
        <div className="shopContainer">
          <div className="productsNavigation">
            <h3 className="navHeader">All Products</h3>
            <div className="navSelector">
              <ul className="navTitles">
                <li onClick={()=>getCards('Indoor Plant')}>Plants</li>
                <li onClick={()=>getCards('Shovel')}>Accessories</li>
                <li onClick={()=>getCards('Flower Vase')}>Pots</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="shopItemsContainer">
                <Cards addToCart={props.addToCart} images={plantImages} />






            </div>
          </div>
        </div>
    )
}

export default Shop

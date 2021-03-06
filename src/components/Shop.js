import React, {useState, useEffect} from 'react'
import { createApi } from 'unsplash-js'
import Cards from "./Cards.js"

const unsplash = createApi({
  accessKey: '7ijk06Kuh2JSMjuxrQQcP11YYuJNiMPf7o6yWJ3rgsQ',

});

function Shop() {

const [plantImages, setPlantImages] = useState([]);

const getPlantImages = (url) => {
console.log(url)
setPlantImages(url)
console.log(plantImages)
}

const getImages = () =>{
  unsplash.search.getPhotos({
    'query': 'Indoor Plant',
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
  getImages()
}, []);







    return (
        <div className="shopContainer">
          <div className="productsNavigation">
            <h3 className="navHeader">All Products</h3>
            <div className="navSelector">
              <ul className="navTitles">
                <li>Plants</li>
                <li>Accessories</li>
                <li>Pots</li>
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

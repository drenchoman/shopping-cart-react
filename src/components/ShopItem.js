import React, {useEffect, useState} from 'react'
import { createApi } from 'unsplash-js'
import ShopItemDetails from './ShopItemDetails'

const unsplash = createApi({
  accessKey: '7ijk06Kuh2JSMjuxrQQcP11YYuJNiMPf7o6yWJ3rgsQ',

});

function ShopItem(props) {

const [desc, setDesc]= useState("")
const [image, setImage]=useState("")
const [price, setPrice]=useState("")

const calculatePrice = () => {
  const calculatePrice = Math.floor(Math.random()* 100)
  setPrice(calculatePrice)
}

const fetchItem = async () =>{
  const data = await unsplash.photos.get({
    photoId: props.match.params.id
    })
  const result = await data.response
  const capitaliseDesc = result.alt_description[0].toUpperCase() + result.alt_description.substring(1);

  setDesc(capitaliseDesc)

  setImage(result.urls.small)

}

useEffect(()=>{

fetchItem()
calculatePrice()

}, []);

    return(
      <div className="itemContainer">
        <ShopItemDetails price={price} desc={desc} image={image} />
      </div>


    )




}

export default ShopItem

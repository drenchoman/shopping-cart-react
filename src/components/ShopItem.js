import React, {useEffect, useState} from 'react'
import { createApi } from 'unsplash-js'
import ShopItemDetails from './ShopItemDetails'

const unsplash = createApi({
  accessKey: '7ijk06Kuh2JSMjuxrQQcP11YYuJNiMPf7o6yWJ3rgsQ',

});

function ShopItem(props) {

const [desc, setDesc]= useState("")
const [image, setImage]=useState("")

const fetchItem = async () =>{
  const data = await unsplash.photos.get({
    photoId: props.match.params.id
    })
  const result = await data.response
  setDesc(result.alt_description)
  setImage(result.urls.small)

}

useEffect(()=>{

fetchItem()


}, []);

    return(
          <ShopItemDetails desc={desc} image={image} />
    
    )




}

export default ShopItem

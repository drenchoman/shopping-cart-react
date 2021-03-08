import React, {useEffect, useState} from 'react'
import { createApi } from 'unsplash-js'
import ShopItemDetails from './ShopItemDetails'

const unsplash = createApi({
  accessKey: '7ijk06Kuh2JSMjuxrQQcP11YYuJNiMPf7o6yWJ3rgsQ',

});

function ShopItem(props) {

const [shop, setShop]= useState({})


useEffect(()=>{
  const fetchItem = async () =>{
    const data = await unsplash.photos.get({
        photoId: props.match.params.id
      })
    const result = await data.response
    setShop(result)
    console.log(result)


  }
fetchItem()


}, []);


  return(
    <ShopItemDetails shop={shop} />
  )


}

export default ShopItem

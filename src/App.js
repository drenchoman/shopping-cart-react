import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Shop from './components/Shop'
import Nav from './components/Nav'
import ShopItem from './components/ShopItem'
import Cart from './components/Cart'


function App() {

const [cartItems, setCartItems]= useState([])
const [cartCount, setCartCount]=useState(0)
const [cartTotal, setCartTotal]=useState()

const addToCart = (cartName) => {
  checkCart(cartName.id)
  setCartItems(prevState =>
    [...prevState, (cartName)])
    console.log(cartItems.length)
  addCartCount(cartItems.length)

};

const getTotal = () => {
  const totalPrice = cartItems.reduce((prevValue, currentValue) => prevValue + currentValue.price, 0
);
setCartTotal(totalPrice)
console.log(totalPrice)
}

const checkCart = (value) => {
  const found = cartItems.some(x => x.id === value)
  console.log(found)
}

const addCartCount = (value) => {
  setCartCount(value)
  console.log(cartCount)
}

useEffect(()=>{
addCartCount(cartItems.length)
getTotal();
console.log(cartItems)


},[addCartCount])

  return (<BrowserRouter>
    <div className="container">
      <Nav cartCount={cartCount} />

      <Switch>
        <Route exact="exact" path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route exact path="/Shop" component={Shop} />
        <Route path="/shop/:id" render={(props) => <ShopItem {...props} addToCart={addToCart} />} />
        <Route path="/Cart" render={(props) => <Cart {...props} cartItems={cartItems} cartCount={cartCount} cartTotal={cartTotal} />} />

      </Switch>
    </div>
  </BrowserRouter>)
}

export default App

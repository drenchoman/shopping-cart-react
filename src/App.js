import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Shop from './components/Shop'
import Nav from './components/Nav'
import ShopItem from './components/ShopItem'

function App() {

const [cartItems, setCartItems]= useState([])

const addToCart = () =>{

}

  return (<BrowserRouter>
    <div className="container">
      <Nav />

      <Switch>
        <Route exact="exact" path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route exact path="/Shop" component={Shop}/>
        <Route path="/shop/:id" component={ShopItem} />

      </Switch>
    </div>
  </BrowserRouter>)
}

export default App

import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Shop from './components/Shop'
import Nav from './components/Nav'
import ShopItem from './components/ShopItem'
import Cart from './components/Cart'
import Contact from './components/Contact'

function App() {

  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState()



  const addToCart = (cartItem) => {
    const foundIndex = checkCart(cartItem.id)
    const inCart = isInCart(cartItem, foundIndex);
    if (inCart) {
      changeQty(cartItem.id, 1);
    } else {
      setCartItems(prevState => [
        ...prevState,
        (cartItem)
      ])
      addCartCount()
    }
  }


  const isInCart = (cartItem, index) => {
    const alreadyInCart = cartItems.map((item) => item.id).includes(cartItem.id)
    return alreadyInCart
  }

  const getTotal = () => {
    const totalPrice = cartItems.map((item) => item.price * item.qty).reduce((y, z) => y + z, 0)
    console.log(totalPrice)
    setCartTotal(totalPrice)
  };

  const changeQty = (id, num) => setCartItems(cartItems.map((item) => (
    item.id === id
    ? {
      ...item,
      qty: item.qty + num
    }
    : item)));

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  };

  const checkCart = (value) => {
    const foundIndex = cartItems.findIndex(x => x.id === value)
    return foundIndex
  }

  const addCartCount = () => {
    const cartTotal = cartItems.reduce((acc, cur) => acc + cur.qty, 0)
    setCartCount(cartTotal)
  }

  useEffect(() => {
    addCartCount()

  }, [addCartCount])

  return (<BrowserRouter>
    <div className="container">
      <Nav cartCount={cartCount}/>

      <Switch>
        <Route exact="exact" path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route exact="exact" path="/Shop" component={Shop}/>
        <Route path="/shop/:id" render={(props) => <ShopItem {...props} addToCart={addToCart} /> }/>
        <Route path="/Cart" render={(props) => <Cart {...props} cartItems={cartItems} cartCount={cartCount} cartTotal={cartTotal} getTotal={getTotal} changeQty={changeQty} removeItem={removeItem}/>}/>
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>)
}

export default App

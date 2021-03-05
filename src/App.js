import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Shop from './components/Shop'
import Nav from './components/Nav'

function App() {
  return (<BrowserRouter>
    <div className="container">
      <Nav/>

      <Switch>
        <Route exact="exact" path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Shop" component={Shop}/>
      </Switch>
    </div>
  </BrowserRouter>)
}

export default App

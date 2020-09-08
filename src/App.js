import React from 'react';
import './App.css'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Header from'./components/Header.js';
import Footer from './components/Footer.js'

import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Products from './components/pages/Products.js';
import Contact from './components/pages/Contact Us.js';
import Services from './components/pages/Services.js';




function App (){
  return(
    <>
      <Router>
    	
        <Header/>
	    	<Switch>
	    		<Route path='/' exact component ={Home}/>
          <Route path='/Services' exact component ={Services}/>
          <Route path='/About' exact component ={About}/>
          <Route path='/Products' exact component ={Products}/>
          <Route path='/Contact Us' exact component ={Contact}/>
	    	</Switch>
        <Footer/>
      </Router>
  
    </>


  )
}
export default App
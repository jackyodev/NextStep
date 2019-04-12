import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from ".././navbar/navBar"

import Body1 from './body1.js';
import Body2 from './body2.js';
import About from '../About/about'
import Signup from '../signup/signup_container'
import Login from '../login/login_container'

class Landing extends Component{
  constructor(props) {
    super(props)
  }



render(){
  return(
    <div className='landingPage'>
      <NavBar/>
      <Route exact path ="/" render={() => {
        return (
          <div> 
           <Body1/>
           <Body2/>
          </div>)
      }}/>
      <Route exact path = "/about" component = {About} ></Route>
      <Route exact path = "/signup" component = {Signup} ></Route>
      <Route exact path = "/login" component = {Login} ></Route>
          </div>

  )
}
}


export default Landing
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './body1.css'
// import login_user from '../Login/loginUtils'
import {connect } from "react-redux";
import {withRouter} from "react-router"
import {login_user,checkUserAuthStatus} from "../../Redux/Actions/Auth_actions.js"

import video1 from "../../Images/v-homepage.mp4"
import video2 from "../../Images/Notebook-6378.mp4"
import video3 from "../../Images/Notebook-6378 (online-video-cutter.com).mp4"

let logo = require("../../Images/nextStepLogo.png")

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    function_login_user: (username, password) => dispatch(login_user(username,password)),
  function_checkStatus:() =>
    dispatch(checkUserAuthStatus())
}
}

class Body1 extends Component{

demo_function = () =>{
  setTimeout(() => {
    this.props.function_login_user("Jacky","password3")
  }, 100);
this.props.history.push("/home")
  }


render(){
  return(
    <>
    <div className='body1'>




    <div className = "company_name">
    <div className ="left">
    <h1> NEXT STEP </h1>
    </div>

    <div className="right">
    <img src= {logo} alt="next-step_logo" />
    </div>

    <div className='links'>
    <button className='demoSignup' onClick = {() => this.demo_function()}>Demo Login</button>
    </div>
    </div>

    <div className = "videoLay">
    <video id="background-video" loop autoPlay>
    <source src={video3} type="video/mp4"/>
    </video>
    </div>
    </div>
    </>
  )
}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Body1))

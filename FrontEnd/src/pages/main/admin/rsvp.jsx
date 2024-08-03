/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import './assets/css/s.css'

 import s2 from './assets/images/profileimg.jpg'


import Nav from './nav'
import Foot from './foot'
function Rsvp() {
  return (




<div className="main-content">
<Nav/>
<div className="container-fluid content-top-gap">

    <nav aria-label="breadcrumb">
      <ol className="breadcrumb my-breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Rsvp</li>
      </ol>
    </nav>

 
<div className="container3">
  <div className="title">Rsvp</div>
  <form action="#">
    <div className="user__details">
      <div className="input__box">
        <span className="details">Full Name</span>
        <input type="text" placeholder="E.g: John Smith" required/>
      </div>
      <div className="input__box">
        <span className="details">Username</span>
        <input type="text" placeholder="johnWC98" required/>
      </div>
      <div className="input__box">
        <span className="details">Email</span>
        <input type="email" placeholder="johnsmith@hotmail.com" required/>
      </div>
      <div className="input__box">
        <span className="details">Phone Number</span>
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required/>
      </div>
      <div className="input__box">
        <span className="details">Password</span>
        <input type="password" placeholder="********" required/>
      </div>
      <div className="input__box">
 
        <div className="field-form year-section ">
        <select name="section" id="section">
          <option value="">T-ShirtSize</option>
          <option value="1">XXL</option>
          <option value="2">XL</option>
          <option value="3">L</option>
          <option value="4">M</option>
          <option value="5">S</option>
        </select>
        <select name="section" id="section">
          <option value="">Role</option>
          <option value="a">Student</option>
          <option value="b">Speakers</option>
          <option value="c">Stackholders</option>
          <option value="d">Volunteers</option>
          <option value="e">OC Members</option>
          <option value="f">Other</option>
      
      </select>   
      <select name="section" id="section">
          <option value="">Food</option>
          <option value="a">Veg</option>
          <option value="b">Non-Veg</option>
       
      
      </select>   
    </div>
      </div>

    </div>
    <div className="gender__details">
      <input type="radio" name="gender" id="dot-1"/>
      <input type="radio" name="gender" id="dot-2"/>
      <input type="radio" name="gender" id="dot-3"/>
      <span className="gender__title">Gender</span>
      <div className="category">
        <label htmlFor="dot-1">
          <span className="dot one"></span>
          <span>Male</span>
        </label>
        <label htmlFor="dot-2">
          <span className="dot two"></span>
          <span>Female</span>
        </label>
        <label htmlFor="dot-3">
          <span className="dot three"></span>
          <span>Prefer not to say</span>
        </label>
      </div>
    </div>

    <div className="input_box">
<label id ="idlabel" className="mdl-button mdl-js-button mdl-button--raised">
  <input type="file" id="files" name="files[]"  multiple />
    Payment Recipt
</label>
    
   <br></br>
   
    <div className="container3 im" >
      
        
    </div>
</div>
    <div className="button">
      <input type="submit" value="Register"/>
    </div>
  </form>
</div>

   
    </div>
    <Foot/>
    </div> 
 
 



   
   
  );
}

export default Rsvp;





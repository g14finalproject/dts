/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import './assets/css/s.css'

 import s2 from './assets/images/profileimg.jpg'


import Nav from './nav'
import Foot from './foot'
function Oc() {
  return (



<div className="main-content">
<Nav/>
  <div className="container-fluid content-top-gap">

    <nav aria-label="breadcrumb">
      <ol className="breadcrumb my-breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Oc Allocation</li>
      </ol>
    </nav>

    <div className="container0">
  <h1 className="level-1 rectangle">CEO</h1>
  <ol className="level-2-wrapper">
    <li>
      <h2 className="level-2 rectangle">Director A</h2>
      <ol className="level-3-wrapper">
        <li>
          <h3 className="level-3 rectangle">Manager A</h3>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
        <li>
          <h3 className="level-3 rectangle">Manager B</h3>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
      </ol>
    </li>
    <li>
      <h2 className="level-2 rectangle">Director B</h2>
      <ol className="level-3-wrapper">
        <li>
          <h3 className="level-3 rectangle">Manager C</h3>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
        <li>
          <h3 className="level-3 rectangle">Manager D</h3>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
      </ol>
    </li>
  </ol>
</div>

    </div>
    <Foot/>
    </div> 
 
 



   
   
  );
}

export default Oc;





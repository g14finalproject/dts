/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import './assets/css/r.css'
import './assets/css/s.css'
 import s2 from './assets/images/profileimg.jpg'


import Nav from './nav'
import Foot from './foot'
function Price() {
  return (




<div className="main-content">
<Nav/>
  <div className="container-fluid content-top-gap">

    <nav aria-label="breadcrumb">
      <ol className="breadcrumb my-breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Price</li>
      </ol>
    </nav>

    <section className="pricing-tables ">
    <div className="container">
     
        <div className="main-title text-center">
            <h1>Pricing Tables</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="row">
            <div className="col-sm-12 col-lg-4 col-md-4">
                <div className="pricing">
                  
                    <div className="price-header">
                        <div className="title">Basic Plan</div>
                        <div className="price">$20.99</div>
                    </div>
                    <div className="content">
                        <ul>
                            <li>20 Projects</li>
                            <li>32GB Storage</li>
                            <li>50 Email Accounts</li>
                            <li>12GB Bandwidth</li>
                            <li>32GB Storage</li>
                        </ul>
                        <div className="button1"><a href="#" className="btn btn-outline pricing-btn">Get Started</a></div>
                        <br>
                        </br>
                        <Link to="/price">Edit</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-4 col-md-4">
                <div className="pricing featured">
                    <div className="listing-badges">
                        <span className="featured">Featured</span>
                    </div>
                    <div className="price-header price-header-2">
                        <div className="title">Professional</div>
                        <div className="price">$20.99</div>
                    </div>
                    <div className="content">
                        <ul>
                            <li>20 Projects</li>
                            <li>32GB Storage</li>
                            <li>50 Email Accounts</li>
                            <li>12GB Bandwidth</li>
                            <li>32GB Storage</li>
                        </ul>
                        <div className="button1"><a href="#" className="btn btn-outline pricing-btn button-theme">Get Started</a></div>
                        <br>
                        </br>
                        <Link to="/price">Edit</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-4 col-md-4">
                <div className="pricing">
                    <div className="price-header">
                        <div className="title">Exclusive</div>
                        <div className="price">$20.99</div>
                    </div>
                    <div className="content">
                        <ul>
                            <li>20 Projects</li>
                            <li>32GB Storage</li>
                            <li>50 Email Accounts</li>
                            <li>12GB Bandwidth</li>
                            <li>32GB Storage</li>
                        </ul>
                        <div className="button1"><a href="#" className="btn btn-outline pricing-btn">Get Started</a></div>
                        <br>
                        </br>
                        <Link to="/price">Edit</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
   
    </div>
    <Foot/>
    </div>
 
 



   
   
  );
}

export default Price;





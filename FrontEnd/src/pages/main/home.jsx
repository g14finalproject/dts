/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import './assets/css/style-starter.css'
import s1 from './assets/images/a7.jpg'
import s2 from './assets/images/a6.jpg'
import s3 from './assets/images/a3.jpg'
import s4 from './assets/images/a9.jpg'
import A1 from './assets/images/a12.jpg'
import w1 from './assets/images/w4.jpg'
import w2 from './assets/images/w5.jpg'
import w3 from './assets/images/w7.avif'
import Navbar from './Navbar'
import Footer from './Footer'
function Home() {
  return (
    <div>
<Navbar/>

    <div className="banner-wrap">
     
         
            <div className="banner-slide bg1">
                <div className="container">
                    <div className="hero-content">
                        <p data-animation="fadeInDown" className="mb-2">Event </p>
                        <h1 data-animation="flipInX" data-delay="0.8s" data-color="#fff">
                        Planning  
                        <span>with</span> Heart</h1>
                        <div className="cta-btn" data-animation="fadeInUp" data-delay="1s">
                            <a href="about.html" className="btn btn-style btn-primary">View More</a>
                        </div>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </div>
      
          
        
    </div>
  
    <div className="w3l-servicesblock2 py-5" id="services">
        <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-style text-center mb-lg-5 mb-4">Services were <span>offering</span></h3>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="grids5-info">
                        <a href="services.html" className="blog-image d-block zoom"><img src={s1} alt=""
                                className="img-fluid radius-image" />
                            <div className="image-overlay">
                                <h4>Weddings</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                            </div>
                            <div className="iconic-plus">
                                <i className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                    <div className="grids5-info">
                        <a href="services.html" className="blog-image d-block zoom"><img src={s2} alt=""
                                className="img-fluid radius-image" />
                            <div className="image-overlay">
                                <h4>Concerts</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                            </div>
                            <div className="iconic-plus">
                                <i className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                    <div className="grids5-info">
                        <a href="services.html" className="blog-image d-block zoom"><img src={s3} alt=""
                                className="img-fluid radius-image" />
                            <div className="image-overlay">
                                <h4>Party</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                            </div>
                            <div className="iconic-plus">
                                <i className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                    <div className="grids5-info">
                        <a href="services.html" className="blog-image d-block zoom"><img src={s4} alt=""
                                className="img-fluid radius-image" />
                            <div className="image-overlay">
                                <h4>Conferences & Open days</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                            </div>
                            <div className="iconic-plus">
                                <i className="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-md-5 mt-5 pt-lg-4">
                <a href="services.html" className="btn btn-style">View More Services</a>
            </div>
        </div>
    </div>
  
    <section className="home-services py-5" id="services">
        <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-style text-center mb-lg-5 mb-4">What <span>we do</span> for our <span>Clients?</span></h3>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-user-tie"></i>
                        </div>
                        <h4 className="number">01</h4>
                        <h4><a href="#url">Marketing</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="services.html" className="read">Read more</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-cut"></i>
                        </div>
                        <h4 className="number">02</h4>
                        <h4><a href="#url">Event Arrangements</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="services.html" className="read">Read more</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-person-booth"></i>
                        </div>
                        <h4 className="number">03</h4>
                        <h4><a href="#url">Wedding Services</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="services.html" className="read">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    <section className="w3l-about py-5" id="about">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="row align-items-center">
                <div className="col-lg-6 section-width pe-xl-5">
                    <h3 className="title-style">5 <span>years</span> of experience</h3>
                    <p className="mt-4">At corrupti odit At iure facere,
                        porro repellat officia quas, dolores magnam assumenda soluta odit
                        harum maiores fugiat accusamus eos nulla. Iure voluptatibus explicabo
                        officia.</p>
                    <p className="mt-4 pb-dm-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti
                        odit? At iure facere,
                        porro repellat officia quas, dolores magnam assumenda soluta odit
                        harum.</p>
                    <a href="about.html" className="btn btn-style mt-4"> Know more about us</a>
                </div>
                <div className="col-lg-6 history-info mt-lg-0 mt-5 pt-md-4 pt-2">
                    <div className="position-relative img-border">
                        <img src={A1} className="img-fluid1 video-popup-image" alt="video-popup"/>

                        <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
                            <span className="video-play-icon">
                                <span className="fa fa-play"></span>
                            </span>
                        </a>

                       
                        <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                            <iframe src="https://player.vimeo.com/video/333569091?h=9836ac4d97"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="w3l-content1 py-5">
        <div className="container py-md-5 py-sm-4 py-2">
            <div className="row align-items-center py-4">
                <div className="col-lg-7">
                    <div className="bottom-info">
                        <h3 className="title-style text-white">Let us help you
                        plan your perfect event!</h3>
                        <p className="mt-4 text-light">Lorem ipsum dolor sit amet elit. Velit beatae
                            rem ullam dolore nisi esse quasi. Integer sit amet. Lorem ipsum dolor sit
                            amet elit.</p>
                    </div>
                </div>
                <div className="col-lg-5 text-lg-end">
                    <a href="contact.html" className="btn btn-style mt-lg-0 mt-md-5 mt-4">Book your appointment</a>
                </div>
            </div>
        </div>
    </section>
   <br></br>
    <section className="w3l-how-grids-3" id="how">
        <div className="container-fluid">
            <div className="row d-grid grid-col-2 grid-element-9 px-lg-0">
                <div className="left-texthny p-lg-5 py-4">
                    <div className="left-texthny-2 p-lg-5 p-4">
                        <h3 className="title-style"><span>Our</span> Works</h3>
                        <p className="my-3 pr-lg-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                            hic odio consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
                            laudantium rem ullam dolore nisi. Integer sit amet mattis quam.</p>
                        <a href="about.html" className="btn btn-style btn-secondary mt-4">Read More</a>
                    </div>
                </div>
                <div className="left-grid-ele-9 grid-bg1">
                </div>
            </div>
            <br></br>
            <div className="row d-grid grid-col-3 grid-element-9 px-lg-0">
                <div className="left-grid-ele-9 grid-bg2">

                </div>
                <div className="left-texthny-3 p-lg-5 py-4 d-grid align-items-center">
                    <div className="sub-wid-grid-9 py-lg-0 py-5">
                        <i className="fas fa-child mb-4"></i>
                        <h4 className="text-grid-9"><a href="services.html">Best Works</a></h4>
                        <p className="sub-para">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

                    </div>
                </div>
                <div className="left-grid-ele-9 grid-bg3">

                </div>
                <div className="left-texthny-3 p-lg-5 py-4 d-grid align-items-center">
                    <div className="sub-wid-grid-9 py-lg-0 py-5">
                        <i className="fab fa-angellist mb-4"></i>
                        <h4 className="text-grid-9"><a href="services.html">New Styles</a></h4>
                        <p className="sub-para">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <div className="w3l-news py-5" id="homeblog">
        <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-style text-center mb-lg-5 mb-4"><span>Our</span> Blog Posts</h3>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="grids5-info">
                        <a href="#blog" className="blog-image d-block zoom"><img src={w1}
                                alt="" className="img-fluid news-image" />
                            <div className="image-overlay">
                                <span className="fas fa-plus"></span>
                            </div>
                        </a>
                        <div className="blog-info card-body blog-details">
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="#author" className="post"><i className="fas fa-user"></i> Mauree</a>
                                <h6 className="date"><i className="fas fa-clock"></i> Nov 16, 2021.</h6>
                            </div>

                            <h4><a href="#blog" className="blog-desc">
                                    Set a Fashion Trend!</a></h4>
                            <p className="mt-3">At corrupti odit At iure facere,
                                porro repellat officia quas, magnam assumenda.</p>
                            <a href="#blog" className="read">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="grids5-info">
                        <a href="#blog" className="blog-image d-block zoom"><img src={w2}
                                alt="" className="img-fluid news-image" />
                            <div className="image-overlay">
                                <span className="fas fa-plus"></span>
                            </div>
                        </a>
                        <div className="blog-info card-body blog-details">
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="#author" className="post"><i className="fas fa-user"></i> Alliees</a>
                                <h6 className="date"><i className="fas fa-clock"></i> Nov 18, 2021.</h6>
                            </div>

                            <h4><a href="#blog" className="blog-desc">How to Do A Opening Day</a></h4>
                            <p className="mt-3">At corrupti odit At iure facere,
                                porro repellat officia quas, magnam assumenda.</p>
                            <a href="#blog" className="read">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="grids5-info">
                        <a href="#blog" className="blog-image d-block zoom"><img src={w3}
                                alt="" className="img-fluid news-image" />
                            <div className="image-overlay">
                                <span className="fas fa-plus"></span>
                            </div>
                        </a>
                        <div className="blog-info card-body blog-details">
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="#author" className="post"><i className="fas fa-user"></i> Johnson</a>
                                <h6 className="date"><i className="fas fa-clock"></i> Nov 20, 2021.</h6>
                            </div>

                            <h4><a href="#blog" className="blog-desc">
                                How We Do Our Marketing</a></h4>
                            <p className="mt-3">At corrupti odit At iure facere,
                                porro repellat officia quas, magnam assumenda.</p>
                            <a href="#blog" className="read">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
   <Footer/>
    </div>
  );
}

export default Home;

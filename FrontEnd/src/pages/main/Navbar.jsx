import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './assets/css/style-starter.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("faceAuth"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("faceAuth");
    setIsLoggedIn(false);

    navigate("/"); // Redirect to the home page or login page
  };

  return (
    <div>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="index.html">
              DTS<span></span>
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>
            <div className="navbar-collapse">
             
            </div>

            <div className="cont-ser-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                <div className="navbar-collapse">
              <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
             
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    My Events
                  </Link>
                </li> */}
              </ul>
            </div>
                <li className="nav-item">
                  {isLoggedIn ? (
                    <div>
                    <Link className="btn1 btn-white" onClick={handleLogout}>
                      Logout
                    </Link>

                    <Link to="/admin" className="btn1 btn-white">My Events</Link></div>
                  ) : (
                    // <Link to="/invite" className="btn1 btn-white">Create Event</Link>
                    <Link to="/user-select" className="btn1 btn-white">Create Event</Link>
                  )}
                </li>
                  <label className="theme-switch" htmlFor="checkbox">
                  
                    <div className="mode-container">
                     
                      <i className="gg-moon"></i>
                     
                    </div>
                  </label>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

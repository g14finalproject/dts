/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './assets/css/s.css'
import logo from './assets/images/logo.png'
 import s2 from './assets/images/profileimg.jpg'
// import s3 from './assets/images/a3.jpg'


function Nav() {
  const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("faceAuth")) {
            navigate("/login");
        }

        const { account } = JSON.parse(localStorage.getItem("faceAuth"));
        setAccount(account);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!account) {
        return null;
    }




  return (

<div className="sidebar-menu-collapsed">
  {/* <div className="se-pre-con"></div> */}


  <div className="sidebar-menu sticky-sidebar-menu">

{/* 
    <div className="logo">
      <h1><a href="index.html">Collective</a></h1>
    </div> */}


   

    <div className="logo-icon ">
    
     <Link to="/"><i >DTS Admin</i> </Link>
     
    </div>


    <div className="sidebar-menu-inner">

      
      <ul className="nav nav-pills nav-stacked custom-nav">
      
      <li className="active"><Link to="/admin">Home</Link>
      </li>
      <li className="active"><Link to="/invite">Event</Link>
        </li>
        <li className="active"><Link to="/atte"> Participants</Link>
        </li>
    

        <li className="active"><Link to="/compose"> Email</Link>
        </li>
  
        
        <li className="active"><Link to="/ticket">Ticket</Link>
        </li>
        <li className="active"><Link to="/oc">Members Allocation</Link>
        </li>
      
      </ul>

      <a className="toggle-btn">
        <i className="fa fa-angle-double-left menu-collapsed__left">Collapse Sidebar</i>
        <i className="fa fa-angle-double-right menu-collapsed__right"></i>
      </a>
     
    </div>
  </div>

  <div className="header sticky-header">

    <div className="menu-right">
      <div className="navbar user-panel-top">
       
        <div className="user-dropdown-details d-flex">
          <div className="profile_details_left">
        
            <ul className="nofitications-dropdown">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                    className="fa fa-bell-o"></i><span className="badge blue">3</span></a>
               
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                    className="fa fa-comment-o"></i><span className="badge blue">4</span></a>
         
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>

  </div>



</div>
   
   
   
  );
}

export default Nav;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './assets/css/s.css';
import Nav from './nav';
import Foot from './foot';

function Eventform() {
    const [account, setAccount] = useState(null);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedAuth = localStorage.getItem("faceAuth");
        if (!storedAuth) {
            navigate("/login");
        } else {
            const { account } = JSON.parse(storedAuth);
            setAccount(account);

            // Fetch event data
            axios.get('http://localhost:5000/getUsers') // Adjust the endpoint as needed
                .then(response => {
                    console.log("Event data:", response.data); // Debugging log
                    setData(response.data);
                })
                .catch(error => {
                    console.error("Error fetching event data:", error);
                });
        }
    }, [navigate]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // Extract YYYY-MM-DD
    };

    if (!account) {
        return null;
    }

    return (
        <div className="main-content">
            <Nav/>
            <div className="container-fluid content-top-gap">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb my-breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>

                <div className="welcome-msg pt-3 pb-4">
                    <h1>Hi <span className="text-primary">{account.name}</span>, Welcome back</h1>
                </div>

                <div className="statistics">
                    <div className="row">
                        <div className="col-xl-6 pr-xl-2">
                            <div className="row">
                                <div className="col-sm-6 pr-sm-2 statistics-grid">
                                    <div className="card card_border border-primary-top p-4">
                                        <i className="lnr lnr-users"> </i>
                                        <h3 className="text-primary number">29.76 M</h3>
                                        <p className="stat-text">Total Users</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 pl-sm-2 statistics-grid">
                                    <div className="card card_border border-primary-top p-4">
                                        <i className="lnr lnr-eye"> </i>
                                        <h3 className="text-secondary number">51.25 K</h3>
                                        <p className="stat-text">Mails</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 pl-xl-2">
                            <div className="row">
                                <div className="col-sm-6 pr-sm-2 statistics-grid">
                                    <div className="card card_border border-primary-top p-4">
                                        <i className="lnr lnr-cloud-download"> </i>
                                        <h3 className="text-success number">166.89 M</h3>
                                        <p className="stat-text">Views</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 pl-sm-2 statistics-grid">
                                    <div className="card card_border border-primary-top p-4">
                                        <i className="lnr lnr-cart"> </i>
                                        <h3 className="text-danger number">1,250k</h3>
                                        <p className="stat-text">Registered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chart">
                    <div className="row">
                        <section className="my-5">
                            <div className="container">
                                <div className="main-body">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex flex-column align-items-center text-center">
                                                        <img src={account.picture} alt="Admin" className="rounded-circle p-1 bg-warning" width="90" />
                                                        <div className="mt-3">
                                                            <h4>{account.name}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="list-group list-group-flush text-center mt-4">
                                                        <a href="#" className="list-group-item list-group-item-action border-0 active"
                                                            onClick={() => {
                                                                localStorage.removeItem("faceAuth");
                                                                navigate("/");
                                                            }}>
                                                            Logout
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div id="orderDetails" className="order_card">
                                                <div className="card mt-4">
                                                    <div className="card-body p-0 table-responsive">
                                                        <h4 className="p-3 mb-0">Event Details</h4>
                                                        <table className="table mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">#</th>
                                                      
                                                                    <th scope="col">Company</th>
                                                                    <th scope="col">Specialization</th>
                                                                    <th scope="col">Start Date</th>
                                                                    <th scope="col">End Date</th>
                                                                    <th scope="col">Time</th>
                                                                </tr>
                                                            </thead>
                                                            {/* <tbody>
                                                                {data.map(({ id, companyName, specialization, startDate, endDate, time, eventName }, index) => (
                                                                    <React.Fragment key={id}>
                                                                        <tr>
                                                                            <td>
                                                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="product" className="" width="80" />
                                                                            </td>
                                                                            <th scope="row">{index + 1}</th>
                                                                            <td>{companyName}</td>
                                                                            <td>{specialization}</td>
                                                                            <td>{formatDate(startDate)}</td>
                                                                            <td>{formatDate(endDate)}</td>
                                                                            <td>{time}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th colSpan="3">
                                                                                <span>Event Name:</span>
                                                                                <span className="badge badge-success">{eventName}</span>
                                                                            </th>
                                                                        </tr>
                                                                    </React.Fragment>
                                                                ))}
                                                            </tbody> */}

<tbody>
                                                                
                                                                        <tr>
                                                                            <td>
                                                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="product" className="" width="80" />
                                                                            </td>
                                                                         
                                                                            <td>Yarl Salesforce Ohana</td>
                                                                            <td>First time in jaffna</td>
                                                                            <td>Oct 14 2024</td>
                                                                            <td>oct 15 2024</td>
                                                                            <td>9.00 A.M</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th colSpan="3">
                                                                                <span>Event Name:</span>
                                                                                <span className="badge badge-success">Yarl Dreamin</span>
                                                                            </th>
                                                                        </tr>
                                                                 
                                                           
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Foot/>
        </div>
    );
}

export default Eventform;

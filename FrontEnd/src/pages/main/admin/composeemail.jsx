/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import QRCode from 'qrcode.react';
import emailjs from 'emailjs-com';
import './assets/css/r.css';

import Nav from './nav';
import Foot from './foot';

function Compose() {
  const [account, setAccount] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("faceAuth")) {
      navigate("/login");
    } else {
      const { account } = JSON.parse(localStorage.getItem("faceAuth"));
      setAccount(account);

      // Fetch user data
      axios.get('http://localhost:5000/getUsers')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [navigate]);

  const handleSubmit = async (event, recipient) => {
    event.preventDefault();

    const subject = event.target.subject.value;
    const message = `Hello ${recipient.name},\n\nDTS Event Organizers welcomes you to the event ${recipient.eventName}. The details will be provided in the QR code attached below.\n\nBest wishes,\nEmailJS team`;

    // Get the QR code data URL
    const qrCodeCanvas = document.getElementById(`qr-code-${recipient.id}`);
    if (!qrCodeCanvas) {
      console.error('QR code canvas not found');
      return;
    }
    const qrCodeDataURL = qrCodeCanvas.toDataURL();

    console.log('QR Code Data URL:', qrCodeDataURL); 
    console.log('Recipient Email:', recipient.email);

    try {
      const response = await emailjs.send('service_esfprms', 'template_6vp08bq', {
        to_name: recipient.name,
        from_name: account.name,
        message: message,
        to_email: recipient.email,
        from_email:account.email,
        subject: subject,
        qr_code: qrCodeDataURL 
      }, 'v6Th9zqMdyv6oP2mh');
      
      console.log('EmailJS Response:', response);
      navigate("/email");
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email'); 
    }
  };

  if (!account) {
    return null;
  }

  return (
    <div className="main-content">
      <Nav />
      <div className="container-fluid content-top-gap">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb my-breadcrumb">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item active" aria-current="page">Email</li>
          </ol>
        </nav>

        <div className="content">
          <div className="inbox-body">
            <Link to="/email" className="btn btn-compose">
              Mail Box
            </Link>
          </div>
          <section>
            <div className="register-wrapper">
              <div className="register-block">
                <h3 className="register-title">Create a mail</h3>
                {data.map((item) => (
                  <form onSubmit={(e) => handleSubmit(e, item)} key={item.id}>
                    <input
                      type="email"
                      placeholder="To"
                      value={item.email}
                      readOnly
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="5"
                      required
                    />
                    <QRCode
                      id={`qr-code-${item.id}`}
                      value={`Event Name: ${item.eventName}, Details: ${item.details}`}
                      size={100}
                    />
                    <div /><br />
                    <input type="submit" value="Send Mail" />
                  </form>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default Compose;

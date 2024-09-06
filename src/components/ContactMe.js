// src/pages/ContactPage.js
import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ContactPage = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "19352a62-7cbd-4462-adde-5ee23c94f087");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);

      toast.success("Send message Successfull ");
      event.target.reset();
    }
  };

  return (
    <div id='contact' className="" style={{ background: '#151515' }}>
      <br />
      <div className='container'>
        <div className="text-center">
          <h1 style={{ color: 'rgba(0,255,255)', fontFamily: 'Playfair Display, serif' }}>Contact Me</h1>
        </div>
        <div class="card-body">
          <div className="text-center m-4">
            <p className="lead" style={{ color: 'rgba(0,255,255)', fontFamily: 'Playfair Display, serif' }}>We would love to hear from you! Please fill out the form below.</p>
          </div>
          <form onSubmit={handleSubmit} className='m-5'>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ color: 'rgba(0,255,255)' }}>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"

                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: 'rgba(0,255,255)' }}>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"

                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label" style={{ color: 'rgba(0,255,255)' }}>Phone No.</label>
              <input
                type="mobile"
                className="form-control"
                id="mobile"
                name="mobile"

                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label" style={{ color: 'rgba(0,255,255)' }}>Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"

                required
              ></textarea>
            </div>

            <button type="submit" className="btn mb-5 " style={{ backgroundColor: 'rgba(0,255,255)' }}>Send Message</button>
          </form>
          <ToastContainer />
        </div>
      </div>

    </div>
  );
};

export default ContactPage;

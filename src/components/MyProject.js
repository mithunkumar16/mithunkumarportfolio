import React from 'react'
import UiImg from './img/Project-Img/hospital.png';
import FrontEndImg from './img/Project-Img/Booking-ticket.jpg';
import BackEndImg from './img/Project-Img/book.jpg';
import FullStackImg from './img/Project-Img/Employee.jpg';
export default function MyProject() {
  return (
    <div id='project' className='' >
      <div className="container ">
        <h1 className="text-center " style={{ color: 'rgba(0,255,255)', fontFamily: 'Playfair Display, serif' }}>Our Project</h1>
        <div className="">
          <div className="row">
            {/* Project one */}
            <div className="col-md-7 ms-2">
              <div className='card mt-5' style={{ backgroundColor: '#000000' }}>
                <h3 className='mx-5'
                  style={{ color: '#22f8d1', fontFamily: 'Playfair Display, serif' }}>Hotal Management System Application</h3>
                {/* <h6 className='mx-5 text-white' style={{ fontFamily: 'Playfair Display, serif' }}>I'm a
                  <span style={{ color: '#22f8d1', fontFamily: 'Playfair Display, serif' }}> Software Developer</span></h6> */}
                <p className="mx-5 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>This is develop on Eclipse IDE. Using server Tomcat-9. There are total Three modules. Admin can add the Doctor and manage everything. Doctor can manage the Patient Appointment. Patient can take the Appointment from Doctor.</p>
                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                {/* <div className='mx-5'>
                  <a type="button" class="btn btn-outline-info rounded-circle">
                    <i class="fa-brands fa-linkedin-in"></i></a>
                  <a type="button" class="btn btn-outline-info rounded-circle ms-2">
                    <i class="fa-brands fa-github"></i></a>
                  <a type="button" class="btn btn-outline-info rounded-circle ms-2">
                    <i class="fa-brands fa-youtube"></i></a>
                </div> */}
                <div className='mx-5 mt-3'>
                  <a href='#contact' type="button" class="btn btn-info">More</a>
                  {/* <a href={MyResumeFile} download="My_Resume.pdf" class="btn btn-info ms-3">
                    <i class="bi bi-download"></i> Download Resume
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-4 ms-2 mt-4">
              <div className='container'>
                <div className='card' style={{ borderRadius: '0% 32% 0% 38% / 30% 26% 10% 30% ', background: 'rgba(0,255,255)' }}>
                  <div className='text-center me-3'>
                    <img src={UiImg} className="w-100 mt-4 me-5"
                      style={{ borderRadius: '0% 32% 0% 38% / 30% 26% 10% 30% ', background: '#22f8d1' }} alt="Profile Picture" />
                  </div>
                </div>
              </div>
            </div>
            {/* Project two */}
            <div className="col-md-4 ms-2 mt-4">
              <div className='container'>
                <div className='card' style={{ borderRadius: '0% 32% 0% 38% / 30% 26% 10% 30% ', background: 'rgba(0,255,255)' }}>
                  <div className='text-center me-3'>
                    <img src={FrontEndImg} className="w-100 mb-3 ms-3"
                      style={{ borderRadius: '0% 32% 0% 38% / 30% 26% 10% 30% ', background: '#22f8d1' }} alt="Profile Picture" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 ms-2">
              <div className='card mt-5' style={{ backgroundColor: '#000000' }}>
                <h3 className='mx-5'
                  style={{ color: '#22f8d1', fontFamily: 'Playfair Display, serif' }}>
                  Online Ticket Booking
                </h3>
                {/* <h6 className='mx-5 text-white' style={{ fontFamily: 'Playfair Display, serif' }}>I'm a
                  <span style={{ color: '#22f8d1', fontFamily: 'Playfair Display, serif' }}> Software Developer</span></h6> */}
                <p className="mx-5 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>In this Train Ticket Reservation Booking System Project. We have tried to show how the process of ticket booking and traveling on a train is done. </p>
                <div className='mx-5 mt-3'>
                  <a href='#contact' type="button" class="btn btn-info">More</a>
                </div>
              </div>
            </div>
            {/* Project three */}
            <div className="col-md-7">
              <div className='card mt-5' style={{ backgroundColor: '#000000' }}>
                <h3 className='mx-5'
                  style={{ color: '#22f8d1', fontFamily: 'Playfair Display, serif' }}>Labary Management system</h3>
                <p className="mx-5 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>This is develop on STS. Book related perform Insert, Delete, Update, Display.</p>

                <div className='mx-5 mt-3'>
                  <a href='#contact' type="button" class="btn btn-info">More</a>

                </div>
              </div>
            </div>
            <div className="col-md-4 me-4 mt-4">
              <div className='container'>
                <div className='card' style={{ borderRadius: '0% 32% 0% 38% / 30% 26% 10% 30% ', background: 'rgba(0,255,255)' }}>
                  <div className='text-center me-3'>
                    <img src={BackEndImg} className="w-100 mt-4 me-5"
                      style={{ borderRadius: '0% 32% 0% 38% / 30% 26% 10% 30% ', background: '#22f8d1' }} alt="Profile Picture" />
                  </div>
                </div>
              </div>
            </div>
            {/* Project four */}

            <div className="col-md-4 me-4 mt-4">
              <div className='container'>
                <div className='card' style={{ borderRadius: '0% 32% 0% 38% / 30% 26% 10% 30% ', background: 'rgba(0,255,255)' }}>
                  <div className='text-center me-3'>
                    <img src={FrontEndImg} className="w-100 mb-3 ms-3"
                      style={{ borderRadius: '0% 32% 0% 38% / 30% 26% 10% 30% ', background: '#22f8d1' }} alt="Profile Picture" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 ms-2">
              <div className='card mt-5' style={{ backgroundColor: '#000000' }}>
                <h3 className='mx-5'
                  style={{ color: '#22f8d1', fontFamily: 'Playfair Display, serif' }}>
                  Smart City Application
                </h3>

                <p className="mx-5 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>• If you are desirous to give a web based platform to your city to be showcased for all it has in terms of unique business...</p>
                <div className='mx-5 mt-3'>
                  <a href='#contact' type="button" class="btn btn-info">More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><br />
    </div>
  )
}

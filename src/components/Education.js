import React from 'react'
import './Education.css'
import Logo from './img/circleimg.png'
export default function Education() {
  // const educations = [
  //   {
  //     id: 1,
  //     degreeName: "High School",
  //     collageName: "I have done high school from S.H.P.A H/S Chandipatti Bhagalpur, Bihar.",
  //     passingYears: 2012,
  //   },
  //   {
  //     id: 2,
  //     degreeName: "Intermediate",
  //     collageName: "I have done 12th Marwari Collage Bhagalpur, Bihar.",
  //     passingYears: 2015,
  //   },
  //   {
  //     id: 3,
  //     degreeName: "Bachelores of Computer of Application (BCA)",
  //     collageName: "I have done BCA from Marwari Collage Bhagalpur, Bihar.",
  //     passingYears: 2019,
  //   },
  //   {
  //     id: 4,
  //     degreeName: "Master of Computer of Application (MCA)",
  //     collageName: "I have done MCA from L.N.C.T Collage of Bhopal.",
  //     passingYears: 2022,
  //   },
  // ]
  return (
    <div id='' className=''>
      {/* <div className="text-center bg-success mt-4"> */}
      <br />
      <h1 className='text-center' style={{ color: 'rgba(0,255,255)', fontFamily: 'Playfair Display, serif' }}>Education</h1>
      {/* </div> */}
      <div class="timelines text-center">
        <div class=" cont left-cont">
          <img src={Logo} alt="" />
          <div class="text-box">
            <h5 class="" style={{ fontFamily: 'Playfair Display, serif' }}>High Schools</h5>
            <p class="">S.H.P.A H/S Chandipatti Bhagalpur, Bihar</p>
            <small class="">2012</small>
            <span class="left-cont-arrow"></span>
          </div>
        </div>
        <div class=" cont right-cont">
          <img src={Logo} alt="" />
          <div class="text-box">
            <h5 class="" style={{ fontFamily: 'Playfair Display, serif' }}>Intermediate</h5>
            <p class="">Marwari Collage Bhagalpur, Bihar</p>
            <small class="">2015</small>
            <span class="right-cont-arrow"></span>
          </div>
        </div>
        <div class=" cont left-cont">
          <img src={Logo} alt="" />
          <div class="text-box">
            <h5 class="" style={{ fontFamily: 'Playfair Display, serif' }}>Bachelore of Computer Application (BCA)</h5>
            <p class="">Marwari Collage Bhagalpur, Bihar.</p>
            <small class="">2019</small>
            <span class="left-cont-arrow"></span>
          </div>
        </div>
        <div class=" cont right-cont">
          <img src={Logo} alt="" />
          <div class="text-box">
            <h5 class="" style={{ fontFamily: 'Playfair Display, serif' }}>Master of Computer Application (MCA)</h5>
            <p class="">L.N.C.T Collage of Bhopal, MP</p>
            <small class="">2022</small>
            <span class="right-cont-arrow"></span>
          </div>
        </div>
        <div class=" cont left-cont">
          <img src={Logo} alt="" />
          <div class="text-box text-center">
            <h5 class="" style={{ fontFamily: 'Playfair Display, serif' }}>Internship</h5>
            <p class="">JSpider Noida</p>
            <p class="">Full Stack Developer</p>
            <small class="">2022-2023</small>
            <span class="left-cont-arrow"></span>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

import React from 'react'
import UiImg from './img/ui.png';
import FrontEndImg from './img/frontend.png';
import BackEndImg from './img/backend.png';
import FullStackImg from './img/fullstack.webp';
export default function Service() {
  const skills = [
    {
      id: 1,
      languageImg: UiImg,
      language_name: 'UI Design',
      language_discription: 'User interface (UI) design is the process of creating the look and feel of interfaces for software and computerized devices.'
    },
    {
      id: 2,
      languageImg: FrontEndImg,
      language_name: 'Frontend Developer',
      language_discription: 'Front-end development of the graphical user interface of a website use of HTML, CSS, and JavaScript.'
    },
    {
      id: 3,
      languageImg: BackEndImg,
      language_name: 'Back End Developer',
      language_discription: 'The back end of a website is the technology that processes requests, generates responses, and sends them to the client.'
    },
    {
      id: 4,
      languageImg: FullStackImg,
      language_name: 'Full Stack Developer',
      language_discription: 'A full-stack developer is a software engineer who builds and maintains both the front-end and back-end of a website or application'
    },
  ]


  return (
    <div id='service' className='' style={{ background: '#151515' }} >
      <div className="container text-center"> <br />
        <h1
          className="text-center mb-4"
          style={{ color: 'rgba(0,255,255)', fontFamily: 'Playfair Display, serif' }}>Our Service
        </h1>
        <div className="timeline">
          <div className="row no-gutters mb-3">
            {/* Project one */}
            {
              skills.map(skill => (
                <div key={skill.id} className="col-12 col-md-3 mb-2">
                  <div className="card border-light mb-3">
                    <div className="card-body">
                      <div className='text-center'>
                        <img src={skill.languageImg} className="w-50" alt="Profile Picture" />
                      </div>
                      <h5
                        className="card-title"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                        {skill.language_name}
                      </h5>
                      <p className="card-text mt-2">{skill.language_discription}</p>
                      <a type="button" class="btn btn-info ms-2">More</a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

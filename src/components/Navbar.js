import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark " style={{ background: '#000000' }}>
        <div class="container">
          <a class="navbar-brand " href="/">
            <span className='fs-2'
              style={{
                color: '#22f8d1',
                fontFamily: 'Baskervville SC, serif',
                FontFaceSet: 'normal'
              }}>Mithun</span>&nbsp;
            <span className='fs-3' style={{
              fontFamily: 'Baskervville SC, serif',
              FontFaceSet: 'normal'
            }}>Kumar</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#edu">MY EDUCATION</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#project">PROJECTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#service">SERVICE</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#contact">CONTACT</a>
              </li>

              {/* <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

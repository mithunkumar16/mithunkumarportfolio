import React from 'react';

export default function Footer() {
  return (
    <footer className="text-white text-center p-3 bt-4">
      <div className="container">
        <div className=''>
          <a type="button" class="btn btn-outline-info rounded-circle">
            <i class="fa-brands fa-linkedin-in"></i></a>
          <a type="button" class="btn btn-outline-info rounded-circle ms-2">
            <i class="fa-brands fa-github"></i></a>
          <a type="button" class="btn btn-outline-info rounded-circle ms-2">
            <i class="fa-brands fa-youtube"></i></a>
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} Mithun. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

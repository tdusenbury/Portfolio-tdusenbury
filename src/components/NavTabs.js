import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar justify-end space-x-3">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'btn btn-outline' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'btn btn-outline' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'btn btn-outline' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'btn btn-outline' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'btn btn-outline' : 'nav-link'}
          >
            Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;

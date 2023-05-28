import React, { useState } from 'react';
import NavBar from './NavBar';
import Header from './Header';
//import '.styles/style.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header/>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()} 
      <Footer/>
    
    </div>
  );
}

export default PortfolioContainer;
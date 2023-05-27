import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './component/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()} 
    <Footer/>
    
    </div>
  );
}

export default App;

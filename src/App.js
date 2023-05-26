import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
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

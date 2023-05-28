import React from 'react';


function Header({currentPage, handlePageChange}) {
    return (
        <div className='header'>
            <div className='header_logo'>
                <h1> HEADER </h1>
              
            </div>
            {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
        </div>
    )
}

export default Header;
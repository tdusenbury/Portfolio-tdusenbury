import React from 'react';
import NavTabs from './NavTabs';


function Header({currentPage, handlePageChange}) {
    return (
        <div className='container'>
            <div>
                logo
            </div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
}

export default Header;
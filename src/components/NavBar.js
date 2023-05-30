import React from 'react';
import NavTabs from './NavTabs'


function NavBar({ currentPage, handlePageChange }) {
    return (
        <div className='bg-accent-focus'>
            <div>
                <h2>Tamara "T" Dusenbury</h2>
               <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> 
            </div>
        </div>
    )
}

export default NavBar;
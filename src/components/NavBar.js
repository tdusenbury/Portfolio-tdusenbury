import React from 'react';
import NavTabs from './NavTabs'


function NavBar({ currentPage, handlePageChange }) {
    return (
        <div className='text-top bg-accent-focus text-xl'>
            <div>
                <h2>Tamara "T" Dusenbury</h2>
                
               <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> 
            </div>
        </div>
    )
}

export default NavBar;
import React from 'react';
import NavTabs from './NavTabs'


function NavBar({ currentPage, handlePageChange }) {
    return (
        <div>
            <div>
                <h2>NAVBAR</h2>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </div>
    )
}

export default NavBar;
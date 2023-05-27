import React from 'react';
import NavTabs from './NavTabs';

function Footer({ currentPage, handlePageChange }) {
    return (
        <div>
            <div>
                <h3>Footer</h3>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </div>
    )
}

export default Footer;
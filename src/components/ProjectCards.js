import React from 'react';
import NavTabs from './NavTabs';

function ProjectCards({currentPage, handlePageChange}) {
    return (
        <div>
            <div>
                <h2>Title of Project</h2>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </div>
    )
}

export default ProjectCards;
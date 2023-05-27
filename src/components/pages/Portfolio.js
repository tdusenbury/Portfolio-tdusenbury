import React from 'react';
import ProjectCards from '../components/ProjectCards';

function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="container">
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>

            </div>
        </div>
    );
}

export default Portfolio;
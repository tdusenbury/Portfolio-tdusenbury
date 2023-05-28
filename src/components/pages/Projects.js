import React from 'react';
import ProjectCards from '../ProjectCards';

function Projects() {
    return (
        <div>
            <h1>PROJECTS PAGE</h1>
            <div className="container">
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>

            </div>
        </div>
    );
}

export default Projects;
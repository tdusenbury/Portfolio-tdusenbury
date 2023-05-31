import React from "react";
import resume from "../assets/resume.pdf";
import tdresume from "../images/tdresume.png";

function Resume() {
    return (
        <div className="font-sans flex flex-col items-center">
            <a
                    href={resume}
                    download="resume"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-info mt-10 mx-44"
                >
                   
                    Click Here to Download Resume
           
            </a>
            <img
                className="max-w-screen-md mt-5"
                src={tdresume}
                alt="Resume for Tamara Dusenbury"
                height="10"
            />
            </div>
                
        
    );
}

export default Resume;

import React from "react";

function Project(props) {
    const img = require(`./images/${props.img}`);
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-5 mr-10 ml-10 mb-5 ">
            <figure>
                <img 
                    src={img}
                    alt={props.alt}
                />
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title">{props.name}</h2>
                <p>{props.description}</p>
                <a 
                    className="card-actions" 
                    target="_blank" 
                    rel="noreferrer"
                    href={props.site}>
                    <button className="btn btn-outline">
                        View Site Here
                    </button>
                </a>
                <a 
                    className="card-actions"
                    target="_blank"
                    rel="noreferrer"
                    href={props.github}>
                    <button className="btn btn-outline">
                        View GitHub
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Project;

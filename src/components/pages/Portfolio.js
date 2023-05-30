import React from "react";
import Project from "../Project";

function Portfolio() {
    const cardData = [
        {
            img: "DirtyDozen.png",
            name: "Dirty Dozen",
            alt: "Dirty Dozen",
            description: `12 Interesting Facts About the Country a Movie was
            Filmed In`,
            site: "https://berkeleycodingmomma.github.io/dirty-dozen-team-project/",
            github: "https://github.com/Berkeleycodingmomma/dirty-dozen-team-project",
        },
        {
            img: "DirtyDozen.png",
            name: "Dirty Dozen",
            alt: "Dirty Dozen",
            description: `12 Interesting Facts About the Country a Movie was
            Filmed In`,
            site: "https://berkeleycodingmomma.github.io/dirty-dozen-team-project/",
            github: "https://github.com/Berkeleycodingmomma/dirty-dozen-team-project",
        },
        {
            img: "DirtyDozen.png",
            name: "Dirty Dozen",
            alt: "Dirty Dozen",
            description: `12 Interesting Facts About the Country a Movie was
            Filmed In`,
            site: "https://berkeleycodingmomma.github.io/dirty-dozen-team-project/",
            github: "https://github.com/Berkeleycodingmomma/dirty-dozen-team-project",
        },
        {
            img: "DirtyDozen.png",
            name: "Dirty Dozen",
            alt: "Dirty Dozen",
            description: `12 Interesting Facts About the Country a Movie was
            Filmed In`,
            site: "https://berkeleycodingmomma.github.io/dirty-dozen-team-project/",
            github: "https://github.com/Berkeleycodingmomma/dirty-dozen-team-project",
        },
        {
            img: "DirtyDozen.png",
            name: "Dirty Dozen",
            alt: "Dirty Dozen",
            description: `12 Interesting Facts About the Country a Movie was
            Filmed In`,
            site: "https://berkeleycodingmomma.github.io/dirty-dozen-team-project/",
            github: "https://github.com/Berkeleycodingmomma/dirty-dozen-team-project",
        },
        {
            img: "DirtyDozen.png",
            name: "Dirty Dozen",
            alt: "Dirty Dozen",
            description: `12 Interesting Facts About the Country a Movie was
            Filmed In`,
            site: "https://berkeleycodingmomma.github.io/dirty-dozen-team-project/",
            github: "https://github.com/Berkeleycodingmomma/dirty-dozen-team-project",
        },
    ];
    return (
        <div className="flex justify-center flex-wrap">
            {cardData.map((project, index) => (
                <Project
                    key={index}
                    img={project.img}
                    name={project.name}
                    alt={project.alt}
                    description={project.description}
                    site={project.site}
                    github={project.github}
                    />
            ))}
        </div>
    )
            }

//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <figure>
//                     <img
//                         src={dirtyDozen}
//                         alt="The Dirty Dozen Movie Trivia Facts Website"
//                     />
//                 </figure>
//                 <div className="card-body items-center text-center">
//                     <h2 className="card-title">The Dirty Dozen</h2>
//                     <p>
//                         12 Interesting Facts About the Country a Movie was
//                         Filmed In
//                     </p>
//                     <div className="card-actions">
//                         <button className="btn btn-primary">
//                             View Site Here
//                         </button>
//                         <button className="btn btn-primary">View GitHub</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <figure>
//                     <img src={hopsHaven} alt="Hops Haven Beer Lovers Website" />
//                 </figure>
//                 <div className="card-body items-center text-center">
//                     <h2 className="card-title">Hops Haven</h2>

//                     <p>Love Beer? Keep Track Here!</p>

//                     <div className="card-actions">
//                         <button className="btn btn-primary">
//                             View Site Here
//                         </button>
//                         <button className="btn btn-primary">View GitHub</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Portfolio;

import React from "react";
import Project from "../Project";

function Portfolio() {
    const cardData = [
        {
            img: "ClubHubWithSlogan.gif",
            name: "Club Hub",
            alt: "Club Hub",
            description: `Club Hub is an app to help a group of people in a club or organization to communicate about their events. `,
            site: "https://clubhub.herokuapp.com/",
            github: "https://github.com/tdusenbury/Club-Hub",
        },
        {
            img: "hopshaven.png",
            name: "Hops Haven",
            alt: "Hops Haven",
            description: `An app to find new beers and to keep a personalized list of favorites and beers to try.`,
            site: "https://hops-haven.herokuapp.com/",
            github: "https://github.com/CodeNameNoah/Hops-Haven",
        },       
        {
            img: "Empty Note Taker Page.png",
            name: "Note Taker",
            alt: "Note Taker",
            description: `This project is a Note Taker that uses Express.js on the back end to save and retrieve note data from a JSON file.`,
            site: "https://t-notetaker.herokuapp.com/",
            github: "https://github.com/tdusenbury/Note-Taker-Using-Express.js",
        },
        {
            img: "bloghomepage.png",
            name: "Book Blog Site",
            alt: "Book Blog Site",
            description: `A Blog celebrating the intersection of books and technology.`,
            site: "https://t-mvc-tech-blog.herokuapp.com/",
            github: "https://github.com/tdusenbury/MVC-Tech-Blog",
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
            img: "Screen with cities.png",
            name: "Weather Dashboard",
            alt: "Weather Dashboard",
            description: `This is a weather application that can store multiple previously searched locations around the world.`,
            site: "https://tdusenbury.github.io/Weather-Dashboard/",
            github: "https://github.com/tdusenbury/Weather-Dashboard",
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

export default Portfolio;

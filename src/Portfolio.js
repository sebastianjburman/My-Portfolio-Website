import React from 'react';
import "./Portfolio.css"
import ProjectCard from "./ProjectCard"


function Portfolio(props) {
    return (
        <div className = "portfolioContainer">
            <h1 className= "allProjects h1">All Projects</h1>
            <div className= "allProjectsContainer">
                {/*Map through all my project newest first and create a card for last 4 projects*/}
                {props.allProjects.reverse().map(x => {
                    return <ProjectCard name={x.name}
                        photo={x.photo} paragraph={x.paragraph}
                        website={x.website} githubUrl={x.githubUrl}></ProjectCard>
                })}
            </div>
        </div>
    );
}

export default Portfolio;
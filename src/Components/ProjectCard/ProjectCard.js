import React from 'react';
import "./ProjectCard.css"
import githubIcon from "../../Svgs/githubicon.svg"

function ProjectCard(props) {
    return (
        <div className="projectCardContainer">
            <div className = "hoverOff">
                <img className = "projectImage" alt = "ProjectImg" src = {props.photo}></img>
                <h3 className= "cardTitle">{props.name}</h3>
            </div>
            <div className = "hoverOn">
                <p className= "cardParagraph">{props.paragraph}</p>
                <a className="visitWebsiteLink" href={props.website} rel="noreferrer" target="_blank">Visit Website</a>
                <a href={props.githubUrl} rel="noreferrer" target="_blank" style = {{marginTop:"20px"}}>
                    <img src={githubIcon} alt = "githubIcon"></img>
                </a>   
                <p style={{ color: "white"}}>GitHub</p>
            </div>
        </div>
    );
}

export default ProjectCard;
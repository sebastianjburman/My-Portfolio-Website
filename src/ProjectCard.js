import React from 'react';
import "./ProjectCard.css"
import githubIcon from "./githubicon.svg"
import reactCalImg from "./reactCalculatorImg.png"

function ProjectCard(props) {
    return (
        <div class="projectCardContainer">
            <div className = "hoverOff">
                <img className = "projectImage" src = {props.photo}></img>
                <h3 className= "cardTitle">{props.name}</h3>
            </div>
            <div className = "hoverOn">
                <p className= "cardParagraph">{props.paragraph}</p>
                <a className="visitWebsiteLink" href={props.website} target="_blank">Visit Website</a>
                <a href={props.githubUrl} target="_blank" style = {{marginTop:"20px"}}>
                    <img src={githubIcon}></img>
                </a>   
                <p style={{ color: "white"}}>GitHub</p>
            </div>
        </div>
    );
}

export default ProjectCard;
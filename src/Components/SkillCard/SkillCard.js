import React from 'react';
import "./SkillCard.css"
function SkillCard(props) {
    return (
        <div className = "skillCardContainer">
            <img src = {props.svg} alt = "skillImg"></img>
            <p>{props.iconName}</p>
        </div>
    );
}

export default SkillCard;
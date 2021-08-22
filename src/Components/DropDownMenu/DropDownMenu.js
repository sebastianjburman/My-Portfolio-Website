import React from 'react';
import "./DropDownMenu.css"

function DropDownMenu(props) {
    return (
        <div className = "dropDownMenuContainer">
            <button onClick={() => { props.setView("home") 
                props.setDropDown(false)}}>Home</button>

            <button onClick={() => { props.setView("portfolio") 
                props.setDropDown(false)}}>Portfolio</button>

            <button onClick={() => { props.setView("aboutme") 
                props.setDropDown(false) }}>About Me</button>
                
            <button onClick={() => { props.setView("contact") 
                props.setDropDown(false)}}>Contact</button>
        </div>
    );
}

export default DropDownMenu;
import React from 'react';
import "./DropDownMenu.css"

function DropDownMenu(props) {
    return (
        <div className="dropDownMenuContainer">
            <button onClick={() => {
                window.location.href = "./home"
                props.setDropDown(false)
            }}>Home</button>

            <button onClick={() => {
                window.location.href = "./portfolio"
                props.setDropDown(false)
            }}>Portfolio</button>

            <button onClick={() => {
                window.location.href = "./aboutme"
                props.setDropDown(false)
            }}>About Me</button>

            <button onClick={() => {
                window.location.href = "./contact"
                props.setDropDown(false)
            }}>Contact</button>
        </div>
    );
}

export default DropDownMenu;
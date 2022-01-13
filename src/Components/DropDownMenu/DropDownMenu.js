import React from 'react';
import "./DropDownMenu.css"
import { useNavigate } from 'react-router';


function DropDownMenu(props) {
    const navigate = useNavigate();
    return (
        <div className="dropDownMenuContainer">
            <button onClick={() => {
                navigate("../home")
                props.setDropDown(false)
            }}>Home</button>

            <button onClick={() => {
                navigate("../portfolio")
                props.setDropDown(false)
            }}>Portfolio</button>

            <button onClick={() => {
                navigate("../aboutme")
                props.setDropDown(false)
            }}>About Me</button>

            <button onClick={() => {
                navigate("../contact")
                props.setDropDown(false)
            }}>Contact</button>
        </div>
    );
}

export default DropDownMenu;
import React from 'react';
import "./NavBar.css"
import nameLogo from "../../Images/nameLogo.png"
import dropDownSvg from "../../Svgs/dropDown.svg"
import deleteDropDownIcon from "../../Svgs/delete.svg"
import { useNavigate } from 'react-router';


function NavBar(props) {
    const navigate = useNavigate();

    //Changes button class based on which pass user is on
    function highlightBasedOnPage(buttonPage) {
        const currentPage = window.location.pathname.substring(1);
        if (currentPage === buttonPage) {
            return "navBarButtonHighlighted"
        }
        else {
            return "navBarButton"
        }
    }

    return (
        <div className="NavBarDiv">
            <img className="nameLogo" src={nameLogo} alt="Navbar Logo" onClick={() => navigate("../home")}></img>
            <button className={highlightBasedOnPage("home")} onClick={() => navigate("../home")}>Home</button>

            <button className={highlightBasedOnPage("portfolio")} onClick={() => navigate("../portfolio")}>Portfolio</button>

            <button className={highlightBasedOnPage("aboutme")} onClick={() => navigate("../aboutme")}>About Me</button>

            <button className={highlightBasedOnPage("contact")} onClick={() => navigate("../contact")}>Contact</button>

            <button className="menuLogo" onClick={() => props.activateDropDown()}>
                {/*Based on dropdown menu state prop the icon changes*/}
                {(props.dropDown === true) ? <img alt="deleteIcon" src={deleteDropDownIcon}
                    className="dropDownIconImage"></img>
                    : <img src={dropDownSvg} className="dropDownIconImage" alt="dropDownIcon"></img>}
            </button>
        </div>
    );
}

export default NavBar;
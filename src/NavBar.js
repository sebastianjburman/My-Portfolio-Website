import React from 'react';
import "./NavBar.css"
import nameLogo from "./nameLogo.png"
import dropDownSvg from "./dropDown.svg"
import deleteDropDownIcon from "./delete.svg"


function NavBar(props) {

    //Hover topnav button based on what page user is on
    const hoverViewBackGround = (currentView, pageState) => {
        let color = (currentView === pageState) ? "rgb(215,84,116)" :"transparent"
        return color
    }
    //Change topnav button color based what page user is on
    const hoverViewColor = (currentView, pageState) => {
        let color = (currentView === pageState) ? "white" : "white"
        return color
    }
    

    return (
        <div className = "NavBarDiv">
            <img className="nameLogo" src={nameLogo} onClick={() => { props.setView("home") }}></img>
            <button className = "homeButton" onClick={() => { props.setView("home") }} 
                style={{ color: hoverViewColor(props.view, "home"), 
                backgroundColor: hoverViewBackGround(props.view, "home")}}>Home
            </button>

            <button className = "portfolioButton"onClick={() => { props.setView("portfolio") }} 
                style={{ color: hoverViewColor(props.view, "portfolio"),
                backgroundColor: hoverViewBackGround(props.view, "portfolio")
            }} >Portfolio</button>

            <button className="aboutMeButton" onClick={() => { props.setView("aboutme") }}
                style={{
                    color: hoverViewColor(props.view, "aboutme"),
                    backgroundColor: hoverViewBackGround(props.view, "aboutme")
                }} >About Me</button>

            <button className="contactButton" onClick={() => { props.setView("contact") }}
                style={{
                    color: hoverViewColor(props.view, "contact"),
                    backgroundColor: hoverViewBackGround(props.view, "contact")
                }} >Contact</button>
                
            <button className = "menuLogo" onClick = {()=>props.activateDropDown()}>
                {/*Based on dropdown menu state prop the icon changes*/}
                {(props.dropDown === true) ? <img src={deleteDropDownIcon} 
                className= "dropDownIconImage"></img>
                    : <img src={dropDownSvg} className="dropDownIconImage"></img>}
            </button>    
        </div>
    );
}

export default NavBar;
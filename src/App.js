import './App.css';
import NavBar from "./NavBar"
import { useState } from "react"
import Home from "./Home"
import Portfolio from "./Portfolio"
import AboutMe from "./AboutMe"
import Contact from "./Contact"
import DropDownMenu from "./DropDownMenu"

//All Project images
import reactCalImg from "./reactCalculatorImg.png"
import weatherAppImg from "./weatherapp.png"


//All my projects as objects
const allProjects = [{
  name: "Calculator", photo: reactCalImg,
  paragraph: "A simple calculator built with react state.",
  website: null,
  githubUrl: "https://github.com/sebastianjburman/Simple-React-Calculator"
}, {
    name: "Weather App", photo: weatherAppImg,
    paragraph: "A simple react weather app using the open weather api.",
  website: "https://sebastianweatherapp.netlify.app/",
  githubUrl: "https://github.com/sebastianjburman/React-Weather-App"
  }]


function App() {
  const [view, setView] = useState("home")
  const [dropDown, setDropDown] = useState(false)

  //diffrent component based on state change
  const currentView = ()=>{
    if (view === "home") {
      return <Home setView={setView} allProjects = {allProjects}></Home>
    }
    else if (view === "portfolio") {
      return <Portfolio allProjects={allProjects}></Portfolio>
    }
    else if (view === "aboutme") {
      return <AboutMe></AboutMe>   
    }
    else if (view === "contact"){
      return <Contact></Contact>
    }
  }

  //show dropDown if state is true
  const dropDownView = ()=>{
    if (dropDown === true) {
      return <DropDownMenu setView = {setView} setDropDown = {setDropDown}
      ></DropDownMenu>
      
    }
  }


  return (
    <div className="App">
      {dropDownView()}
      <NavBar setView = {setView} view = {view}
      activateDropDown = {()=>setDropDown(!dropDown)}
      dropDown={dropDown}
      ></NavBar>
      {currentView()}
      
      
    </div>
  );
}

export default App;

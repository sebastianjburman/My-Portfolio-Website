import './App.css';
import NavBar from "./Components/Navbar/NavBar"
import { useState } from "react"
import Home from "./Pages/HomePage/Home"
import Portfolio from "./Pages/PortfolioPage/Portfolio"
import AboutMe from "./Pages/AboutMePage/AboutMe"
import Contact from "./Pages/ContactPage/Contact"
import DropDownMenu from "./Components/DropDownMenu/DropDownMenu"

//All Projects
import allProjects from './AllProjectObjects';

function App() {
  const [view, setView] = useState("home")
  const [dropDown, setDropDown] = useState(false)

  //Diffrent component based on state change
  const currentView = () => {
    if (view === "home") {
      return <Home setView={setView} allProjects={allProjects}></Home>
    }
    else if (view === "portfolio") {
      return <Portfolio allProjects={allProjects}></Portfolio>
    }
    else if (view === "aboutme") {
      return <AboutMe></AboutMe>
    }
    else if (view === "contact") {
      return <Contact></Contact>
    }
  }

  //show dropDown if state is true
  const dropDownView = () => {
    if (dropDown === true) {
      return <DropDownMenu setView={setView} setDropDown={setDropDown}
      ></DropDownMenu>

    }
  }


  return (
    <div className="App">
      {dropDownView()}
      <NavBar setView={setView} view={view}
        activateDropDown={() => setDropDown(!dropDown)}
        dropDown={dropDown}
      ></NavBar>
      {currentView()}


    </div>
  );
}

export default App;

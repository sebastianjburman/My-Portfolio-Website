import './App.css';
import NavBar from "./Components/Navbar/NavBar"
import { useState } from "react"
import Home from "./Pages/HomePage/Home"
import Portfolio from "./Pages/PortfolioPage/Portfolio"
import AboutMe from "./Pages/AboutMePage/AboutMe"
import Contact from "./Pages/ContactPage/Contact"
import DropDownMenu from "./Components/DropDownMenu/DropDownMenu"
import { Routes, Route } from "react-router-dom";

//All Projects
import allProjects from './AllProjectObjects';


function App() {
  const [dropDown, setDropDown] = useState(false)

  //show dropDown if state is true
  const dropDownView = () => {
    if (dropDown === true) {
      return <DropDownMenu setDropDown={setDropDown}></DropDownMenu>

    }
  }
  return (
    <div className="App">
      {dropDownView()}
      <NavBar activateDropDown={() => setDropDown(!dropDown)} dropDown={dropDown}></NavBar>
      <Routes>
        <Route path="/" element={<Home allProjects={allProjects}></Home>} />
        <Route path="/home" element={<Home allProjects={allProjects}></Home>} />
        <Route path="/portfolio" element={<Portfolio allProjects={allProjects}></Portfolio>} />
        <Route path="/aboutme" element={<AboutMe></AboutMe>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="*" element={<Home allProjects={allProjects}></Home>} />

      </Routes>
    </div>
  );
}

export default App;

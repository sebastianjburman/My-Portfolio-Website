import React from 'react';
import "./AboutMe.css";
import SkillCard from '../../Components/SkillCard/SkillCard';

//Import svgs for skills div
import htmlSvg from "../../Svgs/html.svg"
import javascriptSvg from "../../Svgs/javascript.svg"
import reactSvg from "../../Svgs/react.svg"
import javaSvg from "../../Svgs/java.svg"
import vscodeSvg from "../../Svgs/vscode.svg"
import macPng from "../../Images/mac.png"
import cssSvg from "../../Svgs/css.svg"
import gitSvg from "../../Svgs/git.svg"
import mySqlSvg from "../../Svgs/mysql.svg"
import expressSvg from "../../Svgs/expressjs.svg"

function AboutMe() {
    return (
        <div className="aboutMeContainer">
            <h1>About Me</h1>
            <div className="aboutMeParagraphContainer">
                <p className="aboutMeParagraph">
                    I'm a developer who loves solving complex issues. Currently, I am attending Indiana University Southeast and pursuing my bachelor's in computer science. I am passionate about coding and solving problems. I'm excited to work with other programmers and to learn new skills and tools!
                </p>
            </div>
            <h1>Skills</h1>
            <div className="skillsContainer">
                {/* Pass in svg file and name as props*/}
                <SkillCard svg={htmlSvg} iconName="HTML"></SkillCard>
                <SkillCard svg={cssSvg} iconName="CSS"></SkillCard>
                <SkillCard svg={javascriptSvg} iconName="Javascript"></SkillCard>
                <SkillCard svg={reactSvg} iconName="React"></SkillCard>
                <SkillCard svg={vscodeSvg} iconName="VS Code"></SkillCard>
                <SkillCard svg={javaSvg} iconName="Java"></SkillCard>
                <SkillCard svg={gitSvg} iconName="Git"></SkillCard>
                <SkillCard svg={mySqlSvg} iconName="MySQL"></SkillCard>
                <SkillCard svg={expressSvg} iconName="Express Js"></SkillCard>
                <SkillCard svg={macPng} iconName="Mac"></SkillCard>
            </div>
        </div>
    );
}

export default AboutMe;
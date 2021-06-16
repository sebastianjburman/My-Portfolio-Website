import React from 'react';
import "./AboutMe.css";
import SkillCard from './SkillCard';

//Import svgs for skills div
import htmlSvg from "./html.svg"
import javascriptSvg from "./javascript.svg"
import reactSvg from "./react.svg"
import firebaseSvg from "./firebase.svg"
import vscodeSvg from "./vscode.svg"
import macPng from "./mac.png"
import cssSvg from "./css.svg"
import gitSvg from "./git.svg"

function AboutMe() {
    return (
        <div className = "aboutMeContainer">
            <h1>About Me</h1>
            <div className = "aboutMeParagraphContainer">
                <p className = "aboutMeParagraph">
                I'm a front-end web developer who loves creating complex UI. 
                Currently, I am attending Indiana University Southeast and getting 
                my bachelor's in computer science. I am passionate about coding 
                and solving problems.  I am excited to work with other 
                amazing programmers and learn so much more!
                </p>
            </div>
            <h1>Skills</h1>
            <div className = "skillsContainer">
                {/* Pass in svg file and name as props*/}
                <SkillCard svg={htmlSvg} iconName = "HTML"></SkillCard>
                <SkillCard svg={cssSvg} iconName="CSS"></SkillCard>
                <SkillCard svg={javascriptSvg} iconName="Javascript"></SkillCard>
                <SkillCard svg={reactSvg} iconName="React"></SkillCard>
                <SkillCard svg={firebaseSvg} iconName="Firebase"></SkillCard>
                <SkillCard svg={vscodeSvg} iconName="VS Code"></SkillCard>
                <SkillCard svg = {gitSvg} iconName = "Git"></SkillCard>
                <SkillCard svg={macPng} iconName="Mac"></SkillCard>
            </div>
        </div>
    );
}

export default AboutMe;
//All Project images
import reactCalImg from "./ProjectImages/reactCalculatorImg.png"
import weatherAppImg from "./ProjectImages/weatherapp.png"
import budgetAppImg from "./ProjectImages/budgetAppImage.png"
import flappyBirdCloneImg from "./ProjectImages/flappyBirdClone.gif"

//All my projects as objects
const allProjects = [{
    name: "Calculator", photo: reactCalImg,
    projectId: "h4k2j3",
    paragraph: "A simple calculator built with react state.",
    website: "https://sebastianreactcalculator.netlify.app/",
    githubUrl: "https://github.com/sebastianjburman/Simple-React-Calculator"
}, {
    name: "Weather App", photo: weatherAppImg,
    projectId: "adsdj3",
    paragraph: "A simple react weather app using the open weather api.",
    website: "https://sebastianweatherapp.netlify.app/",
    githubUrl: "https://github.com/sebastianjburman/React-Weather-App"
},
{
    name: "Budget Application", photo: budgetAppImg,
    projectId: "qcqwlo",
    paragraph: "A responsive budget application created in react. Uses local storage to save data.",
    website: "https://sebastianbudgetapplication.netlify.app/",
    githubUrl: "https://github.com/sebastianjburman/budget-application"
},
{
    name: "Flappy Bird Clone", photo: flappyBirdCloneImg,
    projectId: "md4dk3",
    paragraph: "Flappy bird clone created in java using libgdx. Click r to respawn.",
    website: null,
    githubUrl: "https://github.com/sebastianjburman/Flappy-Bird_Clone"
}
]

export default allProjects
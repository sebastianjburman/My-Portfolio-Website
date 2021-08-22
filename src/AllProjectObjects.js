//All Project images
import reactCalImg from "./ProjectImages/reactCalculatorImg.png"
import weatherAppImg from "./ProjectImages/weatherapp.png"
import pizzaWebsiteImg from "./ProjectImages/pizzaWebsiteImg.png"
import budgetAppImg from "./ProjectImages/budgetAppImage.png"

//All my projects as objects
const allProjects = [{
    name: "Calculator", photo: reactCalImg,
    paragraph: "A simple calculator built with react state.",
    website: "https://sebastianreactcalculator.netlify.app/",
    githubUrl: "https://github.com/sebastianjburman/Simple-React-Calculator"
}, {
    name: "Weather App", photo: weatherAppImg,
    paragraph: "A simple react weather app using the open weather api.",
    website: "https://sebastianweatherapp.netlify.app/",
    githubUrl: "https://github.com/sebastianjburman/React-Weather-App"
}, {
    name: "Pizza Website", photo: pizzaWebsiteImg,
    paragraph: "A simple pizza website made with react.",
    website: "https://websitepizza.netlify.app/",
    githubUrl: "https://github.com/sebastianjburman/Pizza-Website"
},
{
    name: "Budget Application", photo: budgetAppImg,
    paragraph: "A responsive budget application created in react. Uses local storage to save data.",
    website: "https://sebastianbudgetapplication.netlify.app/",
    githubUrl: "https://github.com/sebastianjburman/budget-application"
}
]

export default allProjects
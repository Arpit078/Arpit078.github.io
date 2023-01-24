
// this file is modular and imports other files.
//import your components
import Home from "../components/Home.js"
import Projects from "../components/Projects.js"
import Navbar from "../components/Navbar.js"

//load your components in the sessionStorage
window.sessionStorage.setItem("Home",Home)
window.sessionStorage.setItem("Projects",Projects)
window.sessionStorage.setItem("Navbar",Navbar)

//write the homepage on index.html
const dom = document.getElementById('virtual-dom');
const navbar = document.getElementById('navbar')
dom.innerHTML = Home
navbar.innerHTML = Navbar






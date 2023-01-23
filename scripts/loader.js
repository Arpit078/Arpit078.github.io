
// this file is modular and imports other files.
//import your components
import Home from "../components/Home.js"
import more from "../components/more.js"

//load your components in the sessionStorage
window.sessionStorage.setItem("Home",Home)
window.sessionStorage.setItem("more",more)

//write the homepage on index.html
const dom = document.getElementById('virtual-dom');
dom.innerHTML = Home





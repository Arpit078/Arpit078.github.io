import Navbar from "../components/Navbar.js"
let ProjectDatabase = []
await fetch('../projects/data.json')
    .then((response) => response.json())
    .then((json) => ProjectDatabase=json);

let Projects = /*html*/`
    <div class="text">
    <div id="headAndNav">
        <h1 class="title">Projects.</h1>
        <div>${Navbar}</div>
    </div>
    
`

for(let i =0;i<ProjectDatabase.length;i++){
    const projectObj = `
    <div class="content">
    <p class="subHead">${ProjectDatabase[i].project_name}</p>
    <p class="paragraph">${ProjectDatabase[i].description}</p>
    <p class="highlight">
    Github Repository :
    <a href="${ProjectDatabase[i].github}" class="link paragraph">${ProjectDatabase[i].github.slice(28)}</a> 
    </p>
    <p class="highlight">
    Live Preview :
    <a href="${ProjectDatabase[i].live||`#Projects`}" class="link paragraph">${ProjectDatabase[i].live||"no live preview"}</a>
    </p>
    <p class="highlight">
    Dated : 
    <span class="paragraph">${ProjectDatabase[i].date}</span>
    </p>
</div>
`
    Projects = Projects + projectObj; 
    if(i==ProjectDatabase.length-1){
        Projects = Projects+`</div>`
    }      
}
export default Projects
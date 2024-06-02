async function fetchProjects(){
    let ProjectDatabase = []
    await fetch('../../data/projects_data.json')
        .then((response) => response.json())
        .then((json) => ProjectDatabase=json);

    let ProjectsFetch = ''


    for(let i =0;i<ProjectDatabase.length;i++){
        let content = contentGen(ProjectDatabase[i])
        const projectObj = `
        <div class="content">
        <p class="subHead">${ProjectDatabase[i].project_name}</p>
        <p class="paragraph">${content}</p>
        <p class="highlight">
        Github Repository :
        <a href=${ProjectDatabase[i].github} class="link paragraph">${ProjectDatabase[i].github}</a> 
        </p>
        <p class="highlight">
        Dated : 
        <span class="paragraph">${ProjectDatabase[i].date}</span>
        </p>
    </div>
    `
        ProjectsFetch = ProjectsFetch + projectObj ; 
    }
    // console.log(ProjectDatabase)
    // return ProjectsFetch
    return [ProjectsFetch,ProjectDatabase]

}
// fetchProjects().then((res)=>{

//     document.getElementById("project").innerHTML =  res
// })

if(cache[project]){
    document.getElementById("project").innerHTML =  cache[project]
}
else{
    fetchProjects().then(([res, project]) => {
        cache[project] = res;
        document.getElementById("project").innerHTML = res;
    });  
}
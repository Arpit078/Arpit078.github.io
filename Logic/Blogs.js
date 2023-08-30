async function fetchProjects(){
    let blogDatabase = []
    await fetch('../../data/blogs_data.json')
        .then((response) => response.json())
        .then((json) => blogDatabase=json);

    let ProjectsFetch = ''


    for(let i =0;i<blogDatabase.length;i++){
        const projectObj = `
            <div class="content">
                <p class="subHead">${blogDatabase[i].blog_title}</p>
                <p class="paragraph">${blogDatabase[i].description}</p>
                <p class="highlight">
                Dated :
                <span class="paragraph">${blogDatabase[i].date}</span>
                </p>
            </div>
    `
        ProjectsFetch = ProjectsFetch + projectObj ; 
    }
    console.log(blogDatabase)
    return ProjectsFetch
}
fetchProjects().then((res)=>{
    document.getElementById("blog").innerHTML =  res
})

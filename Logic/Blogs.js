function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() +  1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  
//   console.log(formatDate(date)); // Outputs a string in the format "YYYY-MM-DD"
  
function updateTechBox(data){
    // let divs = ``;
    // for(let i=0;i<data.tech.length;i++){
    //     divs = divs + `<div class="tech">${data.tech[i]}</div>`
    // }
    // document.getElementById("problem-count-week").innerHTML = data.weekly
    const date = new Date(); // Current date
    const comparedate = formatDate(date)
    let count = 0
    for (let i =  0; i < data.length; i++) {
        const item = data[i];
        if (item.date.slice(0,  7) === comparedate.slice(0,  7)) {
            for (let j =  0; j < item.blocks.length; j++) {
                const block = item.blocks[j];
                if (block.component === "bulleted_list_item") {
                    count++;
                }
            }
        }
    }
    document.getElementById("problem-count-monthly").innerHTML = count
    // document.getElementById("tech-used").innerHTML = divs
}

async function fetchProjects(){
    let blogDatabase = []
    await fetch('../../data/blogs_data.json')
        .then((response) => response.json())
        .then((json) => blogDatabase=json);

    updateTechBox(blogDatabase)
    let ProjectsFetch = ''


    for(let i =0;i<blogDatabase.length;i++){
        let content =``
        let number = 1
        for(let j=0;j<blogDatabase[i].blocks.length;j++){
            let el = blogDatabase[i].blocks[j]
            switch (el.component) {
                case "paragraph":
                    content = content + el.text + '<br><br>'
                    break;
                case "bulleted_list_item":
                    content = content +'&#149; ' + el.text + '<br>'
                    break;
                case "numbered_list_item":
                    content = content + '' + `${number}. ` + el.text + '<br>'
                    number +=1
                    break;
                case "code":
                    code_text = el.text .replace(/\\/g, '""') // Replace \ with ""
                                        .replace(/\n/g, '<br>') // Replace \n with <br>
                                        .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'); // Replace \t with HTML tab space
                    content = content+ '<div class="code_block">' + code_text +'</div>'+ '<br>'
                    break;
            
                default:
                    break;
            }
        }
        const projectObj = `
            <div class="content">
                <p class="subHead">${blogDatabase[i].title}</p>
                <p class="paragraph">${content}</p>
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

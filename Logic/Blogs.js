// import { contentGen } from "../scripts/dynamic.js"; 
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() +  1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  
//   console.log(formatDate(date)); // Outputs a string in the format "YYYY-MM-DD"
  
function countFunc(data){
    const date = new Date(); // Current date
    const comparedate = formatDate(date)
    let count = 0
    let countTotal = 0;
    for (let i =  0; i < data.length; i++) {
        const item = data[i];
        if (item.date.slice(0,  7) === comparedate.slice(0,  7)) {
            for (let j =  0; j < item.description.length; j++) {
                const block = item.description[j];
                if (block.component === "bulleted_list_item") {
                    count++;
                }

            }
        }
        for (let j =  0; j < item.description.length; j++) {
            const block = item.description[j];
            if (block.component === "bulleted_list_item") {
                countTotal++;
            }

        }
    }
    return [count, countTotal]
}
function updateTechBox(count,countTotal){
    // let divs = ``;
    // for(let i=0;i<data.tech.length;i++){
    //     divs = divs + `<div class="tech">${data.tech[i]}</div>`
    // }
    // document.getElementById("problem-count-week").innerHTML = data.weekly
    document.getElementById("problem-count-monthly").innerHTML = count
    document.getElementById("problem-count").innerHTML = countTotal
    // document.getElementById("tech-used").innerHTML = divs
}

async function fetchProjects(){
    let blogDatabase = []
    await fetch('../../data/blogs_data.json')
        .then((response) => response.json())
        .then((json) => blogDatabase=json);

    let ProjectsFetch = ''
    const [count,countTotal] = countFunc(blogDatabase)
    cache["countTotal"] = countTotal
    cache["count"] = count
    updateTechBox(count, countTotal);


    for(let i =0;i<blogDatabase.length;i++){
        let content = contentGen(blogDatabase[i])
       
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
    // console.log(blogDatabase)
    return [ProjectsFetch,blogDatabase]
}
if(cache[blog]){
    document.getElementById("blog").innerHTML =  cache[blog]
    updateTechBox(cache["count"],cache["countTotal"])
}
else{
    fetchProjects().then(([res, blogs]) => {
        cache[blog] = res;
        document.getElementById("blog").innerHTML = res;
    });  
}

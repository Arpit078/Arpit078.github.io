function dateString(date){
    if(date==="inf"){return "forever"}
    Date.prototype.yyyymmdd = function() {
        var mm = this.getMonth() + 1; // getMonth() is zero-based
        var dd = this.getDate();
      
        return [this.getFullYear(),
                (mm>9 ? '' : '0') + mm,
                (dd>9 ? '' : '0') + dd
               ].join('-');
      };
    return date.yyyymmdd();
}
  
function getNextWeekdays(x) {
    const today = new Date();
    let count = 0;

    while (count < x) {
        today.setDate(today.getDate() + 1); // Move one day forward
        const dayOfWeek = today.getDay(); // Get the day of the week (0 for Sunday, 1 for Monday,..., 6 for Saturday)
        count++;
        // // Check if the day is a weekday (Monday to Friday)
        // if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        //     count++;
        // }
    }

    return today;
}
function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return [d.getUTCFullYear(), weekNo];
}

function getAnalytics(blogs){
    let countTotal = 0; //76 questions from lC75
    let countCurrentWeek = 0;
    let countLastWeek = 0;
    blogs.forEach(blog => {
        let blogWeekNumber = getWeekNumber(new Date(blog.created_time))[1];
        let currentWeekNumber = getWeekNumber(new Date())[1];
        let lastWeekNumber = currentWeekNumber-1;
        blog.description.forEach(element=>{
            if(element.component === "bulleted_list_item"){
                countTotal++;
                if(blogWeekNumber===currentWeekNumber){
                    countCurrentWeek++;
                }
                if(blogWeekNumber===lastWeekNumber){
                    countLastWeek++;
                }
            }
        })
    });
    let questionsLeftInFinal450= 450 - countTotal + 76;
    let solvingRate = countLastWeek/7
    let expectedDatewrtLastWeek;
    if(solvingRate==0){
        expectedDatewrtLastWeek = "inf"
    }
    else{
        expectedDatewrtLastWeek = getNextWeekdays(questionsLeftInFinal450/solvingRate);
    }
    return {countTotal,countCurrentWeek,countLastWeek,expectedDatewrtLastWeek}
}
       
function updateTechBox(countTotal,countCurrentWeek,countLastWeek,expectedDatewrtLastWeek){
    // let divs = ``;
    // for(let i=0;i<data.tech.length;i++){
    //     divs = divs + `<div class="tech">${data.tech[i]}</div>`
    // }
    // document.getElementById("problem-count-week").innerHTML = data.weekly
    var elem = document.getElementById("myprogressBar");
    var width = (countCurrentWeek/24)*100;
    console.log(width)
    elem.style.width = width + "%";
    document.getElementById("problem-count-weekly").innerHTML = countCurrentWeek
    document.getElementById("problem-count").innerHTML = countTotal
    document.getElementById("questions-left").innerHTML = 450 - countTotal + 76
    document.getElementById("expected-date").innerHTML = dateString(expectedDatewrtLastWeek) 
    document.getElementById("problem-count-last-week").innerHTML = countLastWeek 
    // document.getElementById("tech-used").innerHTML = divs
}

async function fetchProjects(){
    let blogDatabase = []
    await fetch('../../data/blogs_data.json')
        .then((response) => response.json())
        .then((json) => blogDatabase=json);

    let ProjectsFetch = ''

    const {countTotal,countCurrentWeek,countLastWeek,expectedDatewrtLastWeek} = getAnalytics(blogDatabase)
    cache["countTotal"]=countTotal;
    cache["countCurrentWeek"]=countCurrentWeek;
    cache["countLastWeek"]=countLastWeek;
    cache["expectedDatewrtLastWeek"]=expectedDatewrtLastWeek;
    updateTechBox(countTotal,countCurrentWeek,countLastWeek,expectedDatewrtLastWeek)
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

// // Example usage:
// const futureDate = getNextWeekdays(3); // Find a date that is 3 weekdays away from today
// console.log(futureDate);



if(cache[blog]){
    document.getElementById("blog").innerHTML =  cache[blog]
    updateTechBox(cache["countTotal"],
    cache["countCurrentWeek"],
    cache["countLastWeek"],
    cache["expectedDatewrtLastWeek"])
}
else{
    fetchProjects().then(([res, blogs]) => {
        cache[blog] = res;
        document.getElementById("blog").innerHTML = res;
    });  
}

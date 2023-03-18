

const dom = document.getElementById('virtual-dom');

//load data from sessionStorage for pages from here
const ProjectsData = sessionStorage.getItem("Projects")
const HomeData =sessionStorage.getItem("Home")
const BlogsData = sessionStorage.getItem("Blogs")

//add your page addresses key value pair here
const routes =  {
                "":HomeData,
                "#Home":HomeData,
                "#Projects":ProjectsData,
                "#Blogs":BlogsData
               
                }


//don't touch this function            
function onNavigate(pathname){
    // window.history.pushState(
    //     {},
    //     '',
    //     window.location.origin +pathname
    //     )
    window.location.hash = pathname
    dom.innerHTML = routes[window.location.hash];
    
}


//this condition checks if the page loaded is the same as in hash
if(window.location.hash in routes == true){
    dom.innerHTML = routes[window.location.hash];
    // onNavigate(routes[window.location.hash])     
    // if(dom.innerHTML==""){
    //     dom.innerHTML = routes[window.location.hash];

        
    // }
}



//add your page addresses key value pair here, also change these relative to hosting

function Projects(){
    onNavigate("#Projects")
}
function Home(){
    onNavigate("#Home")
}
function Blogs(){
    onNavigate("#Blogs")
}









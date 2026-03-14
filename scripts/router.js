const dom = document.getElementById('virtual-dom');

//don't touch this function            
function onNavigate(pathname){
    // window.history.pushState(
    //     {},
    //     '',
    //     window.location.origin +pathname
    //     )
    window.location.hash = pathname
    const routeNameWithHash = '#' + window.location.hash.slice(1).split('?')[0];
    dom.innerHTML = routes[routeNameWithHash];
    
}

function removeScriptBySrc(src) {
  console.log("in remove script : ")
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
      // console.log(scripts[i].src)
      if (scripts[i].src.includes(src)) {
          scripts[i].parentNode.removeChild(scripts[i]);

      }
  }
}

const BlogsData =sessionStorage.getItem("Blogs");
function Blogs(params="")
      {
          onNavigate("#Blogs" + params);
          let myScript = document.createElement("script");
          myScript.setAttribute("src", "../Logic/Blogs.js");
          removeScriptBySrc("Logic")
          document.body.appendChild(myScript);
      };
      
      
const BooksData =sessionStorage.getItem("Books");
function Books(params="")
      {
          onNavigate("#Books" + params);
          let myScript = document.createElement("script");
          myScript.setAttribute("src", "../Logic/Books.js");
          removeScriptBySrc("Logic")
          document.body.appendChild(myScript);
      };
      
      
const DetailedBlogData =sessionStorage.getItem("DetailedBlog");
function DetailedBlog(params="")
      {
          onNavigate("#DetailedBlog" + params);
          let myScript = document.createElement("script");
          myScript.setAttribute("src", "../Logic/DetailedBlog.js");
          removeScriptBySrc("Logic")
          document.body.appendChild(myScript);
      };
      
      const HomeData =sessionStorage.getItem("Home");
            function Home(){
                onNavigate("#Home");
            };
const ProjectsData =sessionStorage.getItem("Projects");
function Projects(params="")
      {
          onNavigate("#Projects" + params);
          let myScript = document.createElement("script");
          myScript.setAttribute("src", "../Logic/Projects.js");
          removeScriptBySrc("Logic")
          document.body.appendChild(myScript);
      };
      
      
const routes = {"":HomeData,"#Blogs":BlogsData,"#Books":BooksData,"#DetailedBlog":DetailedBlogData,"#Home":HomeData,"#Projects":ProjectsData};
const routeName = window.location.hash.slice(1).split('?')[0];
const routeNameWithHash = '#' + window.location.hash.slice(1).split('?')[0];
if(routeNameWithHash in routes == true)
    {
        dom.innerHTML = routes[routeNameWithHash];
    }

const logicRoutes =["Blogs","Books","DetailedBlog","Projects"];

//executes only once for the cases when the user visits the specific route from search

if (logicRoutes.includes(routeName)) {
    let myScript = document.createElement("script");
    const filepath = "../Logic/" + routeName + ".js";
    myScript.setAttribute("src", filepath);
    document.body.appendChild(myScript);
}
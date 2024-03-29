const dom = document.getElementById('virtual-dom');

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
function Blogs()
      {
          onNavigate("#Blogs");
          let myScript = document.createElement("script");
          myScript.setAttribute("src", "../Logic/Blogs.js");
          removeScriptBySrc("Logic")
          document.body.appendChild(myScript);
      };
      
      
const BooksData =sessionStorage.getItem("Books");
function Books()
      {
          onNavigate("#Books");
          let myScript = document.createElement("script");
          myScript.setAttribute("src", "../Logic/Books.js");
          removeScriptBySrc("Logic")
          document.body.appendChild(myScript);
      };
      
      const HomeData =sessionStorage.getItem("Home");
            function Home(){
                onNavigate("#Home");
            };
const ProjectsData =sessionStorage.getItem("Projects");
function Projects()
      {
          onNavigate("#Projects");
          let myScript = document.createElement("script");
          myScript.setAttribute("src", "../Logic/Projects.js");
          removeScriptBySrc("Logic")
          document.body.appendChild(myScript);
      };
      
      
const routes = {"":HomeData,"#Blogs":BlogsData,"#Books":BooksData,"#Home":HomeData,"#Projects":ProjectsData};
if(window.location.hash in routes == true)
    {
        dom.innerHTML = routes[window.location.hash];
    }

const logicRoutes =["Blogs","Books","Projects"];

//executes only once for the cases when the user visits the specific route from search
if(logicRoutes.includes(window.location.hash.slice(1)))
    {
        let myScript = document.createElement("script");
        const filename = window.location.hash.slice(1)
        const filepath = "../Logic/" + filename + ".js"
        myScript.setAttribute("src", filepath);
        document.body.appendChild(myScript);
    }
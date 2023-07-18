import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


function readDirAsync(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        // console.log(files)
        resolve(files);
      }
    });
  });
}
const logicFiles = await readDirAsync(path.join(__dirname,"../Logic"))
let logicFileNames = []
logicFiles.forEach((file)=>{
  const str = file.slice(0, -3)
  logicFileNames.push(str)
})





const loaderFilePath = path.join(__dirname,'loader.js')
const routerFilePath = path.join(__dirname,'router.js')
const defaultPage = 'Home';
const defaultPageData = `const dom = document.getElementById("virtual-dom");
dom.innerHTML = ${defaultPage};`;
fs.writeFileSync(loaderFilePath,defaultPageData,(err)=>{if(err) throw err})
const routesLogicData = `const dom = document.getElementById('virtual-dom');

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
`;
fs.writeFileSync(routerFilePath,routesLogicData,(err)=>{if(err) throw err})
const pagesPath = path.join(__dirname,"../Pages/")
fs.readdir(pagesPath, (err, files) => {
    if (err) throw err;
    let routesObj = `const routes = {"":${defaultPage}Data`
    files.forEach(file => {
      //----------------loader file-------------------//
      const fileName = file.slice(0,-3)
      const toWriteLoader = `import ${fileName} from "../Pages/${fileName}.js";window.sessionStorage.setItem("${fileName}",${fileName});`
      fs.appendFileSync(loaderFilePath, toWriteLoader, (err, contents) => {
        if (err) throw err;
        // console.log(`Content of ${file}: ${contents}`);
      });

      //--------------router file--------------------//
      if(logicFiles.includes(file)){
        const toWriteRouter = `const ${fileName}Data =sessionStorage.getItem("${fileName}");
        function ${fileName}(){
            onNavigate("#${fileName}");
            let myScript = document.createElement("script");
            myScript.setAttribute("src", "../Logic/${file}");
            document.body.appendChild(myScript);
        };`
        fs.appendFileSync(routerFilePath, toWriteRouter, (err, contents) => {
          if (err) throw err;
          // console.log(`Content of ${file}: ${contents}`);
        });  
      }
      else{
        const toWriteRouter = `const ${fileName}Data =sessionStorage.getItem("${fileName}");
        function ${fileName}(){
            onNavigate("#${fileName}");
        };`
        fs.appendFileSync(routerFilePath, toWriteRouter, (err, contents) => {
          if (err) throw err;
          // console.log(`Content of ${file}: ${contents}`);
        });  
      }
      routesObj = routesObj + `,"#${fileName}":${fileName}Data`
     
    });
    routesObj = routesObj + `};if(window.location.hash in routes == true){
        dom.innerHTML = routes[window.location.hash];
    }
        const logicRoutes =${JSON.stringify(logicFileNames)};
        if(logicRoutes.includes(window.location.hash.slice(1))){
            let myScript = document.createElement("script");
            const filename = window.location.hash.slice(1)
            const filepath = "../Logic/" + filename + ".js"
            myScript.setAttribute("src", filepath);
            document.body.appendChild(myScript);
        
    }`
    fs.appendFileSync(routerFilePath, routesObj, (err, contents) => {
        if (err) throw err;
      });
  });
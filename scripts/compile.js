import fs from 'fs'
import {
	fileURLToPath
} from 'url';
import {
	dirname
} from 'path';
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

function appendRouterWithNavigate_WithScript(fileName) {
      const toWriteRouter = `
const ${fileName}Data =sessionStorage.getItem("${fileName}");
function ${fileName}(params="")
      {
          onNavigate("#${fileName}" + params);
          let myScript = document.createElement("script");
          myScript.setAttribute("src", "../Logic/${fileName}.js");
          removeScriptBySrc("Logic")
          document.body.appendChild(myScript);
      };
      
      `
      fs.appendFileSync(routerFilePath, toWriteRouter, (err, contents) => {
      if (err) throw err;
        // console.log(`Content of ${file}: ${contents}`);
	});
}

function appendRouterWithNavigate_WithoutScript(fileName) {
      const toWriteRouter = `const ${fileName}Data =sessionStorage.getItem("${fileName}");
            function ${fileName}(){
                onNavigate("#${fileName}");
            };`
      fs.appendFileSync(routerFilePath, toWriteRouter, (err, contents) => {
        if (err) throw err;
        // console.log(`Content of ${file}: ${contents}`);
      });
}
async function blockingFileNamesRead(files){
  let fileNames = []
  files.forEach((file) => {
	//removes .js from the string
  // console.log(file)
	const str = file.slice(0,-3)
  console.log(str)
	fileNames.push(str)
})
  return fileNames;
}
const logicFiles = await readDirAsync(path.join(__dirname, "../Logic"))
const logicFileNames = await blockingFileNamesRead(logicFiles)

const pagesFiles = await readDirAsync(path.join(__dirname, "../Pages"))
let pageFileNames = await blockingFileNamesRead(pagesFiles)




const loaderFilePath = path.join(__dirname, 'loader.js')
const routerFilePath = path.join(__dirname, 'router.js')


const defaultPage = 'Home';
const defaultPageData = `const dom = document.getElementById("virtual-dom");
dom.innerHTML = ${defaultPage};`;
fs.writeFileSync(loaderFilePath, defaultPageData, (err) => {
	if (err) throw err
})


const routesLogicData = `const dom = document.getElementById('virtual-dom');

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
`;
fs.writeFileSync(routerFilePath, routesLogicData, (err) => {
	if (err) throw err
})


let routesObj = `
const routes = {"":${defaultPage}Data`

pageFileNames.forEach(file => {

	//----------------loader file-------------------//
	const toWriteLoader = `import ${file} from "../Pages/${file}.js";
      window.sessionStorage.setItem("${file}",${file});`
	fs.appendFileSync(loaderFilePath, toWriteLoader, (err, contents) => {
		if (err) throw err;
		// console.log(`Content of ${file}: ${contents}`);
	});

	//--------------router file--------------------//
	if (logicFileNames.includes(file)) {
		appendRouterWithNavigate_WithScript(file);
	} else {
		appendRouterWithNavigate_WithoutScript(file);
	}
	routesObj = routesObj + `,"#${file}":${file}Data`

});

routesObj = routesObj + `};
const routeName = window.location.hash.slice(1).split('?')[0];
const routeNameWithHash = '#' + window.location.hash.slice(1).split('?')[0];
if(routeNameWithHash in routes == true)
    {
        dom.innerHTML = routes[routeNameWithHash];
    }

const logicRoutes =${JSON.stringify(logicFileNames)};

//executes only once for the cases when the user visits the specific route from search

if (logicRoutes.includes(routeName)) {
    let myScript = document.createElement("script");
    const filepath = "../Logic/" + routeName + ".js";
    myScript.setAttribute("src", filepath);
    document.body.appendChild(myScript);
}`
fs.appendFileSync(routerFilePath, routesObj, (err, contents) => {
	if (err) throw err;
});
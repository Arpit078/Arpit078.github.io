import Navbar from "../components/Navbar.js"
import Box from "../components/updateBox/box.js"
const Blogs = /*html*/`
<div id="blogs" class="text">
 <div id="headAndNav">
     <h1 class="title">Learning in Public and Thoughts.</h1>
     <div class="bg">${Navbar}</div>
    </div>
<div>
    ${Box()}
</div>
 <div id="blog"></div>
</div>`
export default Blogs
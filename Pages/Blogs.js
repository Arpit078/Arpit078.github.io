import Navbar from "../components/Navbar.js"
import Box from "../components/updateBox/box.js"
const Blogs = /*html*/`
<style>
    .paragraph {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* show only 3 lines */
  -webkit-box-orient: vertical;
}

.paragraph.expanded {
  -webkit-line-clamp: unset; /* remove restriction */
}
.read-more-btn {
  color: rgb(0, 0, 0);
  cursor: pointer;
  font-size: 20px;
}

</style>
<div id="blogs" class="text">
 <div id="headAndNav">
     <h1 class="title">Blogs.</h1>
     <div class="bg">${Navbar}</div>
    </div>
<div>
</div>
 <div id="blog"></div>
</div>`
export default Blogs
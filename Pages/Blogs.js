import Navbar from "../components/Navbar.js"
import Box from "../components/updateBox/box.js"
const Blogs = /*html*/`
<style>
.paragraph {
  overflow: hidden !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 3 !important;
  -webkit-box-orient: vertical !important;
}

.paragraph.expanded {
  -webkit-line-clamp: unset !important;
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
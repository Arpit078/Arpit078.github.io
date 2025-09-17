import Navbar from "../components/Navbar.js"
const Blogs = /*html*/`
<style>

/* Expanded paragraph (collapsed by default) */
.expandable {
  max-height: 120px;       /* adjust this for "preview" size */
  overflow: hidden;
  transition: max-height 0.4s ease;
}
.expanded{
  max-height: max-content;      /* enough space for full content */
}
/* Expanded when active (JS will toggle a class) */
.expandable.show {
  max-height: 1000px;      /* enough space for full content */
  transition: max-height 0.6s ease;
}

.read-more-btn 
{
  padding-top: 4rem;
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
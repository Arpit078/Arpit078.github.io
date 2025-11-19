//use inline html vs code extension to write html like these in template strings. Don't forget write /*html*/ or /*css*/
//before template string after installing inline html extention.
import Navbar from "../components/Navbar.js"
const Home = /*html*/ `
<div class="text home-content">
    <div id="headAndNav">
        <h1 class="title">Hi.</h1>
        <div class="bg">${Navbar}</div>
    </div>
    <p class="subHead">I'm Arpit Kumar Verma.</p>

<p class="paragraph">
   I’m a Software Development Engineer at <a href="https://jiohotstar.com" class="link">JioHotstar<span class="bar"></span></a>. I graduated from IIT Ropar in 2025 with a B.Tech in Electrical Engineering.
</p>

<p class="paragraph">
    I love building products that solve real problems.
    I built a community driven habit tracker app, check it out: <a href="https://play.google.com/store/apps/details?id=com.microdev.tainted" class="link">Tainted<span class="bar"></span></a>.
    I also created a lesser-known SPA (Single Page Application) framework called 
    <a href="https://pre-reactjs-docs.vercel.app/" class="link">pre-reactJS<span class="bar"></span></a>, 
    which actually powers this website.  
</p>

<p class="paragraph">
    Most of my work is open-source and publicly available on 
    <a href="https://github.com/Arpit078" class="link">GitHub<span class="bar"></span></a>.
    You can also find me on 
    <a href="https://www.linkedin.com/in/arpit-verma-806268227/" class="link">LinkedIn.<span class="bar"></span></a>
</p>

<p class="paragraph">
    Outside work, I enjoy playing basketball, reading books, and traveling sometimes.
</p>


</div>

`;
export default Home;

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
    I enjoy building cool stuff.
    I built <a href="https://pre-reactjs-docs.vercel.app/" class="link">pre-reactJS<span class="bar"></span></a> SPA framework
    which actually powers this website, I also created a community driven habit tracker app, check it out: <a href="https://play.google.com/store/apps/details?id=com.microdev.tainted" class="link">Tainted<span class="bar"></span></a>
</p>

<p class="paragraph">
    Most of my work is open-source and publicly available on 
    <a href="https://github.com/Arpit078" class="link">GitHub<span class="bar"></span></a>.
</p>

<p class="paragraph">
    Outside of work, I’m learning Muay Thai, reading, and travelling whenever I get the chance.
</p>


</div>

`;
export default Home;

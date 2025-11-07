//use inline html vs code extension to write html like these in template strings. Don't forget write /*html*/ or /*css*/
//before template string after installing inline html extention.
import Navbar from "../components/Navbar.js"
const Home = /*html*/ `
<div class="Text">
    <div id="headAndNav">
        <div class="bg">${Navbar}</div>
    </div>
    <p class="subHead">Hi, I'm Arpit Kumar Verma.</p>

<p class="paragraph">
    I’m a Software Engineer at <a href="https://jiohotstar.com" class="link">JioHotstar<span class="bar"></span></a>. 
    I graduated from IIT Ropar in 2025 with a B.Tech in Electrical Engineering. 
    I love building products that solve real problems and designing scalable backend systems. 
    I built a habit tracker, loved by men, try it - <a href="https://play.google.com/store/apps/details?id=com.microdev.tainted" class="link">Tainted<span class="bar"></span></a>.
    I also created a lesser-known JavaScript SPA (Single Page Application) framework called 
    <a href="https://pre-reactjs-docs.vercel.app/" class="link">pre-reactJS<span class="bar"></span></a>, 
    which actually powers this website.  
    Most of my work is open-source and available on 
    <a href="https://github.com/Arpit078" class="link">GitHub<span class="bar"></span></a>.
</p>

<p class="paragraph">
    You can connect with me on 
    <a href="https://www.linkedin.com/in/arpit-verma-806268227/" class="link">LinkedIn<span class="bar"></span></a>, 
    or reach out directly via 
    <a href="mailto:verma.arpit078@gmail.com" class="link">email<span class="bar"></span></a> 
    if you’d like to collaborate or just say hi.
</p>

<p class="paragraph">
    Outside work, I enjoy playing basketball, reading books, and traveling sometimes.
</p>

<p class="paragraph">
    And no, I definitely didn’t borrow this website design from Evan You’s portfolio :}
</p>


</div>

`;
export default Home;

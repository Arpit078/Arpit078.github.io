//use inline html vs code extension to write html like these in template strings. Don't forget write /*html*/ or /*css*/
//before template string after installing inline html extention.
import Navbar from "../components/Navbar.js"
const Home = /*html*/ `
<div class="Text">
    <div id="headAndNav">
        <h1 class="title">Hello.</h1>
        <div class="bg">${Navbar}</div>
    </div>
    <p class="subHead">My name is Arpit Kumar Verma.</p>
    <p class="paragraph">
        I am a Software Developer at <a href="https://jiohotstar.com" class="link">JioHotstar<span class="bar"></span></a> . I graduated from IIT Ropar with a B.Tech in Electrical Engineering in 2025. I love building products that solve real problems and designing scalable backend systems. I built a habit tracker app loved by men, try it - <a href="https://play.google.com/store/apps/details?id=com.microdev.tainted" class="link">Tainted<span class="bar"></span></a>. A lesser known SPA(single page applications) Javascript framework that I created <a href="https://pre-reactjs-docs.vercel.app/" class="link">pre-reactJS<span class="bar"></span></a> is powering this website. Most of my work is open sourced and publicly available on my
    <a href="https://github.com/Arpit078" class="link">Github<span class="bar"></span></a> 
    </p>
    <p class="paragraph">
        You can connect with me on <a href="https://www.linkedin.com/in/arpit-verma-806268227/" class="link">LinkedIN <span class="bar"></span></a>.If you have something in mind and want to let me know please get in touch with me on my <a href="mailto:verma.arpit078@gmail.com" class="link"><span class="bar"></span>Mail </a>.
    </p>
    <p class="paragraph">
        Outside of goofing around with backend development, I enjoy playing Basketball, Reading books and maybe travelling sometimes.
    </p>
    <p class="paragraph">
        And it's definitely not me who took the website design from Evan You's portfolio:}
    </p>

</div>

`;
export default Home;

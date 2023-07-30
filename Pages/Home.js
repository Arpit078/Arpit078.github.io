//use inline html vs code extension to write html like these in template strings. Don't forget write /*html*/ or /*css*/
//before template string after installing inline html extention.
import Navbar from "../components/Navbar.js"
const Home = /*html*/ `
<div class="Text">
    <div id="headAndNav">
        <h1 class="title">Hello.</h1>
        <div>${Navbar}</div>
    </div>
    <p class="subHead">My name is Arpit Kumar Verma.</p>
    <p class="paragraph">
        I am a student pursuing bachelor of technology in Electrical Engineering at IIT Ropar. I am a software development ethusiast. I love working on task automation, scripting and sometimes making web applications. I am the creator of the JavaScript framework <a href="https://www.npmjs.com/package/@arpit078/preactjs" class="link">@arpit078/preactJS<span class="bar"></span></a> that is powering this website. PreactJS is a single page application javascript framework. Most of my work is open sourced and publicly available on 
    <a href="https://github.com/Arpit078" class="link">Github</a> 
    </p>
    <p class="paragraph">
        You can connect with me on <a href="https://www.linkedin.com/in/arpit-verma-806268227/" class="link"><span class="bar"></span>LinkedIN </a>. If you happen to also use <a href="https://www.instagram.com/arpitverma.here/" class="link"><span class="bar"></span>Instagram </a>, let's have a chat there.
    </p>
    <p class="paragraph">
        Outside of goofing around with scripting and automation, I enjoy playing Basketball, Reading books, Watching anime and maybe travelling sometimes.
    </p>
    <p class="paragraph">
        And it's definately not me who took the website design from Evan You's portfolio:}
    </p>

</div>

`;
export default Home;

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
        I am a student pursuing bachelor of technology in Electrical Engineering at IIT Ropar. I am currently working at BlueStacks as an Engineering Intern. I love working on task automation, scripting and making backend systems for web applications. I am the creator of the Javascript framework <a href="https://www.npmjs.com/package/@arpit078/preactjs" class="link">@arpit078/pre-reactJS<span class="bar"></span></a> that is powering this website. Pre-reactJS is a SPA(single page applications) development javascript framework with 500+ all time downloads. Most of my work is open sourced and publicly available on my
    <a href="https://github.com/Arpit078" class="link">Github<span class="bar"></span></a> 
    </p>
    <p class="paragraph">
        You can connect with me on <a href="https://www.linkedin.com/in/arpit-verma-806268227/" class="link">LinkedIN <span class="bar"></span></a>.If you have something in mind and want to let me know please get in touch with me on my <a href="mailto:verma.arpit078@gmail.com" class="link"><span class="bar"></span>Mail </a>.
    </p>
    <p class="paragraph">
        Outside of goofing around with backend development, I enjoy playing Basketball, Reading books, Watching anime and maybe travelling sometimes.
    </p>
    <p class="paragraph">
        And it's definitely not me who took the website design from Evan You's portfolio:}
    </p>

</div>

`;
export default Home;

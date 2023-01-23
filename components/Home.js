//use inline html vs code extension to write html like these in template strings. Don't forget write /*html*/ or /*css*/
//before template string after installing inline html extention.
const Home = /*html*/ `

<div class="Text">
    <h1 id="hello">Hello.</h1>
    <p id="name">My name is Arpit Verma.</p>
    <p class="paragraph">
        I am a student pursuing bachelor of technology in Electrical Engineering at IIT Ropar. I am a software development ethusiast. I Love working on web applications, mostly interested in progressive web apps. I am the creator of the JavaScript framework <a href="https://www.npmjs.com/package/@arpit078/preactjs" class="link">preact.js<span class="bar"></span></a> a naive single page application framework. Most of my work is open source and publicly available on 
    <a href="https://github.com/Arpit078" class="link">Github</a> 
    </p>
    <p class="paragraph">
        You can connect with me on <a href="https://www.linkedin.com/in/arpit-verma-806268227/" class="link"><span class="bar"></span>LinkedIN </a>. If you happen to also use <a href="https://www.instagram.com/arpitverma.here/" class="link"><span class="bar"></span>Instagram </a>, let's have a chat there.
    </p>
    <p class="paragraph">
        Outside of playing around with web apps and my college acads, I enjoy playing Basketball, Reading stories, watching anime and watching sunsets.
    </p>

</div>

`;
export default Home;

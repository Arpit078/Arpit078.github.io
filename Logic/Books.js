async function fetchProjects(){
    let bookDatabase = []
    await fetch('../../data/books_data.json')
        .then((response) => response.json())
        .then((json) => bookDatabase=json);

    let ProjectsFetch = ''


    for(let i =0;i<bookDatabase.length;i++){
        const projectObj = `
        <div class="content">
        <p class="subHead">${bookDatabase[i].book_name}</p>
        <p class="paragraph">${bookDatabase[i].description}
        </p>
        <p class="highlight">
        Cover : <br>
        <img src=${bookDatabase[i].cover_url} class="link paragraph"/>
        </p>
        <p class="highlight">
        Read Date : 
        <span class="paragraph">${bookDatabase[i].read_date}</span>
        </p>
    </div>
    `
        ProjectsFetch = ProjectsFetch + projectObj ; 
    }
    console.log(bookDatabase)
    return ProjectsFetch
}
fetchProjects().then((res)=>{
    document.getElementById("book").innerHTML =  res
})


/*
It was sometime in January that I had sat down to write this article, and now it is July 2023,
           I have been procrastinating over this one thing for a long time I guess. Actually I was not procrastinating
           over this article rather it should be told that I was not having enough time to fix some minor bugs in the preact.js framework itself.
          <br>
          <br>
           Okay, talking about the website it basically works on the js framework that I built, as it can be seen it is a single page application 
           the website has frontend hash routing setup that basically changes the url with different hashes corresponding to pages. Now one question 
           that might pop up is why do hash routing, well that has a very straight forward answer I don't own a server of my own! so when I upload 
           a website on some free tier PaaS it ends up obstructing direct access to other routes and only the default route is accessible through
           url search.
          <br>
          <br>
           Let's understand the flow of the website.
           <br>
           <br>
           - You go to any domain pointing to this website, as of now it is https://arpitverma.me <br><br>
           - the remote server responds with an index.html with some javascript files that contain the content that gets stored in the session storage
           of your browser. <br><br>
           - content is rendered on the page dynamically by calling upon elements from the session storage.<br><br>
           - when you go to some other route there is a check system on url that calls up the js responsible for content on that page.<br><br>
           - the logic and dynamic part of the page is implemented separately as once js is stored in the session storage it can not be
           used to perform logic functions and only be used to call upon variables.<br><br>
           - for the logic part once a page is called a corresponding logic script is linked in the index.html<br><br>
           - the projects page is a bit different and interesting. Since I am not updating projects every minute of the day having a server 
           running and hosting an api to provide for the project page content is waste of resources, it is better to hardcode it into the repository.<br><br>
           - But hardcoding is tedious task in itself so I wrote a nodeJS based automation script <a href="https://github.com/arpit078/gitcron">gitcron</a> that
           fetches project details from a gsheet that I maintain and commits the details on the repository of this website, and voilla thats the website!

*/
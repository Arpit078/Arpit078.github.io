import fs from 'fs';
const st = `It was sometime in January that I had sat down to write this article, and now it is July 2023, I have been procrastinating over this one thing for a long time I guess. Actually I was not procrastinating over this article rather it should be told that I was not having enough time to fix some minor bugs in the preact.js framework itself.`
const con = JSON.stringify(st)
fs.writeFileSync("test.json",con);
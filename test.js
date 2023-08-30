import fs from 'fs';
const st = `Was suggested by some youtube video and boy was this book a good one. It is so much 
informative I'd have to come back to this again and again. Must read if you want to learn about personal finance.`
const con = JSON.stringify(st)
fs.writeFileSync("test.json",con);
const fs=require('fs');
const http=require('http');
const stream=fs.createReadStream('./largeText.txt',);

stream.on('data',(chunk)=>{
    console.log(chunk);
})
console.log('hello');



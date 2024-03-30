const fs=require('fs');

const OurReadFile=fs.createReadStream('./largeText.txt');
const WriteStream=fs.createWriteStream('./output.txt');

OurReadFile.on('data',(chunk)=>{
 WriteStream.write(chunk)
})
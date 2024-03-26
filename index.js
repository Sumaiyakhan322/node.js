// setTimeout(()=>{
// console.log('hi');
// },1000)


// var a=5
// console.log(global.a);// not like window

// console.log(__filename);
// console.log(__dirname);

// const data=require('./name')
// console.log(data.name);
// console.log(data.a);




//path module

const path=require('path');
const myPath='D:/Backup c/Node/SetUp/index.js'

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.normalize(myPath));
console.log(path.parse(myPath));
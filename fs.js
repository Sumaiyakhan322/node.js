const fs=require('fs')

fs.writeFileSync('text.txt','Hello')
fs.appendFileSync('text.txt','How are you')//add the content

const data=fs.readFileSync('text.txt');//get the content 
console.log(data.toString());//clg(data) will be buffer so we need data.tostring()

const data2=fs.readFile('text.txt',(err,data)=>{
  console.log(data.toString());  //async 
})
console.log('Hlw i am sumaiya');

//readFile-async bcz they are handled by asyncronize workers /helper thread done these works . Did not block the main thread 
//readFileSync ---main thread blocked 
const fs=require('fs');
const http=require('http');

const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write("<html><head><title>Form</title></head></html>");
        res.write(
          '<body><form action="/process" method="post"><input name="message"></input></form></body>'
        );
    
        res.end();  
    }
    else if(req.url==='/process' && req.method==='POST'){
        const body=[]
      req.on('data',(chunk)=>{
          body.push(chunk)   
      })
      req.on('end',()=>{
       const finished=Buffer.concat(body).toString();
       console.log(finished); 
       res.write("Tnq you");
      res.end();
      })
      
    }
    else {
        res.write("no");
        res.end();
      }

})


server.listen(5000)
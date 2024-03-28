const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write('helllo')
        res.write('hi')
        res.end()
    }
    else {
        res.write('no');
        res.end()
    }
    
   

})

server.listen(3000)
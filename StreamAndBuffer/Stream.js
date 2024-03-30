const fs = require("fs");
const http = require("http");

//create a server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>Form</title></head></html>");
    res.write(
      '<body><form action="/process" method="post"><input name="message"></input></form></body>'
    );

    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    req.on("data", (chunk) => {
      console.log(chunk.toString());
    });
    res.write("Tnq you");
    res.end();
  } else {
    res.write("no");
    res.end();
  }
});

server.listen(3000);
// const stream=fs.createReadStream('./largeText.txt',);

// stream.on('data',(chunk)=>{
//     console.log(chunk);
// })
// console.log('hello');

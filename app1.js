const http=require('http');
const server= http.createServer((req , res)=>{
  res.setHeader('Content-Type', 'text/plain');
   const url=req.url;
   if(url=='/home')
   {
    res.write("this is home page");
    res.end();
   }
   else if(url=='/about')
   {
    res.write("this is about  page");
    res.end();
   }
   else if(url=='/node')
   {
    res.write("Welcome to my Node Js project");
    res.end();
   }
   else{
    res.writeHead(404,{'Content-Type': 'text/plain'})
    res.end("404 page");
   }
 
})
server.listen(3000);
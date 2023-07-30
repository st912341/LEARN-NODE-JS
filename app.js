const http=require('http');
const server=http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/plain');
    res.write('sourabh tiwari')
    res.end();
});
const port=4000
server.listen(port, ()=>{

console.log(`the server is listning at  ${port}`)
console.log('my name is sourabh tiwari');
}
);

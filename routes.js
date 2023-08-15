const fs=require('fs');

const requestHandler= (req, res)=>{
    const url = req.url;
    const method=req.method;

    if (req.url === '/') 
    {
        res.setHeader("content-type", "text/html");
        fs.readFile('message.txt', { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                console.log(err);
            }
            
            res.write("<html>");
            res.write("<head><title>Enter Message</title></head>");
            res.write(`<body> ${data} </body>`);
            res.write("<form action='/message' method='POST'>Name: <input type='text' name='message'><button type='submit'>Submit</button></form>");
            res.write("</html>");
            return res.end();
        });
    } 
    else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split("=")[1]; 
            
            fs.writeFile('message.txt', message, (error) => {
                if (error) {
                    console.error(error);
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }); 
        });
    } else {
        res.setHeader("content-type", "text/html");
        res.write("<html>");
        res.write("<head><title>This is my first page</title></head>");
        res.write("<body><h1>Hello, my name is Sourabh Tiwari</h1></body>");
        res.write("</html>");
        res.end();
    }

};
module.exports=requestHandler;




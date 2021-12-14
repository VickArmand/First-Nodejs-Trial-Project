// Serving static files with http and file system module
const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
const readStream= fs.createReadStream('./static/index.html');
readStream.pipe(res);
res.writeHead(200,{'Content-type':'text/html'});
}).listen(3000);
 
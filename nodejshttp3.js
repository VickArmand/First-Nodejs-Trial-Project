// Serving static files with http and file system module
const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
const readStream= fs.createReadStream('./static/text.json');
readStream.pipe(res);
res.writeHead(200,{'Content-type':'application/json'});
}).listen(3000);
 
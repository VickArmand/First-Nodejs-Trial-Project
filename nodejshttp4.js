// Serving static files with http and file system module
const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
const readStream= fs.createReadStream('./static/hector-bermudez-iIWDt0fXa84-unsplash.jpg');
readStream.pipe(res);
res.writeHead(200,{'Content-type':'image/png'});
}).listen(3000);
 
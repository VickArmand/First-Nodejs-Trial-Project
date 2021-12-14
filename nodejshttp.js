// Creating a Http server using Http module
const http=require('http')
// req represents request while resp represents response
const server=http.createServer((req,res)=>{
     if(req.url==='/')  //if the browser link address(request url) is the the root domain
    {
        res.write('Hello world from nodejs');
        res.end();
    }
    else{
        res.write('Using some other domain');
    }

});
// The server requires a port number to listen to
server.listen('3000');


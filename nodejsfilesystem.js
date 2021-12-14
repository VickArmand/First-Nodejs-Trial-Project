// File system module
const fs= require('fs')
// Create a file
fs.writeFile('example.txt',"This is an example",(err)=>{
    if(err)
    console.log(err);
    else
    console.log('File created successfully')
    fs.readFile('example.txt','utf8',(err,file)=>{
        if(err)
        console.log(err);
        else
        console.log(file)
    })
    
});
fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log("successfully renamed file")
});
fs.appendFile('example2.txt','This is some extra data to be appended on the file',(err)=>{
    if(err)
    console.log(err);
    else
    console.log("successfullyappended data on the file")
});
fs.unlink('example2.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log("successfully deleted file")
});
fs.mkdir('tutorial',(err)=>{
    if(err)
    console.log(err)
    else
    console.log("Folder created")
});
fs.rmdir('tutorial',(err)=>{
    if(err)
    console.log(err)
    else
    console.log("Folder deleted")
});
fs.mkdir('tutorial',(err)=>{
    if(err)
    console.log(err)
    else
    fs.writeFile('./tutorial/example.txt','Hello',(err)=>  {
        if(err)
    console.log(err)
    else
    console.log("Folder deleted")
    })
});
fs.unlink('./tutorial/example.txt',(err)=>{
    if(err)
    console.log(err)
    else
    fs.rmdir('tutorial',(err)=>  {
        console.log("Folder deleted")
        if(err)
    console.log(err)
    else
    console.log("File deleted")
    })
}); 
fs.readdir('./',(err,files)=>{
if(err)
console.log(err);
else{
    for(let file of files){
        fs.unlink('./example/'+file,(err)=>{
            if(err)
    console.log(err)
    else
    console.log("Successfully deleted file");
        })
    }
    console.log(files);
}
});
// Readable and writable streams
fs.writeFile('example.txt','asdfghjkjhgfdsasdfghmfghjkgfdsdfghjk',(err)=>{
    if(err)
    console.log(err)
    else{
        console.log("Success")
    }
});
fs.writeFile('example2.txt','asdfghjkjhgfdsasdfghmfghjkgfdsdfghjk',(err)=>{
    if(err)
    console.log(err)
    else{
        console.log("Success")
    }
});
const rs= fs.createReadStream('./example.txt','utf8');
const ws=fs.createWriteStream('./example2.txt.gz');
rs.on('data',(chunk)=>{
    console.log(chunk);
    ws.write(chunk);
});
// It is advisable to use streams in reading large files as opposed to using readfile
//  because readfile reads the whole data at once and hence it uses the whole buffer thus there may be cases where the buffer size may be smaller
//  than the data to be read while for streams data is read in chunks hence it does not use a whole buffer 


// Pipes and pipe chaining
// In orderto use pipes we require the source string and destination string
rs.pipe(ws);
// zlib is used for compression
const zlib=require('zlib');
// transform stream
const gzip=zlib.createGzip();
// Thsi forms a comrpessed file 
 rs.pipe(gzip).pipe(ws);
//  Lets get the compressed file and decompress it
const rs2= fs.createReadStream('/example2.txt.gz');
const ws2=fs.createWriteStream('unzip.txt');
const gzip2=zlib.createGunzip();
rs2.pipe(gzip2).pipe(ws2);
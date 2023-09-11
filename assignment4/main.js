let http=require('http');
let serverConnect=require('./handler').serverConnect;

let server=http.createServer((req, res)=>{
    console.log('hello');
    res.write('<h1>Hello world</h1>');
    res.end();
});

server.listen(3000, "localhost", (error)=>{
    if(error){
        console.log("error in connection");
    }else{
        serverConnect.emit('connect');
    }
})
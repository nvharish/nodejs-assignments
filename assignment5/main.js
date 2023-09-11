let http=require('http');
let fs=require('fs');
let queryString=require('querystring');

let person='name=harish&age=32';

let server=http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url==='/form'){
        res.write(fs.readFileSync('./form.html').toString());
        res.end();
    }else if(req.url==='/submit'){
        let data='';
        
        req.on('data', chunk=>{
            data+=chunk.toString();
        });

        res.on('end', ()=>{
            res.write(queryString.encode(data));
            res.end();
        });
    }else if(req.url==='querystring'){
        res.write(queryString.decode(person));
        res.end();
    }else if(req.url==='/favicon.ico'){

    }else{
        res.write('hello');
        res.end();
    }
});

server.listen(3000, "localhost", (error)=>{
    if(error){
        console.log(error);

    }else{
        console.log("connected");
    }
});
let express=require('express');
let app=express();

app.use(express.urlencoded({extended:true}));

app.post('/form', (req, res)=>{
    console.log(req.body);
    res.send('logged on console');
});

app.get('/form', (req, res)=>{
    res.sendFile(__dirname+'/form.html');
});

app.get('/favicon.ico', (req, res)=>{
    res.send('');
});

app.get('/', (req, res)=>{
    res.send('hello');
})

app.listen(3000, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('server started');
    }
})
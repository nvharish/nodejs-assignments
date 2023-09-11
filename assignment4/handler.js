let EventEmitter=require('events').EventEmitter;

let serverConnect=new EventEmitter();
serverConnect.addListener("connect", ()=>{
    console.log("Connect event fired");
});

module.exports={serverConnect};
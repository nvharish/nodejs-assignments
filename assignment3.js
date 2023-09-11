var fs=require('fs');

var fileName='assignment1.js';

fs.watchFile(fileName, (stats)=>{
    try{
        var file=fs.readFileSync(fileName);
        fs.writeFileSync(fileName.replace('.js', '.bak.js'), file.toString());
        console.log(`${stats.atime}: File content saved`);
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }    
});
const fs = require('fs');

fs.writeFile("example.txt","this is text", (err)=> {
    if(err){
        console.log(err);
    }else{
        console.log("file successfully created");
        fs.readFile("example.txt","utf8",(err,data)=>{
            console.log(data);
        });
    }
});
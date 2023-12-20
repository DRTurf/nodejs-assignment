const fs=require('fs');


// Answer -02
const content="Node.js architecture is based on a non-blocking, event-driven architecture. It is built on the Google Chrome V8 engine, which executes JavaScript code."
fs.writeFile('node_architecture.txt',content,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File created successfully");
    }
})



const fs=require('fs');

//Answer -03
fs.readFile("node_architecture.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`Full article is:`);
        console.log(`${data}`);
    }
});
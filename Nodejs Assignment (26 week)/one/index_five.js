const fs=require('fs');

//Answer- 05
fs.unlink("node_architecture.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`File deleted successfully`);
    }
})
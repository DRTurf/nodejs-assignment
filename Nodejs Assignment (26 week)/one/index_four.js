const fs=require('fs');

//Answer -04
const appendContent="The key components include: V8 Engine, Libuv, Event Loops, Modules, Node.js APIs,Single-threaded Event Loop, npm (Node Package Manager)Understanding. Node.js architecture helps developers leverage its strengths in handling concurrent operations and building scalable, high-performance applications.Node.js offers several advantages: Fast Execution, Non-Blocking I/O, Scalability, Rich Ecosystem, Single Language for Backend and Frontend, Community and Support, Microservices Architecture, Real-time Applications, Cross-Platform Compatibility"
fs.appendFile("node_architecture.txt",appendContent,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Appended successfully");
        fs.readFile("node_architecture.txt",(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(`The full article is:`);
                console.log(`${data}`);
            }
        })
    }
})
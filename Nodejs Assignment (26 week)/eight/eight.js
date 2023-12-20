const EventEmitter = require("events");
const eventEmitter=new EventEmitter();

let sub=true;

eventEmitter.on("subscribe",(name)=>{
    console.log(`Thanks for subscribing to ${name}`);
})

if(sub){
    eventEmitter.emit("subscribe","College Wallah");
}

else if(!sub){
    console.log("Please subscribe to College Wallah");
}


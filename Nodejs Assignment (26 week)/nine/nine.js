const EventEmitter = require("events");
const eventEmitter=new EventEmitter();

function message(){
    console.log("Hello world!");
}
//creates event handler and then calls
eventEmitter.on("hello",message);
eventEmitter.emit("hello");  

//deletes event handler and then calls
eventEmitter.removeListener("hello",message);
eventEmitter.emit("hello");  


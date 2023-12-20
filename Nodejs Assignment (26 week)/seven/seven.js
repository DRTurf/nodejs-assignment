const http= require('http');
const port=5005;

const server=http.createServer(function(req, res){
    if(req.url=='/'){
        res.write("<h1>I Am Happy To learn Full Stack Web Development From PW Skills!</h1>")
    }
    res.end();
})

server.listen(port);
console.log(`Server started on localhost:${port}`);
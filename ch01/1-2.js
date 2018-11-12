const http = require('http'),port =8080; 
const server = http.createServer((req,res)=>{
    res.end('nihao');
});
server.listen(port,()=>{
    console.log('server listening on:http://localhost:%s',port);
});

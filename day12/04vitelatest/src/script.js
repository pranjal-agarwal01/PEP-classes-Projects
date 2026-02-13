const http = require('http');
const server = http.createServer((req,res) => {
    res.write("This is backend running");
    res.end("Hello world");
});
server.listen(3001);
 
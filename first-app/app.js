// const EventEmitter = require('events');
// const Logger= require('./logger');
// const logger = new Logger();
 
// // Register a listener
// logger.on('messageLogged',(arg)=>{
//     console.log('Listener called', arg);
// });

// logger.log('message');  

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello, world');
        res.end();
    }
    if(req.url === '/api/resources'){
        res.write(JSON.stringify([1,2,3]));
        res.end();        
    }
});

server.listen(3000);
console.log('Listen on http://localhost:3000');
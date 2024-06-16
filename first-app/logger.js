const EventEmitter = require('events');

var url = 'http://mylooger.io/log';

class Logger extends EventEmitter {
    log(msg){
        // Send an HTTP message 
        console.log(msg);
        // Raise an event
        this.emit('messageLogged',{id: 1, url:'http://'});
    }
}

module.exports = Logger;
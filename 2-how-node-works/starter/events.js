const EventEmitter = require('events');
const http = require('http');


class Items extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Items();

myEmitter.on('newItem', () => {
    console.log('New item added.')
})

myEmitter.on('newItem', () => {
    console.log("Item name: computer.")
})

myEmitter.on('newItem', stock => {
    console.log(`There are now ${stock} computers left in stock.`)
})

myEmitter.emit('newItem', 9);

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received.')
    res.end('Request received.')
})

server.on('close', () => {
    console.log('Server closed.')
})

server.listen(8000, () => {
    console.log('Listening.')
})
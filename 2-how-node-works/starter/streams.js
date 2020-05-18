const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const readable = fs.createReadStream('test-file.txt')

    readable.pipe(res)
})



server.listen(8000, () => {
    console.log('Listening.')
})
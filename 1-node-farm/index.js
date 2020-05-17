const fs = require('fs');

// Blocking, synchronous way
const textIn = fs.readFileSync('./final/txt/input.txt', 'utf-8')
console.log(textIn)
const textOut = `Text from file: ${textIn}.\nCreated on ${Date.now()}.`
fs.writeFileSync('./final/txt/output.txt', textOut);
console.log('File written.') 

// Non-blocking, async way
fs.readFile('./final/txt/start.txt', 'utf-8', (err, first_file) => {
    fs.readFile(`./final/txt/${first_file}.txt`, 'utf-8', (err, second_file) => {
        console.log(second_file)
        fs.readFile('./final/txt/append.txt', 'utf-8', (err, third_file) => {
            console.log(third_file)
            fs.writeFile('./final/txt/final.txt', `${second_file}\n${third_file}`, 'utf-8', err => {
                console.log('File written')
            })
        })
    })
})
console.log('Will read file');
const fs = require('fs');

const textIn = fs.readFileSync('./final/txt/input.txt', 'utf-8')
console.log(textIn)

const textOut = `Text from file: ${textIn}.\nCreated on ${Date.now()}.`
fs.writeFileSync('./final/txt/output.txt', textOut);
console.log('File written.')
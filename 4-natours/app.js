const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200)
    .json({
        msg: 'It worked'
    })
})

app.post('/', (req, res) => {
    res.send('Post request')
})

const port = 3000;

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});


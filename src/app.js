const express = require('express');
const app = express()

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>');
})

app.get('/about', function (req, res) {
    res.send('<h1>Hello World from About Page</h1>');
})

app.get('/projects', function (req, res) {
    res.send('<h1>Hello World from Projects Page</h1>');
})

app.listen(3000, () => {
    console.log("The server is running on port 3000");
})

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use("/css", express.static(__dirname + '/css'));
app.use("/images", express.static(__dirname + '/images'));


app.get('/', function (req, res) {
    console.log('Hello from server');
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/about.html');
});

app.listen(port, function () {
    console.log('Server is live');
})
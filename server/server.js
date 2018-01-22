const express = require('express')
    , app = express()
    , server = require('http').Server(app);

app.use(express.static('./../'));

server.listen(9000, function() {
    console.log('server started on  9000');
});

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req , res) {
    //res.send('<h1>Hello world!</h1>');
    res.sendfile(__dirname + '/index.html');
});

io.on('connection' , function (socket) {
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
    /*socket.on('disconnect',function () {
       console.log('user disconnect');
    });*/
});

http.listen(3001 , function () {
    console.log('listen on *:3001');
});
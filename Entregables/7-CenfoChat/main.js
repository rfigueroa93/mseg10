
// #1 - npm install para descargar los paquetes...

// libreriuas
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// root: presentar html
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

  // #2 - Generar Eveto de broadcast
  // ESCUCHAR EVENTO "chat message"
  // DESPUES VUELVA A EMITIR EL MENSAJE (broadcast)
console.log("User connected");

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
        io.emit('chat message', msg);
  });  
});

});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

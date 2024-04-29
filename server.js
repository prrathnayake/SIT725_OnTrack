const express = require("express");
let cat = require("./routes/routeCat.js");
let index = require("./routes/routerIndex.js");

const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, { origins: '*:*'});

const port = 3000;

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/cat", cat);
app.use("/", index);

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', () => {
      console.log('user disconnected');
  });

  setInterval(()=>{
      socket.emit('number', parseInt(Math.random()*10));
  }, 1000);
});

server.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});


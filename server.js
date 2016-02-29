var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Server started');
});
var io = require('socket.io').listen(server);

// --- End dependencies --- //

app.use(express.static('public'));

var viewers = 0;
var contributors = 0;

var scores = {
    blueScore: 0,
    redScore: 0
}
io.on('connection', function(socket) {
    console.log('Connected.');
    io.emit('scoreUpdate', scores);
    socket.on('increment', function(data) {
        if (data.color == 'blue') {
            scores.blueScore += data.score;
        } else if (data.color == 'red') {
            scores.redScore += data.score;
        }
        io.emit('scoreUpdate', scores);
    });
    socket.on('clear', function(data) {
        if (data.color == 'both') {
            scores.blueScore = 0;
            scores.redScore = 0;
        }
        io.emit('scoreUpdate', scores);
    })
});
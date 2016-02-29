var socket = io();

socket.on('scoreUpdate', function(scores) {
    $('#blueScore').text(scores.blueScore);
    $('#redScore').text(scores.redScore);
});
var socket = io();

$(document).bind('keypress', function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    console.log(keycode);
    switch (keycode) {
        // === BLUE === ///
        case 119: // w: normal high goal
            socket.emit('increment', {
                color: 'blue',
                score: 5
            });
            break;
        case 115: // s: normal low goal
            socket.emit('increment', {
                color: 'blue',
                score: 1
            });
            break;
            
        case 101: // e: bonus high goal
            socket.emit('increment', {
                color: 'blue',
                score: 10
            });
            break;
        case 100: // d: bonus low goal
            socket.emit('increment', {
                color: 'blue',
                score: 2
            });
            break;
            
        case 113: // q: high elevation
            socket.emit('increment', {
                color: 'blue',
                score: 50
            });
            break;
        case 97: // a: low elevation
            socket.emit('increment', {
                color: 'blue',
                score: 25
            });
            break;
            
        case 50: // 2: autonomous bonus
            socket.emit('increment', {
                color: 'blue',
                score: 10
            });
            break;
            
        // === RED === ///
        case 112: // p: normal high goal
            socket.emit('increment', {
                color: 'red',
                score: 5
            });
            break;
        case 59: // ;: normal low goal
            socket.emit('increment', {
                color: 'red',
                score: 1
            });
            break;
            
        case 91: // [: bonus high goal
            socket.emit('increment', {
                color: 'red',
                score: 10
            });
            break;
        case 39: // ': bonus low goal
            socket.emit('increment', {
                color: 'red',
                score: 2
            });
            break;
            
        case 111: // o: high elevation
            socket.emit('increment', {
                color: 'red',
                score: 50
            });
            break;
        case 108: // l: low elevation
            socket.emit('increment', {
                color: 'red',
                score: 25
            });
            break;
            
        case 48: // 0: autonomous bonus
            socket.emit('increment', {
                color: 'red',
                score: 10
            });
            break;
            
        // === GLOBAL === //
        case 32:
            socket.emit('clear', {
                color: 'both'
            });
            break;
    }
});
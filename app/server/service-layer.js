/**
 * Created by m4gik on 9/24/16.
 */
define(['socket'], function(io){
    var playerCount = 0;
    var id = 0;

    io.on('connection', function (socket) {
        playerCount++;
        id++;
        setTimeout(function () {
            socket.emit('connected', { playerId: id });
            io.emit('count', { playerCount: playerCount });
        }, 1500);

        socket.on('disconnect', function () {
            playerCount--;
            io.emit('count', { playerCount: playerCount });
        });
    });

    return null;
});
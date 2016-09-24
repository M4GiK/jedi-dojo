define([
    'engine-config',
    'sprites/player',
    'scenes/level00/asset_loader',
    'scenes/level00/tile_layer_provider',
    'promise',
    'socket.io/socket.io.js'
], function (Q, Player, AssetsLoader, TileLayerProvider, Promise, io) {
    var STAGE_NAME = 'level00';

    var players = [];
    var socket = io.connect('http://localhost:3000');
    var UiPlayers = document.getElementById("players");

    function waitForAllAssets() {
        return AssetsLoader.waitForLevelAssets();
    }

    function setCollisionLayer() {
        var tileLayer = TileLayerProvider.create();
        this.collisionLayer(tileLayer);
    }

    function setPlayer(stage) {
        var player = new Player({x: 410, y: 90});
        this.insert(player);
        this.add("viewport").follow(player);
    }

    function setUp(stage) {
        socket.on('count', function (data) {
            UiPlayers.innerHTML = 'Players: ' + data['playerCount'];
        });

        socket.on('connected', function (data) {
            selfId = data['playerId'];
            player = new Q.Player({ playerId: selfId, x: 100, y: 100, socket: socket });
            stage.insert(player);
            stage.add('viewport').follow(player);
        });
    }

    Q.scene(STAGE_NAME, function (stage) {
        setCollisionLayer.call(stage);
        setPlayer.call(stage);
    });

    return {
        stageLevel: function () {
            waitForAllAssets().then(function () {
                Q.stageScene(STAGE_NAME);
            });
        }
    };
});

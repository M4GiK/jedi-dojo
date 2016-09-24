define([
  'engine-config',
  'sprites/player',
  'scenes/level00/asset_loader',
  'scenes/level00/tile_layer_provider',
  'promise'
], function(
  Q,
  Player,
  AssetsLoader,
  TileLayerProvider,
  Promise
) {
  var STAGE_NAME = 'level00';

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

  Q.scene(STAGE_NAME, function(stage) {
    setCollisionLayer.call(stage);
    setPlayer.call(stage);
  });

  return {
    stageLevel: function() {
      waitForAllAssets().then(function() {
        Q.stageScene(STAGE_NAME);
      });
    }
  };
});

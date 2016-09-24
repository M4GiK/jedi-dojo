define(['engine-config', 'assets/loader'], function(Q, AssetsLoader) {
  var SHEET_NAME = 'floor';
  var ASSET_FILENAME = 'floor.png';
  var ASSET_PROPERTIES = {
    tilew: 32, tileh: 32
  };

  var waitForLoaded = function waitForLoaded() {
    return AssetsLoader.waitForLoaded(ASSET_FILENAME);
  }

  waitForLoaded().then(function() {
    Q.sheet(SHEET_NAME, ASSET_FILENAME, ASSET_PROPERTIES);
  });


  return {
    getName: function() {
      return SHEET_NAME;
    },
    waitForLoaded: waitForLoaded
  };
});

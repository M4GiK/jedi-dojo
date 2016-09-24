define([
  'assets/tile/sprites/floor',
  'assets/tile/schemes/level00'
], function(
  FloorSheet,
  TileScheme
) {
  function waitForLevelAssets() {
    return Promise.all([
      TileScheme.waitForLoaded(),
      FloorSheet.waitForLoaded()
    ]);
  }

  return {
    waitForLevelAssets: waitForLevelAssets
  }
});

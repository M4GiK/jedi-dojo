define([
    'engine-config',
    'assets/tile/sprites/floor',
    'assets/tile/schemes/level00'
], function (Q, FloorSheet, Level00Scene) {
    return {
        create: function create() {
            var tileLayer = new Q.TileLayer({
                dataAsset: Level00Scene.getFilename(),
                sheet: FloorSheet.getName()
            });
            return tileLayer;
        }
    }
});

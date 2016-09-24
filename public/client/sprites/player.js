define([
    'engine-config',
    'assets/loader'
], function (Q, AssetsLoader) {
    var ASSET_FILENAME = 'player_sheet.png';
    var ASSET_LABEL = 'player';
    Q.Sprite.extend("Player", {
        init: function (p) {
            this._super(p, {
                sheet: 'player'
            });
            this.add('2d, platformerControls');
        }
    });

    var createSheet = function createSheet() {
        Q.sheet(ASSET_LABEL, ASSET_FILENAME, {
            tilew: 30, tileh: 24
        });
    }

    AssetsLoader.waitForLoaded(ASSET_FILENAME).then(createSheet);

    return Q.Player;
});

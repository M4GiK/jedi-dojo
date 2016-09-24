define(['engine-config', 'assets/loader'], function (Q, AssetsLoader) {
    var ASSET_FILENAME = 'level00.json';

    var waitForLoaded = function waitForLoaded() {
        return AssetsLoader.waitForLoaded(ASSET_FILENAME);
    }

    return {
        getFilename: function () {
            return ASSET_FILENAME;
        },
        waitForLoaded: waitForLoaded
    };
});

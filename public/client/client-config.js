/**
 * Created by m4gik on 9/22/16.
 */
require.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require,

    // make components more sensible
    paths: {
        'quintus': "../lib/quintus-all",
        'promise': "../lib/q"
    },

    shim: {
        'quintus': {
            exports: "Quintus"
        }
    }
});

if (!window.requireTestMode) {
    require(['main'], function () {
    });
}


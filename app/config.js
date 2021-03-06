/**
 * Created by m4gik on 9/22/16.
 */
var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require,

    //Use node's special variable __dirname to
    //get the directory containing this file.
    //Useful if building a library that will
    //be used in node but does not require the
    //use of node outside
    baseUrl: __dirname,

    paths: {
        users: '../routes/users',
        index: '../routes/index',
        main: 'server/main',
        app: 'server/app'
    }
});

requirejs(['main'], function () {});
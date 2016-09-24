define(['express'], function(express) {
    var router = express.Router();

    /* GET users listing. */
    router.get('/', function(req, res, next) {
        res.send('respond with a resource');
    });

    return router;
});

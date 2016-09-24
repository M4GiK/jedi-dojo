define(['engine-config', 'promise'], function(Q, Promise) {
  var promises = {};
  var waitForLoaded = function waitForLoaded(assetFilename) {
    if(!getPromiseFor(assetFilename)) {
      scheduleLoading(assetFilename);
    }
    return getPromiseFor(assetFilename);
  };
  var scheduleLoading = function scheduleLoading(assetFilename) {
    var deferred = Promise.defer();
    Q.load(assetFilename, function() {
      deferred.resolve();
    });
    promises[assetFilename] = deferred.promise;
  }
  var getPromiseFor = function getPromiseFor(assetFilename) {
    return promises[assetFilename];
  };

  return {
    waitForLoaded: function(assetFilename) {
      if(!getPromiseFor(assetFilename)) {
        scheduleLoading(assetFilename);
      }
      return getPromiseFor(assetFilename);
    }
  };
  return deferred.promise;
});

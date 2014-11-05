(function() {
  $(function() {
    var queue;
    queue = new createjs.LoadQueue();
    return queue.loadManifest('/preload_manifest.json');
  });

}).call(this);

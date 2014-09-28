NewsReader.Router.map(function() {
  this.resource('feed', {path: 'feed/:feed_id'}, function() {
    this.resource('entry', {path: 'entry/:entry_id'});
  });
});

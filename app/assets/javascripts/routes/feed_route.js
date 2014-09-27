NewsReader.FeedRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('feed', params.feed_id).then(function(feed) {
      return feed.reload();
    });
  }
});

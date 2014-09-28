NewsReader.FeedRoute = Ember.Route.extend({
  afterModel: function(feed) {
    return feed.reload();
  }
});

NewsReader.FeedsListController = Ember.ArrayController.extend({
  actions: {
    removeFeed: function(feed) {
      feed.destroyRecord();
    }
  }
});

NewsReader.NewFeedFormController = Ember.Controller.extend({
  actions: {
    addFeed: function() {
      var newFeed = this.store.createRecord('feed', {
        url: this.get('url'),
        title: 'Loading...'
      });
      this.set('url', '');
      newFeed.save();
    }
  },
  url: ''
});

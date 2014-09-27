NewsReader.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('feed');
  }
});

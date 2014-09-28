NewsReader.EntryRoute = Ember.Route.extend({
  model: function(params) {
    var feed = this.modelFor('feed');
    return feed.get('entries').findBy('id', params.entry_id);
  }
});

NewsReader.EntryController = Ember.ObjectController.extend({
  htmlContent: function() {
    return new Handlebars.SafeString(this.get('content'));
  }.property('content')
});

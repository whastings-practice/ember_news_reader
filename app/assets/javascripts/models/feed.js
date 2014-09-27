NewsReader.Feed = DS.Model.extend({
  created_at: DS.attr('string'),
  title: DS.attr('string'),
  updated_at: DS.attr('string'),
  url: DS.attr('string')
});

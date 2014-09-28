NewsReader.Entry = DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  description: DS.attr('string'),
  content: DS.attr('string'),
  published_at: DS.attr('string'),
  feed: DS.belongsTo('feed', {async: true})
});

json.feed do
  json.(@feed, :id, :title, :url, :created_at, :updated_at)
end

json.entries @feed.entries do |entry|
  json.(entry, :id, :link, :title, :published_at)
  json.feed entry.feed_id
end

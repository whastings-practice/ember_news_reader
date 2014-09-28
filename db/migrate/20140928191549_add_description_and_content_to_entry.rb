class AddDescriptionAndContentToEntry < ActiveRecord::Migration
  def change
    add_column :entries, :description, :text
    add_column :entries, :content, :text
  end
end

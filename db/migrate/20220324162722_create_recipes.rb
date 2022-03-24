class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :image_url
      t.string :ingredients
      t.string :directions
      t.integer :time_to_complete

      t.timestamps
    end
  end
end

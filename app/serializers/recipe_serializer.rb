class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :directions, :image_url, :name, :ingredients, :time_to_complete

end

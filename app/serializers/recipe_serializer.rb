class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :directions, :image_url, :name, :ingredients, :reviews

  has_many :reviews
end

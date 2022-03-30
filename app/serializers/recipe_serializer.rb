class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :directions, :image_url, :name, :ingredients, :time_to_complete, :review_count

  def review_count
    object.reviews.count
  end

end

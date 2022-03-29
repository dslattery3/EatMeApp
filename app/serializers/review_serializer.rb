class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :user, :recipe, :created_at, :updated_at, :image_url, :recipe_id
  
  def user
    object.user.username
  end
  def recipe
    object.recipe.name
  end
  def image_url
    object.recipe.image_url
  end
end

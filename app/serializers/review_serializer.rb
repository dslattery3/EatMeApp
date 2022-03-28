class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :user, :recipe
  
  def user
    object.user.username
  end
  def recipe
    object.recipe.name
  end
end

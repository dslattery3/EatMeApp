class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :reviews
  # def reviews
  #   object.reviews
  # end

end

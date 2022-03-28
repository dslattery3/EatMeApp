class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :recipes, through: :reviews
    
    has_secure_password

    validates :username, uniqueness: true

end

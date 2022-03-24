class User < ApplicationRecord
    has_many :reviews
    has_many :recipes, through: :reviews
    
    has_secure_password

    validates :username, uniqueness: true

end

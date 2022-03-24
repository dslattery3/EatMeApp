class Recipe < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :directions, presence: true
    validates :ingredients, presence: true
end

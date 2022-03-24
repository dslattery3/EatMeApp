class Review < ApplicationRecord
  belongs_to :user
  belongs_to :recipe
  
  validates :description, presence: true
 
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'destroying current db'
User.destroy_all
Recipe.destroy_all
Review.destroy_all
puts 'creating users'
User.create(username: 'a', password: '1')
User.create(username: 'b', password: '2')
User.create(username: 'c', password: '3')
puts 'creating recipes'
Recipe.create(name: 'Bananas', ingredients: 'Love. Water. Soil. Time', directions: 'Plant. Water. Seed', time_to_complete: 200)
Recipe.create(name: 'Pie', ingredients: 'Dough. Water. Filling. Time', directions: 'Lay down dough. Fill with filling. Cook', time_to_complete: 60)
Recipe.create(name: 'Steak', ingredients: 'Cow. Butter', directions: 'Heat. Salt. Baste', time_to_complete: 20)
puts 'creating reviews'
Review.create(user_id: 1, recipe_id: 1, description: 'love it')
Review.create(user_id: 1, recipe_id: 2, description: 'sucks')
Review.create(user_id: 2, recipe_id: 3, description: 'would do again')
Review.create(user_id: 2, recipe_id: 1, description: 'not bad')
Review.create(user_id: 3, recipe_id: 2, description: 'took too long')
Review.create(user_id: 3, recipe_id: 3, description:  'burnt my pan')

puts 'SUCCESS'
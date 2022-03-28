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
Recipe.create(name: 'Butter Parmesan Corn', ingredients: '6 half ears corn, cleaned, husked, 2 tablespoons butter, softened, ½ cup parmesan cheese, grated', directions: 'Preheat oven to 375ºF (190ºC). Coat each ear of corn in a thin layer of butter and roll in the parmesan cheese to coat. Place corn in a square baking dish and sprinkle with salt and pepper.', time_to_complete: 25)
Recipe.create(name: 'Vodka Blackberry', ingredients: '½ cup ice, 1 tablespoon blackberry jam, 2 tablespoons lemon juice, ¼ cup vodka, lemon peel, for garnish', directions: 'In a cocktail shaker, combine the ice, blackberry jam, lemon juice, and vodka. Cover with the lid and shake vigorously for 30 seconds. Strain into desired serving glass Garnish with the lemon peel.', time_to_complete: 1)
Recipe.create(name: 'Cloud bread', ingredients: '3 eggs, separated, ⅛ teaspoon cream of tartar, 3 tablespoons cream cheese, softened, or greek yogurt', directions: 'Preheat oven to 300°F (150°C). Separate the eggs into two bowls. Add the cream of tartar to the egg whites and whip into stiff peaks. Add the cream cheese or yogurt into the yolks and mix until combined. Fold half of the egg whites into the yolks until just combined. Add the rest and fold again until incorporated. Line a baking sheet with parchment paper and place six dollops of the mixture on the tray. Spread out the circles with a spatula to about ½ inch (1 cm) thick. Bake for 30 minutes or until golden. Allow to cool for at least 1 hour.', time_to_complete: 90)
Recipe.create(name: 'Pigs in a Blanket', ingredients: '1 sheet puff pastry, thawed, 6 hot dogs, 6 slices cheddar cheese', directions: 'Preheat oven to 425°F (220˚C). Slice the puff pastry into 6 even rectangles. Place a slice of cheddar on top of each puff pastry piece. Place a hot dog on the cheddar, then roll it up. Slice each roll into 3 even pieces, and arrange the pieces evenly on a baking sheet lined with parchment paper with a 1-inch (2-cm) gap between the pieces. Bake for 15 minutes, until golden brown and flaky.', time_to_complete: 15)
Recipe.create(name: 'Peanut Butter Cups', ingredients: '3 tablespoons powdered sugar, sifted, ½ cup creamy peanut butter, 1 cup chocolate, melted', directions: 'Prepare a cupcake tin with 6 liners. Stir peanut butter and powdered sugar together until smooth. Spread 1 to 2 tablespoons of chocolate in the bottom of each cupcake liner. Dollop 1 to 2 teaspoons of the peanut butter mixture on top of the chocolate. Cover each dollop of peanut butter with more chocolate and smooth out the top. Refrigerate for 1 hour or until chocolate has hardened. Remove peanut butter cups from the liners.', time_to_complete: 60)
Recipe.create(name: 'Mac & Cheese', ingredients: '5 cups milk, 1 lb elbow macaroni, dry, 2 cups shredded cheddar cheese', directions: 'In a large pot, bring the milk to a boil. Add the pasta and stir constantly until the pasta is cooked, about 10 minutes. Turn off the heat, then add the cheddar. Stir until the cheese is melted and the pasta is evenly coated.', time_to_complete: 15)
Recipe.create(name: 'Jalapeño Poppers', ingredients: '4 jalapeñoes, 8 slices bacon, 8 oz cream cheese, softened', directions: 'Preheat oven to 400°F (200˚C). Slice the jalapeños in half, then remove the seeds by scraping out the insides. Spread the cream cheese evenly among the jalapeño shells. Wrap each jalapeño in bacon. Place the bacon-wrapped jalapeños on a baking sheet lined with parchment paper. Bake for 20 minutes, until bacon is browned and peppers are tender.', time_to_complete: 25)
Recipe.create(name: ' Banana Liquid Nitrogen Ice Cream', ingredients: '1 cup heavy cream, 7 oz condensed milk, 1 banana, 3 cups liquid nitrogen', directions: 'Fill a food processor with heavy cream, condensed milk, and bananas. Close the top and blend for 30 seconds. Use a funnel or carefully pour the ice cream mixture into a large squeeze bottle and tighten the lid. Layout a large thick cloth on top of your cooking area to protect the surface from the liquid nitrogen’s low temperature. Using insulated gloves, fill a stainless steel bowl with liquid nitrogen and set it on top of the thick insulated cloth. Use the squeeze bottle to squeeze the mix at a constant drip into the liquid nitrogen. Fill the bowl with droplets and allow the liquid nitrogen to boil off. Once all the liquid has boiled over from the bottom, serve.', time_to_complete: 15)
Recipe.create(name: 'Chili-glazed Salmon', ingredients: '4 oz salmon, 3 fillets, ½ cup chili sauce, ¼ cup fresh scallions, chopped', directions: 'Preheat oven to 400°F (200˚C). In a bowl, mix together the salmon, chili sauce, and the scallions. Place the fillets on a baking tray lined with parchment paper. Spoon any leftover sauce on top of the salmon. Bake for 12-15 minutes, until the salmon is cooked but still tender.', time_to_complete: 15)
Recipe.create(name: 'Peanut Butter Cereal Bites', ingredients: 'honey, peanut butter, honey nut cereal', directions: 'Put 1 part peanut butter and 1 part honey in a bowl. Microwave for about a minute. Stir until combined. Add 3-4 parts cereal. Stir. Scoop into bit size pieces and place on wax paper to cool.', time_to_complete: 10)
puts 'creating reviews'
Review.create(user_id: 1, recipe_id: 1, description: 'love it')
Review.create(user_id: 1, recipe_id: 2, description: 'sucks')
Review.create(user_id: 2, recipe_id: 3, description: 'would do again')
Review.create(user_id: 2, recipe_id: 1, description: 'not bad')
Review.create(user_id: 3, recipe_id: 2, description: 'took too long')
Review.create(user_id: 3, recipe_id: 3, description:  'burnt my pan')

puts 'SUCCESS'
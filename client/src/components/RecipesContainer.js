import React from "react";
import RecipeCard from "./RecipeCard";

function RecipesContainer({recipes}) {


  const recipeCards = recipes.map((r) => {
    return <RecipeCard r={r} key={r.id} />;
  });

  return (
    <div>
      <h1>Recipes</h1>

      <div>searchbar goes here</div>

      <div className="recipe-card-container">
        Recipe Card Container
        {recipeCards}
      </div>
    </div>
  );
}

export default RecipesContainer;

// created_at: "2022-03-25T19:55:31.943Z"
// directions: "Plant. Water. Seed"
// id: 1
// image_url: null
// ingredients: "Love. Water. Soil. Time"
// name: "Bananas"
// time_to_complete: 200
// updated_at: "2022-03-25T19:55:31.943Z"
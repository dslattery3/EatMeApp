import React from "react";
import RecipeCard from "./RecipeCard";

function RecipesContainer({ recipes }) {
  const recipeCards = recipes.map((r) => {
    return <RecipeCard r={r} key={r.id} fromRecipes={true} />;
  });

  return (
    <div>
      <h1 align='center'>Recipes</h1>
      <div className="container">
        {recipeCards}
      </div>
    </div>
  );
}

export default RecipesContainer;
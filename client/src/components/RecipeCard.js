import React from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({ r }) {
  const navigate = useNavigate()
  const handleClick = () => navigate(`/${r.id}`)
  return (
    <div onClick={()=>handleClick()} className="recipeCard">
      RecipeCard
      <h4>{r.name}</h4>
      <h5>
        <img src={r.image_url} alt={r.name} />
      </h5>
      <p>{r.directions.substring(0, 10)}</p>
      <h6>{r.time_to_complete}</h6>
    </div>
  );
}

export default RecipeCard;

// created_at: "2022-03-25T19:55:31.943Z"
// directions: "Plant. Water. Seed"
// id: 1
// image_url: null
// ingredients: "Love. Water. Soil. Time"
// name: "Bananas"
// time_to_complete: 200
// updated_at: "2022-03-25T19:55:31.943Z"

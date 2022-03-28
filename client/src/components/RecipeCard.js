import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ r, fromUser }) {
  const formatTime = (time) =>{
    if (time > 60){
      let mins = time%60
      let hours = (time - mins)/60
      return `${hours}h ${mins}m`
    }
    else if (time === 60){
      return `1h`
    } 
    else{
      return `${time}m`
    }
  }

  return (
    <Link to={fromUser? `/recipes/${r.id}` : `${r.id}`} className="card">
      <h4>{r.name}</h4>
      <img src={r.image_url} alt={r.name} />
      <p>Directions: {`${r.directions.substring(0, 50)}...`}</p>
      <h6>Time: {formatTime(r.time_to_complete)}</h6>
    </Link>
  );
}

export default RecipeCard;

// populate a link in the user with just comments
//list populated should throw you back to 




// created_at: "2022-03-25T19:55:31.943Z"
// directions: "Plant. Water. Seed"
// id: 1
// image_url: null
// ingredients: "Love. Water. Soil. Time"
// name: "Bananas"
// time_to_complete: 200
// updated_at: "2022-03-25T19:55:31.943Z"

import React, { useState } from "react";
import { useParams } from "react-router-dom";

function RecipePage({ recipes, user, setUser, reviews }) {
  const [leaveReview, setLeaveReview] = useState(false);
  const [comment, setComment] = useState("");

  const { id } = useParams();
  let recipe = recipes.find((r) => r.id === parseInt(id));

  console.log("user", user);
  console.log("reviews", reviews);
  console.log("recipes", recipes);

  const directions = recipe.directions.split(".").map((d) => {
    if (d !== "") {
      return <li>{d}</li>;
    }
  });
  const ingredients = recipe.ingredients.split(",").map((i) => {
    if (i !== "") {
      return <li>{i}</li>;
    }
  });

  const userReviews = reviews
    .filter((r) => r.recipe_id === parseInt(id))
    .reverse()
    .map((r) => <p>{`${r.user} said: "${r.description}"`}</p>);

  const handleClick = () => {
    setLeaveReview(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const toSubmit = {
      description: comment,
      user_id: user.id,
      recipe_id: id,
    };
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSubmit),
    })
      .then((r) => r.json())
      .then((data) => {
        let newUser = { ...user };
        newUser.reviews.push(data);
        setUser(newUser);
      });
    setComment("");
    setLeaveReview(false);
  };

  const reviewForm = (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Review:</label>
      <input
        type="text"
        value={comment}
        placeholder="Leave your review..."
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );

  return (
    <div className="recipe-page">
      <div align="center" className="recipe-page-image">
        <img
          className="recipe-image"
          src={recipe.image_url}
          alt={recipe.name}
        />
      </div>
      <h1 align="center">{recipe.name}</h1>
      <div className="ingredients">
        <h3 align="center">
          <u>Ingredients</u>
        </h3>
        <ul>{ingredients}</ul>
      </div>
      <div className="directions">
        <h3 align="center">
          <u>Directions</u>
        </h3>
        <ol>{directions}</ol>
      </div>
      <div className="reviews">
        <h4>
          <u>Reviews</u>
        </h4>
        {userReviews}
      </div>
      <div align="center" className="leave-review">
        {leaveReview ? (
          reviewForm
        ) : (
          <button onClick={() => handleClick()}>Leave a Review</button>
        )}
      </div>
    </div>
  );
}

export default RecipePage;

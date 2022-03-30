import React, { useState } from "react";

function ReviewCard({ r, user, setUser }) {
  const [editReview, setEditReview] = useState(false);
  const [comment, setComment] = useState(r.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const toSubmit = {
      description: comment,
      user_id: user.id,
      recipe_id: r.recipe_id,
    };
    fetch(`/reviews/${r.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSubmit),
    })
      .then((r) => r.json())
      .then((data) => {
        const newReviews = { ...user }.reviews.map((o) => {
          if (o.id === r.id) {
            return data;
          } else {
            return o;
          }
        });
        const newUser = {
          id: user.id,
          username: user.username,
          reviews: newReviews,
        };
        setUser(newUser);
      });
    setEditReview(false);
  };
  //find a better way to format date
  const reviewDate =
    r.created_at.substring(5, 8) +
    r.created_at.substring(8, 10) +
    "-" +
    r.created_at.substring(0, 4);
  const reviewUpdate =
    r.updated_at.substring(5, 8) +
    r.updated_at.substring(8, 10) +
    "-" +
    r.updated_at.substring(0, 4);

  const handleReview = () => {
    setEditReview(true);
  };

  const handleDelete = () => {
    fetch(`/reviews/${r.id}`, { method: "DELETE" });
    const newReviews = { ...user }.reviews.filter((o) => o.id !== r.id);
    const newUser = {
      id: user.id,
      username: user.username,
      reviews: newReviews,
    };
    setUser(newUser);
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
    <div className="review-card">
      <h3>{r.recipe}</h3>
      <img src={r.image_url} alt={r.name} />
      <h4>{r.description}</h4>
      <h6> Created: {reviewDate}</h6>
      {editReview ? (
        reviewForm
      ) : (
        <button onClick={() => handleReview()}>Edit Review</button>
      )}
      <button onClick={handleDelete}>Remove Review</button>
      <img
        src="https://res.cloudinary.com/dtglqdhwm/image/upload/v1648565391/hungry1_m7dpqz.png"
        alt="hungryReview"
      />
    </div>
  );
}

export default ReviewCard;

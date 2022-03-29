import React, { useState } from "react";

// created_at: "2022-03-28T22:02:42.598Z"
// description: "love it"
// id: 1
// recipe: "Bananas"
// updated_at: "2022-03-28T22:02:42.598Z"
// user: "a"

function ReviewCard({ r }) {
  const [isEdited, setIsEdited] = useState(false);

  if (r?.created_at !== r?.updated_at) {
    setIsEdited(true);
  }
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

  return (
    <div className="review-card">
      <h4>{r.recipe}</h4>
      <div>
        <img src={r.image_url} alt={r.name} />
      </div>
      <h4>{r.description}</h4>
      <p>
        <img
          src="https://res.cloudinary.com/dtglqdhwm/image/upload/v1648565391/hungry1_m7dpqz.png"
          alt="hungryReview"
        />
        Created: {reviewDate}
      </p>
      {isEdited && <p>Edited: {`${reviewUpdate}`}</p>}
    </div>
  );
}

export default ReviewCard;

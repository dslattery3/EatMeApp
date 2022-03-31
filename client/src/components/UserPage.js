import React from "react";
import ReviewCard from "./ReviewCard";

function UserPage({ user, setUser }) {
  const userReviews = user && user.reviews.map((r) => <ReviewCard key={r.id} r={r} user={user} setUser={setUser} />);

  return (
    <div>
      <h1 align="center">{user && `${user.username}'s Page`}</h1>
      <h3
        align="center"
        className="user-reviews"
      >{user && `${user.username}'s Reviews`}</h3>
      <div className="container">{userReviews}</div>
    </div>
  );
}

export default UserPage;

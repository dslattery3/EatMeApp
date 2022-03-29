import React from "react";
import ReviewCard from "./ReviewCard";

function UserPage({ user, setUser, reviews }) {
  console.log(user)
  // const userRecipes = user.recipes.map((r) => (
  //   <RecipeCard key={r.id} r={r} fromUser={true} />
  // ));
  const userReviews = reviews?.map((r) => <ReviewCard key={r.id} r={r} user={user} setUser={setUser}/>);

  return (
    <div>
      <h1 align="center">{`${user?.username}'s Page`}</h1>
      {/* <div className="container">{userRecipes}</div> */}
      <h3
        align="center"
        className="user-reviews"
      >{`${user?.username}'s Reviews`}</h3>
      <div className="container">{userReviews}</div>
    </div>
  );
}

export default UserPage;

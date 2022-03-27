import React from 'react'
import RecipeCard from './RecipeCard'
import ReviewCard from './ReviewCard'

function UserPage({user}) {
 console.log(user)
  const userRecipes = user.recipes.map(r => <RecipeCard key={r.id} r={r}/>)
  const userReviews = user.reviews.map(r => <ReviewCard key={r.id} r={r} />)
 
  return (
    <div>
      <h1>User's Page</h1>
      <div className='user-recipe-container'>
        Recipe Container
        {userRecipes}
      </div>      
      <div className='user-review-container'>
        Review Container
        {userReviews}
      </div>      
    </div>
  )
}

export default UserPage
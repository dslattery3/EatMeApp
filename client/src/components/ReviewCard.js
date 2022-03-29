import React, { useState } from "react";

// created_at: "2022-03-28T22:02:42.598Z"
// description: "love it"
// id: 1
// recipe: "Bananas"
// updated_at: "2022-03-28T22:02:42.598Z"
// user: "a"

function ReviewCard({ r , user, setUser }) {
  const [isEdited, setIsEdited] = useState(false);
  const [editReview, setEditReview] = useState(false)
  const [comment, setComment] = useState(r.description)

  const handleSubmit = (e) => {
    e.preventDefault()
    const toSubmit = {
      description: comment,
      user_id: user.id,
      recipe_id: r.recipe_id
    }
    fetch(`/reviews/${r.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(toSubmit)
    })
      .then(r=>r.json())
      .then(data => {
        const newUser = {...user}.reviews.map(o => {
          if(o.id === r.id){
              return data
          }
          else{
              return o
          }
        })
        debugger
        setUser(newUser)
      })
      setEditReview(false)
      setIsEdited(true)
  }

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

  const handleReview = () => {
    setEditReview(true)
  }

  const reviewForm = (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Review:</label>
      <input type='text' value={comment}placeholder='Leave your review...'
      onChange={(e)=>setComment(e.target.value)}/>
      <button type='submit'>Submit Review</button>
    </form>)

  return (
    <div className="review-card">
      <h4>{r.recipe}</h4>
      <div>
        <img src={r.image_url} alt={r.name} />
      </div>
      <h4>{r.description}</h4>
      {editReview ? reviewForm : <button onClick={()=>handleReview()}>Edit Review</button>}
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

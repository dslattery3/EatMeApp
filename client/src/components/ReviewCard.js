import React, {useState} from 'react'

// created_at: "2022-03-28T22:02:42.598Z"
// description: "love it"
// id: 1
// recipe: "Bananas"
// updated_at: "2022-03-28T22:02:42.598Z"
// user: "a"

function ReviewCard({r}) {
  console.log(r, 'hello')
  const [isEdited, setIsEdited] = useState(false)
  if (r?.created_at !== r?.updated_at){
    setIsEdited(true)
  }
  const reviewDate = (r.updated_at.substring(5,8) + r.updated_at.substring(8,10) + '-' + r.updated_at.substring(0,4))
  
  return (
    <div className='review-card'>
        <h4>Recipe Name</h4>
        <div>
          <img src={r.image_url} alt={r.name}/>
        </div>
        <h4>{r.description}</h4>
        <p>Created: {reviewDate}</p>
        {isEdited && <p>(Edited)</p>}
    </div>
  )
}

export default ReviewCard
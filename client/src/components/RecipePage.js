import React from 'react'
import {useParams} from 'react-router-dom'

function RecipePage({recipes}) {
  console.log(recipes)
  const {id} = useParams()
  let recipe = recipes.find(r => r.id === parseInt(id) )
  
  const directions = recipe.directions.split('.').map(d => {
    if (d !== ''){
      return <li>{d}</li>
    }    
  })
  const ingredients = recipe.ingredients.split(',').map(i => {
    if (i !== ''){
      return <li>{i}</li>
    }
  })

  const reviews = recipe.reviews.map( r => <p>{`${r.user} said: "${r.description}"`}</p>)

  return (
    <div className='recipe-page'>
      <div align='center' className='recipe-page-image'>
        <img className='recipe-image' src={recipe.image_url} alt={recipe.name} />
      </div>
      <h1 align='center'>{recipe.name}</h1>
        <div className='ingredients'>
          <h3 align='center'><u>Ingredients</u></h3>
          <ul>
            {ingredients}
          </ul>
        </div>
        <div className='directions'>
          <h3 align='center'><u>Directions</u></h3>
          <ol>
            {directions}
          </ol>
        </div>
        <div className='reviews'>
          {reviews}
        </div>
    </div>
  )
}

export default RecipePage
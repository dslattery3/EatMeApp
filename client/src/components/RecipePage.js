import React from 'react'
import {useParams} from 'react-router-dom'

function RecipePage({recipes}) {
  const {id} = useParams()
  let recipe = recipes.find(r => r.id === parseInt(id) )
  const directions = recipe.directions.split('.').map(d => {
    return <li>{d}</li>
  })
  const ingredients = recipe.ingredients.split('.').map(i => {
    return <li>{i}</li>
  })

  return (
    <div className='recipe-page'>
      <h1>{recipe.name}</h1>
      <div className='recipe-page-image'>
        <img src={recipe.image_url} alt={recipe.name} />
      </div>
      <div className='ingredient-container'>
        {ingredients}
      </div>
      <div className='direction-cotainer'>
        <ol>
          {directions}
        </ol>
      </div>
    </div>
  )
}

export default RecipePage
import React from 'react'
import {useParams} from 'react-router-dom'
import RecipesContainer from './RecipesContainer'

function RecipePage({recipes}) {
  
  const {id} = useParams()
  let recipe = recipes.find(r => r.id === parseInt(id) )
  const directions = recipe.directions.split('.').map(d => {
    return <li>{d}</li>
  })
  const ingredients = recipe.ingredients.split(',').map(i => {
    return <li>{i}</li>
  })

  return (
    <div className='recipe-page'>
      <h1 align='center'>{recipe.name}</h1>
      <div className='recipe-page-image'>
        <img className='recipe-image' src={recipe.image_url} alt={recipe.name} />
      </div>
        <ul>
          {ingredients}
        </ul>
        <ol>
          {directions}
        </ol>
        <div className='reviews'>
          
        </div>
    </div>
  )
}

export default RecipePage
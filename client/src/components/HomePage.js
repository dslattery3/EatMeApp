import React from 'react'
import {NavLink} from 'react-router-dom'

function HomePage({user}) {
  return (
    <div align ='center' className='homepage'>
      <h1> EatMe </h1>
      <div className='home-container'>
        <img src={require('../images/EatME1.jpg')} alt='eatme logo'/>
        <p>About our app</p>
      </div>
      {!user && <div className='signup-login-container'>
      <NavLink to='/signup'>
        <button> SignUp </button>
      </NavLink>
      <NavLink to='/login'>
        <button> Login </button>
      </NavLink>
      </div>}
      <div className='top-recipe-container'>
        <h3>Top Rated Recipes</h3>
        Top Recipe Container
      </div>
    </div>
  )
}

export default HomePage
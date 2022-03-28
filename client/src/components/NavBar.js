import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <NavLink exact to='/'>
        <button> Home 🏡 </button>
      </NavLink>
      <NavLink to='/recipes'>
        <button> Recipes 🍴 </button>
      </NavLink>
      <NavLink to='/me'>
        <button> My Page 👤 </button>
      </NavLink>
      <NavLink to='/logout'>
        <button> Log Out ⚰️ </button>
      </NavLink>
    </div>
  )
}

export default NavBar
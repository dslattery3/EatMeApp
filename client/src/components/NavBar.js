import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <NavLink exact to='/'>
        <button> 🏡 </button>
      </NavLink>
      <NavLink to='/recipes'>
        <button> 🍴 </button>
      </NavLink>
      <NavLink to='/me'>
        <button> 👤 </button>
      </NavLink>
      <NavLink to='/logout'>
        <button> ⚰️ </button>
      </NavLink>
    </div>
  )
}

export default NavBar
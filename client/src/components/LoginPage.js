import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

function LoginPage({setUser, navigate}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleUsername = (e) => setUsername(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  
  const handleLogin = (e) => {
    e.preventDefault()
    fetch(`/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(r => r.json())
      .then(data => {
        setUser(data)
        navigate('/')
      })

  }
  
  return (
    <div>
      <h1>Login Page</h1>

      <div className='form'>
        Login Form Container
      </div>
      <div>
      <form className='login-form' onSubmit={(e) => handleLogin(e)}>
        <label>Username</label>
        <input type='text' value={username} placeholder='username' onChange={(e) => handleUsername(e)} />
        <label>Password</label>
        <input type='password' value={password} placeholder='password' onChange={(e) => handlePassword(e)} />
        <button type='submit'>Login</button>
      </form>
      <NavLink to='/signup'>
        <button> SignUp </button>
      </NavLink>


      </div>



    </div>
  )
}

export default LoginPage
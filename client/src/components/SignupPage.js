import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

function SignupPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {username: username, password: password}
        console.log(newUser)
        fetch(`/signup`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(r => r.json())
          .then(console.log)
      }


  return (
    <div>
      <h1>Signup Page</h1>

      <div className='form-container'>
        Login/Signup Form Container
        <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
          <label>Username</label>
          <input type='text' value={username} placeholder='username' onChange={(e) => handleUsername(e)} />
          <label>Password</label>
          <input type='password' value={password} placeholder='password' onChange={(e) => handlePassword(e)} />
          <button type='submit'>Submit</button>
        </form>
      <NavLink to='/login'>
        <button> Login </button>
      </NavLink>
      </div>
    </div>

  )
}

export default SignupPage
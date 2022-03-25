import React, {useState} from 'react'

function LoginPage() {
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
      .then(console.log)
  }
  
  return (
    <div>
      <h1>Login Page</h1>

      <div className='form-container'>
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
      </div>



    </div>
  )
}

export default LoginPage
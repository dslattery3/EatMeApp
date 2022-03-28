import React from 'react'

function LogOut({navigate, setUser}) {
  
    const handleClick = (e) => {
        fetch(`/logout`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify()
          })
            .then(r => r.json())
            .then(data => {
              setUser(null)
              navigate('/')
            })
    }

  return (
    <div>
        <h1>LogOut</h1>

        <button onClick={(e) => handleClick()}>LogOut</button>

    </div>
  )
}

export default LogOut
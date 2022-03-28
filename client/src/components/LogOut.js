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
    <div className='goodbye'>
        <h1 align='center'>LogOut</h1>
        <img src={require('../images/eatme_logout.png')} alt='goodbye photo'/>
        <button onClick={(e) => handleClick()}>LogOut</button>

    </div>
  )
}

export default LogOut
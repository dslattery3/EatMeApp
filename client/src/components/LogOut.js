import React from 'react'

function LogOut() {
    const handleClick = (e) => {
        fetch(`/logout`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify()
          })
            .then(r => r.json())
            .then(console.log)
    }

  return (
    <div>
        <h1>LogOut</h1>

        <button onClick={(e) => handleClick()}>LogOut</button>





    </div>
  )
}

export default LogOut
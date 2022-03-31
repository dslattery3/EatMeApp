import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SignupPage({ navigate, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const handleUsername = (e) => setUsername(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleConfirm = (e) => setPasswordConfirm(e.target.value)

  const passwordMatch = (p1, p2) => {
    if (p1 && p2 && p1 === p2) {
      return true
    }
    else {
      return false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordMatch(password, passwordConfirm)) {
      alert('Your password and password confirmation do not match.')
      return false
    }
    const newUser = { username: username, password: passwordConfirm }
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then(setUser)

    navigate('/')
  };



  return (
    <div>
      <div align="center" className="form-image">
        <img src={require("../images/eatme_signup.png")} alt="eatme_signup" />
      </div>
      <h1 align="center">Join the Horde</h1>
      <div className="form">
        <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => handleUsername(e)}
          />
          <label> Password</label>
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => handlePassword(e)}
          />
          <label> Confirm Password</label>
          <input
            type="password"
            value={passwordConfirm}
            placeholder="password"
            onChange={(e) => handleConfirm(e)}
          />
          <div align="center" className="submit-horde">
            <button type="submit">Submit to the Horde 👹 </button>
          </div>
          <NavLink to="/login">
            <div align="center" className="login">
              <button> Login </button>
            </div>
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;

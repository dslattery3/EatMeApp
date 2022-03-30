import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LoginPage({ setUser, navigate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
          navigate("/");
        });
      }
    });
  };

  return (
    <div>
      <div align="center" className="form-image">
        <img src={require("../images/eatme_login.png")} alt="eatme_login" />
      </div>
      <h1 align="center">Welcome Back My Fellow Beast</h1>
      <div className="form">
        <form className="login-form" onSubmit={(e) => handleLogin(e)}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => handleUsername(e)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => handlePassword(e)}
          />
          <div align="center" className="feed-me">
            <button type="submit">Feed Me</button>
          </div>
          <NavLink to="/signup">
            <div align="center" className="Signup">
              <button> SignUp 🤤 </button>
            </div>
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

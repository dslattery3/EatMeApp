import React from "react";
import { NavLink } from "react-router-dom";

function HomePage({ user, topRecipes }) {
  return (
    <div align="center" className="homepage">
      <h1> EatMe </h1>
      <div className="home-container">
        <img src={require("../images/EatME1.jpg")} alt="eatme logo" />
        <p>
          Welcome to EatMe where eating more is always encouraged. In order to
          view our recipes from our catalog you will need to login or register.
          Once you're signed in, you'll be able to feed the beast inside.
        </p>
        <img src={require("../images/cookie.gif")} alt="cookie monster" />
      </div>
      {!user && (
        <div className="signup-login-container">
          <NavLink to="/signup">
            <button> SignUp </button>
          </NavLink>
          <NavLink to="/login">
            <button> Login </button>
          </NavLink>
        </div>
      )}
      <h3>Top Rated Recipes</h3>
      <div className="top-recipe-container">{topRecipes}</div>
    </div>
  );
}

export default HomePage;

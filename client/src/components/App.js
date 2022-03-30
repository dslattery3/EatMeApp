import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import RecipePage from "./RecipePage";
import RecipesContainer from "./RecipesContainer";
import UserPage from "./UserPage";
import HomePage from "./HomePage";
import SignupPage from "./SignupPage";
import LogOut from "./LogOut";
import RecipeCard from "./RecipeCard";
import "../index.css";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((data) => setUser(data));
      }
    });
  }, []);

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(`/recipes`)
      .then((r) => r.json())
      .then(setRecipes);
  }, [user]);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, [user]);

  const navigate = useNavigate();

  // console.log('user', user)
  // console.log('reviews', reviews)
  console.log("recipes", recipes);

  let recipesSorted = [...recipes]
    .sort((a, b) => b.review_count - a.review_count)
    .splice(0, 3);
  const topRecipes = recipesSorted.map((r) => <RecipeCard key={r.id} r={r} />);
  // console.log("topRecipes", topRecipes);
  console.log("recipesSorted", recipesSorted);
  return (
    <div className="App">
      {user && <NavBar />}
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setUser={setUser} navigate={navigate} />}
        />

        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/recipes/:id"
          element={
            <RecipePage
              recipes={recipes}
              user={user}
              setRecipes={setRecipes}
              setUser={setUser}
              reviews={reviews}
              setReviews={setReviews}
            />
          }
        />

        <Route
          path="/recipes"
          element={<RecipesContainer recipes={recipes} />}
        />

        <Route
          path="/me"
          element={<UserPage user={user} setUser={setUser} reviews={reviews} />}
        />

        <Route
          path="/logout"
          element={<LogOut setUser={setUser} navigate={navigate} />}
        />

        <Route
          path="/"
          element={<HomePage user={user} topRecipes={topRecipes} />}
        />
      </Routes>
    </div>
  );
}

export default App;

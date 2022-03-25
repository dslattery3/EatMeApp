import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import RecipePage from "./RecipePage";
import RecipesContainer from "./RecipesContainer";
import UserPage from "./UserPage";
import HomePage from "./HomePage";
import SignupPage from "./SignupPage";
import LogOut from "./LogOut";
import "../index.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(`/recipes`)
    .then((r) => r.json())
    .then((data) => {
      setRecipes(data);
    })
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/signup">
          <SignupPage />
        </Route>

        <Route path="/recipes/:id">
          <RecipePage recipes={recipes}/>
        </Route>

        <Route exact path="/recipes">
          <RecipesContainer recipes={recipes}/>
        </Route>

        <Route path="/me">
          <UserPage />
        </Route>

        <Route path="/logout">
          <LogOut />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

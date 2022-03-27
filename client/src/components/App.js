import React, {useState, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
  const [user, setUser] = useState(null)

  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    fetch(`/recipes`)
    .then((r) => r.json())
    .then((data) => {
      setRecipes(data)
    })
  }, [])

  const navigate = useNavigate()

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} navigate={navigate}/>} />

        <Route path="/signup" element={<SignupPage />} />

        <Route path="/recipes/:id" element={<RecipePage recipes={recipes}/>} />

        <Route exact path="/recipes" element={<RecipesContainer recipes={recipes}/>} />
          
        <Route path="/me" element={<UserPage user={user} setUser={setUser}/>}/>

        <Route path="/logout" element={<LogOut setUser={setUser} navigate={navigate}/>} />

        <Route exact path="/" element={<HomePage />}/>

      </Routes>
    </div>
  );
}

export default App;
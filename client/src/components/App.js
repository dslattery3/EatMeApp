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
  useEffect(()=>{
    fetch('/me')
      .then(r => {
        if(r.ok){
          r.json().then(data=>setUser(data))
        }
      })
  },[])
  
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    fetch(`/recipes`)
    .then((r) => r.json())
    .then((data) => {
      setRecipes(data)
    })
  }, [user])

  const navigate = useNavigate()  

  return (
    <div className="App">
      {user && <NavBar /> }
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} navigate={navigate}/>} />

        <Route path="/signup" element={<SignupPage />} />

        <Route path="/recipes/:id" element={<RecipePage recipes={recipes}/>} />

        <Route exact path="/recipes" element={<RecipesContainer recipes={recipes} />} />
        
        <Route exact path="/me" element={<UserPage user={user} setUser={setUser} />}/>

        <Route path="/logout" element={<LogOut setUser={setUser} navigate={navigate}/>} />

        <Route exact path="/" element={<HomePage user={user} />}/>

      </Routes>
    </div>
  );
}

export default App;

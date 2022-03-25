import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'
import LoginPage from './LoginPage'
import RecipePage from './RecipePage'
import RecipesContainer from './RecipesContainer'
import UserPage from './UserPage'
import HomePage from './HomePage'
import SignupPage from './SignupPage'
import LogOut from './LogOut'
import '../index.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/signup'>
          <SignupPage />
        </Route>

        <Route path='/recipes/:id'>
          <RecipePage />
        </Route>

        <Route exact path='/recipes'>
          <RecipesContainer />
        </Route>

        <Route path='/me'>
          <UserPage />
        </Route>

        <Route path='/logout'>
          <LogOut />
        </Route>

        <Route exact path='/'>
          <HomePage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;

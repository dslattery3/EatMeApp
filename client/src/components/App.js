import React,  {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'
import '../index.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/login'>
          <LoginPage />
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

        <Route exact path='/'>
          <Home />
        </Route>

      </Switch>
    </div>
  );
}

export default App;

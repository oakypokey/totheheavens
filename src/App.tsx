import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Button} from 'nes-react'
import SatMap from './components/SatMap/SatMap'
import MainMenu from './components/MainMenu/MainMenu'
import Userprofile from './components/UserProfile/Userprofile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
//@ts-ignore
} from "react-router-dom";


require('dotenv').config()



const App: React.FC = () => {

  return (
    <div className="App">
      <div className="container">
        <>
        <Router>
          <Switch>
            <Route exact path="/">
              <>
              <h1> This is a landing page</h1>
              <Link to="/login"><Button>Enter</Button></Link>
              </>
            </Route>
            <Route path="/login">
              <MainMenu />
            </Route>
            <Route path="/satmap">
              <SatMap />
            </Route>
            <Route path="/profile">
              <Userprofile />
            </Route>
          </Switch>
        </Router>
        </>
      </div>
    </div>

  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import { Container } from 'nes-react'
import SatMap from './components/SatMap/SatMap'
import MainMenu from './components/MainMenu/MainMenu'
require('dotenv').config()



const App: React.FC = () => {

  return (
    <div className="App">
      <div className="container">
        <Container>
          <MainMenu />
        </Container>
      </div>
    </div>

  );
}

export default App;

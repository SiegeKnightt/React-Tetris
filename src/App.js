/*
Author: Reeves Farrell
Desc: React website where you can play Tetris
Goals: Learn React development
Date: 11/2/2022
*/

import './App.css';
import Game from  './components/Game';

function App() {

  return (
    
    <div className="App">
      <Game rows = {20} columns = {10} />
    </div>
  );
};

export default App;
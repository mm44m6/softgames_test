import React, { useState } from 'react';
import Game from './Containers/Game';
import './App.css';


function App() {

  const [boardSize, setBoardSize] = useState(0);
  const [showGame, setShowGame] = useState(false); 

  return (
    <div className="GameSetup">
       {showGame ?
        <Game boardSize={parseInt(boardSize)} /> :
        <>
          <input className="BoardSizeInput" type="number" value={boardSize} onChange={(e) => setBoardSize(e.target.value)} />
          <button className="StartGameButton" onClick={(e) => setShowGame(!showGame)}> Start Game</button> 
        </>
       }
    </div>
  );
  
}

export default App;

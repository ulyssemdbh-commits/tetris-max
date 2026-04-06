import React from 'react';
import GameBoard from './components/GameBoard';
import ScorePanel from './components/ScorePanel';
import ControlsHint from './components/ControlsHint';

const App = () => {
    return (
        <div className="app">
            <GameBoard />
            <ScorePanel />
            <ControlsHint />
        </div>
    );
};

export default App;
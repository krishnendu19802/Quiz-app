import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Gamearea from './components/Gamearea';
import { useState } from 'react';

function App() {
  const [score,setscore]=useState(0)
  
  function updatescore(val)
  {
    console.log('score called')
    if(!val)
    setscore(score+1)
    else
    setscore(0)
  }

  return (
    <div>
        <Topbar score={score} />
        <div className="d-flex justify-content-center align-items-center">

        <Gamearea updatescore={updatescore} score={score} /> 
        </div>
    </div>


  );
}

export default App;

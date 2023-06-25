import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Gamearea from './components/Gamearea';
import { useEffect, useState } from 'react';

function App() {
  const [score,setscore]=useState(0)
  const [timer,settimer]=useState([0,false])
  useEffect(()=>{
    // updtimer(1)
    if(timer[0]<10 && !timer[1])
    {
      setTimeout(() => {
        settimer([timer[0]+1,false])
      }, 1000);
    }},[timer])
   
  function updatescore(val)
  {
    console.log('score called')
    if(!val)
    setscore(score+1)
    else
    setscore(0)
    
  }
  // const updtimer=(val)=>{
  //      if(val!=0)
  //      {
  //       if(timer<10){
  //         setInterval(updtimer(1),1000)
  //         settimer(timer+1);
  //      }
  //     }
  //     else
  //      {
  //       settimer(0)
  //       updtimer(1)
  //      }
  // }


  

  return (
    <div>
      
        <Topbar score={score} timer={timer}  />
        <div className="d-flex justify-content-center align-items-center">

        <Gamearea updatescore={updatescore} score={score} /*updtimer={updtimer} */ /> 
        </div>
    </div>


  );
}

export default App;

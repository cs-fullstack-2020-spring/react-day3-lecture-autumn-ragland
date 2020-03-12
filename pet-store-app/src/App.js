import React from 'react';
import './App.css';
import Pets from './components/Pets';

function App() {
  alert("Did your child component Pets mount yet?")
  return (
    <div className="App">
     <h1>Pet Store App</h1>
     <Pets color = "brown"/>
    </div>
  );
}

export default App;

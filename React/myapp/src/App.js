import React from 'react';
import './App.css';
import ClassComp from './Components/ClassComp';
import FunctionalComp  from './Components/FunctionalComp';
// Components are imported automatically
function App() {
  return (
<div>
<h1> Mahfujur Rahman</h1>
    <h2>Learning Components</h2>
    <FunctionalComp></FunctionalComp>
    <ClassComp/>
</div>

  );
}

export default App;

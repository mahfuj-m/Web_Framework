import React from 'react';
import './App.css';
import {ClassComp, ClassComp1 } from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import FC  from './Components/FunctionalComp';
import ParentComp from './Components/ParentComp';
// Components are imported automatically
function App() {
  return (
<div>
<h1> Mahfujur Rahman</h1>
    <h2>Learning Components</h2>
    <FC></FC>
    <ClassComp/>
    <ClassComp1/>
    <Click/>
    <Counter/>
    <ParentComp/>
</div>

  );
}
// defoult export will help to rename the file while importing


export default App;

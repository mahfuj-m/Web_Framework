import React from 'react';
import './App.css';
import {ClassComp, ClassComp1 } from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import FC  from './Components/FunctionalComp';
import ParentComp from './Components/ParentComp';
import ClassProps from './ComponentsProps/ClassProps';
import FunctionalProps from './ComponentsProps/FunctionalProps';
import NewComp from './StateComponents/NewComp';
// Components are imported automatically
class App extends React.Component {
  styles={
    fontStyle:'bold',
    color:'teal'
  };
  render(){
    return (
    <div>
  <div className='App'><h4 style={this.styles}>Welcome</h4></div>
   <h1> Mahfujur Rahman</h1>
      <NewComp/>

    <FC></FC>
    <ClassComp/>
    <ClassComp1/>
    <Click/>
    <Counter/>
    <ParentComp/>
    <ClassProps name="Mahfuj" place="Kishoreganj"/>
    <ClassProps name="Tabiul" place="Comilla"><button>Click</button></ClassProps>
    <ClassProps name="Zinia" place ="Bogra" >Child Component</ClassProps>
    <FunctionalProps name="Fatima" place="Noagoan"/>
</div>

  );
  }

    

}
// defoult export will help to rename the file while importing


export default App;

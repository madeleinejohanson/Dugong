import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import blueFish from'./bluefish.svg';
import greenFish from'./greenfish.svg';
import blackFish from'./blackfish.svg';
import orangeFish from'./orangefish.svg';
import pinkFish from'./pinkfish.svg';
import redShrimp from'./redshrimp.svg';
import './App.css';


var fishList = [
  {fishName: 'Neon Tetra', phLevel: '7', hiding: 'false', tempRange: '27', src:blueFish},
  {fishName: 'Corey', phLevel: '7.5', hiding: 'true', tempRange: '25', src:greenFish},
  {fishName: 'Pleco', phLevel: '6.5', hiding: 'true', tempRange: '24', src:blackFish},
  {fishName: 'Cichlid', phLevel: '8', hiding: 'false', tempRange: '26', src:orangeFish},
  {fishName: 'Endlers', phLevel: '7', hiding: 'false', tempRange: '21', src:pinkFish},
  {fishName: 'Shrimp', phLevel: '6.5', hiding: 'true', tempRange: '22', src:redShrimp}
  ];
//<button onClick={this.stateSwap(fishObj.fishName)}>{fishObj.fishName}</button>
//        if(fishVis[fishObj.fishName]==true){



      //     {if(fishVis[fishObj.fishName]==true){
      //   <div className="App-header">
      //   <img src={fishObj.src} className="App-logo" alt=":("/> 
      //   <h1>{fishObj.fishName}</h1>
      //   <p className="App-intro">
      //   Ph Level: {fishObj.phLevel} <br />
      //   Hiding Places: {fishObj.hiding} <br />
      //   Temperature: {fishObj.tempRange} <br />
      //   </p>
      // </div>}}

function fishRender(fishObj){
    return (
      <div className="App">

        <div className="App-buttons">
          <button className="myButton" state='False' onClick={stateSwap(fishObj.fishName)}> {fishObj.fishName}</button>
        </div> 

        {(fishVis[fishObj.fishName] ? (

        <div className="App-header">
      <img src={fishObj.src} className="App-logo" alt=":("/> 
      <h1>{fishObj.fishName}</h1>
      <p className="App-intro">
      Ph Level: {fishObj.phLevel} <br />
      Hiding Places: {fishObj.hiding} <br />
      Temperature: {fishObj.tempRange} <br />
      </p>
      </div>)
      :
      (<p className="App-intro">
      nothing
      </p>
      ))}

      </div>
    );
}

var arrName = fishList.map((item)=>(item.fishName))
var fishVis = {}
arrName.map((name)=>(fishVis[name] = false))
console.log(fishVis);
var buttonBooleanList = ['Corey', 'Neon Tetra']
console.log(buttonBooleanList);

function stateSwap(species){
console.log(fishVis[species])
fishVis[species] = !fishVis[species]
console.log(fishVis)
}
stateSwap('Corey') //button state = true?

// if fish is on render PH, hiding place, temp, otherwise if fish is off, don't render  
// -> function will be test if state is on, then if else statement to render

// there will be a button that changes the state of each fish (off/on)

function App() {
  return (
    <div>
          {fishList.map(fishRender)}
    </div>
  );
}

//how to render class?
export default App;
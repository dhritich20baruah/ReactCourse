import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Custom from './components/Custom';

const age = !true;
const age1 = 20;

function App() {
  // Funtion defination for the button
  function buttonClick(){
    console.log("I was pressed")
  }


// useState is a function in react library called a hook
  //  syntax: const [state, setstate] = useState(initialState)
  const [counter, setCounter] = useState(0) //2nd render [100, fn]

useEffect(() => {
   console.log("useEffect hook", counter)
}, [counter])//it is a function that takes two arguments first is a function and the second is a counter

  // const counterSet = useState(100) here 100 is default value as 0 is in prev. line
  function increase(){
    setCounter(function(oldCounterValue){
      return oldCounterValue + 1 //If newer value depends on older value use functional update
    }) 
  }
  function decrease(){
    setCounter(counter - 1) //State variables are updated or declared in this manner
  }
  return (
    <>
    <Header />
   <div id="content">
    <h1>Counter: {counter}</h1>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>

     <p>I am {age ? <p>above 18</p> : <p>not above 18</p>}</p>
     <Custom name="Delta"/> 
     {/* props = {name:"Delta"} */}
     {/* Conditional rendering JS will always look for the first falsy vakue and render it. If it doesnot then it will render the last true value */}
     {true && <p>Which may be visible true </p>}
     {false && <p>Which may not be visible </p>}
     {age1 > 18 && <p>Which may be visible 20 </p>}
     {age1 <18 && <p>Which may be visible </p>}
      {age1>18 ? <p>Which may be visible</p> : null}
      <button onClick={buttonClick}>CLICK ME</button>
   </div>
   </>
  );
}

export default App;

// setCounter = function(value){
//   if(typeof value === 'function'){
//     //I want to do something else
//     const updatedValue = value(oldValue)
//     counter = updatedValue
//     rerender()
//   }else{
//     counter = value
//     rerender()
//   }
// }
import { useState } from 'react'    // hooks in react
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)      //use of hooke for ui updation in react we dont need to add all js codes 

  // let counter=15

  const addValue = () => {
    if (counter < 30) {
      counter = counter + 1;
      console.log("clickedd", counter)
      setCounter(counter)
    }
  }

  const addValuefour = () => {
    if (counter < 30) {
      // counter = counter + 1;
      
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    }
  }


  const decValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter)
    }

  }






  return (
    <>
      <h1>Chai or React Counter</h1>
      <p>Counter value : {counter}</p>
      <button onClick={addValue} >Add Value: to  {counter + 1}</button>
      <br />
      <button onClick={decValue}>Decrease Value: to  {counter - 1}</button>
      <br />
      <button onClick={addValuefour}>Add+4 Value: to  {counter +4}</button>
    </>
  )
}

export default App

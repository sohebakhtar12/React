import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  
  
  const addValue=()=>{
    // counter = counter+1
    setCounter(counter+1)
  }
   const removeValue=()=>{
    // counter = counter+1
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
     <h1>Chai or React</h1>
     <h1>Hii Soheb </h1>
     <h2>Counter Value: {counter}</h2>

  <button 
  onClick={addValue}
  >Add Value
  </button>
  <br />
  <br />
  <button 
  onClick={removeValue}
  >Remove Value</button>

  <p>footer: {counter}</p>


    </>
  )
}

export default App 

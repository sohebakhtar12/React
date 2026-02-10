import React,{useState} from "react";
function Counter(){
   
const[count ,setCount]=useState(0);
const increment =()=>{
    setCount(count+1)
}
const decrement=()=>{
    if(count>=1)
      setCount(count-1)
}
const reset=()=>{
    setCount(0)
}

return(
    <div className="count-div">
        <p className="count-display">Count::{count}</p>
        <button className="couter-button" onClick={increment}>Increment</button>
        <button className="couter-button" onClick={decrement}>Decrement</button>
        <button className="couter-button" onClick={reset}>Reset</button>


    </div>
);


}
export default Counter;

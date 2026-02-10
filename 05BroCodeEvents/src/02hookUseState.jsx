import React,{useState} from "react";
function HookUseState() {
    const [name, setName]=useState("Guest");
    const [age, setAge]=useState(0);
    const [isEmployed,setIsEmployed]=useState(false);

    const updateName=()=>{
        setName("soheb");
    }

    const incrementAge=()=>{
        setAge(age+1)
    }

    const toggele=()=>{
        setIsEmployed(!isEmployed);
    }
    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is Employed: {isEmployed ? "Yes":"No"}</p>
        <button onClick={toggele}>Toggle State</button>
    </div>
             
    );
}
export default HookUseState;
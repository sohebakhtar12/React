import Button from "./01Button.jsx"
import HookUseState from "./02hookUseState.jsx"
import Counter from "./03Counter.jsx"
import MyComponent from "./04onChange.jsx"
import ColorPicker from "./05ColorPicker.jsx"
import MyObjects from "./06UpdateObjectsUseState.jsx"
import MyArray from "./07UpdateArrayUseState.jsx"
import ArrOfObj from "./08UpdateArrOfObjUseState.jsx"
import StudentsList from "./09StudentDetails.jsx"


function App() {


  return (
    <>
        <br/><b><p>----------------------------------useState Topic</p></b>
          <Button/>
          <HookUseState/>
        <br/><b><p>--------------------Counter system using useState - hook</p></b> 
          <Counter/>
        <br/><b><p>--------------------- Chapter1--onChange Topic - hook</p></b>
          <MyComponent/>

        <br/><b><p>------------------------------------------------------ Color Picker using onChange hook </p></b>
        <ColorPicker/>

        <br/><b><p>---------------------------------------------- Update Object in state using useState </p></b>
        <MyObjects/>

        <br/><b><p>---------------------------------------------- Update Array in state using useState </p></b>
        <MyArray/>

        <br/><b><p>----------------------------------------------Update ARRAY of OBJECTS in state </p></b>
        <ArrOfObj/>

        <br/><b><p>----------------------------------------------Update ARRAY of OBJECTS (Student Details)  </p></b>
       <StudentsList/>
<br/>
       





    </>
  
  )
}

export default App

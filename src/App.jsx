import { useState } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [dmode, setdmode] = useState("light");
  const [color, setcolor] = useState("black");
  let body = document.querySelector("body")
  const changemode = () =>{
    console.log("run")
    if(dmode == "light"){
      body.style.backgroundColor = "#0E1026"
      setdmode("dark")
      setcolor("white")
    }
    else{
      body.style.backgroundColor = "white"
      setdmode("light")
      setcolor("black")
    }
  }

  return (
    <>
   
      <Nav mode={dmode}></Nav>
      <div className="container">
        <Form props="buttons" mode={dmode}></Form>
        <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changemode}/>
        <label className="form-check-label" for="flexSwitchCheckDefault" style={{color:color}} >dark mode</label>
        </div>
       
      </div>
     
    </>
  );
}

export default App;

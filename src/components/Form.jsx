import React, { useRef, useState } from "react";

   export default function Form({props}) {
    const [data,setData]=useState("")
    
    const text = (e) =>{
      console.log("value change")
      setData(e.target.value)
    }
    
    const uppercase =()=>{
      console.log("button clicked")
      console.log(data)
      let a = data.toUpperCase()
      console.log(a)
      setData(a)
    }
    const lowercase =()=>{
      console.log("button clicked")
      console.log(data)
      let a = data.toLowerCase()
      console.log(a)
      setData(a)
    }
    const tex = useRef(null)

    const copy =()=>{
      tex.current.select()

      window.navigator.clipboard.writeText(data)
      // alert("text copied!!!")
    }
    const reset = () =>{
      setData("")
    }
    const removeExtraSpace = () =>{
      let dws= data.split(/[ ]+/);
      setData(dws.join(" "))

    }
    const RandomText = () =>{
      let randtext = "Mind what no by kept. Celebrated no he decisively thoroughly. Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
      let a = randtext.split(" ");
      let str = ""
      for (let index = 0; index < a.length; index++) {
        let min = Math.ceil(0);
        let max = Math.floor(a.length);
        let randno= Math.floor(Math.random() * (max - min)) + min;
        
        str +=" "+ a[randno]
      }
      console.log(str)
      setData(str+randtext+str);

    }
  return (
    <div className="hero">
    <div>
      <div className="input-group mb-9 mx-10 ">
        <textarea
        rows={8}
          className="form-control val"
          aria-label="With textarea"
          onChange={text}
          value={data}
          ref={tex}
        ></textarea>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={copy}>Copy</button>

      </div>
      <button type="button" className="btn btn1 btn-primary" onClick={uppercase}>Uppercase</button>
      <button type="button" className="btn btn1 btn-primary ms-1" onClick={lowercase}>lowercase</button>
      <button type="button" className="btn btn1 btn-primary ms-1" onClick={reset}>reset</button>
      <button type="button" className="btn btn1 btn-primary ms-1" onClick={removeExtraSpace}>removeExtraSpace</button>
      <button type="button" className="btn btn1 btn-primary ms-1" onClick={RandomText}>RandomText</button>
    </div>
    </div>
  );
}

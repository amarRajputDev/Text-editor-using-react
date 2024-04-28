import React, { useEffect, useState } from 'react'

export default function Nav({mode}) {

  let [dcolor,setColor] = useState("black")
  let [dmode,setdmode] = useState(false)

  useEffect(() =>{
    console.log("object")
    if(dmode){
      setdmode(false)
      setColor("white")
    }
    else{
      setdmode(true)
      setColor("black")
    }
    console.log(dcolor)

  },[mode])
 

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${mode}`}>
  <div className="container-fluid" style={{color:dcolor}}>
    <a className="navbar-brand" href="#" style={{color:dcolor}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color:dcolor}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:dcolor}}>Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:dcolor}}>
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" >Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" style={{color:dcolor}}>Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" style={{color:dcolor}}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

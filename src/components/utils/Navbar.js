import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {

  const renderList = () =>{
    return [
      <Link to="/" key={"1"}>
        <li className="navStyle btn" >Home</li>
      </Link>,
      <Link to="/create" key={"2"}>
        <li className="navStyle btn">Create</li>
      </Link>,
      <Link to="/readOne" key={"4"}>
        <li className="navStyle btn" >Read One</li>
      </Link>
    ]
  }

  return (
    <nav>
      <h1>CRUD Application</h1>
      <ul>{renderList()}</ul>
    </nav>
  )
}

export default Navbar
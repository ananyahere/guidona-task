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
      <Link to="/read" key={"3"}>
        <li className="navStyle btn">Read</li>
      </Link>,
      <Link to="/update" key={"4"}>
        <li className="navStyle btn" >Update</li>
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
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = (props) => {
  return (
    <div>
      <img src="logo.png" alt="logo" />
      <Link to="/"> Home </Link>
    </div>
  )
}

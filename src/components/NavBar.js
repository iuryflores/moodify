import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Logo } from './Shared.js'

export const NavBar = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="logo.png" alt="" />
      </Logo>
      <Link to="/"> Home </Link>
    </Nav>
  )
}

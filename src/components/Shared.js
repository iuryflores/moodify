import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  background-color: lightgray;
  display: flex;
  align-items: center;
  height: 85px;
  margin: 5px;
  border: 0.5px solid black;
  font-family: georgia;
  font-size: 20px;
  justify-content: center;
`
export const Logo = styled.h1`
  background-color: lavender;
  width: 60px;
  height: 40px;
  margin: 15px;
`
export const Card = styled(Link)`
  display: flex;
  text-decoration: none;
  color: darkgray;
  justify-content: center;
  width: 400px;
  border: 1px solid black;
  margin: 10px;
`
export const MoodList = styled(Link)`
  text-decoration: none;
  display: flex;
  color: gray;
  justify-content: center;
  width: 400px;
  border: 2px solid gray;
  margin: 15px;
`

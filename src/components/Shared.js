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
export const MoodList = styled.p`
  text-decoration: none;
  display: flex;
  color: gray;
  justify-content: center;
  width: 400px;
  border: 2px solid gray;
  margin: 15px;
`
export const LinkHome = styled(Link)`
  text-decoration: none;
  font-family: georgia;
  display: flex;
  color: gray;
  justifity-content: center;
  width: 400px;
  border: 1px solid gray;
  margin: 20px;
`
export const HeadingHome = styled.h1`
  background-color: lightblue;
  font-family: georgia;
  font-size: 45px;
  color: purple;
`
export const PHome = styled.p`
  font-family: times-new-roman;
  font-size: 22px;
  color: gray;
  padding: 10px;
  margin: 5px;
  border: 0.5px solid black;
  border-width: 65px;
`
export const MoodListAll = styled(Link)`
  font-family: georgia;
  font-size: 38px;
  color: purple;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
`

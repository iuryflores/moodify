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
export const Card = styled.div`
  display: flex;
  text-decoration: none;
  color: black;
  justify-content: center;
  width: 400px;
  border: 2px dotted black;
  padding: 10px;
  margin: 10px;
`
export const MoodList = styled.p`
  display: flex;
  color: gray;
  font-size: 38px;
  justify-content: center;
  margin: 15px;
`
export const LinkHome = styled(Link)`
  text-decoration: none;
  font-family: georgia;
  display: flex;
  color: gray;
  font-size: 22px;
  justifity-content: center;
  width: 200px;
  border: 1px solid gray;
  margin: 20px;
`
export const HeadingHome = styled.h1`
  background-color: teal;
  height: 130px;
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
  border: 0.5px dashed gray;
  border-width: 85px;
`
export const MoodListAll = styled(Link)`
  font-family: georgia;
  font-size: 34px;
  color: lightpurple;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
`
export const Heading2 = styled.h2`
font-family: times-new-roman;
font-size: 32px;
color: gray;
padding: 10px:
`
export const List = styled.li`
  list-style: none;
  padding: 10px;
`
export const Button = styled.button`
  background-color: lavender;
  padding: 15px;
  margin: 10px;
  color: gray;
  font-family: arial;
  font-size: 16px;
  align-items: center;
  justify-content: center;
`

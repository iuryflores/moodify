import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  height: 85px;
  margin: 5px;
  box-shadow: 0px 2px 2px #ccc;
  font-family: "Montserrat";
  font-size: 20px;
  justify-content: center;
  list-style-type: none;
`;
export const Logo = styled.li`
  width: 80%;
`;
export const HomeIcon = styled.li`
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 5px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 2px solid black;
  }
`;

export const Card = styled.div`
  display: flex;
  text-decoration: none;
  color: black;
  justify-content: center;
  width: 400px;
  border: 2px dotted black;
  padding: 10px;
  margin: 10px;
`;
export const MoodList = styled.div`
  display: flex;
  background-color: #142448;
  font-family: "Montserrat";
  color: white;
  border-radius: 15px 15px 2px 2px;
  font-size: 28px;
  justify-content: center;
  margin: 15px 10px 0 10px;
  padding: 10px 0;
`;
export const List = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  padding: 10px;
`;
export const MoodListAll = styled(Link)`
  width: 25%;
  font-family: "Montserrat";
  font-size: 34px;
  color: purple;
  text-decoration: none;
  padding: 10px;
  margin: 10px;

  transition: all 1s;
  &:hover {
    background-color: #47225a;
    color: white;
    border-radius: 10px;
  }
`;
export const FootMoodList = styled.div`
  display: flex;
  background-color: #142448;
  font-family: "Montserrat";
  color: #142448;
  border-radius: 2px 2px 15px 15px;
  font-size: 28px;
  justify-content: center;
  margin: 0 10px 15px 10px;
  padding: 10px 0;
`;
export const MediaList = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MediaCard = styled(Link)`
  width: 90%;
  border: 2px solid red;
`;
export const Icon = styled.img`
  width: 50px;
`;
export const LinkHome = styled(Link)`
  text-decoration: none;
  font-family: "Montserrat";
  display: flex;
  background-color: #47225a;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 10px 5px;
  border: 1px solid #47225a;
  margin: 20px;
  transition: all 0.5s;
  &:hover {
    background-color: purple;
    transform: scale(1.1, 1.1);
    box-shadow: 0px 4px 2px #aaa;
  }
`;
export const HeadingHome = styled.h1`
  background-color: teal;
  height: 130px;
  font-family: "Montserrat";
  font-size: 45px;
  color: purple;
`;
export const MoodTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  font-family: "Montserrat";
  font-size: 45px;
  color: purple;
`;
export const PHome = styled.p`
  font-family: "Montserrat";
  font-size: 22px;
  color: purple;
  padding: 30px;
  margin: 20px 0;
  border: 0.5px dashed #47225a;
  border-width: 45px;
`;

export const Heading2 = styled.h2`
font-family: 'Montserrat';
font-size: 32px;
color: purple;
padding: 20px:
`;

export const Button = styled.button`
  background-color: lavender;
  padding: 15px;
  margin: 10px;
  color: gray;
  font-family: arial;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  box-shadow: 2px;
`;
export const DivButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

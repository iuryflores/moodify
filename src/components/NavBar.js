import React from "react";
import { Link } from "react-router-dom";
import { Nav, Logo, HomeIcon } from "./Shared.js";
import imgLogo from "../images/logo.png";
import homeIcon from "../images/home.png";

export const NavBar = (props) => {
  return (
    <Nav>
      <Logo>
        <img src={imgLogo} alt="Moodify Logo" height="40px" />
      </Logo>
      <Link to="/">
        <HomeIcon>
          <img src={homeIcon} alt="Home icon" height="30px" />
        </HomeIcon>
      </Link>
    </Nav>
  );
};

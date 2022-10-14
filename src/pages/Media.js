import React from "react";
import { Heading2, PHome } from "../components/Shared";

const Media = ({ title, description, image, creator, year, link }) => {
  return (
    <div>
      <Heading2>{`${title}`}</Heading2>
      <PHome>{`${description}`}</PHome>
      <img src={`${image}`} alt="Media image" />

      <p>{`${year}`}</p>
      <p>{`${creator}`}</p>
      <a href={`${link}`}>Link</a>
    </div>
  );
};

export default Media;

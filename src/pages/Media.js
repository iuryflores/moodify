import React from "react";
import {
  MediaDetailCard,
  MediaDetails,
  ImgMedia,
  TitleMedia,
  CreatorMedia,
  DescMedia,LinkHome
} from "../components/Shared";
import PlayIcon from "../images/play.png";

const Media = ({ title, description, image, type, creator, year, link }) => {
  let typeText, movieText, typeCreator
  if (type === "song") {
    typeText = "listen on Spotify";
    typeCreator = 'Artist'
  }
  if (type === "movie") {
    typeText = "watch the trailer on YouTube";
    movieText = '14px';
    typeCreator = 'Director'
  }
  return (
    <MediaDetailCard>
      <ImgMedia>
        <img src={`${image}`} alt={title} />
      </ImgMedia>
      <MediaDetails>
        <TitleMedia>
          Title: <strong>{`${title}`}</strong>
        </TitleMedia>
        <CreatorMedia>
          {typeCreator}: <strong>{creator}</strong>
        </CreatorMedia>
        <DescMedia>
          Year: <strong>{year}</strong>
        </DescMedia>
        <DescMedia>
          Type: <strong>{type}</strong>
        </DescMedia>
        <DescMedia >
          Description: <strong style={{fontSize: `${movieText}`}}>{description}</strong>
        </DescMedia>

        <LinkHome href={`${link}`} style={{ display: "flex", width: 'fit-content', padding: '5px 15px', alignItems: "center", marginTop: "20px" }} target={'_blank'}>
          <img
            src={PlayIcon}
            alt="Play"
            style={{ width: "60px", marginRight: "15px", filter: 'invert(1)' }}
          />
          Click here and {typeText}
        </LinkHome>
      </MediaDetails>
    </MediaDetailCard>
  );
};

export default Media;

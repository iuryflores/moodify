import React from "react";
import { useParams } from "react-router-dom";
import {
  MoodTitle,
  LinkHome,
  DivButtons,
  MoodList,
  FootMoodList,
} from "../components/Shared";
import happy from "../images/happy.png";
import angry from "../images/angry.png";
import bored from "../images/bored.png";
import excited from "../images/excited.png";
import hopeful from "../images/hopeful.png";
import hopeless from "../images/hopeless.png";
import joyous from "../images/joyous.png";
import melancholic from "../images/melancholic.png";
import peaceful from "../images/peaceful.png";
import sad from "../images/sad.png";

export const MoodChoice = () => {
  const { mood } = useParams();

  const moodValue = [
    { type: "Happy", image: { happy } },
    { type: "Hopeful", image: { hopeful } },
    { type: "Joyous", image: { joyous } },
    { type: "Excited", image: { excited } },
    { type: "Peaceful", image: { peaceful } },
    { type: "Angry", image: { angry } },
    { type: "Bored", image: { bored } },
    { type: "Melancholic", image: { melancholic } },
    { type: "Hopeless", image: { hopeless } },
    { type: "Sad", image: { sad } },
  ];

  const getRandomMood = () => {
    const randomMood = moodValue[Math.floor(Math.random() * moodValue.length)];
    if (randomMood === mood) {
      getRandomMood();
    } else {
      return randomMood.type;
    }
  };

  let srcImg;
  switch (mood) {
    case "Angry":
      srcImg = angry;
      break;
    case "Bored":
      srcImg = bored;
      break;
    case "Excited":
      srcImg = excited;
      break;
    case "Happy":
      srcImg = happy;
      break;
    case "Hopeful":
      srcImg = hopeful;
      break;
    case "Hopeless":
      srcImg = hopeless;
      break;
    case "Joyous":
      srcImg = joyous;
      break;
    case "Melancholic":
      srcImg = melancholic;
      break;
    case "Peaceful":
      srcImg = peaceful;
      break;
    case "Sad":
      srcImg = sad;
      break;
    default:
      srcImg = "";
      break;
  }

  return (
    <div>
      <MoodList>You are...</MoodList>
      <MoodTitle>
        <img src={srcImg} alt="mood" style={{ width: "80px" }} />
        <span>{mood}</span>
      </MoodTitle>
      <DivButtons>
        <LinkHome to={`/mood-enhancer/${mood}`}>please match my mood</LinkHome>
        <LinkHome to={`/mood-enhancer/${getRandomMood()}`}>
          please change my mood
        </LinkHome>
      </DivButtons>
      <FootMoodList>-</FootMoodList>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const MoodSelection = () => {
  const moodArray = [
    "Happy",
    "Sad",
    "Angry",
    "Peaceful",
    "Hopeless",
    "Hopeful",
    "Excited",
    "Bored",
    "Joyous",
    "Melancholic",
  ];

  return (
    <div>
      <p>Mood Selection</p>
      {moodArray.map((mood, index) => (
        <Link to={`/mood-choice/${mood}`} key={index}>
          {" "}
          {mood}{" "}
        </Link>
      ))}
    </div>
  );
};

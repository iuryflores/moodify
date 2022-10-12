import { React, useState } from "react";
import {
  List,
  MoodList,
  MoodListAll,
  FootMoodList,
} from "../components/Shared";

export const MoodSelection = () => {
  const [mood] = useState([
    { type: "Happy" },
    { type: "Hopeful" },
    { type: "Joyous" },
    { type: "Excited" },
    { type: "Peaceful" },
    { type: "Angry" },
    { type: "Bored" },
    { type: "Melancholic" },
    { type: "Hopeless" },
    { type: "Sad" },
  ]);

  return (
    <div>
      <MoodList>Mood Selection</MoodList>
      <List>
        {mood.map((mood, index) => (
          <MoodListAll to={`/mood-choice/${mood.type}`} key={index}>
            {mood.type}
          </MoodListAll>
        ))}
      </List>
      <FootMoodList>-</FootMoodList>
    </div>
  );
};

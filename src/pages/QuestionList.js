import axios from "axios";
import React, { useEffect, useState } from "react";
import { QuestionCard } from "../components/QuestionCard";
import { Button, Questions } from "../components/Shared";
import { useNavigate } from "react-router-dom";

export const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  let [getValue, setGetValue] = useState(0);

  const getQuestions = async () => {
    const { data } = await axios.get(
      "https://ironrest.herokuapp.com/MoodifyQuestions"
    );
    setQuestions(data);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const addedAnswerValue = (value) => {
    setGetValue((getValue += value));
    console.log(getValue);
  };

  const navigate = useNavigate();

  const [activeAnswer, setActiveAnswer] = useState(null);

  const handleClick = () => {
    setActiveAnswer(null);

    if (currentQuestion === questions.length - 1) {
      let moodType;

      if (getValue < 10) {
        moodType = "Sad";
      } else if (getValue >= 10 && getValue < 20) {
        moodType = "Hopeless";
      } else if (getValue >= 20 && getValue < 30) {
        moodType = "Melancholic";
      } else if (getValue >= 30 && getValue < 40) {
        moodType = "Bored";
      } else if (getValue >= 40 && getValue < 50) {
        moodType = "Angry";
      } else if (getValue >= 50 && getValue < 60) {
        moodType = "Peaceful";
      } else if (getValue >= 60 && getValue < 70) {
        moodType = "Excited";
      } else if (getValue >= 70 && getValue < 80) {
        moodType = "Joyous";
      } else if (getValue >= 80 && getValue < 90) {
        moodType = "Hopeful";
      } else {
        moodType = "Happy";
      }
      navigate(`/mood-choice/${moodType}`);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <Questions>
      {questions.length && currentQuestion <= questions.length - 1 && (
        <QuestionCard
          activeAnswer={activeAnswer}
          setActiveAnswer={setActiveAnswer}
          {...questions[currentQuestion]}
          addedAnswerValue={addedAnswerValue}
        />
      )}
      <Button onClick={() => handleClick()}>
        {currentQuestion === questions.length - 1
          ? "Show Result"
          : "Next Question"}
      </Button>
    </Questions>
  );
};

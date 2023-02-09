import React from "react";
import { Card, List, ButtonAnswer } from "./Shared";

export const QuestionCard = ({
  _id,
  questionText,
  answerOptions,
  addedAnswerValue,
  activeAnswer,
  setActiveAnswer,
}) => {
  const handleClickAnswer = (index) => {
    setActiveAnswer(index);
  };

  return (
    <Card key={_id}>
      <p style={{ fontSize: "20px" }}>
        Question: <strong>{questionText}</strong>
      </p>
      <List>
        {answerOptions.map((option, index) => {
          return (
            <ButtonAnswer key={index}
              style={{
                backgroundColor: activeAnswer === index ? "salmon" : "",
                color: activeAnswer === index ? "white" : "",
              }}
              onClick={() => {
                addedAnswerValue(option.value);
                handleClickAnswer(index);
              }}
            >
              {option.answerText}
            </ButtonAnswer>
          );
        })}
      </List>
    </Card>
  );
};

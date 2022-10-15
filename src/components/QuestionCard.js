import React from "react";
import { Card, List, ButtonAnswer } from "./Shared";

export const QuestionCard = ({
  _id,
  questionText,
  answerOptions,
  addedAnswerValue,
  isActive,
  setIsActive,
}) => {
  const handleClickAnswer = () => {
    setIsActive((current) => !current);
  };

  return (
    <Card key={_id}>
      <p style={{ fontSize: "20px" }}>
        Question: <strong>{questionText}</strong>
      </p>
      <List>
        <ButtonAnswer
          style={{
            backgroundColor: isActive ? "salmon" : "",
            color: isActive ? "white" : "",
          }}
          onClick={() => {
            addedAnswerValue(answerOptions[0].value);
            handleClickAnswer();
          }}
        >
          {answerOptions[0].answerText1}
        </ButtonAnswer>
        <ButtonAnswer
          style={{
            backgroundColor: isActive ? "salmon" : "",
            color: isActive ? "white" : "",
          }}
          onClick={() => {
            addedAnswerValue(answerOptions[1].value);
            handleClickAnswer();
          }}
        >
          {answerOptions[1].answerText2}
        </ButtonAnswer>
        <ButtonAnswer
          style={{
            backgroundColor: isActive ? "salmon" : "",
            color: isActive ? "white" : "",
          }}
          onClick={() => {
            addedAnswerValue(answerOptions[2].value);
            handleClickAnswer();
          }}
        >
          {answerOptions[2].answerText3}
        </ButtonAnswer>
        <ButtonAnswer
          style={{
            backgroundColor: isActive ? "salmon" : "",
            color: isActive ? "white" : "",
          }}
          onClick={() => {
            addedAnswerValue(answerOptions[3].value);
            handleClickAnswer();
          }}
        >
          {answerOptions[3].answerText4}
        </ButtonAnswer>
        <ButtonAnswer
          style={{
            backgroundColor: isActive ? "salmon" : "",
            color: isActive ? "white" : "",
          }}
          onClick={() => {
            addedAnswerValue(answerOptions[4].value);
            handleClickAnswer();
          }}
        >
          {answerOptions[4].answerText5}
        </ButtonAnswer>
      </List>
    </Card>
  );
};

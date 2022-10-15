import React from "react";
import { Card, List, ButtonAnswer } from "./Shared";

export const QuestionCard = ({
  _id,
  questionText,
  answerOptions,
  addedAnswerValue,
}) => {
  return (
    <Card key={_id}>
      <p style={{ fontSize: "20px" }}>
        Question: <strong>{questionText}</strong>
      </p>
      <List>
        <ButtonAnswer
          onClick={() => {
            addedAnswerValue(answerOptions[0].value);
          }}
        >
          {answerOptions[0].answerText1}
        </ButtonAnswer>
        <ButtonAnswer
          onClick={() => {
            addedAnswerValue(answerOptions[1].value);
          }}
        >
          {answerOptions[1].answerText2}
        </ButtonAnswer>
        <ButtonAnswer
          onClick={() => {
            addedAnswerValue(answerOptions[2].value);
          }}
        >
          {answerOptions[2].answerText3}
        </ButtonAnswer>
        <ButtonAnswer
          onClick={() => {
            addedAnswerValue(answerOptions[3].value);
          }}
        >
          {answerOptions[3].answerText4}
        </ButtonAnswer>
        <ButtonAnswer
          onClick={() => {
            addedAnswerValue(answerOptions[4].value);
          }}
        >
          {answerOptions[4].answerText5}
        </ButtonAnswer>
      </List>
    </Card>
  );
};

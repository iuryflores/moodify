import React from 'react'
import { Button, Card, List } from './Shared'

export const QuestionCard = ({
  _id,
  questionText,
  answerOptions,
  addedAnswerValue,
}) => {
  return (
    <Card>
      <div key={_id}>
        <p>Question: {questionText}</p>
        <List>
          <li>
            <Button
              onClick={() => {
                addedAnswerValue(answerOptions[0].value)
              }}
            >
              {answerOptions[0].answerText1}
            </Button>
            <Button
              onClick={() => {
                addedAnswerValue(answerOptions[1].value)
              }}
            >
              {answerOptions[1].answerText2}
            </Button>
            <Button
              onClick={() => {
                addedAnswerValue(answerOptions[2].value)
              }}
            >
              {answerOptions[2].answerText3}
            </Button>
            <Button
              onClick={() => {
                addedAnswerValue(answerOptions[3].value)
              }}
            >
              {answerOptions[3].answerText4}
            </Button>
            <Button
              onClick={() => {
                addedAnswerValue(answerOptions[4].value)
              }}
            >
              {answerOptions[4].answerText5}
            </Button>
          </li>
        </List>
      </div>
    </Card>
  )
}

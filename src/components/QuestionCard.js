import React from 'react'
import { Card } from './Shared'

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
        <button
          onClick={() => {
            addedAnswerValue(answerOptions[0].value)
          }}
        >
          {answerOptions[0].answerText1}
        </button>
        <button
          onClick={() => {
            addedAnswerValue(answerOptions[1].value)
          }}
        >
          {answerOptions[1].answerText2}
        </button>
        <button
          onClick={() => {
            addedAnswerValue(answerOptions[2].value)
          }}
        >
          {answerOptions[2].answerText3}
        </button>
        <button
          onClick={() => {
            addedAnswerValue(answerOptions[3].value)
          }}
        >
          {answerOptions[3].answerText4}
        </button>
        <button
          onClick={() => {
            addedAnswerValue(answerOptions[4].value)
          }}
        >
          {answerOptions[4].answerText5}
        </button>
      </div>
    </Card>
  )
}

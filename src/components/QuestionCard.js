import React from 'react'

export const QuestionCard = ({ _id, questionText, answerOptions }) => {
  return (
    <div key={_id}>
      <p>Question: {questionText}</p>
      <p>{answerOptions}</p>
      <button>{answerOptions.answerText1}</button>
      <button>{answerOptions.answerText2}</button>
      <button>{answerOptions.answerText3}</button>
      <button>{answerOptions.answerText4}</button>
      <button>{answerOptions.answerText5}</button>
    </div>
  )
}

// const addAnswerValue = () => {
//   questions.map((question) => {
//     return (total += onclick.question.answerOptions.value)
//   })
// }

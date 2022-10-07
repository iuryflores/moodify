import React from 'react'
import { useState } from 'react'

export const QuizQuestions = (props) => {
  let total = 0

  const questions = [
    {
      questionText: 'If you could do anything right now, you would...',
      answerOptions: [
        { answerText1: 'take the midnight train going anywhere', value: 2 },
        { answerText2: 'go out drinking and dancing', value: 7 },
        { answerText3: 'sleep for days', value: 0 },
        { answerText4: 'set the house on fire', value: 5 },
        { answerText5: 'move to the Himalayas to meditate', value: 6 },
      ],
    },
    {
      questionText: 'What would you like to eat right now?',
      answerOptions: [
        { answerText1: 'Hurtfully spicy Mexican food', value: 5 },
        { answerText2: 'A massive salad with all the fixings', value: 9 },
        { answerText3: 'An entire pizza and a tub of ice cream', value: 4 },
        {
          answerText4: 'A 4-course gourmet meal at my favorite restaurant',
          value: 10,
        },
        { answerText5: 'Nothing', value: 3 },
      ],
    },
    {
      questionText: 'Thinking about the future, you see...',
      answerOptions: [
        { answerText1: 'What future?', value: 2 },
        { answerText2: 'Mass famine and destruction', value: 0 },
        { answerText3: 'Loads of time with people I love', value: 8 },
        { answerText4: 'World travel', value: 9 },
        { answerText5: 'More of the same', value: 4 },
      ],
    },
    {
      questionText: 'Your heroes are:',
      answerOptions: [
        { answerText1: 'all dead', value: 2 },
        {
          answerText2: 'people who actively practice what they preach',
          value: 9,
        },
        { answerText3: 'anyone doing the best they can', value: 6 },
        {
          answerText4: 'non-binary pansexual vegan leftist feminists',
          value: 7,
        },
        { answerText5: 'my mom', value: 3 },
      ],
    },
    {
      questionText: 'How do you think you move through the world every day?',
      answerOptions: [
        { answerText1: 'As joyfully as I can, until', value: 10 },
        { answerText2: "I don't know, man", value: 4 },
        { answerText3: 'With as little effort as possible', value: 3 },
        { answerText4: 'Like a good person', value: 9 },
        {
          answerText5:
            'Always thinking about others and the impact I have on them',
          value: 6,
        },
      ],
    },
    {
      questionText: 'You can have endless amounts of one thing. You choose:',
      answerOptions: [
        { answerText1: 'Love', value: 10 },
        { answerText2: 'Money', value: 4 },
        { answerText3: 'Intelligence', value: 0 },
        { answerText4: 'Joy', value: 9 },
        { answerText5: 'Sleep', value: 2 },
      ],
    },
    {
      questionText:
        'You can solve one world problem forever. Which do you solve?',
      answerOptions: [
        { answerText1: 'Hunger', value: 6 },
        { answerText2: 'Climate change', value: 3 },
        { answerText3: 'Nah, let it burn', value: 5 },
        { answerText4: 'Endless war', value: 0 },
        { answerText5: 'Cancer', value: 9 },
      ],
    },
    {
      questionText: "What's a perfect day?",
      answerOptions: [
        {
          answerText1:
            'Sangrias in the park, later when it gets dark we go home',
          value: 3,
        },
        { answerText2: "When I don't have to put on pants", value: 4 },
        { answerText3: 'Seeing my friends and having fun', value: 10 },
        {
          answerText4:
            'Meditating, exercising, cooking, reading, listening to music',
          value: 8,
        },
        { answerText5: "Any day when I don't have to work", value: 0 },
      ],
    },
    {
      questionText: 'How do you feel most days?',
      answerOptions: [
        { answerText1: 'Meh', value: 2 },
        { answerText2: 'Awesome', value: 7 },
        { answerText3: 'Excited for the future', value: 9 },
        { answerText4: 'Tired', value: 0 },
        { answerText5: 'Hungry', value: 4 },
      ],
    },
    {
      questionText: "What's your favorite thing to say?",
      answerOptions: [
        { answerText1: "It'll all work out in the end", value: 9 },
        { answerText2: 'What the fuck?', value: 5 },
        { answerText3: 'It is what it is', value: 6 },
        { answerText4: "Fuck yeah, let's do it!", value: 7 },
        { answerText5: 'Just leave it alone', value: 2 },
      ],
    },
  ]

  const addAnswerValue = () => {
    questions.map((question) => {
      return (total += onclick.question.answerOptions.value)
    })
  }
  return (
    <div className="quiz">
      <div className="score">
        <span> Question </span>
      </div>
      <div className="question-text">{`${props.questions.questionText}`}</div>
      <div className="answer-selection">
        <button>{`${props.questions.answerOptions.answerText1}`}</button>
        <button>{`${props.questions.answerOptions.answerText2}`}</button>
        <button>{`${props.questions.answerOptions.answerText3}`}</button>
        <button>{`${props.questions.answerOptions.answerText4}`}</button>
        <button>{`${props.questions.answerOptions.answerText5}`}</button>
      </div>
      <div>
        <p>{addAnswerValue()}</p>
      </div>
    </div>
  )
}

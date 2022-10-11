import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { QuestionCard } from '../components/QuestionCard'
import { LinkHome } from '../components/Shared'

export const QuestionList = () => {
  const [questions, setQuestions] = useState([])
  let [getValue, setGetValue] = useState(0)

  const getQuestions = async () => {
    const { data } = await axios.get(
      'https://ironrest.herokuapp.com/MoodifyQuestions'
    )
    setQuestions(data)
  }

  useEffect(() => {
    getQuestions()
  }, [])

  const addedAnswerValue = (value) => {
    setGetValue((getValue += value))
    console.log(getValue)
  }

  let moodType

  if (getValue < 10) {
    moodType = 'Sad'
  } else if (getValue >= 10 && getValue < 20) {
    moodType = 'Hopeless'
  } else if (getValue >= 20 && getValue < 30) {
    moodType = 'Melancholic'
  } else if (getValue >= 30 && getValue < 40) {
    moodType = 'Bored'
  } else if (getValue >= 40 && getValue < 50) {
    moodType = 'Angry'
  } else if (getValue >= 50 && getValue < 60) {
    moodType = 'Peaceful'
  } else if (getValue >= 60 && getValue < 70) {
    moodType = 'Excited'
  } else if (getValue >= 70 && getValue < 80) {
    moodType = 'Joyous'
  } else if (getValue >= 80 && getValue < 90) {
    moodType = 'Hopeful'
  } else {
    moodType = 'Happy'
  }

  return (
    <div>
      {questions.map((question) => (
        <QuestionCard
          key={question._id}
          {...question}
          addedAnswerValue={addedAnswerValue}
        />
      ))}
      <LinkHome to={`/mood-result/${moodType}`} key={moodType}>
        Quiz Result!
      </LinkHome>
    </div>
  )
}

// const moodValue = [
//   { type: 'Happy', value: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100] },
//   { type: 'Hopeful', value: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89] },
//   { type: 'Joyous', value: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79] },
//   { type: 'Excited', value: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69] },
//   { type: 'Peaceful', value: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59] },
//   { type: 'Angry', value: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49] },
//   { type: 'Bored', value: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39] },
//   { type: 'Melancholic', value: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29] },
//   { type: 'Hopeless', value: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
//   { type: 'Sad', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
// ]

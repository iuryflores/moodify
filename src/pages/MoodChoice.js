import React from 'react'
import { useParams, Link } from 'react-router-dom'

export const MoodChoice = () => {
  const { mood } = useParams()

  const moodValue = [
    { type: 'Happy' },
    { type: 'Hopeful' },
    { type: 'Joyous' },
    { type: 'Excited' },
    { type: 'Peaceful' },
    { type: 'Angry' },
    { type: 'Bored' },
    { type: 'Melancholic' },
    { type: 'Hopeless' },
    { type: 'Sad' },
  ]

  const getRandomMood = () => {
    const randomMood = moodValue[Math.floor(Math.random() * moodValue.length)]
    if (randomMood === mood) {
      getRandomMood()
    } else {
      return randomMood.type
    }
  }

  return (
    <div>
      <Link to={`/mood-enhancer/${mood}`}> please match my mood </Link>
      <Link to={`/mood-enhancer/${getRandomMood()}`}>
        please change my mood
      </Link>
    </div>
  )
}

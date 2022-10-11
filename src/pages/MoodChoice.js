import React from 'react'
import { useParams } from 'react-router-dom'
import { HeadingHome, LinkHome } from '../components/Shared'

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
      <HeadingHome>
        <h1>{`You are ${mood}`}</h1>
      </HeadingHome>
      <img src="" alt="mood" />
      <LinkHome to={`/mood-enhancer/${mood}`}> please match my mood </LinkHome>
      <LinkHome to={`/mood-enhancer/${getRandomMood()}`}>
        please change my mood
      </LinkHome>
    </div>
  )
}

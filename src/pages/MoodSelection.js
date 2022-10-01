import { React, useState } from 'react'
import { Link } from 'react-router-dom'

export const MoodSelection = () => {
  const [mood, setMood] = useState([
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
  ])

  return (
    <div>
      <p>Mood Selection</p>
      {mood.map((mood, index) => (
        <Link to={`/mood-choice/${mood.type}`} key={index}>
          {mood.type}
        </Link>
      ))}
    </div>
  )
}

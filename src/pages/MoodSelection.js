import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { MoodList, MoodListAll } from '../components/Shared'
import { MoodHappy } from '../subpages/MoodHappy'

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
      <MoodList>
        <p>Mood Selection</p>
      </MoodList>
      {mood.map((mood, index) => (
        <li>
          <MoodListAll to={`/mood-choice/${mood.type}`} key={index}>
            {mood.type}
          </MoodListAll>
        </li>
      ))}
    </div>
  )
}

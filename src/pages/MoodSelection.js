import { React, useState } from 'react'
import { List, MoodList, MoodListAll } from '../components/Shared'

export const MoodSelection = () => {
  const [mood] = useState([
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
        <List>
          <li>
            <MoodListAll to={`/mood-choice/${mood.type}`} key={index}>
              {mood.type}
            </MoodListAll>
          </li>
        </List>
      ))}
    </div>
  )
}

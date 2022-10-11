import React from 'react'
import hopeful from '../images/hopeful.png'
import { MoodChoice } from '../pages'

export const MoodHopeful = (props) => {
  return (
    <div>
      <h1> You are hopeful! </h1>
      <img src="hopeful" alt="hopeful" />
      <MoodChoice />
    </div>
  )
}

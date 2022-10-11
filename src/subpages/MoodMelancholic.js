import React from 'react'
import melancholic from '../images/melancholic.png'
import { MoodChoice } from '../pages'

export const MoodMelancholic = (props) => {
  return (
    <div>
      <h1> You are melancholic.. </h1>
      <img src="melancholic" alt="melancholic" />
      <MoodChoice />
    </div>
  )
}

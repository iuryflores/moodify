import React from 'react'
import excited from '../images/excited.png'
import { MoodChoice } from '../pages'

export const MoodExcited = (props) => {
  return (
    <div>
      <h1> You are excited! </h1>
      <img src="excited" alt="excited" />
      <MoodChoice />
    </div>
  )
}

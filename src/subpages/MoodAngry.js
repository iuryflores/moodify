import React from 'react'
import angry from '../images/angry.png'
import { MoodChoice } from '../pages'

export const MoodAngry = (props) => {
  return (
    <div>
      <h1> You are angry. </h1>
      <img src="angry" alt="angry" />
      <MoodChoice />
    </div>
  )
}

import React from 'react'
import bored from '../images/bored.png'
import { MoodChoice } from '../pages'

export const MoodBored = (props) => {
  return (
    <div>
      <h1> You are bored. </h1>
      <img src="bored" alt="bored" />
      <MoodChoice />
    </div>
  )
}

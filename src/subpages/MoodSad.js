import React from 'react'
import sad from '../images/sad.png'
import { MoodChoice } from '../pages'

export const MoodSad = (props) => {
  return (
    <div>
      <h1> You are sad... </h1>
      <img src="sad" alt="sad" />
      <MoodChoice />
    </div>
  )
}

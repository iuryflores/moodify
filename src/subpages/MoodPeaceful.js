import React from 'react'
import Peaceful from '../images/peaceful.png'
import { MoodChoice } from '../pages'

export const MoodPeaceful = (props) => {
  return (
    <div>
      <h1> You are peaceful. </h1>
      <img src="peaceful" alt="peaceful" />
      <MoodChoice />
    </div>
  )
}

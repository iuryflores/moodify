import React from 'react'
import joyous from '../images/joyous.png'
import { MoodChoice } from '../pages'

export const MoodJoyous = (props) => {
  return (
    <div>
      <h1> You are joyous! </h1>
      <img src="joyous" alt="joyous" />
      <MoodChoice />
    </div>
  )
}

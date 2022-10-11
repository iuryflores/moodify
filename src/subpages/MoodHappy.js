import React from 'react'
import happy from '../images/happy.png'
import { MoodChoice } from '../pages'

export const MoodHappy = (props) => {
  return (
    <div>
      <h1> You are happy! </h1>
      <img src="happy" alt="happy" />
      <MoodChoice />
    </div>
  )
}

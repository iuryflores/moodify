import React from 'react'
import hopeless from '../images/hopeless.png'
import { MoodChoice } from '../pages'

export const MoodHopeless = (props) => {
  return (
    <div>
      <h1> You are feeling hopeless.. </h1>
      <img src="hopeless" alt="hopeless" />
      <MoodChoice />
    </div>
  )
}

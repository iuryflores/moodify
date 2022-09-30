import React from 'react'
import { useParams } from 'react-router-dom'

export const MoodChoice = () => {
  const { mood } = useParams()

  return <div> {mood} </div>
}

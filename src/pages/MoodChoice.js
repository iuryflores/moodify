import React from 'react'
import { useParams } from 'react-router-dom'
import { HeadingHome, LinkHome } from '../components/Shared'
import happy from '../images/happy.png'
import angry from '../images/angry.png'
import bored from '../images/bored.png'
import excited from '../images/excited.png'
import hopeful from '../images/hopeful.png'
import hopeless from '../images/hopeless.png'
import joyous from '../images/joyous.png'
import melancholic from '../images/melancholic.png'
import peaceful from '../images/peaceful.png'
import sad from '../images/sad.png'

export const MoodChoice = () => {
  const { mood } = useParams()

  const moodValue = [
    { type: 'Happy', image: { happy } },
    { type: 'Hopeful', image: { hopeful } },
    { type: 'Joyous', image: { joyous } },
    { type: 'Excited', image: { excited } },
    { type: 'Peaceful', image: { peaceful } },
    { type: 'Angry', image: { angry } },
    { type: 'Bored', image: { bored } },
    { type: 'Melancholic', image: { melancholic } },
    { type: 'Hopeless', image: { hopeless } },
    { type: 'Sad', image: { sad } },
  ]

  const getRandomMood = () => {
    const randomMood = moodValue[Math.floor(Math.random() * moodValue.length)]
    if (randomMood === mood) {
      getRandomMood()
    } else {
      return randomMood.type
    }
  }

  // const moodShowing = (mood) => {
  //   if (mood === angry) {
  //     console.log('You are angry.')
  //     ;<img src="angry" alt="angry" />
  //   } else if (mood === bored) {
  //     console.log('You are bored.')
  //     ;<img src="bored" alt="bored" />
  //   } else if (mood === excited) {
  //     console.log('You are excited!')
  //     ;<img src="excited" alt="excited" />
  //   } else if (mood === happy) {
  //     console.log('You are happy!!')
  //     ;<img src="happy" alt="happy" />
  //   } else if (mood === hopeful) {
  //     console.log('You are feeling hopeful!')
  //     ;<img src="hopeful" alt="hopeful" />
  //   } else if (mood === hopeless) {
  //     console.log('You are feeling hopeless..')
  //     ;<img src="hopeless" alt="hopeless" />
  //   } else if (mood === joyous) {
  //     console.log('You are joyous!')
  //     ;<img src="joyous" alt="joyous" />
  //   } else if (mood === melancholic) {
  //     console.log('You are melancholic.')
  //     ;<img src="melancholic" alt="melancholic" />
  //   } else if (mood === peaceful) {
  //     console.log('You are peaceful.')
  //     ;<img src="peaceful" alt="peaceful" />
  //   } else if (mood === sad) {
  //     console.log('You are sad...')
  //     ;<img src="sad" alt="sad" />
  //   }
  //   return
  // }

  return (
    <div>
      <HeadingHome>{`You are ${mood}.`}</HeadingHome>
      <img src={moodValue.image} alt="mood" />
      <LinkHome to={`/mood-enhancer/${mood}`}> please match my mood </LinkHome>
      <LinkHome to={`/mood-enhancer/${getRandomMood()}`}>
        please change my mood
      </LinkHome>
    </div>
  )
}

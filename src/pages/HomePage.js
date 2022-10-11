import React from 'react'
import Britney from '../images/BritneySpears.png'
import { Link } from 'react-router-dom'
import { Heading2, HeadingHome, LinkHome, PHome } from '../components/Shared'

export const HomePage = () => {
  return (
    <div>
      <HeadingHome>
        <h1> Moodify </h1>
      </HeadingHome>
      <PHome>
        <p>A curated library that matches or changes your mood</p>
      </PHome>
      <img src={Britney} alt="David Bowie" />
      <div>
        <Heading2>
          <h2> I want... </h2>
        </Heading2>
        <LinkHome to="/mood-selection"> to tell you how I feel </LinkHome>
        <LinkHome to="/mood-quiz"> for you to tell me how I feel </LinkHome>
      </div>
    </div>
  )
}

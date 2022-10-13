import React, { useEffect, useState } from 'react'
import { FilteredLists } from './FilteredLists'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Heading2, PHome } from '../components/Shared'

export const MediaDetails = () => {
  const [media, setMedia] = useState({})
  const { _id } = useParams()

  const getMediaDetails = async () => {
    const result = await axios.get('https://ironrest.herokuapp.com/moodify')
    const data = result.data
    setMedia(data)
  }

  useEffect(() => {
    getMediaDetails()
  }, [])

  return (
    <div>
      <Heading2 key={media._id}>{`${media.title}`}</Heading2>
      <PHome>{`${media.description}`}</PHome>
      <img src={media.image} alt="stuff" />
      <p>{`${media.year}`}</p>
      <p>{`${media.creator}`}</p>
      <a>{`${media.link}`}</a>
    </div>
  )
}

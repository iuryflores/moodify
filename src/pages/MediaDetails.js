import React, { useEffect, useState } from 'react'
import { FilteredLists } from './FilteredLists'
import { useNavigate, useParams } from 'react-router-dom'

export const MediaDetails = () => {
  const [media, setMedia] = useState({})
  const { _id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    setMedia(_id)
      .then((result) => setMedia(result))
      .catch(() => navigate('/'))
  }, [])

  return (
    <>
      <FilteredLists {...media} />
    </>
  )
}

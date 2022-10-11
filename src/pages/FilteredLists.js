import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const FilteredLists = () => {
  const [songs, setSongs] = useState([])
  const [movies, setMovies] = useState([])
  const { mood } = useParams()

  const getSetMedia = async () => {
    const { data } = await axios.get('https://ironrest.herokuapp.com/moodify')
    const filteredMoviesArray = data
      .filter((media) => {
        return media.mood.includes(mood.toLowerCase()) && media.type === 'movie'
      })
      .sort(() => 0.5 - Math.random())
    setMovies(filteredMoviesArray.slice(0, 3))
    const filteredSongsArray = data
      .filter((media) => {
        return media.mood.includes(mood.toLowerCase()) && media.type === 'song'
      })
      .sort(() => 0.5 - Math.random())
    setSongs(filteredSongsArray.slice(0, 3))
  }

  useEffect(() => {
    getSetMedia()
  }, [])
  return (
    <div>
      {songs.map((song) => (
        <p>{song.title}</p>
      ))}
      {movies.map((movie) => (
        <p>{movie.title}</p>
      ))}
    </div>
  )
}

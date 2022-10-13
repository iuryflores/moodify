import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Heading2, LinkHome } from '../components/Shared'

export const FilteredLists = () => {
  const [songs, setSongs] = useState([])
  const [movies, setMovies] = useState([])
  const { mood } = useParams()

  useEffect(() => {
    const getSetMedia = async () => {
      const { data } = await axios.get('https://ironrest.herokuapp.com/moodify')
      const filteredMoviesArray = data
        .filter((media) => {
          return (
            media.mood.includes(mood.toLowerCase()) && media.type === 'movie'
          )
        })
        .sort(() => 0.5 - Math.random())
      setMovies(filteredMoviesArray.slice(0, 3))
      const filteredSongsArray = data
        .filter((media) => {
          return (
            media.mood.includes(mood.toLowerCase()) && media.type === 'song'
          )
        })
        .sort(() => 0.5 - Math.random())
      setSongs(filteredSongsArray.slice(0, 3))
    }
    getSetMedia()
  }, [mood])
  return (
    <div>
      {songs.map((song) => (
        <div>
          <LinkHome to={`/media-details/${song._id}`} key={song._id}>
            {song.title}
          </LinkHome>
          <Heading2>{song.description}</Heading2>
          {/* <img src={song.image} alt="song" /> */}
        </div>
      ))}
      {movies.map((movie) => (
        <div>
          <LinkHome to={`/media-details/${movie._id}`} key={movie._id}>
            {movie.title}
          </LinkHome>
          <Heading2>{movie.creator}</Heading2>
          {/* <img src={movie.image} alt="movie" /> */}
        </div>
      ))}
    </div>
  )
}

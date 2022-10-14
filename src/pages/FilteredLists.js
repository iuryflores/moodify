import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Heading2,
  Icon,
  MediaCard,
  MediaList,
} from "../components/Shared";
import songImg from "../images/song.png";
import MovieImg from "../images/movie.png";

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
        .sort(() => 0.5 - Math.random());
      setSongs(filteredSongsArray.slice(0, 3));
    };
    getSetMedia();
  }, [mood]);

  return (
    <MediaList>
      {songs.map((song) => (
        <MediaCard to={`/media-details/${song._id}`} key={song._id}>
          <Icon src={songImg} alt="Song icon" />
          {song.title}
          <Heading2>{song.creator}</Heading2>
        </MediaCard>
      ))}
      {movies.map((movie) => (
        <MediaCard to={`/media-details/${movie._id}`} key={movie._id}>
          <Icon src={MovieImg} alt="Song icon" />
          {movie.title}
          <Heading2>{movie.creator}</Heading2>
        </MediaCard>
      ))}
    </MediaList>
  );
};

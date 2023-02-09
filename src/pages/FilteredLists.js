import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Icon,
  MediaCard,
  MediaList,
  TitleMedia,
  CreatorMedia,
  DescMedia,
  MediaDetails
} from "../components/Shared";
import songImg from "../images/song.png";
import MovieImg from "../images/movie.png";
import ArrowIcon from "../images/arrow.png";

export const FilteredLists = () => {
  const [songs, setSongs] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { mood } = useParams();

  useEffect(() => {
    const getSetMedia = async () => {
      const { data } = await axios.get(
        "https://misty-plum-crab.cyclic.app/medium"
      );
      const filteredMoviesArray = data
        .filter((media) => {
          return (
            media.mood.includes(mood.toLowerCase()) && media.type === "movie"
          );
        })
        .sort(() => 0.5 - Math.random());
      setMovies(filteredMoviesArray.slice(0, 3));
      const filteredSongsArray = data
        .filter((media) => {
          return (
            media.mood.includes(mood.toLowerCase()) && media.type === "song"
          );
        })
        .sort(() => 0.5 - Math.random());
      setSongs(filteredSongsArray.slice(0, 3));
    };
    getSetMedia();
    setLoading(false);
  }, [mood, loading, setLoading]);
  console.log(loading);
  return !loading ? (
    <MediaList>
      {songs.map((song) => (
        <MediaCard to={`/media-details/${song._id}`} key={song._id}>
          <Icon src={songImg} alt="Song" />
          <MediaDetails>
            <TitleMedia>
              Title: <strong>{song.title}</strong>
            </TitleMedia>
            <CreatorMedia>
              Artist: <strong>{song.creator}</strong>
            </CreatorMedia>
            <DescMedia>
              Description: <strong>{song.description}</strong>
            </DescMedia>
          </MediaDetails>
          <Icon src={ArrowIcon} alt="Arrow" />
        </MediaCard>
      ))}
      {movies.map((movie) => (
        <MediaCard to={`/media-details/${movie._id}`} key={movie._id}>
          <Icon src={MovieImg} alt="Song" />
          <MediaDetails>
            <TitleMedia>
              Title: <strong>{movie.title}</strong>
            </TitleMedia>
            <CreatorMedia>
              Director: <strong>{movie.creator}</strong>
            </CreatorMedia>
            <DescMedia>
              Year: <strong>{movie.year}</strong>
            </DescMedia>
          </MediaDetails>
          <Icon src={ArrowIcon} alt="Arrow" />
        </MediaCard>
      ))}
    </MediaList>
  ) : (
    <div>Loading...</div>
  );
};

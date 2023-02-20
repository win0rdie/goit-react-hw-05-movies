import { useEffect, useState } from 'react';
import axios from 'axios';

import { API_KEY } from 'api/defaultApi';
import { useParams } from 'react-router-dom';

export default function Movie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
    axios
      .get(MOVIE_URL)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Release date: {movie.release_date}</p>
    </div>
  );
}

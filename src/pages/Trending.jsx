import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TRENDING_URL } from 'api/defaultApi';
import { Link, Outlet } from 'react-router-dom';
// import Movie from 'components/Movie/Movie';

function Trending() {
  const [movies, setMovies] = useState([]);
  // const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios
      .get(TRENDING_URL)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default Trending;

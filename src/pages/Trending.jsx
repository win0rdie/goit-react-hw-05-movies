import React, { useState, useEffect } from 'react';
import { getMoviesTrending } from 'api/defaultApi';
import { Link, Outlet } from 'react-router-dom';

function Trending() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesTrending = async () => {
      const trendingMovies = await getMoviesTrending();
      setMovies(trendingMovies.results);
    };
    fetchMoviesTrending();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default Trending;

import React, { useState, useEffect } from 'react';
import { getMoviesTrending } from 'api/defaultApi';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Heading,
  List,
  ListItem,
  MovieLink,
} from './Trending.styled';

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
    <Container>
      <Heading>Trending today</Heading>
      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`}>{movie.title}</MovieLink>
          </ListItem>
        ))}
      </List>

      <Outlet />
    </Container>
  );
}

export default Trending;

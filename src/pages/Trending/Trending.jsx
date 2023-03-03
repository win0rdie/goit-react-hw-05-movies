// import React, { useState, useEffect } from 'react';
// import { getMoviesTrending } from 'api/defaultApi';
// import { Link, Outlet } from 'react-router-dom';

// function Trending() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMoviesTrending = async () => {
//       const trendingMovies = await getMoviesTrending();
//       setMovies(trendingMovies.results);
//     };
//     fetchMoviesTrending();
//   }, []);

//   return (
//     <div>
//       <h1>Trending today</h1>
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>

//       <Outlet />
//     </div>
//   );
// }

// export default Trending;

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

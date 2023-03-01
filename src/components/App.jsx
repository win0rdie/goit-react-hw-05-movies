import { Routes, Route } from 'react-router-dom';
import Trending from 'pages/Trending';
import { Container, Header, StyledLink } from './App.styled';

import MovieDetails from './Movies/MovieDetails';
import { Movies } from 'pages/Movies';
import Cast from 'pages/Cast/Cast';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Trending />}></Route>
        <Route path="movies" element={<Movies />} />
        {/* <Route path="movies/:movieId" element={<MovieDetails />} /> */}
        <Route path="movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import Trending from 'pages/Trending';
import { Container, Header, StyledLink } from './App.styled';
import { Movies } from 'pages/Movies';
import Movie from './Movie/Movie';

function App() {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movie">Movies</StyledLink>
          {/* <StyledLink to="/movie">Movie</StyledLink> */}
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Trending />} />
        {/* <Route path="movies" element={<Movies />} /> */}
        <Route path="movie/:movieId" element={<Movie />} />

        {/* <Route path="movie" element={<Movie />} /> */}
      </Routes>
    </Container>
  );
}

export default App;

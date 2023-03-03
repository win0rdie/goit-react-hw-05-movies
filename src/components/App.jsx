import { Routes, Route } from 'react-router-dom';
import Trending from 'pages/Trending/Trending';
import { Container } from './App.styled';

import MovieDetails from './MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import Cast from 'components/Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from './NotFound';
import SharedLayout from './SharedLayout/SharedLayout';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Trending />}></Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

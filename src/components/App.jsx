import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './App.styled';

// import SharedLayout from './SharedLayout/SharedLayout';
// import Trending from 'pages/Trending/Trending';
// import Movies from 'pages/Movies/Movies';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from 'components/Cast/Cast';
// import Reviews from './Reviews/Reviews';
import NotFound from './NotFound';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Trending = lazy(() => import('../pages/Trending/Trending'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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

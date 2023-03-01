import { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/defaultApi';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Cast from 'pages/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { getYear } from 'assets/getYear';
import DEFAULT_POSTER from '../../assets/images/default-movie.jpg';

import {
  GenreList,
  MovieContainer,
  MovieDetail,
  MovieDetailsBox,
  MovieDetailsContainer,
  MovieOverview,
  MovieTitle,
  Poster,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const detailsMovie = await getMovieDetails(movieId);
      setMovie(detailsMovie);
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* <Link to="/"> Back to movies</Link> */}
      <Link to={location.state.from}> Back to movies </Link>

      <MovieContainer>
        {movie.poster_path !== null ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <Poster src={DEFAULT_POSTER} alt="default poster" />
        )}

        <MovieDetailsContainer>
          <MovieTitle>
            {movie.title} ({getYear(movie.release_date)})
          </MovieTitle>

          <MovieOverview>{movie.overview}</MovieOverview>

          <GenreList>
            Genres: {movie.genres.map(({ name }) => name).join(', ')}
          </GenreList>
          <MovieDetailsBox>
            <MovieDetail> {movie.runtime} min</MovieDetail>
            <MovieDetail> {movie.vote_average}/10</MovieDetail>
            <MovieDetail>{movie.release_date}</MovieDetail>
          </MovieDetailsBox>
        </MovieDetailsContainer>
      </MovieContainer>

      <nav>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </>
  );
}

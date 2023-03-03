import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { getMovieDetails } from 'api/defaultApi';
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
  Nav,
  NavItem,
  NavList,
  Poster,
  StyledLink,
  StyledLinkMovie,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const detailsMovie = await getMovieDetails(movieId);
      setMovie(detailsMovie);
    };
    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    setPreviousPage(backLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <StyledLinkMovie to={previousPage}>
        {<TiArrowBack size={40} />}
      </StyledLinkMovie>
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
            <MovieDetail>
              {' '}
              {Math.round(movie.vote_average * 10) / 10} / 10
            </MovieDetail>
            <MovieDetail>{movie.release_date}</MovieDetail>
          </MovieDetailsBox>
        </MovieDetailsContainer>
      </MovieContainer>
      <MovieContainer>
        <Nav>
          <NavList>
            <NavItem>
              <StyledLink to="cast">Cast</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="reviews">Reviews</StyledLink>
            </NavItem>
          </NavList>
        </Nav>
      </MovieContainer>

      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </>
  );
}

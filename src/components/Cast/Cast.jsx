import { getMovieCredits } from 'api/defaultApi';
import { useState, useEffect } from 'react';
// import DEFAULT_IMG from '../../assets/images/noimage.jpg';
import {
  MovieContainerCast,
  StyledHeading,
  StyledImage,
  StyledList,
  StyledListItem,
  StyledName,
  StyledRole,
  StyledTextActor,
} from './Cast.styled';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMoviesCredits = async () => {
      const credits = await getMovieCredits(movieId);
      setCast(credits.cast || []);
    };
    fetchMoviesCredits();
  }, [movieId]);

  return (
    <MovieContainerCast>
      <StyledHeading>Cast List</StyledHeading>
      <StyledList>
        {cast.length > 0 ? (
          cast.map(({ id, name, character, profile_path }, index) => (
            <StyledListItem key={`${id}-${index}`}>
              {profile_path ? (
                <StyledImage
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={`${name}'s profile picture`}
                />
              ) : (
                <StyledImage
                  src="https://via.placeholder.com/200x200.png?text=No+Picture"
                  alt="No Picture"
                />
              )}
              <StyledTextActor>
                <StyledName>{name}</StyledName>
                <StyledRole>{character}</StyledRole>
              </StyledTextActor>
            </StyledListItem>
          ))
        ) : (
          <li key="no-cast">No cast found.</li>
        )}
        {/* {cast.map(({ id, name, character, profile_path }, index) => (
          <StyledListItem key={`${id}-${index}`}>
            {profile_path ? (
              <StyledImage
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={`${name}'s profile picture`}
              />
            ) : (
              <StyledImage
                src="https://via.placeholder.com/200x200.png?text=No+Picture"
                alt="No Picture"
              />
            )}
            <StyledTextActor>
              <StyledName>{name}</StyledName>
              <StyledRole>{character}</StyledRole>
            </StyledTextActor>
          </StyledListItem>
        ))} */}
      </StyledList>
    </MovieContainerCast>
  );
}

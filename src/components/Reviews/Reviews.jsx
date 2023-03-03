import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getMovieReviews } from 'api/defaultApi';

import {
  MovieContainerReview,
  StyledHeadingReview,
  StyledListReview,
  StyledListItemReview,
  StyledNameReview,
} from './Reviews.styled';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const response = await getMovieReviews(movieId);
      setReviews(response.results);
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <MovieContainerReview>
      <StyledHeadingReview>Reviews</StyledHeadingReview>
      <StyledListReview>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <StyledListItemReview key={review.id}>
              <StyledNameReview>{review.author}</StyledNameReview>
              <p>{review.content}</p>
            </StyledListItemReview>
          ))
        ) : (
          <StyledListItemReview key="no-reviews">
            No reviews found.
          </StyledListItemReview>
        )}
      </StyledListReview>
    </MovieContainerReview>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

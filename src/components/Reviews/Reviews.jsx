import { getMovieReviews } from 'api/defaultApi';
import { useEffect, useState } from 'react';
import {
  MovieContainerReview,
  StyledHeadingReview,
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
      <StyledListItemReview>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <StyledListItemReview key={review.id}>
              <StyledNameReview>{review.author}</StyledNameReview>
              <p>{review.content}</p>
            </StyledListItemReview>
          ))
        ) : (
          <li key="no-reviews">No reviews found.</li>
        )}
      </StyledListItemReview>
    </MovieContainerReview>
  );
}

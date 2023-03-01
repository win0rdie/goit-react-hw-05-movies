import { getMovieReviews } from 'api/defaultApi';
import { useEffect, useState } from 'react';

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
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <li key="no-reviews">No reviews found.</li>
        )}
      </ul>
    </div>
  );
}

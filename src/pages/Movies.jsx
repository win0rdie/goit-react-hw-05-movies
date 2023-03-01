import { searchMovies } from 'api/defaultApi';
import Form from 'components/Form/Form';

import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getYear } from 'assets/getYear';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? ''
  );
  const location = useLocation();

  useEffect(() => {
    const fetchSearchMovies = async () => {
      const results = await searchMovies(searchQuery);
      setMovies(results);
    };
    fetchSearchMovies();
  }, [searchQuery]);

  const changeQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
    setSearchQuery(value);
  };

  const visibleMovies = useMemo(() => {
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [movies, searchQuery]);

  return (
    <main>
      <Form value={searchQuery} onChange={changeQuery} />
      {visibleMovies.length > 0 && (
        <ul>
          {visibleMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}({getYear(movie.release_date)})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

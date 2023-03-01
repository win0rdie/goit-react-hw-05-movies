// import { searchMovies } from 'api/defaultApi';
// import { getYear } from 'assets/getYear';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Form() {
//   const [search, setSearch] = useState('');
//   const [movies, setMovies] = useState([]);

//   const handleSearch = e => setSearch(e.currentTarget.value);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const results = await searchMovies(search);
//     setMovies(results);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="search" />
//         <input
//           type="search"
//           id="search"
//           name="search"
//           value={search}
//           onChange={handleSearch}
//         />
//         <button type="submit">Search</button>
//       </div>

//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>
//               {movie.title} ({getYear(movie.release_date)})
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </form>
//   );
// }

export default function Form({ value, onChange }) {
  return (
    <div>
      <input
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

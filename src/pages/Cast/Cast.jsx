import { getMovieCredits } from 'api/defaultApi';
import { useState, useEffect } from 'react';
// import DEFAULT_IMG from '../../assets/images/noimage.jpg';
import {
  StyledHeading,
  StyledImage,
  StyledList,
  StyledListItem,
  StyledName,
  StyledRole,
  StyledTextActor,
} from './Cast.styled';

// const CastWrapper = styled.div`
//   h2 {
//     font-size: 1.5rem;
//     font-weight: bold;
//     margin-bottom: 1rem;
//   }

//   ul {
//     list-style: none;
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
//     gap: 1rem;

//     li {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       padding: 0.5rem;
//       background-color: #f5f5f5;
//       border-radius: 5px;
//       text-align: left;
//       width: 150px;
//       /* height: 200px; */

//       img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         border-radius: 10%;
//         margin-bottom: 0.5rem;
//       }

//       span {
//         /* text-align: center; */
//         text-align: left;
//         margin-bottom: 0.5rem;
//         font-weight: 400;
//       }

//       .actorWeight {
//         font-weight: bold;
//       }
//       .textActor {
//         text-align: left;
//         display: flex;
//         flex-direction: column;
//       }
//     }
//   }

//   .default-img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 10%;
//     margin-bottom: 0.5rem;
//     background-color: #c03434;
//   }
// `;

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
    <div>
      <StyledHeading>Cast List</StyledHeading>
      <StyledList>
        {cast.map(({ id, name, character, profile_path }, index) => (
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
        ))}
      </StyledList>
    </div>

    // {/* // <CastWrapper> */}
    //   <h2>Cast</h2>
    //   {cast !== null ? (
    //     <ul>
    //       {cast.map(actor => (
    //         <li key={actor.id}>
    //           {actor.profile_path !== null ? (
    //             <img
    //               src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
    //               alt={actor.name}
    //             />
    //           ) : (
    //             <img
    //               className="default-img"
    //               src={DEFAULT_IMG}
    //               alt="default img"
    //             />
    //           )}
    //           <div className="textActor">
    //             <span className="actorWeight">
    //               Actor: <span>{actor.name}</span>
    //             </span>
    //             <span className="actorWeight">
    //               Character: <span>{actor.character}</span>
    //             </span>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No cast information available</p>
    //   )}
    // </CastWrapper>
  );
}

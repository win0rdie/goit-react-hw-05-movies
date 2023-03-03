import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  /* max-width: 800px; */
  margin: 0 auto;
  padding: 50px;
`;

export const MovieList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MovieListItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  &:hover {
    color: #0077ff;
  }
`;

export const MovieTitle = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const MovieYear = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

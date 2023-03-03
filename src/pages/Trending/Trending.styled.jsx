import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* max-width: 800px; */
  margin: 0 auto;
  padding: 20px 50px;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    color: rgb(45, 88, 13);
  }
`;

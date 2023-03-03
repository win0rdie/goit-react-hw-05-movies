import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px 50px;

  margin-bottom: 20px;
`;

export const Poster = styled.img`
  max-width: 300px;
  margin-right: 20px;
  border-radius: 2%;
`;

export const MovieDetailsContainer = styled.div`
  flex: 1;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 10px;
`;

export const GenreList = styled.p`
  margin-bottom: 10px;
`;

export const MovieOverview = styled.p`
  margin-bottom: 10px;
`;

export const MovieDetailsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieDetail = styled.p`
  margin-right: 30px;
`;

export const StyledLinkMovie = styled(Link)`
  color: rgb(45, 88, 13);
  margin: 0 50px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  flex-direction: column;
  /* justify-content: flex-start; */
  margin-left: 50px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:hover {
    color: rgb(45, 88, 13);
    font-size: 16px;
    font-weight: 500;
  }
`;

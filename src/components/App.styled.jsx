import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  /* max-width: 1260px; */
  margin: 0 auto;
  /* padding: 0 16px; */
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;

  border-bottom: 2px solid rgba(45, 88, 13, 0.25);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: border-bottom 0.5s ease, box-shadow 0.5s ease;

  :hover {
    border-bottom: 2px solid rgba(45, 88, 13, 0.25);
    box-shadow: 0 4px 8px 0 rgba(45, 88, 13, 0.3);
  }

  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: rgb(45, 88, 13);
    font-weight: 600;
    font-size: 18px;
  }
`;

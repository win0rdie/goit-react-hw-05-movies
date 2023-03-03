import { Outlet } from 'react-router-dom';
import { Header, StyledLink } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>

      <Outlet />
    </div>
  );
}

import { Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';
import { AppBar } from '../AppBar/AppBar';

export function SharedLayout() {
  return (
    <Container>
      <Header>
        <AppBar />
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}

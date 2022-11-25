import { styled } from '../styles';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
});

export const Header = styled('header', {
  padding: '2rem 0',
  maxWidth: 1180,
  width: '100%',
  margin: '0 auto',
});
import { styled } from '../../styles/styles';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'relative',
  height: '100vh',
});

const Header = styled('header', {
  padding: '2rem 0',
  maxWidth: 1180,
  width: '100%',
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$gray800',
    padding: '0.75rem',
    border: 0,
    borderRadius: 6,
    position: 'relative',
    cursor: 'pointer',

    span: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '$green700',
      borderRadius: '50%',
      width: '1.75rem',
      height: '1.75rem',
      color: '$white',
      fontWeight: 'bold',

      position: 'absolute',
      top: -10,
      right: -10,
      border: '2px solid $gray900',
    },
  },
});

const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0, #7465d4 100% )',
  width: '100%',
  maxWidth: '100px',
  borderRadius: 8,
  height: '94px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  objectFit: 'cover',
});

export { Container, Header, ImageContainer };

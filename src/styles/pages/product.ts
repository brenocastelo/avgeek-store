import { styled } from '../styles';

const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '1rem',
  maxWidth: '1180px',
  margin: '0 auto',
});

const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0, #7465d4 100% )',
  width: '100%',
  maxWidth: '480px',
  borderRadius: 8,
  height: '520px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },
});

const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  h1: {
    color: '$gray300',
    fontSize: '$2xl',
  },

  span: {
    display: 'block',
    color: '$green400',
    fontSize: '$2xl',
    marginTop: '1rem',
  },

  p: {
    fontSize: '$md',
    color: '$gray300',
    marginTop: '2.5rem',
  },

  button: {
    backgroundColor: '$green700',
    color: '$white',
    border: 0,
    marginTop: 'auto',
    padding: '1rem 2rem',
    fontSize: '$md',
    fontWeight: 'bold',
    borderRadius: 8,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green400',
    },
  },
});

export { ProductContainer, ImageContainer, DetailsContainer };

import { styled } from '../styles';

const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  minHeight: 500,
  marginLeft: 'auto',
});

const Product = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #1ea483 0, #7465d4 100% )',
  borderRadius: 8,
  height: '100%',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    borderRadius: 6,
    padding: '1.5rem',
    backgroundColor: 'rgb(0, 0, 0, 0.6)',
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
    color: '$gray100',

    display: 'flex',
    justifyContent: 'space-between',

    strong: {
      fontSize: '$md',
    },

    span: {
      fontWeight: 'bold',
      color: '$green400',
    },
  },

  '&:hover': {
    footer: { transform: 'translateY(0%)', opacity: 1 },
  },
});

export { HomeContainer, Product };

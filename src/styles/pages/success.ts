import { styled } from '../styles';

const SuccessContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '0 auto',
  height: 656,

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 590,
    textAlign: 'center',
  },

  a: {
    display: 'block',
    fontSize: '$lg',
    color: '$green400',
    textDecoration: 'none',
    marginTop: '5rem',

    '&:hover': {
      color: '$green700',
    },
  },
});

const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0, #7465d4 100% )',
  width: '100%',
  maxWidth: '120px',
  borderRadius: 8,
  height: '145px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '4rem 0 2rem',

  objectFit: 'cover',
});

export { SuccessContainer, ImageContainer };

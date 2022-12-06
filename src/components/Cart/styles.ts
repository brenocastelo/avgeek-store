import { styled } from '../../styles/styles';

const CartContainer = styled('div', {
  backgroundColor: '$gray800',
  position: 'absolute',
  padding: '0 1.5rem',
  zIndex: 10,
  top: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '380px',

  '& > img': {
    margin: '1rem 0 1rem auto',
    cursor: 'pointer',
  },

  '& > span': {
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$gray100',
  },

  ul: {
    listStyle: 'none',
    marginTop: '2rem',
  },

  '& > div': {
    marginTop: 'auto',
    marginBottom: '2.5rem',

    div: {
      display: 'flex',
      justifyContent: 'space-between',
      gapHorizontal: 5,
      color: '$gray100',
    },

    strong: {
      fontSize: '$md',
      marginTop: '7px',
    },
  },

  button: {
    padding: '1.25rem 2rem',
    border: 0,
    backgroundColor: '$green700',
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$md',
    borderRadius: 8,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green400',
    },
  },

  variants: {
    open: {
      false: {
        transform: 'translateX(110%)',
        transition: 'all 0.2s ease-in-out',
        opacity: 0,
      },
      true: {
        transform: 'translateX(0%)',
        transition: 'all 0.2s ease-in-out',
        opacity: 1,
      },
    },
  },
});

const Item = styled('li', {
  display: 'grid',
  gridTemplateColumns: '25% 75%',
  gap: 20,
  marginBottom: 20,

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    fontSize: '$md',

    span: {
      display: 'block',
      marginBottom: 10,
      fontWeight: '400',
      color: '$gray300',
    },

    strong: {
      color: '$gray100',
    },

    button: {
      marginTop: 'auto',
      background: 'none',
      border: 0,
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '$green700',
      cursor: 'pointer',
    },
  },
});

export { CartContainer, Item };

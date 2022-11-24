import { styled } from '../styles/styles';

const Button = styled('button', {
  backgroundColor: '$green400',
  borderRadius: 4,
  border: 0,
  padding: '4px 6px',
});

export default function Home() {
  return (
    <div>
      <h1>AvGeek Store</h1>
      <Button>Take off!</Button>
    </div>
  );
}

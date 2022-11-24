import Image from 'next/image';
import { HomeContainer, Product } from '../styles/pages/home';
import { styled } from '../styles/styles';
import shirt1 from '../assets/shirts/shirt1.png';
import shirt2 from '../assets/shirts/shirt2.png';

const Button = styled('button', {
  backgroundColor: '$green400',
  borderRadius: 4,
  border: 0,
  padding: '4px 6px',
});

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt2} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

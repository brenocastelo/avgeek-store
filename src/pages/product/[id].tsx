import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  DetailsContainer,
  ImageContainer,
  ProductContainer,
} from '../../styles/pages/product';
import { formatPrice } from '../../utils/format-price';

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTTd6TE9KVGNJVmVpUVgyfGZsX3Rlc3RfcGliY0tWVDhPdEI5QTNHUkRKRUx1d0JI00y5Pqxssr&w=384&q=75"
          alt=""
          width={320}
          height={320}
        />
      </ImageContainer>
      <DetailsContainer>
        <h1>Camisa x</h1>
        <span>{formatPrice(79)}</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          deserunt soluta at, aliquam eum et accusantium. Quos veniam omnis
          doloremque, atque rem, sequi eligendi sit dolores provident
          consequuntur, necessitatibus quam!
        </p>
        <button>Comprar agora</button>
      </DetailsContainer>
    </ProductContainer>
  );
}

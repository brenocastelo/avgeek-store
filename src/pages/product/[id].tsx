import { GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Stripe from 'stripe';
import { stripe } from '../../lib/stripe';
import {
  DetailsContainer,
  ImageContainer,
  ProductContainer,
} from '../../styles/pages/product';
import { formatPrice } from '../../utils/format-price';

type Props = {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    priceId: string;
  };
};

export default function Product({ product }: Props) {
  async function checkout() {
    await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/checkout`, {
      method: 'POST',
      body: JSON.stringify({ priceId: product.priceId }),
    });
    console.log({ priceId: product.priceId });
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt="" width={320} height={320} />
      </ImageContainer>
      <DetailsContainer>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button onClick={checkout}>Comprar agora</button>
      </DetailsContainer>
    </ProductContainer>
  );
}

export async function getStaticPaths() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  return {
    paths: response.data.map((product) => {
      return {
        params: { id: product.id },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ id: string }>) {
  if (!params) return;

  const product = await stripe.products.retrieve(params.id, {
    expand: ['default_price'],
  });

  const defaultPrice = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        // formatting price on static site generation, so tha it only runs once
        price: formatPrice(
          defaultPrice.unit_amount ? defaultPrice.unit_amount / 100 : 0
        ),
        priceId: defaultPrice.id,
      },
      revalidate: 60 * 60 * 1,
    },
  };
}

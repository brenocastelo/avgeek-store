import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HomeContainer, Product } from '../styles/pages/home';

import 'swiper/css';
import { stripe } from '../lib/stripe';
import Stripe from 'stripe';
import { formatPrice } from '../utils/format-price';
import Link from 'next/link';

type Props = {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
};

export default function Home(props: Props) {
  return (
    <HomeContainer>
      <Swiper slidesPerView={3} spaceBetween={48}>
        {props.products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link href={`/product/${product.id}`} legacyBehavior passHref>
              <Product>
                <Image src={product.imageUrl} alt="" width={320} height={320} />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeContainer>
  );
}

export async function getStaticProps() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const { unit_amount } = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      // formatting price on static site generation, so tha it only runs once
      price: formatPrice(unit_amount ? unit_amount / 100 : 0),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
}

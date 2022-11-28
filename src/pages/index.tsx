import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HomeContainer, Product } from '../styles/pages/home';
import shirt1 from '../assets/shirts/shirt1.png';
import shirt2 from '../assets/shirts/shirt2.png';

import 'swiper/css';
import { stripe } from '../lib/stripe';
import Stripe from 'stripe';

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
            <Product>
              <Image src={product.imageUrl} alt="" width={320} height={320} />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeContainer>
  );
}

export async function getServerSideProps() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const { unit_amount } = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: unit_amount ? unit_amount / 100 : 0,
    };
  });

  return {
    props: {
      products,
    },
  };
}

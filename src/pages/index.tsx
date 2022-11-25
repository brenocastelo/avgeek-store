import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HomeContainer, Product } from '../styles/pages/home';
import shirt1 from '../assets/shirts/shirt1.png';
import shirt2 from '../assets/shirts/shirt2.png';

import 'swiper/css';

export default function Home() {
  return (
    <HomeContainer>
      <Swiper slidesPerView={3} spaceBetween={48}>
        <SwiperSlide>
          <Product>
            <Image src={shirt1} alt="" width={480} height={420} />

            <footer>
              <strong>Camiseta Beyond the Limits</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </SwiperSlide>
        <SwiperSlide>
          <Product>
            <Image src={shirt2} alt="" width={520} height={480} />

            <footer>
              <strong>Camiseta Beyond the Limits</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </SwiperSlide>
        <SwiperSlide>
          <Product>
            <Image src={shirt2} alt="" width={520} height={480} />

            <footer>
              <strong>Camiseta Beyond the Limits</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </SwiperSlide>
        <SwiperSlide>
          <Product>
            <Image src={shirt2} alt="" width={520} height={480} />

            <footer>
              <strong>Camiseta Beyond the Limits</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </SwiperSlide>
        <SwiperSlide>
          <Product>
            <Image src={shirt2} alt="" width={520} height={480} />

            <footer>
              <strong>Camiseta Beyond the Limits</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </SwiperSlide>
      </Swiper>
    </HomeContainer>
  );
}

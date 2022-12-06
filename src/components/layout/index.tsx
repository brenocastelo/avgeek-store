import Image from 'next/image';
import React, { useState } from 'react';
import { Cart } from '../Cart';
import logo from '../../assets/logo.png';
import bag from '../../assets/bag.svg';
import { useCart } from '../../context/context';
import { Container, Header } from '../../styles/pages/app';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { products } = useCart();

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  return (
    <Container>
      <Header>
        <Image src={logo} alt="Airplane" />

        <button onClick={openCart}>
          <Image src={bag} alt="Bag icon" height={24} width={24} />

          <span>{products.length}</span>
        </button>
      </Header>

      <Cart closeCart={closeCart} isCartOpen={isCartOpen} />
      {children}
    </Container>
  );
}

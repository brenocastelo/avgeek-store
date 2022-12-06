import rightArrow from '../../assets/right-arrow.svg';

import Image from 'next/image';
import { CartContainer, Item } from './styles';
import { ImageContainer } from '../../styles/pages/app';

import { useCart } from '../../context/context';
import { formatPrice } from '../../utils/format-price';
import { useState } from 'react';

type Props = {
  isCartOpen: boolean;
  closeCart: () => void;
};

export function Cart({ closeCart, isCartOpen }: Props) {
  const { removeProduct, products, totalAmount } = useCart();
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);

  async function checkout() {
    try {
      setIsCreatingCheckout(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/checkout`,
        {
          method: 'POST',
          body: JSON.stringify({ products }),
        }
      );
      const { checkoutUrl } = await response.json();

      /**
       * When redirecting to an external url, use window.location.href.
       * For internal redirects, use useRouter push method
       */
      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckout(false);
      // NIT: send error for an observability tool (datadog / sentry)
      alert(
        'Some error occurred on the checkout process. Please try again later.'
      );
    }
  }

  return (
    <CartContainer open={isCartOpen}>
      <Image
        src={rightArrow}
        alt="Icon for closing the cart"
        height={24}
        width={24}
        onClick={closeCart}
      />
      <span>Sacola de compras</span>

      <ul>
        {products.map((product) => {
          return (
            <Item key={product.id}>
              <ImageContainer />
              <div>
                <span>{product.name}</span>
                <strong>{formatPrice(product.price)}</strong>

                <button onClick={() => removeProduct(product.id)}>
                  Remover
                </button>
              </div>
            </Item>
          );
        })}
      </ul>

      <div>
        <div>
          <span>Quantidade</span> <span>{`${products.length} items`}</span>
        </div>
        <div>
          <strong>Valor total</strong>{' '}
          <strong>{formatPrice(totalAmount)}</strong>
        </div>
      </div>
      <button disabled={isCreatingCheckout} onClick={checkout}>
        Finalizar compra
      </button>
    </CartContainer>
  );
}

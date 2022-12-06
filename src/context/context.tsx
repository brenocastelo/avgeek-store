import React, { createContext, useContext, useState } from 'react';

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  priceId: string;
};

const CartContext = createContext<{
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}>({ products: [], setProducts: () => {} });

function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  const value = { products, setProducts };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error('useCount must be used within a CartProvider');

  const { products, setProducts } = context;

  function addProduct(product: Product) {
    const { id } = product;
    const productIndex = products.findIndex((p: Product) => p.id === id);

    if (productIndex < 0) {
      setProducts([...products, product]);
    }
  }

  function removeProduct(productId: string) {
    const productIndex = products.findIndex((p: Product) => p.id === productId);

    delete products[productIndex];

    if (productIndex < 0) {
      setProducts([...products]);
    }
  }

  const totalAmount = products.length
    ? products.reduce((acc, product) => acc + product.price, 0)
    : 0;

  return { products, addProduct, removeProduct, totalAmount };
}

export { CartProvider, useCart };

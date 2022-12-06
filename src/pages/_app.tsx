import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/globalStyles';

import { CartProvider } from '../context/context';
import { Layout } from '../components/layout';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

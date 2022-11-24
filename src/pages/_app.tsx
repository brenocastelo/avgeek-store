import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/globalStyles';
import logo from '../assets/logo.png';
import Image from 'next/image';
import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo} alt="Airplane" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

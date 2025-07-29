import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <main style={{ padding: '1rem' }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

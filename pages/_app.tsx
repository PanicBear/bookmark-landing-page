// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Rubik } from '@next/font/google';

const rubic = Rubik();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${rubic.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

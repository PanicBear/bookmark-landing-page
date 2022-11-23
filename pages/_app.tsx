// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Rubik } from '@next/font/google';
import { ThemeProvider } from 'styled-components';
import * as theme from '@styles/index';

const rubic = Rubik();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${rubic.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

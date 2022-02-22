import { AppProps } from 'next/app';
import Head from 'next/head';
import {Reset} from "styled-reset";

function CmsConsumer({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to cms-consumer!</title>
      </Head>
      <Reset />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CmsConsumer;

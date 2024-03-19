import Head from 'next/head'
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Create a React web app that uses Mapbox GL JS to render a map"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

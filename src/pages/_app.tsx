import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from '@/contexts/AuthContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Aplikacja do generowania dokumentów prawnych" />
          <title>DocuLegal - Generowanie dokumentów prawnych</title>
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;

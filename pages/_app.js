import localFont from 'next/font/local';

import 'normalize.css/normalize.css';
import '@/styles/globals.scss';

const helvetica = localFont({
  src: [
    {
      path: '../assets/fonts/HelveticaNeue-400.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/HelveticaNeue-700.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/HelveticaNeue-900.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${helvetica.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

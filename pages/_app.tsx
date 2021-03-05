/* eslint-disable jsx-a11y/anchor-is-valid */
import { AppProps } from 'next/app';
import Link from 'next/link';

import '../sass/main.scss';

const AppContainer = ({ Component, pageProps }: AppProps) => (
  <div>
    <header>
      <Link href="/">
        <a>
          Topbar
        </a>
      </Link>
    </header>
    <Component {...pageProps} />
  </div>
);

export default AppContainer;

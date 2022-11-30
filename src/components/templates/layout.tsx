import React, { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '../molecules/Footer';
import Box from '@mui/material/Box';

type LayoutProps = {
  children: ReactNode | ReactNode[];
  title: string;
  showNavbar: boolean;
  showSidebar: boolean;
  showProjectHeader?: boolean;
  fetchAgain?: () => void;
  projectIsBeingFetched?: boolean;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  showNavbar,
  showSidebar,
  showProjectHeader,
  title,
  fetchAgain,
  projectIsBeingFetched,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <main>
        <Box>{children}</Box>
        <Footer />
      </main>
    </>
  );
};

export default Layout;

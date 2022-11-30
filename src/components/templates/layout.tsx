import React, { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '../molecules/Footer';
import Box from '@mui/material/Box';
import NavBar from '../molecules/NavBar';
import Courses from '../Courses';

type LayoutProps = {
  children: ReactNode | ReactNode[];
  title: string;
  showNavbar: boolean;
  showSidebar?: boolean;
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
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <main>
        {showNavbar && <NavBar />}
        <Box>{children}</Box>
        <Footer />
      </main>
    </>
  );
};

export default Layout;

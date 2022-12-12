import React, { ReactNode, useCallback, useEffect } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Sidebar from '@/components/molecules/Sidebar';
import Courses from '../Banner';
import NavBar from '@/components/molecules/NavBar';
import Footer from '../molecules/Footer';
import useLayoutStyles from '~/layout';
import theme from '@/utils/theme';
import useDevice from '@/hooks/utils/useDevice';
import { getInfoUser, userDataSelector } from '@/store/userSlice';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import getTokenUser from '@/api/getTokenUser';

type LayoutProps = {
  children: ReactNode | ReactNode[];
  title: string;
  showNavbar?: boolean;
  showSidebar?: boolean;
  fetchAgain?: () => void;
  projectIsBeingFetched?: boolean;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  showNavbar,
  showSidebar,
  title,
  fetchAgain,
  projectIsBeingFetched,
}) => {
  const classes = useLayoutStyles();
  const { isMobile } = useDevice();
  const dispatch = useAppDispatch();

  const getContentPadding: (showNavbar: boolean) => string = (showNavbar) => {
    if (showNavbar && isMobile) return theme.spacing(13.5);
    else if (showNavbar && !isMobile) return theme.spacing(8.25);
    else return '0';
  };

  useEffect(() => {
    getDataCreateUser();
  }, []);

  const getDataCreateUser = useCallback(async () => {
    const localTokens = localStorage.getItem('tokens');
    const token = JSON.parse(localTokens);
    if (token) await dispatch(getInfoUser(token));
  }, []);

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
      <>
        {showNavbar && <NavBar />}
        <main
          className={showNavbar ? classes.root : ''}
          style={{
            paddingTop: getContentPadding(showNavbar),
          }}
        >
          {showSidebar && <Sidebar />}
          <Box
            width="100%"
            position="relative"
            paddingBottom={4}
            style={{ overflowX: 'hidden', padding: '0 26px 0 20px' }}
            maxWidth={showSidebar && 'calc(100% - 96px)'}
            height="2000px"
          >
            <Box>{children}</Box>
          </Box>
        </main>
        <Footer />
      </>
    </>
  );
};

export default Layout;

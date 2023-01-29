import { Box, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React from 'react';
import Typography from '@mui/material/Typography';
import { BUTTON_TYPE, ICON_FONT_SIZE } from '../../../styles/ui';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from '../atoms/CustomButton';
import useNavbarStyles from '~/navbar';
import useWordWrapStyles from '~/wordWrap';
import useButtonStyles from '~/button';
import NavbarLogo from '../atoms/navbar/NavbarLogo';
import { useRouter } from 'next/router';
import { userDataSelector } from '@/store/userSlice';
import { useAppSelector } from '@/store/hook';
import AccountMenu from '../atoms/navbar/AccountMenu';

const Navbar: React.FunctionComponent = () => {
  const data = useAppSelector(userDataSelector);


  const classes = {
    ...useNavbarStyles(),
    ...useWordWrapStyles(),
    ...useButtonStyles(),
  };

  // const [infoOpened, setInfoOpened] = React.useState(false);
  // const infoAnchorRef = React.useRef<HTMLButtonElement>(null);
  // const theme = useTheme();
  const router = useRouter();

  return (
    <Box position="fixed" className={classes.newAppBar}>
      <Box borderBottom="1px solid #e8ebed" height="100%">
        <Toolbar style={{ display: 'flex', height: '100%' }}>
          {/* <NavbarHomeIcon /> */}
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              flex: '1 1',
            }}
          >
            <NavbarLogo />
            <Typography
              variant="subtitle1"
              fontWeight={700}
              style={{ wordSpacing: '2px' }}
            >
              Học Lập Trình Để Đi Làm{' '}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex="1 1"
          >
            <Box className={classes.navBarInput}>
              <SearchIcon className={classes.navBarInputIcon} />
              <input
                placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                className={classes.navBarSearch}
              />
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            flex="1 1"
          >
            {/* <NotificationHeader /> */}
            {!data ? (
              <CustomButton
                type="submit"
                customStyle={{
                  fontSize: '14px',
                }}
                customMessageStyles={{ textTransform: 'none' }}
                message="Đăng nhập"
                onClick={() => router.push('/signin')}
              />
            ) : (
              <Box>
                <AccountMenu />
              </Box>
            )}
          </Box>
        </Toolbar>
      </Box>
      {/* {showMobileSubNavbar && <MobileSubNavBar />} */}
    </Box>
  );
};

export default React.memo(Navbar);

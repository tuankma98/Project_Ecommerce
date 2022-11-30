import { Box, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React from 'react';
import useNavbarStyles from '../../../styles/navbar';
import useWordWrapStyles from '../../../styles/wordWrap';
import useButtonStyles from '../../../styles/button';
import NavbarHomeIcon from '../atoms/navbar/NavbarHomeIcon';
import NavbarLogo from '../atoms/navbar/NavbarLogo';
import Typography from '@mui/material/Typography';
import CustomIcon from '../atoms/icons/CustomIcon';
import { ICON_FONT_SIZE } from '../../../styles/ui';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Navbar: React.FunctionComponent = () => {
  const classes = {
    ...useNavbarStyles(),
    ...useWordWrapStyles(),
    ...useButtonStyles(),
  };

  const [infoOpened, setInfoOpened] = React.useState(false);
  const infoAnchorRef = React.useRef<HTMLButtonElement>(null);
  const theme = useTheme();

  return (
    <Box position="fixed" className={classes.newAppBar}>
      <Box borderBottom="1px solid #e8ebed">
        <Toolbar style={{ display: 'flex', flex: '1 1' }}>
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
            <Typography>Học Lập Trình Để Đi Làm </Typography>
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
            <Box>TB</Box>
            <Box>TB2</Box>

            {/* <Box ml={3}>
              <AvatarButton
                onClick={() => handleToggle(setInfoOpened)}
                customRef={infoAnchorRef}
                uploadedImage={userProfileImageUrl}
                showUploadIcon={false}
                uploadMode={false}
              />
            </Box>
            <UserInfoPopup
              infoOpened={infoOpened}
              infoAnchorRef={infoAnchorRef}
              handleClose={() => setInfoOpened(false)}
              profileImage={userProfileImageUrl}
            /> */}
          </Box>
        </Toolbar>
      </Box>
      {/* {showMobileSubNavbar && <MobileSubNavBar />} */}
    </Box>
  );
};

export default React.memo(Navbar);
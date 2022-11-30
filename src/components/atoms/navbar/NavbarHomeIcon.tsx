import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import useNavbarStyles from '../../../../styles/navbar';

import { ICON_FONT_SIZE } from '../../../../styles/ui';
import CustomIcon from '../icons/CustomIcon';

type NavbarHomeIconProps = {
  goDashboardHomePath?: string;
};

const NavbarHomeIcon: React.FunctionComponent<NavbarHomeIconProps> = ({
  goDashboardHomePath,
}) => {
  const classes = {
    ...useNavbarStyles(),
  };

  const router = useRouter();
  const { pathname } = useRouter();

  const handleClickIconHome = () => {
    // if (pathname.includes(ROUTES.CHANGE_PASSWORD)) {
    //   router.push(`${currentOrganizationCode}/${redirectURLParent}`);
    // } else router.push(goDashboardHomePath);
  };

  const theme = useTheme();
  return (
    <Box className={classes.navBarHomeIcon}>
      <Box onClick={handleClickIconHome}>
        <CustomIcon
          customClass="icon-ap_home_line"
          customStyles={{
            fontSize: ICON_FONT_SIZE.xlargeIcon,
            color: theme.palette.primary.dark,
          }}
        />
      </Box>
    </Box>
  );
};

export default React.memo(NavbarHomeIcon);

import {
  Button,
  ClickAwayListener,
  Divider,
  Grid,
  Grow,
  MenuList,
  Paper,
  Popper,
  Typography,
  Box,
  ListItemIcon,
} from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

import CustomIcon from '@/components/atoms/icons/CustomIcon';

import useButtonStyles from '~/button';
import useNavbarStyles from '~/navbar';
import useWordWrapStyles from '~/wordWrap';
import theme from '@/utils/theme';
import { ICON_FONT_SIZE } from '~/ui';
import AvatarButton from '../atoms/buttons/AvatarButton';
import { userDataSelector } from '@/store/userSlice';
import { useAppSelector } from '@/store/hook';
import clsx from 'clsx';

type UserInfoPopupProps = {
  infoOpened: boolean;
  infoAnchorRef: React.MutableRefObject<HTMLButtonElement>;
  handleClose: (event: MouseEvent | TouchEvent) => void;
  placement;
};

const UserInfoPopup: React.FC<UserInfoPopupProps> = ({
  infoOpened,
  infoAnchorRef,
  handleClose,
  placement,
}) => {
  const data = useAppSelector(userDataSelector);

  const router = useRouter();
  const classes = {
    ...useButtonStyles(),
    ...useNavbarStyles(),
    ...useWordWrapStyles(),
  };

  const handleLogout = () => {
    localStorage.setItem('tokens', JSON.stringify(''));
    window.location.href = 'http://localhost:8081/';
  };

  return (
    <Popper
      open={infoOpened}
      anchorEl={infoAnchorRef.current}
      role={undefined}
      transition
      disablePortal
      placement={placement}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Paper className={classes.useInfoPopup}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id="menu-list-grow">
                <Grid
                  container
                  style={{
                    textAlign: 'center',
                    color: theme.palette.info.light,
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      marginTop: theme.spacing(2),
                    }}
                  >
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                      }}
                    >
                      <Avatar
                        sx={{ width: 50, height: 50 }}
                        src={data?.avatar ?? ''}
                      ></Avatar>
                      <Box className={classes.maxWidthlineClamp}>
                        <Typography color="#292929">{data.username}</Typography>
                        <Typography
                          className={clsx(classes.wordWrap, classes.lineClamp)}
                          style={{
                            fontSize: '12px',
                            marginTop: theme.spacing(1),
                            color: '#757575',
                          }}
                        >
                          {data.email}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider
                      variant="middle"
                      style={{
                        backgroundColor: theme.palette.background.default,
                        marginTop: theme.spacing(3),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: theme.spacing(2) }}>
                    <Link href="/profile" passHref>
                      <Button
                        style={{
                          height: '44px',
                        }}
                        className={classes.logoutButton}
                      >
                        Profile
                      </Button>
                    </Link>
                    <Divider
                      variant="middle"
                      style={{
                        backgroundColor: theme.palette.background.default,
                        marginTop: theme.spacing(2),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: '12px' }}>
                    <Link href="/user/me" passHref>
                      <Button
                        style={{
                          height: '44px',
                        }}
                        className={classes.logoutButton}
                      >
                        Settings
                      </Button>
                    </Link>
                    <Divider
                      variant="middle"
                      style={{
                        backgroundColor: theme.palette.background.default,
                        marginTop: theme.spacing(2),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: theme.spacing(2) }}>
                    <Button
                      className={classes.logoutButton}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </Grid>
                </Grid>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default UserInfoPopup;

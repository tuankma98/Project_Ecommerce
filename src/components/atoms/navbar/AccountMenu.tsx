import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
import { userDataSelector } from '@/store/userSlice';
import { useAppSelector } from '@/store/hook';
import UserInfoPopup from '@/components/molecules/UserInfoPopup';
import { PopperPlacementType } from '@mui/material/Popper';

const AccountMenu = () => {
  const data = useAppSelector(userDataSelector);

  const infoAnchorRef = React.useRef<HTMLButtonElement>(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [infoOpened, setInfoOpened] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleToggle = (handler, place) => {
    handler((prevOpen) => !prevOpen);
    setPlacement(place);
  };

  return (
    <Box>
      <Box ref={infoAnchorRef}>
        <IconButton
          onClick={() => handleToggle(setInfoOpened, 'bottom-end')}
          size="small"
          aria-controls={infoOpened ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={infoOpened ? 'true' : undefined}
        >
          <Avatar
            sx={{ width: 32, height: 32 }}
            src={data?.avatar ?? ''}
          ></Avatar>
        </IconButton>
      </Box>

      <UserInfoPopup
        infoOpened={infoOpened}
        infoAnchorRef={infoAnchorRef}
        handleClose={() => setInfoOpened(false)}
        placement={placement}
      />
    </Box>
  );
};

export default AccountMenu;

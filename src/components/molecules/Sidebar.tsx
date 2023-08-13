import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import useSidebarStyles from '~/sidebar';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import TheatersIcon from '@mui/icons-material/Theaters';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import useCurrentOrganizationRole from '@/hooks/auth/useCurrentOrganizationRole';
import {
  DEFAULT_SIDEBAR_ITEMS,
  USER_SIDEBAR_ITEMS,
} from '@/utils/constants/sidebar';
import SidebarItem from '../atoms/SidebarItem';
import CustomIcon from '../atoms/icons/CustomIcon';

const Sidebar: React.FunctionComponent = () => {
  const classes = { ...useSidebarStyles() };
  const router = useRouter();
  const isPathName = router.asPath;
  const currentOrganizationRoleAdmin = useCurrentOrganizationRole();

  const onRedirectTo = (route) => {
    router.push(route);
  };

  return (
    <Box className={classes.root}>
      <List className={classes.list}>
        <ListItem
          disablePadding
          className={
            isPathName === '/create_blog'
              ? clsx(classes.listItem, classes.sidebarItemSelected)
              : classes.listItem
          }
          onClick={() => onRedirectTo('/create-blog')}
        >
          <ListItemButton className={classes.create}>
            <CustomIcon
              customClass="fa-solid fa-circle-plus"
              customStyles={{
                color: '#1473e6',
                fontSize: '42px',
              }}
            />
            <ListItemText primary="" className={classes.listText} />
          </ListItemButton>
        </ListItem>
        {currentOrganizationRoleAdmin ? (
          <>
            {USER_SIDEBAR_ITEMS('admin').map((sidebarItem, index) => (
              <SidebarItem
                key={index + 1}
                sidebarItem={sidebarItem}
                onRedirectTo={onRedirectTo}
                currentPath={isPathName}
              />
            ))}
          </>
        ) : (
          <>
            {USER_SIDEBAR_ITEMS('user').map((sidebarItem, index) => (
              <SidebarItem
                key={index + 1}
                sidebarItem={sidebarItem}
                onRedirectTo={onRedirectTo}
                currentPath={isPathName}
              />
            ))}
          </>
        )}
      </List>
    </Box>
  );
};

export default Sidebar;

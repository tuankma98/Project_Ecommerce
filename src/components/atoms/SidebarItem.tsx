import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import clsx from 'clsx';
import useSidebarStyles from '~/sidebar';
import CustomIcon from './icons/CustomIcon';

type SidebarItemType = {
  key: string;
  name: string;
  icon: string;
};

type SidebarItemProps = {
  currentPath?: string;
  onRedirectTo?: (route: string) => void;
  sidebarItem?: SidebarItemType;
};

const SidebarItem: React.FunctionComponent<SidebarItemProps> = ({
  currentPath,
  onRedirectTo,
  sidebarItem,
}) => {
  const classes = { ...useSidebarStyles() };

  return (
    <ListItem
      disablePadding
      className={
        currentPath === `${sidebarItem.key}`
          ? clsx(classes.listItem, classes.sidebarItemSelected)
          : classes.listItem
      }
      onClick={() => onRedirectTo(sidebarItem.key)}
    >
      <ListItemButton className={classes.listBtn}>
        <CustomIcon customClass={sidebarItem.icon} size="medium" />
        <ListItemText primary={sidebarItem.name} className={classes.listText} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;

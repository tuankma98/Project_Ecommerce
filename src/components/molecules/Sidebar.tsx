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

const Sidebar: React.FunctionComponent = () => {
  const classes = { ...useSidebarStyles() };

  return (
    <Box className={classes.root}>
      <List className={classes.list}>
        <ListItem
          disablePadding
          style={{
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Box className={classes.listBtn}>
            <ListItemIcon className={classes.listIcon}>
              <AddCircleOutlinedIcon fontSize="large" />
            </ListItemIcon>
          </Box>
        </ListItem>
        <ListItem disablePadding className={classes.listItem}>
          <ListItemButton className={classes.listBtn}>
            <ListItemIcon className={classes.listIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.listText} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className={classes.listItem}>
          <ListItemButton className={classes.listBtn}>
            <ListItemIcon className={classes.listIcon}>
              <TheatersIcon />
            </ListItemIcon>
            <ListItemText primary="Lộ trình" className={classes.listText} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className={classes.listItem}>
          <ListItemButton className={classes.listBtn}>
            <ListItemIcon className={classes.listIcon}>
              <LightbulbIcon />
            </ListItemIcon>
            <ListItemText primary="Học" className={classes.listText} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className={classes.listItem}>
          <ListItemButton className={classes.listBtn}>
            <ListItemIcon className={classes.listIcon}>
              <MapsUgcIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" className={classes.listText} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

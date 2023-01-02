import { createStyles, makeStyles } from '@mui/styles';

import theme from '@/utils/theme';
import { UI_WIDTHS } from './ui';
import zIndex from '@mui/material/styles/zIndex';

const useSidebarStyles = makeStyles(() =>
  createStyles({
    root: { flexShrink: 0, width: 96 },
    list: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      flexShrink: 0,
      left: 0,
      padding: '0 8px',
      position: 'sticky',
      top: '74px',
      zIndex: 8,
      gap: '6px',
    },
    listItem: {
      width: '72px',
      '& .css-1r8ijuk-MuiButtonBase-root-MuiListItemButton-root:hover': {
        borderRadius: '16px',
      },
    },
    listBtn: {
      display: 'flex',
      flexDirection: 'column',
      padding: '18.5px 8px',
      borderRadius: '16px',
      gap: '4px',
    },
    create: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '15px',
      paddingBottom: '15px',
      borderRadius: '16px',
    },
    listIcon: {
      display: 'flex',
      justifyContent: 'center',
    },
    listText: {
      color: '#404040',
      margin: 0,

      '& .css-19he1h9-MuiTypography-root': {
        fontSize: 11,
        lineHeight: 1,
      },
    },
    sidebarItemSelected: {
      borderRadius: 16,
      backgroundColor: '#e8ebed',
      '& .css-tlelie-MuiListItemText-root': {
        color: '#1a1a1a',
      },
      '& .css-cveggr-MuiListItemIcon-root': {
        color: '#1a1a1a',
      },
    },
  }),
);

export default useSidebarStyles;

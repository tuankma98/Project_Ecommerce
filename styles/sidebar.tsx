import { createStyles, makeStyles } from '@mui/styles';

import theme from '@/utils/theme';
import { UI_WIDTHS } from './ui';
import zIndex from '@mui/material/styles/zIndex';

const useSidebarStyles = makeStyles(() =>
  createStyles({
    root: { flexShrink: 0, color: '#1a1a1a' },
    list: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      flexShrink: 0,
      left: 0,
      padding: '0 8px',
      position: 'sticky',
      top: '74px',
      width: 96,
      zIndex: 8,
      gap: '6px',
    },
    listItem: {
      '& .css-1r8ijuk-MuiButtonBase-root-MuiListItemButton-root:hover': {
        borderRadius: '16px',
        '&.listText': {
          color: '#1a1a1a',
        },
        '& .css-1r8ijuk-MuiButtonBase-root-MuiListItemButton-root:hover .listText':
          {
            color: 'red',
          },
      },
    },
    listBtn: {
      display: 'flex',
      flexDirection: 'column',
      paddingRight: 0,
      paddingLeft: 0,
    },
    listIcon: {
      display: 'flex',
      justifyContent: 'center',
    },
    listText: {
      color: '#404040',
      margin: 0,
    },
  }),
);

export default useSidebarStyles;

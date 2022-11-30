import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import { UI_WIDTHS } from './ui';

const useNavbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menuItem: {
      maxWidth: '100vw',
    },
    menuItemActive: {
      background: '#F2F3F4',
    },
    newAppBar: {
      height: '66px',
      top: 0,
      right: 0,
      left: 0,
      zIndex: theme.zIndex.drawer + 1,
      background: '#FFFFFF 0% 0% no-repeat padding-box',
    },
    newTitle: {
      width: UI_WIDTHS.sidebarWidth,
      margin: 'auto',
      '@media (max-width: 768px)': {
        textAlign: 'center',
      },
    },
    useInfoPopup: {
      backgroundColor: '#707070',
      width: '220px',
      marginTop: theme.spacing(1),
      padding: theme.spacing(1),
    },
    organizationSelect: {
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    navBarHomeIcon: {
      display: 'none',
      '@media (max-width: 768px)': {
        display: 'block',
        minWidth: 40,
      },
    },
    navBarInput: {
      display: 'flex',
      alignItems: 'center',
      border: '2px solid #e8e8e8',
      borderRadius: '20px',
      flex: '1 1',
      height: '40px',
      padding: '0 16px 0 8px',
      transition: 'border-color .2s ease-in-out',
      width: '420px',

      '&:focus-within': {
        borderColor: '#444',
      },
    },
    navBarInputIcon: {
      color: '#7c7c7c',
      width: '26px',
      height: '26px',
    },
    navBarSearch: {
      border: 'none',
      caretColor: '#444',
      flex: '1 1',
      height: '100%',
      outline: 'none',
      padding: '0 5px',
    },
  }),
);
export default useNavbarStyles;

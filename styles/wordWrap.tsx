import { createStyles, makeStyles } from '@mui/styles';

import theme from '../src/utils/theme';

const useWordWrapStyles = makeStyles(() =>
  createStyles({
    wordWrap: {
      wordBreak: 'break-word',
      whiteSpace: 'pre-line',
    },
    noWrap: {
      whiteSpace: 'nowrap',
    },
    lineClamp: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    multiLineClamp: {
      WebkitLineClamp: 3,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      wordBreak: 'break-word',
    },
    link: {
      textDecoration: 'underline',
      color: '#0041C0',
      cursor: 'pointer',
    },
    statusRenovation: {
      backgroundColor: '#8F76C6',
      borderRadius: 20,
      color: '#FFFFFF',
      padding: theme.spacing(0.3, 0.5),
      fontSize: 14,
      display: 'inline-block',
    },

    tableHeader: {
      whiteSpace: 'nowrap',
      fontWeight: 'bold',
    },
    maxWidthTextFile: {
      '& .MuiFormControlLabel-label': {
        maxWidth: '100%',
        display: 'flex',
      },
    },
    maxWidthlineClamp: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      maxWidth: 'calc(100% - 65px)',
    },

    lineClamps: {
      display: '-webkit-box !important',
      ' -webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
      whiteSpace: 'normal',
    },
  }),
);

export default useWordWrapStyles;

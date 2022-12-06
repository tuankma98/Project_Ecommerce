import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useLayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flex: 1,
      minHeight: '100vh',
    },
    footer: {},
  }),
);

export default useLayoutStyles;

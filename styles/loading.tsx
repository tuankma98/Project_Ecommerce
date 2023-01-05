import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useLoadingStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      color: '#1976d2',
      margin: '30px 20px',
    },
  }),
);

export default useLoadingStyles;

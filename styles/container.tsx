import { makeStyles, createStyles } from '@mui/styles';

const useContainerStyles = makeStyles(() =>
  createStyles({
    root: {},
    pageContainer: {
      padding: '0.5rem 1rem',
    },
  }),
);

export default useContainerStyles;

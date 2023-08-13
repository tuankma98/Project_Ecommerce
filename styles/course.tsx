import { makeStyles, createStyles } from '@mui/styles';

const useCourseStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingLeft: 44,
      paddingRight: 44,
    },
    title: {
      marginTop: 40,
      fontSize: 24,
      fontWeight: 700,
    },
    listItem: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
    },
    card: {
      //   backgroundColor: 'red',
    },
    cardActionArea: {
      display: 'flex',
      justifyContent: 'stretch',
      flexDirection: 'column',
      height: '100%',
    },
    image: {
      flexShrink: 0,
    },
    cardContent: {
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    cardTitle: {
      fontWeight: 500,
      wordBreak: 'break-all',
      fontSize: 16,
      display: ' -webkit-box',
      overflow: 'hidden',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
    },
    cardUsers: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: '#666',
    },
  }),
);

export default useCourseStyles;

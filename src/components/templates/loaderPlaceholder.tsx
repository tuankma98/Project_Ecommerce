import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { FunctionComponent } from 'react';
import useContainerStyles from '../../../styles/container';

const LoaderPlaceholder: FunctionComponent = () => {
  const classes = {
    ...useContainerStyles(),
  };

  return (
    <Container
      className={classes.pageContainer}
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={60} />
    </Container>
  );
};

export default LoaderPlaceholder;

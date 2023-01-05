import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useLoadingStyles from '~/loading';

export default function CircularUnderLoad() {
  const classes = { ...useLoadingStyles() };
  return <CircularProgress disableShrink className={classes.loading} />;
}

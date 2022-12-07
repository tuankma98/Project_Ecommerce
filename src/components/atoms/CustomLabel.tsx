import { InputLabelProps } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';
import React from 'react';

import useInputStyles from '~/input';
import useSelectStyles from '~/select';

type CustomLabelProps = {
  bold?: boolean;
  small?: boolean;
  gutterBottom?: boolean;
};
const CustomLabel: React.FunctionComponent<
  CustomLabelProps & InputLabelProps
> = ({ bold, gutterBottom, small, children, ...rest }) => {
  const classes = { ...useSelectStyles(), ...useInputStyles() };
  const theme = useTheme();
  return (
    <InputLabel
      {...rest}
      classes={{
        root: classes.outlinedSelectLabel,
      }}
      style={{
        fontSize: small ? theme.spacing(1.75) : theme.spacing(2),
        fontFamily: bold ? 'NotoSansJpBold' : 'NotoSansJpRegular',
        marginBottom: gutterBottom ? theme.spacing(1) : 0,
      }}
    >
      {children}
    </InputLabel>
  );
};

export default CustomLabel;

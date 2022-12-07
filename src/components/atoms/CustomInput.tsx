import { TextField, TextFieldProps } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import useInputStyles from '~/input';
import CustomLabel from './CustomLabel';

export type CustomInputProps = {
  customId?: string;
  name?: string;
  noFullWidth?: boolean;
  hookRef?: React.Ref<unknown>;
  customClass?: string;
  customStyles?: React.CSSProperties;
  inputLabel?: string;
  size?: 'small' | 'medium';
  type?: string;
  readOnly?: boolean;
};

const CustomInput: React.FunctionComponent<
  CustomInputProps & TextFieldProps
> = ({
  customId,
  name,
  noFullWidth,
  hookRef,
  customClass,
  customStyles,
  placeholder,
  inputLabel,
  size,
  readOnly,
  type,
  ...rest
}) => {
  const classes = {
    ...useInputStyles(),
  };
  return (
    <>
      {inputLabel && (
        <CustomLabel bold gutterBottom>
          {inputLabel}
        </CustomLabel>
      )}
      <TextField
        {...rest}
        id={customId}
        inputRef={hookRef}
        className={clsx(classes.customInput, customClass)}
        variant="outlined"
        name={name}
        type={type}
        fullWidth={!noFullWidth}
        inputProps={{
          //TODO: improve, right now it's overlapping any inputProps passed as props!
          style: {
            padding: size === 'medium' ? '12px' : '8.5px 12px',
            ...(readOnly && { color: '#ADADAD' }),
            ...customStyles,
          },
          readOnly,
          role: 'textbox',
        }}
        placeholder={placeholder ?? ''}
      />
    </>
  );
};

CustomInput.defaultProps = {
  size: 'medium',
};

export default CustomInput;

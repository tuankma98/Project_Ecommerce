import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import useButtonStyles from '../../../styles/button';

import { BUTTON_TYPE, ICON_FONT_SIZE, ICON_POSITION } from '../../../styles/ui';
import CustomIcon from './icons/CustomIcon';

type CustomButtonProps = {
  message: string;
  buttonType?: number;
  customStyle?: React.CSSProperties;
  customMessageStyles?: React.CSSProperties;
  showLoadingStatus?: boolean;
  onClick?: (evt?: React.MouseEvent) => void;
  iconPosition?: string;
  iconClassName?: string;
  iconSize?: number;
};

const CustomButton: React.FC<CustomButtonProps & ButtonProps> = ({
  message,
  buttonType,
  customStyle,
  customMessageStyles,
  onClick,
  showLoadingStatus,
  iconPosition,
  iconClassName,
  iconSize,
  ...rest
}) => {
  const theme = useTheme();
  const classes = {
    ...useButtonStyles(),
  };
  const getButtonClass = () => {
    switch (buttonType) {
      case BUTTON_TYPE.big:
        return classes.newBigButton;
      case BUTTON_TYPE.delete:
      case BUTTON_TYPE.bulk_delete:
        return classes.deleteTaskButton;
      case BUTTON_TYPE.cancel:
        return classes.cancelButton;
      case BUTTON_TYPE.cancelDelete:
        return classes.cancelDeleteButton;
      case BUTTON_TYPE.search:
        return classes.searchButton;

      case BUTTON_TYPE.xs:
        return classes.xs;
      case BUTTON_TYPE.cancelOrDelete:
        return classes.cancelOrDeleteButton;
      case BUTTON_TYPE.largeDeleteBold:
        return classes.largeDeleteBoldButton;
      default:
        return classes.newSmallButton;
    }
  };
  return (
    <Button
      {...rest}
      variant="contained"
      onClick={onClick}
      className={getButtonClass()}
      style={customStyle}
    >
      {buttonType && (
        <CustomIcon
          customClass="icon-ap_search_line"
          customStyles={{ marginRight: theme.spacing(0.5) }}
        />
      )}
      <Box style={customMessageStyles}>
        {message}
        {showLoadingStatus && (
          <CircularProgress
            size={18}
            style={{
              marginLeft: theme.spacing(1),
              color: theme.palette.info.light,
            }}
          />
        )}
      </Box>
    </Button>
  );
};

export default CustomButton;

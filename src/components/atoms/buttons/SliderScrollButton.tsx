import { Box } from '@mui/material';
import React from 'react';
import CustomIcon from '../icons/CustomIcon';

type SliderScrollButtonProps = {
  right?: boolean;
  onClick?: () => void;
};

const SliderScrollButton: React.FC<SliderScrollButtonProps> = ({
  right,
  onClick,
}) => {
  return (
    <Box
      position="absolute"
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      style={{
        top: 'calc(50% - 45px)',
        zIndex: 2,
        height: 90,
        width: 40,
        backgroundColor: '#0000004D',
        borderRadius: 8,
        cursor: 'pointer',
        textAlign: 'center',
        right: right ? 0 : 'none',
      }}
    >
      <CustomIcon
        customClass={right ? 'icon-ap_origin_right' : 'icon-ap_origin_left'}
        customStyles={{
          color: '#fff',
          fontSize: 32,
          lineHeight: '90px',
        }}
      />
    </Box>
  );
};

export default SliderScrollButton;

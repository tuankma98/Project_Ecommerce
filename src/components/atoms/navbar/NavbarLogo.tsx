import Box from '@mui/material/Box';
import React from 'react';
import { LOGO_IMAGE_HEIGHT, LOGO_IMAGE_WIDTH } from '../../../../styles/ui';

const NavbarLogo: React.FunctionComponent = () => {
  return (
    <Box width={LOGO_IMAGE_WIDTH} height={LOGO_IMAGE_HEIGHT}>
      <img
        alt="Logo"
        src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
        width={LOGO_IMAGE_WIDTH}
        height={LOGO_IMAGE_HEIGHT}
        style={{ objectFit: 'contain', flexShrink: 0, borderRadius: '8px' }}
      />
    </Box>
  );
};

export default React.memo(NavbarLogo);

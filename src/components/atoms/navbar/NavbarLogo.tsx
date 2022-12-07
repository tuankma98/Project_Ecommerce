import Box from '@mui/material/Box';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { LOGO_IMAGE_HEIGHT, LOGO_IMAGE_WIDTH } from '~/ui';
import logo from '~@/images/logo.png';

const NavbarLogo: React.FunctionComponent = () => {
  const router = useRouter();
  return (
    <Box
      width={LOGO_IMAGE_WIDTH}
      height={LOGO_IMAGE_HEIGHT}
      onClick={() => router.push('/')}
    >
      <Image
        alt="Logo"
        src={logo}
        width={LOGO_IMAGE_WIDTH}
        height={LOGO_IMAGE_HEIGHT}
        style={{
          objectFit: 'contain',
          flexShrink: 0,
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      />
    </Box>
  );
};

export default React.memo(NavbarLogo);

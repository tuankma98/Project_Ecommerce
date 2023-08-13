import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import CustomButton from '@/components/atoms/CustomButton';

export default function Custom404() {
  const router = useRouter();

  const onRedirect = () => {
    router.back();
  };

  return (
    <Box>
      <h1>404 - Page Not Found</h1>
      <CustomButton message="Back" variant="outlined" onClick={onRedirect} />
    </Box>
  );
}

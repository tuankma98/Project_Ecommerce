import SliderBanner from '@/components/slider/SliderBanner';
import Layout from '@/components/templates/layout';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Layout title="Home" showNavbar showSidebar>
      <Box mt={2.25}>
        <SliderBanner />
      </Box>
    </Layout>
  );
}

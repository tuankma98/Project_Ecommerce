import SliderBanner from '@/components/slider/SliderBanner';
import Layout from '@/components/templates/layout';
import Box from '@mui/material/Box';
import Course from '@/components/course';
import Chart from '@/components/chart';
import useCurrentOrganizationRole from '@/hooks/auth/useCurrentOrganizationRole';

export default function Home() {
  const currentOrganizationRoleAdmin = useCurrentOrganizationRole();

  return (
    <Layout title="Home" showNavbar showSidebar>
      <Box mt={2.25}>
        <SliderBanner />

        {currentOrganizationRoleAdmin && <Chart />}

        <Course />
      </Box>
    </Layout>
  );
}

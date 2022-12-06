import Courses from '@/components/Courses';
import Layout from '@/components/templates/layout';
import Box from '@mui/material/Box';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="Home" showNavbar showSidebar>
      <Box mt={2}>
        <Courses />
      </Box>
    </Layout>
  );
}

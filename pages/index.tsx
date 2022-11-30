import Box from '@mui/material/Box';
import Image from 'next/image';
import Courses from '../src/components/Courses';
import NavBar from '../src/components/molecules/NavBar';
import Layout from '../src/components/templates/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <NavBar /> */}
        <Layout title="Home" showNavbar>
          <Box mt={2}>
            <Courses />
          </Box>
        </Layout>
      </main>
    </div>
  );
}

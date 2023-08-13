import React, { useState, useEffect } from 'react';

import SliderBanner from '@/components/slider/SliderBanner';
import Layout from '@/components/templates/layout';
import Box from '@mui/material/Box';
import CourseList from '@/components/course';
import Chart from '@/components/chart';
import useCurrentOrganizationRole from '@/hooks/auth/useCurrentOrganizationRole';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { getAllDataCourse } from '@/store/courseSlice';

export default function Home() {
  const dispatch = useAppDispatch();

  const currentOrganizationRoleAdmin = useCurrentOrganizationRole();

  useEffect(() => {
    dispatch(getAllDataCourse());
  }, [dispatch]);

  return (
    <Layout title="Home" showNavbar showSidebar>
      <Box mt={2.25}>
        <SliderBanner />

        {currentOrganizationRoleAdmin && <Chart />}

        <CourseList />
      </Box>
    </Layout>
  );
}

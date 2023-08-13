import React, { useState, useEffect } from 'react';

import Layout from '@/components/templates/layout';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { getDataCourse } from '@/store/courseSlice';
import { useRouter } from 'next/router';
import { dataCourseSelector } from '@/store/courseSlice';

export default function CourseDetail() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const courseItemId = router?.query?.id as string;

  const dataCourse = useAppSelector(dataCourseSelector);
  console.log('data: ', dataCourse);

  useEffect(() => {
    const localTokens = localStorage.getItem('tokens');
    const token = JSON.parse(localTokens);

    if (courseItemId && token) dispatch(getDataCourse(courseItemId));
  }, [dispatch, courseItemId]);
  return (
    <Layout title="Course-detail" showNavbar showSidebar>
      <h1>Page Course Detail: {dataCourse?.title}</h1>
    </Layout>
  );
}

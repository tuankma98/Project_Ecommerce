import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Donuts } from './Donuts';
import useChartStyles from '~/chart';
import { getAllUser, dataAllUserCreateSelector } from '@/store/userSlice';
import {
  getAllTeacher,
  dataAllTeacherCreateSelector,
} from '@/store/teacherSlice';
import { allDataCourseSelector } from '@/store/courseSlice';
import {
  getAllDataCreateBlog,
  allDataCreateBlogSelector,
} from '@/store/blogSlice';
import { useAppDispatch, useAppSelector } from '@/store/hook';

const Chart = () => {
  const classes = {
    ...useChartStyles(),
  };
  const dispatch = useAppDispatch();
  const dataAllUser = useAppSelector(dataAllUserCreateSelector);
  const dataAllTeacher = useAppSelector(dataAllTeacherCreateSelector);
  const dataAllBlog = useAppSelector(allDataCreateBlogSelector);
  const dataAllCourse = useAppSelector(allDataCourseSelector);

  useEffect(() => {
    const localTokens = localStorage.getItem('tokens');
    const token = JSON.parse(localTokens);
    if (token) {
      dispatch(getAllTeacher(token));
    }

    dispatch(getAllUser());
    dispatch(getAllDataCreateBlog());
  }, [dispatch]);

  return (
    <Box mt={3.5} className={classes.root}>
      <Donuts number={dataAllTeacher?.length ?? 0} title="Giáo viên" />
      <Donuts number={dataAllUser?.length ?? 0} title="Sinh viên" />
      <Donuts number={dataAllCourse?.length ?? 0} title="Khóa học" />
      <Donuts number={dataAllBlog?.length ?? 0} title="Bài viết" />
    </Box>
  );
};

export default Chart;

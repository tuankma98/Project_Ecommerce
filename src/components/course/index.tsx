import { Box, Typography } from '@mui/material';
import CourseItem from './CourseItem';
import { useAppSelector } from '@/store/hook';
import { allDataCourseSelector } from '@/store/courseSlice';
import useCourseStyles from '~/course';

const CourseList = () => {
  const classes = { ...useCourseStyles() };

  const dataAllCourse = useAppSelector(allDataCourseSelector);

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Khóa học miễn phí</Typography>
      <Box mt={3.5} className={classes.listItem}>
        {dataAllCourse?.length &&
          dataAllCourse.map((course) => {
            return <CourseItem key={course?._id} course={course} />;
          })}
      </Box>
    </Box>
  );
};

export default CourseList;

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import CustomIcon from '@/components/atoms/icons/CustomIcon';
import useCourseStyles from '~/course';

const CourseItem = ({ course }: { course: any }) => {
  const classes = { ...useCourseStyles() };

  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`course/${slug}`);
  };

  return (
    <Card sx={{ maxWidth: 280 }} className={classes.card}>
      <CardActionArea
        onClick={() => handleClick(course.slug)}
        className={classes.cardActionArea}
      >
        <CardMedia
          component="img"
          height="160"
          image={course.featured_image}
          alt="green iguana"
          className={classes.image}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" className={classes.cardTitle}>
            {course.title}
          </Typography>
          <Box className={classes.cardUsers}>
            <CustomIcon customClass="fa-solid fa-users" size="small" />
            <Typography variant="body2">114.730</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CourseItem;
